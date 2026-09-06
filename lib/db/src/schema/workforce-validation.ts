import { createInsertSchema } from "drizzle-zod";
import {
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";
import { z } from "zod/v4";

export const workforceValidationCasesTable = pgTable("workforce_validation_cases", {
  employeeId: text("employee_id").primaryKey(),
  status: text("status").notNull().default("pending"),
  decisionNote: text("decision_note"),
  reviewedAt: timestamp("reviewed_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
});

export const workforceFieldResolutionsTable = pgTable(
  "workforce_field_resolutions",
  {
    id: serial("id").primaryKey(),
    employeeId: text("employee_id")
      .notNull()
      .references(() => workforceValidationCasesTable.employeeId, { onDelete: "cascade" }),
    fieldKey: text("field_key").notNull(),
    selectedSource: text("selected_source").notNull(),
    resolvedValue: text("resolved_value").notNull(),
    reason: text("reason").notNull(),
    sourceValues: jsonb("source_values")
      .$type<Record<string, string | null>>()
      .notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow().$onUpdate(() => new Date()),
  },
  (table) => [
    uniqueIndex("workforce_field_resolutions_employee_field_unique").on(table.employeeId, table.fieldKey),
  ],
);

export const insertWorkforceValidationCaseSchema = createInsertSchema(workforceValidationCasesTable);
export const insertWorkforceFieldResolutionSchema = createInsertSchema(workforceFieldResolutionsTable);

export type WorkforceValidationCase = typeof workforceValidationCasesTable.$inferSelect;
export type WorkforceFieldResolution = typeof workforceFieldResolutionsTable.$inferSelect;
export type InsertWorkforceValidationCase = z.infer<typeof insertWorkforceValidationCaseSchema>;
export type InsertWorkforceFieldResolution = z.infer<typeof insertWorkforceFieldResolutionSchema>;