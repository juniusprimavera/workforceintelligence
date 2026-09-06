import { Router, type IRouter } from "express";
import { eq } from "drizzle-orm";
import {
  ListWorkforceValidationsResponse,
  SaveWorkforceValidationBody,
  SaveWorkforceValidationParams,
  SaveWorkforceValidationResponse,
} from "@workspace/api-zod";
import {
  db,
  workforceFieldResolutionsTable,
  workforceValidationCasesTable,
} from "@workspace/db";

const router: IRouter = Router();

router.get("/workforce-validations", async (_req, res): Promise<void> => {
  const [cases, resolutions] = await Promise.all([
    db.select().from(workforceValidationCasesTable),
    db.select().from(workforceFieldResolutionsTable),
  ]);

  const decisionsByEmployee = new Map<string, typeof resolutions>();
  for (const decision of resolutions) {
    const current = decisionsByEmployee.get(decision.employeeId) ?? [];
    current.push(decision);
    decisionsByEmployee.set(decision.employeeId, current);
  }

  const response = cases.map((validationCase) => ({
    employeeId: validationCase.employeeId,
    status: validationCase.status as "pending" | "confirmed" | "held",
    decisionNote: validationCase.decisionNote,
    reviewedAt: validationCase.reviewedAt,
    decisions: (decisionsByEmployee.get(validationCase.employeeId) ?? []).map((decision) => ({
      fieldKey: decision.fieldKey,
      selectedSource: decision.selectedSource as "hris" | "ats",
      resolvedValue: decision.resolvedValue,
      reason: decision.reason,
      sourceValues: decision.sourceValues,
    })),
  }));

  res.json(ListWorkforceValidationsResponse.parse(response));
});

router.put("/workforce-validations/:employeeId", async (req, res): Promise<void> => {
  const params = SaveWorkforceValidationParams.safeParse(req.params);
  if (!params.success) {
    req.log.warn({ issues: params.error.issues }, "Invalid workforce validation employee ID");
    res.status(400).json({ error: "Invalid employee ID" });
    return;
  }

  const body = SaveWorkforceValidationBody.safeParse(req.body);
  if (!body.success) {
    req.log.warn({ issues: body.error.issues }, "Invalid workforce validation payload");
    res.status(400).json({ error: "Invalid validation decision" });
    return;
  }

  const employeeId = params.data.employeeId;
  const decision = body.data;
  const reviewedAt = new Date();

  const saved = await db.transaction(async (tx) => {
    const [validationCase] = await tx
      .insert(workforceValidationCasesTable)
      .values({
        employeeId,
        status: decision.status,
        decisionNote: decision.decisionNote ?? null,
        reviewedAt,
      })
      .onConflictDoUpdate({
        target: workforceValidationCasesTable.employeeId,
        set: {
          status: decision.status,
          decisionNote: decision.decisionNote ?? null,
          reviewedAt,
          updatedAt: reviewedAt,
        },
      })
      .returning();

    await tx
      .delete(workforceFieldResolutionsTable)
      .where(eq(workforceFieldResolutionsTable.employeeId, employeeId));

    const fieldResolutions = decision.decisions.length > 0
      ? await tx
          .insert(workforceFieldResolutionsTable)
          .values(
            decision.decisions.map((field) => ({
              employeeId,
              fieldKey: field.fieldKey,
              selectedSource: field.selectedSource,
              resolvedValue: field.resolvedValue,
              reason: field.reason,
              sourceValues: field.sourceValues,
            })),
          )
          .returning()
      : [];

    return {
      employeeId: validationCase.employeeId,
      status: validationCase.status as "pending" | "confirmed" | "held",
      decisionNote: validationCase.decisionNote,
      reviewedAt: validationCase.reviewedAt,
      decisions: fieldResolutions.map((field) => ({
        fieldKey: field.fieldKey,
        selectedSource: field.selectedSource as "hris" | "ats",
        resolvedValue: field.resolvedValue,
        reason: field.reason,
        sourceValues: field.sourceValues,
      })),
    };
  });

  req.log.info({ employeeId, status: saved.status }, "Saved local workforce validation decision");
  res.json(SaveWorkforceValidationResponse.parse(saved));
});

export default router;