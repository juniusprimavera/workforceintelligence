import type { CleanEmployee, MessyEmployee } from './types';
import { getCapabilityMetrics } from './capability';

export type ValidationDecisionStatus = 'unresolved' | 'confirmed' | 'held';
export type CapabilityFocus = 'critical-gaps' | 'interventions' | 'role-fit-complete' | 'ai-signals';

export interface SavedValidationLike {
  employeeId: string;
  status: string;
}

export const isSourceIssueRecord = (employee: MessyEmployee) => employee.data_issues.length > 0;
export const isValidationCase = (employee: CleanEmployee) => employee.requires_human_review;
export const hasCriticalRoleGap = (employee: CleanEmployee) =>
  employee.skill_gaps.some((gap) => gap.gap_severity === 'critical');
export const hasLearningPathway = (employee: CleanEmployee) => employee.recommended_learning.length > 0;
export const hasAiInferredSignal = (employee: CleanEmployee) =>
  employee.skills_inferred.some((skill) => skill.source === 'ai_inferred');
export const isRoleFitComplete = (employee: CleanEmployee) => {
  const metrics = getCapabilityMetrics(employee);
  return metrics.requiredSkills > 0 && metrics.standardCompletion === 100;
};

export const CAPABILITY_FOCUS_DEFINITIONS: ReadonlyArray<{
  value: CapabilityFocus;
  label: string;
  matches: (employee: CleanEmployee) => boolean;
}> = [
  { value: 'critical-gaps', label: 'People with critical role gaps', matches: hasCriticalRoleGap },
  { value: 'interventions', label: 'People with learning pathways', matches: hasLearningPathway },
  { value: 'role-fit-complete', label: 'People meeting role standards', matches: isRoleFitComplete },
  { value: 'ai-signals', label: 'People with AI-inferred signals', matches: hasAiInferredSignal },
];

export function matchesCapabilityFocus(employee: CleanEmployee, focus: string) {
  if (!focus) return true;
  return CAPABILITY_FOCUS_DEFINITIONS.find((definition) => definition.value === focus)?.matches(employee) ?? true;
}

export function getValidationDecisionStatus(
  employeeId: string,
  validationByEmployeeId: ReadonlyMap<string, SavedValidationLike>,
): ValidationDecisionStatus {
  const status = validationByEmployeeId.get(employeeId)?.status;
  if (status === 'confirmed') return 'confirmed';
  if (status === 'held') return 'held';
  return 'unresolved';
}

export function getValidationStatusCounts(
  employees: readonly CleanEmployee[],
  validations: readonly SavedValidationLike[],
) {
  const cases = employees.filter(isValidationCase);
  const byEmployeeId = new Map(validations.map((validation) => [validation.employeeId, validation]));
  const counts = { total: cases.length, unresolved: 0, confirmed: 0, held: 0 };

  cases.forEach((employee) => {
    counts[getValidationDecisionStatus(employee.employee_id, byEmployeeId)] += 1;
  });

  return counts;
}

export function isEligibleForIntelligence(
  employee: CleanEmployee,
  validationByEmployeeId: ReadonlyMap<string, SavedValidationLike>,
) {
  return getValidationDecisionStatus(employee.employee_id, validationByEmployeeId) !== 'held';
}

export function getIntelligenceEligibleEmployees(
  employees: readonly CleanEmployee[],
  validations: readonly SavedValidationLike[],
) {
  const validationByEmployeeId = new Map(validations.map((validation) => [validation.employeeId, validation]));
  return employees.filter((employee) => isEligibleForIntelligence(employee, validationByEmployeeId));
}
