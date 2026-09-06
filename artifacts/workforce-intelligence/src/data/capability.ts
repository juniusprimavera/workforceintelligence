import type { CleanEmployee, Proficiency, SkillRecord } from './types';

export const DEFAULT_REQUIRED_PROFICIENCY: Proficiency = 'intermediate';

export const PROFICIENCY_RANK: Record<'none' | Proficiency, number> = {
  none: 0,
  awareness: 1,
  basic: 2,
  intermediate: 3,
  advanced: 4,
  expert: 5,
};

export interface CapabilityMetrics {
  evidenceCoverage: number;
  proficiencyProgress: number;
  standardCompletion: number;
  coveredSkills: number;
  completedSkills: number;
  requiredSkills: number;
}

export function getBestSkillEvidence(employee: CleanEmployee, skill: string): SkillRecord | undefined {
  return [...employee.skills_explicit, ...employee.skills_inferred]
    .filter((record) => record.skill === skill)
    .sort((a, b) => b.confidence - a.confidence)[0];
}

export function getCapabilityMetrics(employee: CleanEmployee): CapabilityMetrics {
  const requiredSkills = employee.required_skills.length;

  if (requiredSkills === 0) {
    return {
      evidenceCoverage: 0,
      proficiencyProgress: 0,
      standardCompletion: 0,
      coveredSkills: 0,
      completedSkills: 0,
      requiredSkills: 0,
    };
  }

  let coveredSkills = 0;
  let completedSkills = 0;
  let progressTotal = 0;

  employee.required_skills.forEach((skill) => {
    const gap = employee.skill_gaps.find((item) => item.skill === skill);
    const evidence = getBestSkillEvidence(employee, skill);
    const currentLevel = gap?.current_proficiency ?? evidence?.proficiency ?? 'none';
    const requiredLevel = gap?.required_proficiency ?? DEFAULT_REQUIRED_PROFICIENCY;

    if (evidence) coveredSkills += 1;
    if (PROFICIENCY_RANK[currentLevel] >= PROFICIENCY_RANK[requiredLevel]) completedSkills += 1;

    progressTotal += Math.min(
      PROFICIENCY_RANK[currentLevel] / PROFICIENCY_RANK[requiredLevel],
      1,
    );
  });

  return {
    evidenceCoverage: Math.round((coveredSkills / requiredSkills) * 100),
    proficiencyProgress: Math.round((progressTotal / requiredSkills) * 100),
    standardCompletion: Math.round((completedSkills / requiredSkills) * 100),
    coveredSkills,
    completedSkills,
    requiredSkills,
  };
}