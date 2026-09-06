import { cleanDataset } from './clean';
import { messyDataset } from './messy';
import {
  hasCriticalRoleGap,
  hasLearningPathway,
  isSourceIssueRecord,
  isValidationCase,
} from './metrics';

const countIssue = (issue: string) => messyDataset.filter((employee) => employee.data_issues.includes(issue)).length;

export const MESSY_STATS = {
  total: messyDataset.length,
  affectedRecords: messyDataset.filter(isSourceIssueRecord).length,
  missingSkills: countIssue('missing_skill_data'),
  incompletePerformance: countIssue('incomplete_performance_history'),
  conflictingDates: countIssue('conflicting_hire_dates'),
  nameVariants: countIssue('name_variant_across_systems'),
  noATS: countIssue('no_ats_record'),
  missingEmail: countIssue('missing_email'),
  potentialDuplicates: countIssue('potential_duplicate_record'),
  withTraining: messyDataset.filter((employee) => employee.training_records.length > 0).length,
  employeesWithNoSkillsOrTraining: messyDataset.filter(
    (employee) => employee.skills.length === 0 && employee.training_records.length === 0,
  ).length,
} as const;

export const CLEAN_STATS = {
  total: cleanDataset.length,
  requiresReview: cleanDataset.filter(isValidationCase).length,
  highConfidence: cleanDataset.filter((employee) => employee.data_confidence === 'high').length,
  mediumConfidence: cleanDataset.filter((employee) => employee.data_confidence === 'medium').length,
  lowConfidence: cleanDataset.filter((employee) => employee.data_confidence === 'low').length,
  withRecommendations: cleanDataset.filter(hasLearningPathway).length,
  criticalGaps: cleanDataset.filter(hasCriticalRoleGap).length,
} as const;