import { cleanDataset, messyDataset } from '.';
import type { CleanEmployee } from './types';

export type ResolutionSource = 'hris' | 'ats';

export interface ValidationField {
  key: 'name' | 'hire_date';
  label: string;
  policy: string;
  sourceValues: Record<ResolutionSource, string | null>;
}

export function getValidationFields(employee: CleanEmployee): ValidationField[] {
  const normalizedName = employee.name.trim().toLocaleLowerCase();
  const raw = messyDataset.find((candidate) =>
    candidate.hris_id === employee.employee_id ||
    candidate.email?.toLocaleLowerCase() === employee.email.toLocaleLowerCase() ||
    (
      candidate.name_hris.trim().toLocaleLowerCase() === normalizedName &&
      candidate.location === employee.location
    ),
  );
  if (!raw) return [];

  const fields: ValidationField[] = [
    {
      key: 'name',
      label: 'Employee name',
      policy: 'HRIS is the primary source for the active employee record.',
      sourceValues: {
        hris: raw.name_hris,
        ats: raw.name_ats,
      },
    },
    {
      key: 'hire_date',
      label: 'Join date for Workforce Intelligence analysis',
      policy: 'HRIS is the primary source for official employment dates. This choice does not update payroll or bonus calculations.',
      sourceValues: {
        hris: raw.hire_date_hris,
        ats: raw.hire_date_ats,
      },
    },
  ];

  return fields.filter((field) => field.sourceValues.hris !== field.sourceValues.ats);
}

export function getCleanEmployeeById(employeeId: string): CleanEmployee | null {
  return cleanDataset.find((employee) => employee.employee_id === employeeId) ?? null;
}

export function displayResolutionValue(field: ValidationField, source: ResolutionSource): string {
  return field.sourceValues[source] ?? 'No value available';
}