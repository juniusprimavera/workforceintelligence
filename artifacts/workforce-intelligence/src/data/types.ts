// TypeScript types for Workforce Intelligence Platform — Deliverable 3
    export type Proficiency = 'awareness' | 'basic' | 'intermediate' | 'advanced' | 'expert';
    export type SkillSource = 'certification' | 'training' | 'performance' | 'ai_inferred' | 'self_declared';
    export type GapSeverity = 'critical' | 'moderate' | 'minor';
    export type DataConfidence = 'high' | 'medium' | 'low';
    export type IdentityMethod = 'exact' | 'rule_based' | 'fuzzy' | 'single_source';
    export type ReviewPriority = 'urgent' | 'normal';
    export type PerformanceTrend = 'improving' | 'stable' | 'declining' | 'insufficient_data';

    export interface PerformanceRecord { year: number; quarter: string; score: number | null; reviewer: string; is_reliable: boolean; }
    export interface TrainingRecord { course_name: string; completion_date: string; provider: string; certification: string | null; }
    export interface SkillRecord { skill: string; category: string; proficiency: Proficiency; source: SkillSource; confidence: number; last_demonstrated: string | null; }
    export interface SkillGap { skill: string; required_proficiency: Proficiency; current_proficiency: 'none' | Proficiency; gap_severity: GapSeverity; }
    export interface LearningRecommendation { course_name: string; provider: string; duration_hours: number; skills_addressed: string[]; priority: 'high' | 'medium' | 'low'; estimated_completion_weeks: number; }

    export interface MessyEmployee {
    hris_id: string; ats_id: string | null; name_hris: string; name_ats: string | null;
    email: string | null; phone: string | null; job_title: string; department: string;
    location: string; branch_code: string; hire_date_hris: string; hire_date_ats: string | null;
    skills: string[]; performance_records: PerformanceRecord[]; training_records: TrainingRecord[];
    data_issues: string[]; source_systems: string[]; has_duplicate_flag: boolean;
    }

    export interface CleanEmployee {
    employee_id: string; name: string; email: string;
    job_title_raw: string; job_title_normalized: string; job_family: string;
    grade_level: string; department: string; location: string;
    hire_date: string; tenure_years: number;
    skills_explicit: SkillRecord[]; skills_inferred: SkillRecord[];
    skill_readiness_score: number; skill_confidence: number;
    required_skills: string[]; skill_gaps: SkillGap[];
    recommended_learning: LearningRecommendation[];
    data_confidence: DataConfidence; identity_resolution_method: IdentityMethod;
    identity_confidence: number; requires_human_review: boolean;
    review_reasons: string[]; review_priority: ReviewPriority | null;
    performance_trend: PerformanceTrend; avg_performance_score: number | null;
    data_completeness: { has_skills: boolean; has_performance: boolean; has_training: boolean; identity_resolved: boolean; };
    }
    