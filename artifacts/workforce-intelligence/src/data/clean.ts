import type { CleanEmployee } from './types';
export const cleanDataset: CleanEmployee[] = [
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "jamal.pramono@medikanusantara.co.id",
    "employee_id": "MN-10001",
    "grade_level": "L2",
    "hire_date": "2022-06-09",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales Rep",
    "location": "Padang",
    "name": "Jamal Pramono",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-02-06",
        "proficiency": "advanced",
        "skill": "Customer Relationship Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "krisna.harahap@medikanusantara.co.id",
    "employee_id": "MN-10002",
    "grade_level": "L2",
    "hire_date": "2023-08-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Admin",
    "location": "Mataram",
    "name": "Krisna Harahap",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      },
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      },
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.7,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Financial Reporting",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Accounts Payable/Receivable",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "damar.permata@medikanusantara.co.id",
    "employee_id": "MN-10003",
    "grade_level": "L2",
    "hire_date": "2019-05-27",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Koordinator",
    "location": "Cirebon",
    "name": "Damar Permata",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      },
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.65,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "fuad.alamsyah@medikanusantara.co.id",
    "employee_id": "MN-10004",
    "grade_level": "L2",
    "hire_date": "2019-11-16",
    "identity_confidence": 0.79,
    "identity_resolution_method": "fuzzy",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staf Gudang",
    "location": "Bandung",
    "name": "Fuad Alamsyah",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Cold Chain Logistics Essentials",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Cold Chain Management"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Cold Chain Management"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "lutfi.wijaya@medikanusantara.co.id",
    "employee_id": "MN-10005",
    "grade_level": "L2",
    "hire_date": "2016-04-28",
    "identity_confidence": 0.82,
    "identity_resolution_method": "fuzzy",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Administration",
    "location": "Palembang",
    "name": "Lutfi Wijaya",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      },
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.86,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2023-10-11",
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.8,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.84,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "ratna.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10006",
    "grade_level": "L2",
    "hire_date": "2020-01-16",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Specialist",
    "location": "Cirebon",
    "name": "Ratna Iskandar",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      },
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 4.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "hadi.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10007",
    "grade_level": "L2",
    "hire_date": "2019-06-25",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "QC Staff",
    "location": "Medan",
    "name": "Hadi Iskandar",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.83,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2021-03-20",
        "proficiency": "advanced",
        "skill": "GDP/GMP Knowledge",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "BPOM Regulatory Compliance",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.79,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "denny.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10008",
    "grade_level": "L1",
    "hire_date": "2019-07-23",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Agen CS",
    "location": "Balikpapan",
    "name": "Denny Iskandar",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2021-06-28",
        "proficiency": "advanced",
        "skill": "Problem Solving",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2023-11-24",
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Communication",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Basic)",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Data Entry",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "nabila.utama@medikanusantara.co.id",
    "employee_id": "MN-10009",
    "grade_level": "L2",
    "hire_date": "2020-05-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Supply Chain Staff",
    "location": "Bekasi",
    "name": "Nabila Utama",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2022-06-08",
        "proficiency": "advanced",
        "skill": "Delivery Coordination",
        "source": "certification"
      },
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2022-12-04",
        "proficiency": "advanced",
        "skill": "Route Planning",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "novita.pamungkas@medikanusantara.co.id",
    "employee_id": "MN-10010",
    "grade_level": "L2",
    "hire_date": "2020-05-22",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HRD Staff",
    "location": "Mataram",
    "name": "Novita Pamungkas",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.83,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2022-06-09",
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "chandra.fatoni@medikanusantara.co.id",
    "employee_id": "MN-10011",
    "grade_level": "L2",
    "hire_date": "2017-02-22",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Lampung",
    "name": "Chandra Fatoni",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.77,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2020-08-07",
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "otto.gunawan@medikanusantara.co.id",
    "employee_id": "MN-10012",
    "grade_level": "L2",
    "hire_date": "2020-02-25",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Petugas QC",
    "location": "Surabaya",
    "name": "Otto Gunawan",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.93,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2020-05-22",
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "certification"
      },
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2021-08-07",
        "proficiency": "advanced",
        "skill": "BPOM Regulatory Compliance",
        "source": "certification"
      },
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2024-02-15",
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.87,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "wahyu.gunawan@medikanusantara.co.id",
    "employee_id": "MN-10013",
    "grade_level": "L2",
    "hire_date": "2023-10-22",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staff Gudang",
    "location": "Manado",
    "name": "Wahyu Gunawan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Cold Chain Logistics Essentials",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Cold Chain Management"
        ]
      },
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.88,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Cold Chain Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-10-19",
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.81,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Good Distribution Practice (GDP)",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.88,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "nabila.fatoni@medikanusantara.co.id",
    "employee_id": "MN-10014",
    "grade_level": "L2",
    "hire_date": "2016-07-18",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Staf QC",
    "location": "Bogor",
    "name": "Nabila Fatoni",
    "performance_trend": "declining",
    "recommended_learning": [],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2022-06-25",
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "certification"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "surya.kusuma@medikanusantara.co.id",
    "employee_id": "MN-10015",
    "grade_level": "L2",
    "hire_date": "2021-07-03",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "WH Operator",
    "location": "Lampung",
    "name": "Surya Kusuma",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Warehouse & Inventory Management",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Inventory Management"
        ]
      },
      {
        "course_name": "Cold Chain Logistics Essentials",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Cold Chain Management"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Inventory Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Cold Chain Management"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-10-13",
        "proficiency": "advanced",
        "skill": "Good Distribution Practice (GDP)",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "panji.kasim@medikanusantara.co.id",
    "employee_id": "MN-10016",
    "grade_level": "L2",
    "hire_date": "2018-10-04",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staff HRD",
    "location": "Solo",
    "name": "Panji Kasim",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      },
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 2.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Customer Service",
    "email": "agus.harahap@medikanusantara.co.id",
    "employee_id": "MN-10017",
    "grade_level": "L1",
    "hire_date": "2021-02-22",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Staf CS",
    "location": "Jakarta Pusat",
    "name": "Agus Harahap",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      },
      {
        "course_name": "Problem Solving & Decision Making",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Problem Solving"
        ]
      },
      {
        "course_name": "CRM Tools & Best Practices",
        "duration_hours": 10,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "CRM Software"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.69,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Problem Solving"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "CRM Software"
      }
    ],
    "skill_readiness_score": 0,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Basic)",
        "source": "ai_inferred"
      },
      {
        "category": "Customer Service",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Data Entry",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "panji.erlangga@medikanusantara.co.id",
    "employee_id": "MN-10018",
    "grade_level": "L2",
    "hire_date": "2021-01-13",
    "identity_confidence": 0.86,
    "identity_resolution_method": "fuzzy",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staf Gudang",
    "location": "Jakarta Pusat",
    "name": "Panji Erlangga",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Forklift Operation",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "hamid.lukman@medikanusantara.co.id",
    "employee_id": "MN-10019",
    "grade_level": "L2",
    "hire_date": "2018-07-23",
    "identity_confidence": 0.88,
    "identity_resolution_method": "fuzzy",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Administrasi Keuangan",
    "location": "Jakarta Barat",
    "name": "Hamid Lukman",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.64,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "prima.tanjung@medikanusantara.co.id",
    "employee_id": "MN-10020",
    "grade_level": "L2",
    "hire_date": "2023-09-09",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Warehouse Staff",
    "location": "Medan",
    "name": "Prima Tanjung",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      },
      {
        "course_name": "Warehouse & Inventory Management",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Inventory Management"
        ]
      },
      {
        "course_name": "Cold Chain Logistics Essentials",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Cold Chain Management"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.69,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Inventory Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Cold Chain Management"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Inventory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Cold Chain Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "teguh.aditya@medikanusantara.co.id",
    "employee_id": "MN-10021",
    "grade_level": "L2",
    "hire_date": "2022-04-05",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staff HRD",
    "location": "Palembang",
    "name": "Teguh Aditya",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      },
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      },
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.66,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "chandra.wibowo@medikanusantara.co.id",
    "employee_id": "MN-10022",
    "grade_level": "L2",
    "hire_date": "2018-10-02",
    "identity_confidence": 0.82,
    "identity_resolution_method": "fuzzy",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staff Gudang",
    "location": "Pekanbaru",
    "name": "Chandra Wibowo",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.63,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "vina.salim@medikanusantara.co.id",
    "employee_id": "MN-10023",
    "grade_level": "L3",
    "hire_date": "2021-04-17",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sr. Sales Rep",
    "location": "Makassar",
    "name": "Vina Salim",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.66,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "novita.alamsyah@medikanusantara.co.id",
    "employee_id": "MN-10024",
    "grade_level": "L2",
    "hire_date": "2016-05-27",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staf SDM",
    "location": "Jakarta Barat",
    "name": "Novita Alamsyah",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2021-02-04",
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Customer Service",
    "email": "ulfa.yahya@medikanusantara.co.id",
    "employee_id": "MN-10025",
    "grade_level": "L1",
    "hire_date": "2020-12-22",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Layanan Pelanggan",
    "location": "Medan",
    "name": "Ulfa Yahya",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.95,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2019-01-12",
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2023-01-08",
        "proficiency": "advanced",
        "skill": "Communication",
        "source": "certification"
      },
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2023-12-03",
        "proficiency": "advanced",
        "skill": "Problem Solving",
        "source": "training"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "panji.suryadi@medikanusantara.co.id",
    "employee_id": "MN-10026",
    "grade_level": "L2",
    "hire_date": "2020-11-24",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Staff",
    "location": "Mataram",
    "name": "Panji Suryadi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2020-01-07",
        "proficiency": "advanced",
        "skill": "Hardware Troubleshooting",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "gita.ridwan@medikanusantara.co.id",
    "employee_id": "MN-10027",
    "grade_level": "L2",
    "hire_date": "2019-07-04",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Samarinda",
    "name": "Gita Ridwan",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      },
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP System Support",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "abdul.bernardus@medikanusantara.co.id",
    "employee_id": "MN-10028",
    "grade_level": "L3",
    "hire_date": "2016-08-20",
    "identity_confidence": 0.75,
    "identity_resolution_method": "fuzzy",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales Senior",
    "location": "Cirebon",
    "name": "Abdul Bernardus",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-10-14",
        "proficiency": "advanced",
        "skill": "CRM Software",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-12-19",
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-06-08",
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "candra.effendi@medikanusantara.co.id",
    "employee_id": "MN-10029",
    "grade_level": "L4",
    "hire_date": "2019-09-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Regional Manager",
    "location": "Tangerang",
    "name": "Candra Effendi",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2020-05-14",
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "taufik.suharto@medikanusantara.co.id",
    "employee_id": "MN-10030",
    "grade_level": "L2",
    "hire_date": "2022-12-11",
    "identity_confidence": 0.77,
    "identity_resolution_method": "fuzzy",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Account Sales",
    "location": "Makassar",
    "name": "Taufik Suharto",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Potential duplicate record detected in source systems",
      "No performance history available for validation"
    ],
    "skill_confidence": 0.89,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-08-07",
        "proficiency": "advanced",
        "skill": "Customer Relationship Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-08-06",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": false,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "low",
    "department": "Human Resources",
    "email": "maya.suharto@medikanusantara.co.id",
    "employee_id": "MN-10031",
    "grade_level": "L2",
    "hire_date": "2020-03-28",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HRD Staff",
    "location": "Jakarta Timur",
    "name": "Maya Suharto",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      },
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      },
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No skill data available — inference not possible",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.28,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 0,
    "skills_explicit": [],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "ratna.irawan@medikanusantara.co.id",
    "employee_id": "MN-10032",
    "grade_level": "L1",
    "hire_date": "2017-11-09",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Layanan Pelanggan",
    "location": "Depok",
    "name": "Ratna Irawan",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2021-11-22",
        "proficiency": "advanced",
        "skill": "Communication",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Basic)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "denny.wibowo@medikanusantara.co.id",
    "employee_id": "MN-10033",
    "grade_level": "L4",
    "hire_date": "2018-07-23",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Batam",
    "name": "Denny Wibowo",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.82,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2020-09-20",
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "certification"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Strategic Planning",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "People Development",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.86,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Customer Service",
    "email": "hamid.maulana@medikanusantara.co.id",
    "employee_id": "MN-10034",
    "grade_level": "L1",
    "hire_date": "2019-02-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Layanan Pelanggan",
    "location": "Jakarta Pusat",
    "name": "Hamid Maulana",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      },
      {
        "course_name": "CRM Tools & Best Practices",
        "duration_hours": 10,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "CRM Software"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.77,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "CRM Software"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2024-02-06",
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Data Entry",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "wisnu.hartono@medikanusantara.co.id",
    "employee_id": "MN-10035",
    "grade_level": "L2",
    "hire_date": "2019-03-15",
    "identity_confidence": 0.72,
    "identity_resolution_method": "fuzzy",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staff HRD",
    "location": "Palembang",
    "name": "Wisnu Hartono",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      },
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2022-12-11",
        "proficiency": "advanced",
        "skill": "Employee Relations",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Recruitment",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "muhammad.cahyadi@medikanusantara.co.id",
    "employee_id": "MN-10036",
    "grade_level": "L2",
    "hire_date": "2022-06-17",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "WH Operator",
    "location": "Banjarmasin",
    "name": "Muhammad Cahyadi",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Cold Chain Logistics Essentials",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Cold Chain Management"
        ]
      },
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.74,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Cold Chain Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-02",
        "proficiency": "advanced",
        "skill": "Inventory Management",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Good Distribution Practice (GDP)",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Forklift Operation",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "qori.effendi@medikanusantara.co.id",
    "employee_id": "MN-10037",
    "grade_level": "L2",
    "hire_date": "2017-05-28",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Specialist",
    "location": "Bandung",
    "name": "Qori Effendi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.86,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-05",
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "jamal.bernardus@medikanusantara.co.id",
    "employee_id": "MN-10038",
    "grade_level": "L2",
    "hire_date": "2021-11-01",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales Representative",
    "location": "Malang",
    "name": "Jamal Bernardus",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.88,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-08-17",
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2022-03-16",
        "proficiency": "advanced",
        "skill": "Product Knowledge (Pharma)",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.85,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "ogi.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10039",
    "grade_level": "L3",
    "hire_date": "2017-07-20",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales 2",
    "location": "Bandung",
    "name": "Ogi Iskandar",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-12-11",
        "proficiency": "advanced",
        "skill": "Team Coaching",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.87,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "wawan.yahya@medikanusantara.co.id",
    "employee_id": "MN-10040",
    "grade_level": "L2",
    "hire_date": "2021-04-03",
    "identity_confidence": 0.94,
    "identity_resolution_method": "rule_based",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Makassar",
    "name": "Wawan Yahya",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2019-09-28",
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "gunawan.lestari@medikanusantara.co.id",
    "employee_id": "MN-10041",
    "grade_level": "L2",
    "hire_date": "2023-08-02",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales Exec",
    "location": "Malang",
    "name": "Gunawan Lestari",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.88,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2023-07-21",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-03-14",
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2022-03-23",
        "proficiency": "advanced",
        "skill": "Key Account Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Territory Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 2.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "siti.santoso@medikanusantara.co.id",
    "employee_id": "MN-10042",
    "grade_level": "L2",
    "hire_date": "2016-02-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales Exec",
    "location": "Semarang",
    "name": "Siti Santoso",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.75,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-08-28",
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "eko.effendi@medikanusantara.co.id",
    "employee_id": "MN-10043",
    "grade_level": "L2",
    "hire_date": "2023-09-26",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Staf Keuangan",
    "location": "Semarang",
    "name": "Eko Effendi",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2024-08-28",
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "doni.zainal@medikanusantara.co.id",
    "employee_id": "MN-10044",
    "grade_level": "L2",
    "hire_date": "2016-05-27",
    "identity_confidence": 0.94,
    "identity_resolution_method": "rule_based",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Generalist",
    "location": "Bekasi",
    "name": "Doni Zainal",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.8,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2020-03-12",
        "proficiency": "advanced",
        "skill": "Employee Relations",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "bayu.kusuma@medikanusantara.co.id",
    "employee_id": "MN-10045",
    "grade_level": "L2",
    "hire_date": "2016-03-06",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Support",
    "location": "Balikpapan",
    "name": "Bayu Kusuma",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2024-03-04",
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2021-04-23",
        "proficiency": "advanced",
        "skill": "Hardware Troubleshooting",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "bella.suryadi@medikanusantara.co.id",
    "employee_id": "MN-10046",
    "grade_level": "L2",
    "hire_date": "2016-07-11",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staff Gudang",
    "location": "Tangerang",
    "name": "Bella Suryadi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Warehouse & Inventory Management",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Inventory Management"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Inventory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-27",
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "training"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2019-09-25",
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "training"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Inventory Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "rizky.firmansyah@medikanusantara.co.id",
    "employee_id": "MN-10047",
    "grade_level": "L2",
    "hire_date": "2021-08-11",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Coordinator",
    "location": "Bandung",
    "name": "Rizky Firmansyah",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2022-04-01",
        "proficiency": "advanced",
        "skill": "Delivery Coordination",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Last-Mile Logistics",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP Logistics",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "lutfi.ridwan@medikanusantara.co.id",
    "employee_id": "MN-10048",
    "grade_level": "L2",
    "hire_date": "2020-01-04",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "WH Operator",
    "location": "Bali",
    "name": "Lutfi Ridwan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2023-04-16",
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "training"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Good Distribution Practice (GDP)",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.86,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Forklift Operation",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "dewi.junaidi@medikanusantara.co.id",
    "employee_id": "MN-10049",
    "grade_level": "L2",
    "hire_date": "2022-09-03",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Staff",
    "location": "Surabaya",
    "name": "Dewi Junaidi",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      },
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      },
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.67,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Fleet Management",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Delivery Coordination",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "edy.saputra@medikanusantara.co.id",
    "employee_id": "MN-10050",
    "grade_level": "L4",
    "hire_date": "2022-12-18",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manajer Cabang",
    "location": "Jakarta Selatan",
    "name": "Edy Saputra",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      },
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      },
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.73,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2019-01-21",
        "proficiency": "advanced",
        "skill": "Team Leadership",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Operations Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Strategic Planning",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "zaki.permata@medikanusantara.co.id",
    "employee_id": "MN-10051",
    "grade_level": "L2",
    "hire_date": "2019-06-22",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "WH Operator",
    "location": "Depok",
    "name": "Zaki Permata",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2021-11-01",
        "proficiency": "advanced",
        "skill": "Cold Chain Management",
        "source": "certification"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "ratna.damanik@medikanusantara.co.id",
    "employee_id": "MN-10052",
    "grade_level": "L2",
    "hire_date": "2023-04-10",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Account Sales",
    "location": "Lampung",
    "name": "Ratna Damanik",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "CRM Mastery for Healthcare Sales",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Customer Relationship Management"
        ]
      },
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Customer Relationship Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-10-27",
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Territory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "ulfa.aditya@medikanusantara.co.id",
    "employee_id": "MN-10053",
    "grade_level": "L2",
    "hire_date": "2017-12-24",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Technical Support",
    "location": "Surabaya",
    "name": "Ulfa Aditya",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2021-05-16",
        "proficiency": "advanced",
        "skill": "SAP System Support",
        "source": "certification"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "okta.junaidi@medikanusantara.co.id",
    "employee_id": "MN-10054",
    "grade_level": "L2",
    "hire_date": "2021-04-22",
    "identity_confidence": 0.89,
    "identity_resolution_method": "fuzzy",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staf SDM",
    "location": "Palembang",
    "name": "Okta Junaidi",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      },
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      },
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Recruitment",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Employee Relations",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "rizal.saputra@medikanusantara.co.id",
    "employee_id": "MN-10055",
    "grade_level": "L2",
    "hire_date": "2022-01-07",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Koordinator Logistik",
    "location": "Jakarta Selatan",
    "name": "Rizal Saputra",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      },
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2022-02-12",
        "proficiency": "advanced",
        "skill": "Route Planning",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "wisnu.effendi@medikanusantara.co.id",
    "employee_id": "MN-10056",
    "grade_level": "L3",
    "hire_date": "2019-12-05",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Senior Penjualan",
    "location": "Lampung",
    "name": "Wisnu Effendi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      },
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 25,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "nando.wahyudi@medikanusantara.co.id",
    "employee_id": "MN-10057",
    "grade_level": "L2",
    "hire_date": "2020-02-01",
    "identity_confidence": 0.76,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Koordinator Logistik",
    "location": "Bali",
    "name": "Nando Wahyudi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Conflicting hire dates between HRIS and ATS",
      "No performance history available for validation"
    ],
    "skill_confidence": 0.87,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-12",
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "certification"
      },
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2024-04-02",
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Fleet Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "hadi.kasim@medikanusantara.co.id",
    "employee_id": "MN-10058",
    "grade_level": "L2",
    "hire_date": "2016-11-09",
    "identity_confidence": 0.92,
    "identity_resolution_method": "rule_based",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Technical Support",
    "location": "Pontianak",
    "name": "Hadi Kasim",
    "performance_trend": "declining",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2019-01-03",
        "proficiency": "advanced",
        "skill": "Network Administration",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "lestari.ridwan@medikanusantara.co.id",
    "employee_id": "MN-10059",
    "grade_level": "L2",
    "hire_date": "2019-04-27",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Coordinator",
    "location": "Surabaya",
    "name": "Lestari Ridwan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.86,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2022-08-12",
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.84,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "wisnu.alamsyah@medikanusantara.co.id",
    "employee_id": "MN-10060",
    "grade_level": "L2",
    "hire_date": "2016-10-28",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staff HRD",
    "location": "Mataram",
    "name": "Wisnu Alamsyah",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.74,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2021-10-09",
        "proficiency": "advanced",
        "skill": "Recruitment",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "arif.suryadi@medikanusantara.co.id",
    "employee_id": "MN-10061",
    "grade_level": "L4",
    "hire_date": "2019-03-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Branch Head",
    "location": "Cirebon",
    "name": "Arif Suryadi",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Leadership Essentials Program",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "Team Leadership"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Leadership"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "People Development",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "mardi.usman@medikanusantara.co.id",
    "employee_id": "MN-10062",
    "grade_level": "L2",
    "hire_date": "2019-06-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "QC Staff",
    "location": "Balikpapan",
    "name": "Mardi Usman",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.7,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "hamid.setiawan@medikanusantara.co.id",
    "employee_id": "MN-10063",
    "grade_level": "L3",
    "hire_date": "2016-02-11",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales Senior",
    "location": "Tangerang",
    "name": "Hamid Setiawan",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.72,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "doni.arifin@medikanusantara.co.id",
    "employee_id": "MN-10064",
    "grade_level": "L4",
    "hire_date": "2019-06-13",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Branch Head",
    "location": "Cirebon",
    "name": "Doni Arifin",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.66,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "bella.fatoni@medikanusantara.co.id",
    "employee_id": "MN-10065",
    "grade_level": "L2",
    "hire_date": "2017-09-25",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Human Resources Staff",
    "location": "Padang",
    "name": "Bella Fatoni",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      },
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.83,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Recruitment",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.87,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "taufik.wijaya@medikanusantara.co.id",
    "employee_id": "MN-10066",
    "grade_level": "L2",
    "hire_date": "2016-10-12",
    "identity_confidence": 0.93,
    "identity_resolution_method": "rule_based",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Gudang Staff",
    "location": "Semarang",
    "name": "Taufik Wijaya",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-09-14",
        "proficiency": "advanced",
        "skill": "Cold Chain Management",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Forklift Operation",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": false,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "ahmad.maulana@medikanusantara.co.id",
    "employee_id": "MN-10067",
    "grade_level": "L4",
    "hire_date": "2018-09-23",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Bandung",
    "name": "Ahmad Maulana",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Leadership Essentials Program",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "Team Leadership"
        ]
      },
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      },
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No skill data available — inference not possible"
    ],
    "skill_confidence": 0.28,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Leadership"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 0,
    "skills_explicit": [],
    "skills_inferred": [],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "krisna.maulana@medikanusantara.co.id",
    "employee_id": "MN-10068",
    "grade_level": "L2",
    "hire_date": "2023-01-02",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Medan",
    "name": "Krisna Maulana",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-05",
        "proficiency": "advanced",
        "skill": "Hardware Troubleshooting",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2020-09-19",
        "proficiency": "advanced",
        "skill": "SAP System Support",
        "source": "certification"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "cahyo.kurniawan@medikanusantara.co.id",
    "employee_id": "MN-10069",
    "grade_level": "L3",
    "hire_date": "2018-03-03",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sr. Sales Rep",
    "location": "Jakarta Barat",
    "name": "Cahyo Kurniawan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.65,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 4.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "fajar.tjandra@medikanusantara.co.id",
    "employee_id": "MN-10070",
    "grade_level": "L2",
    "hire_date": "2020-05-26",
    "identity_confidence": 0.73,
    "identity_resolution_method": "fuzzy",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Administration",
    "location": "Jakarta Pusat",
    "name": "Fajar Tjandra",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      },
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "andi.effendi@medikanusantara.co.id",
    "employee_id": "MN-10071",
    "grade_level": "L2",
    "hire_date": "2023-02-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Technical Support",
    "location": "Palembang",
    "name": "Andi Effendi",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      },
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      },
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.72,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Network Administration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Help Desk",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "nita.cahyadi@medikanusantara.co.id",
    "employee_id": "MN-10072",
    "grade_level": "L3",
    "hire_date": "2019-10-26",
    "identity_confidence": 0.83,
    "identity_resolution_method": "fuzzy",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sr. Sales Rep",
    "location": "Jakarta Barat",
    "name": "Nita Cahyadi",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Team Coaching Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Team Coaching"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.8,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Coaching"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-05-19",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "nurul.suharto@medikanusantara.co.id",
    "employee_id": "MN-10073",
    "grade_level": "L4",
    "hire_date": "2022-07-16",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manajer Cabang",
    "location": "Semarang",
    "name": "Nurul Suharto",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      },
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      },
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.75,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Operations Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "rudi.setiawan@medikanusantara.co.id",
    "employee_id": "MN-10074",
    "grade_level": "L3",
    "hire_date": "2021-10-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Senior Penjualan",
    "location": "Batam",
    "name": "Rudi Setiawan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "irwan.permata@medikanusantara.co.id",
    "employee_id": "MN-10075",
    "grade_level": "L3",
    "hire_date": "2022-11-07",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales Senior",
    "location": "Batam",
    "name": "Irwan Permata",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      },
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Team Coaching"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-09-26",
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "otto.usman@medikanusantara.co.id",
    "employee_id": "MN-10076",
    "grade_level": "L2",
    "hire_date": "2021-12-25",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Warehouse Operator",
    "location": "Jakarta Pusat",
    "name": "Otto Usman",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Warehouse & Inventory Management",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Inventory Management"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.7,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Inventory Management"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 2.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "alfi.kasim@medikanusantara.co.id",
    "employee_id": "MN-10077",
    "grade_level": "L2",
    "hire_date": "2017-05-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Staff",
    "location": "Surabaya",
    "name": "Alfi Kasim",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.72,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "hendra.tjandra@medikanusantara.co.id",
    "employee_id": "MN-10078",
    "grade_level": "L1",
    "hire_date": "2022-07-17",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Customer Care",
    "location": "Palembang",
    "name": "Hendra Tjandra",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Problem Solving & Decision Making",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Problem Solving"
        ]
      },
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.8,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Problem Solving"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2019-03-18",
        "proficiency": "advanced",
        "skill": "CRM Software",
        "source": "certification"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Communication",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Data Entry",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "rudi.junaidi@medikanusantara.co.id",
    "employee_id": "MN-10079",
    "grade_level": "L4",
    "hire_date": "2019-11-22",
    "identity_confidence": 0.84,
    "identity_resolution_method": "fuzzy",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Branch Manager",
    "location": "Padang",
    "name": "Rudi Junaidi",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Leadership Essentials Program",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "Team Leadership"
        ]
      },
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      },
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.71,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Leadership"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      }
    ],
    "skill_readiness_score": 25,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "People Development",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "irwan.lukman@medikanusantara.co.id",
    "employee_id": "MN-10080",
    "grade_level": "L4",
    "hire_date": "2021-06-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Depok",
    "name": "Irwan Lukman",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.83,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2023-07-03",
        "proficiency": "advanced",
        "skill": "P&L Management",
        "source": "training"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.82,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "People Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "puspita.darmawan@medikanusantara.co.id",
    "employee_id": "MN-10081",
    "grade_level": "L4",
    "hire_date": "2021-02-11",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Jakarta Selatan",
    "name": "Puspita Darmawan",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2019-12-16",
        "proficiency": "advanced",
        "skill": "Team Leadership",
        "source": "training"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "People Development",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "krisna.kasim@medikanusantara.co.id",
    "employee_id": "MN-10082",
    "grade_level": "L2",
    "hire_date": "2017-10-09",
    "identity_confidence": 0.83,
    "identity_resolution_method": "fuzzy",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Staff",
    "location": "Tangerang",
    "name": "Krisna Kasim",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      },
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.66,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "budi.natsir@medikanusantara.co.id",
    "employee_id": "MN-10083",
    "grade_level": "L2",
    "hire_date": "2019-05-16",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales Exec",
    "location": "Malang",
    "name": "Budi Natsir",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "CRM Mastery for Healthcare Sales",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Customer Relationship Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.88,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Customer Relationship Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-01-26",
        "proficiency": "advanced",
        "skill": "Product Knowledge (Pharma)",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-06-02",
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-02-15",
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "chandra.purwanto@medikanusantara.co.id",
    "employee_id": "MN-10084",
    "grade_level": "L3",
    "hire_date": "2020-12-15",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sr. Sales Rep",
    "location": "Jakarta Barat",
    "name": "Chandra Purwanto",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.8,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-09-16",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Territory Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "abdul.rahayu@medikanusantara.co.id",
    "employee_id": "MN-10085",
    "grade_level": "L2",
    "hire_date": "2018-02-19",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "QC Staff",
    "location": "Batam",
    "name": "Abdul Rahayu",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2020-11-25",
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "galih.djuanda@medikanusantara.co.id",
    "employee_id": "MN-10086",
    "grade_level": "L2",
    "hire_date": "2016-07-21",
    "identity_confidence": 0.93,
    "identity_resolution_method": "rule_based",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Generalist",
    "location": "Solo",
    "name": "Galih Djuanda",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.66,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "damar.wijaya@medikanusantara.co.id",
    "employee_id": "MN-10087",
    "grade_level": "L2",
    "hire_date": "2023-07-10",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Admin",
    "location": "Yogyakarta",
    "name": "Damar Wijaya",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2020-11-09",
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "certification"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "teguh.effendi@medikanusantara.co.id",
    "employee_id": "MN-10088",
    "grade_level": "L3",
    "hire_date": "2021-03-12",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales Senior",
    "location": "Bogor",
    "name": "Teguh Effendi",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Team Coaching Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Team Coaching"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Coaching"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2023-08-02",
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "otto.natsir@medikanusantara.co.id",
    "employee_id": "MN-10089",
    "grade_level": "L2",
    "hire_date": "2017-11-04",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Quality Control",
    "location": "Manado",
    "name": "Otto Natsir",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      },
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 0,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "nabila.lukman@medikanusantara.co.id",
    "employee_id": "MN-10090",
    "grade_level": "L4",
    "hire_date": "2019-09-02",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manajer Cabang",
    "location": "Yogyakarta",
    "name": "Nabila Lukman",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Leadership Essentials Program",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "Team Leadership"
        ]
      },
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.67,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Leadership"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "People Development",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "zahra.usman@medikanusantara.co.id",
    "employee_id": "MN-10091",
    "grade_level": "L3",
    "hire_date": "2022-03-28",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales 2",
    "location": "Pekanbaru",
    "name": "Zahra Usman",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      },
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      },
      {
        "course_name": "Team Coaching Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Team Coaching"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Team Coaching"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-11-18",
        "proficiency": "advanced",
        "skill": "Customer Relationship Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-12-22",
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-05-11",
        "proficiency": "advanced",
        "skill": "CRM Software",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "prima.budiman@medikanusantara.co.id",
    "employee_id": "MN-10092",
    "grade_level": "L2",
    "hire_date": "2019-05-24",
    "identity_confidence": 0.93,
    "identity_resolution_method": "rule_based",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Staff",
    "location": "Semarang",
    "name": "Prima Budiman",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.75,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2023-03-22",
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 4.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "ilham.mahmud@medikanusantara.co.id",
    "employee_id": "MN-10093",
    "grade_level": "L2",
    "hire_date": "2021-05-02",
    "identity_confidence": 0.71,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Koordinator Logistik",
    "location": "Balikpapan",
    "name": "Ilham Mahmud",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Fleet Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.79,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "jamal.santoso@medikanusantara.co.id",
    "employee_id": "MN-10094",
    "grade_level": "L2",
    "hire_date": "2018-11-22",
    "identity_confidence": 0.94,
    "identity_resolution_method": "rule_based",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Support IT",
    "location": "Malang",
    "name": "Jamal Santoso",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2023-07-08",
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "certification"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "sari.kasim@medikanusantara.co.id",
    "employee_id": "MN-10095",
    "grade_level": "L2",
    "hire_date": "2022-06-18",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Specialist",
    "location": "Jakarta Pusat",
    "name": "Sari Kasim",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2023-02-05",
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "certification"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "chandra.basuki@medikanusantara.co.id",
    "employee_id": "MN-10096",
    "grade_level": "L4",
    "hire_date": "2016-04-24",
    "identity_confidence": 0.83,
    "identity_resolution_method": "fuzzy",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manajer Cabang",
    "location": "Balikpapan",
    "name": "Chandra Basuki",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Leadership Essentials Program",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "Team Leadership"
        ]
      },
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.67,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Leadership"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Control",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "nando.santoso@medikanusantara.co.id",
    "employee_id": "MN-10097",
    "grade_level": "L2",
    "hire_date": "2016-08-21",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Staff",
    "location": "Bali",
    "name": "Nando Santoso",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.62,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "rofiq.erlangga@medikanusantara.co.id",
    "employee_id": "MN-10098",
    "grade_level": "L2",
    "hire_date": "2017-01-22",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Generalist",
    "location": "Pontianak",
    "name": "Rofiq Erlangga",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.95,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2023-08-25",
        "proficiency": "advanced",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "training"
      },
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2022-04-16",
        "proficiency": "advanced",
        "skill": "Recruitment",
        "source": "training"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "erni.kasim@medikanusantara.co.id",
    "employee_id": "MN-10099",
    "grade_level": "L2",
    "hire_date": "2023-04-20",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Petugas QC",
    "location": "Malang",
    "name": "Erni Kasim",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2020-08-13",
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Quality Management Systems",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "GDP/GMP Knowledge",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "dita.bernardus@medikanusantara.co.id",
    "employee_id": "MN-10100",
    "grade_level": "L2",
    "hire_date": "2016-06-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales Rep",
    "location": "Manado",
    "name": "Dita Bernardus",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2023-04-03",
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Territory Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "nurul.wibowo@medikanusantara.co.id",
    "employee_id": "MN-10101",
    "grade_level": "L4",
    "hire_date": "2019-12-26",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Regional Manager",
    "location": "Samarinda",
    "name": "Nurul Wibowo",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.83,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2023-01-02",
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "certification"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.79,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "budi.purwanto@medikanusantara.co.id",
    "employee_id": "MN-10102",
    "grade_level": "L2",
    "hire_date": "2016-06-24",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Cirebon",
    "name": "Budi Purwanto",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      },
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "bella.natsir@medikanusantara.co.id",
    "employee_id": "MN-10103",
    "grade_level": "L2",
    "hire_date": "2016-12-16",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Generalist",
    "location": "Medan",
    "name": "Bella Natsir",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Modern Recruitment Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Recruitment"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Recruitment"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2024-07-24",
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "training"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Recruitment",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.82,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "zaki.christianto@medikanusantara.co.id",
    "employee_id": "MN-10104",
    "grade_level": "L2",
    "hire_date": "2018-12-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HRD Staff",
    "location": "Surabaya",
    "name": "Zaki Christianto",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.7,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 4.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "anita.cahyadi@medikanusantara.co.id",
    "employee_id": "MN-10105",
    "grade_level": "L2",
    "hire_date": "2021-04-05",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Staff",
    "location": "Bekasi",
    "name": "Anita Cahyadi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2019-05-07",
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "maya.latif@medikanusantara.co.id",
    "employee_id": "MN-10106",
    "grade_level": "L2",
    "hire_date": "2018-03-07",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Staff",
    "location": "Banjarmasin",
    "name": "Maya Latif",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.67,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "rizal.ridwan@medikanusantara.co.id",
    "employee_id": "MN-10107",
    "grade_level": "L2",
    "hire_date": "2017-02-23",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Senior Sales",
    "location": "Pekanbaru",
    "name": "Rizal Ridwan",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.7,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-09-17",
        "proficiency": "advanced",
        "skill": "Customer Relationship Management",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 4.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "dian.djuanda@medikanusantara.co.id",
    "employee_id": "MN-10108",
    "grade_level": "L2",
    "hire_date": "2019-07-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Koordinator",
    "location": "Jakarta Barat",
    "name": "Dian Djuanda",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2024-02-06",
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "novita.cahyadi@medikanusantara.co.id",
    "employee_id": "MN-10109",
    "grade_level": "L3",
    "hire_date": "2022-04-21",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Senior Sales",
    "location": "Banjarmasin",
    "name": "Novita Cahyadi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.83,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-04-09",
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.83,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Territory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.87,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "mulyadi.maulana@medikanusantara.co.id",
    "employee_id": "MN-10110",
    "grade_level": "L3",
    "hire_date": "2021-08-17",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales 2",
    "location": "Bogor",
    "name": "Mulyadi Maulana",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-01-08",
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-12-10",
        "proficiency": "advanced",
        "skill": "Key Account Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "vina.rahayu@medikanusantara.co.id",
    "employee_id": "MN-10111",
    "grade_level": "L3",
    "hire_date": "2021-09-17",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales Senior",
    "location": "Cirebon",
    "name": "Vina Rahayu",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.83,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-11-19",
        "proficiency": "advanced",
        "skill": "Territory Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-06-03",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 4.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "jamal.christianto@medikanusantara.co.id",
    "employee_id": "MN-10112",
    "grade_level": "L2",
    "hire_date": "2021-09-26",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Administration",
    "location": "Manado",
    "name": "Jamal Christianto",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2023-01-17",
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Accounts Payable/Receivable",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "novita.kurniawan@medikanusantara.co.id",
    "employee_id": "MN-10113",
    "grade_level": "L2",
    "hire_date": "2016-08-07",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Koordinator",
    "location": "Banjarmasin",
    "name": "Novita Kurniawan",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2022-08-08",
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "certification"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "abdul.alamsyah@medikanusantara.co.id",
    "employee_id": "MN-10114",
    "grade_level": "L3",
    "hire_date": "2022-05-27",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sr. Sales Rep",
    "location": "Malang",
    "name": "Abdul Alamsyah",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      },
      {
        "course_name": "Team Coaching Techniques",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Team Coaching"
        ]
      },
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Team Coaching"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2023-05-21",
        "proficiency": "advanced",
        "skill": "Customer Relationship Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-06-07",
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.88,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "CRM Software",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "candra.rahayu@medikanusantara.co.id",
    "employee_id": "MN-10115",
    "grade_level": "L2",
    "hire_date": "2020-11-21",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Petugas QC",
    "location": "Jakarta Selatan",
    "name": "Candra Rahayu",
    "performance_trend": "declining",
    "recommended_learning": [],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.74,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2020-11-27",
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "gita.yahya@medikanusantara.co.id",
    "employee_id": "MN-10116",
    "grade_level": "L2",
    "hire_date": "2020-05-16",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staf Gudang",
    "location": "Malang",
    "name": "Gita Yahya",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-01-07",
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "certification"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Good Distribution Practice (GDP)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "anita.djuanda@medikanusantara.co.id",
    "employee_id": "MN-10117",
    "grade_level": "L2",
    "hire_date": "2019-01-25",
    "identity_confidence": 0.84,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Supply Chain Staff",
    "location": "Jakarta Timur",
    "name": "Anita Djuanda",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      },
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      },
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 0,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "muhammad.astuti@medikanusantara.co.id",
    "employee_id": "MN-10118",
    "grade_level": "L2",
    "hire_date": "2023-06-28",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Coordinator",
    "location": "Manado",
    "name": "Muhammad Astuti",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      },
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.77,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "gita.purwanto@medikanusantara.co.id",
    "employee_id": "MN-10119",
    "grade_level": "L2",
    "hire_date": "2017-04-10",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Technical Support",
    "location": "Balikpapan",
    "name": "Gita Purwanto",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2019-02-07",
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2024-07-14",
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "certification"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "nabila.permata@medikanusantara.co.id",
    "employee_id": "MN-10120",
    "grade_level": "L2",
    "hire_date": "2022-06-05",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Staff",
    "location": "Tangerang",
    "name": "Nabila Permata",
    "performance_trend": "declining",
    "recommended_learning": [],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2023-11-28",
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2021-06-13",
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "training"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Payroll Processing",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Learning & Development",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "putri.christianto@medikanusantara.co.id",
    "employee_id": "MN-10121",
    "grade_level": "L2",
    "hire_date": "2018-09-18",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Human Resources Staff",
    "location": "Jakarta Utara",
    "name": "Putri Christianto",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.89,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2019-06-01",
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "training"
      },
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2024-10-24",
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Employee Relations",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "budi.harahap@medikanusantara.co.id",
    "employee_id": "MN-10122",
    "grade_level": "L3",
    "hire_date": "2021-12-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales 2",
    "location": "Tangerang",
    "name": "Budi Harahap",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      },
      {
        "course_name": "Strategic Key Account Management",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Key Account Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Key Account Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-12-01",
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.83,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "wawan.arifin@medikanusantara.co.id",
    "employee_id": "MN-10123",
    "grade_level": "L2",
    "hire_date": "2021-04-08",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Quality Assurance Staff",
    "location": "Lampung",
    "name": "Wawan Arifin",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2019-03-22",
        "proficiency": "advanced",
        "skill": "Quality Management Systems",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2020-12-18",
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "BPOM Regulatory Compliance",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "teguh.permata@medikanusantara.co.id",
    "employee_id": "MN-10124",
    "grade_level": "L2",
    "hire_date": "2017-01-07",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Admin",
    "location": "Batam",
    "name": "Teguh Permata",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      },
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.71,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2020-10-22",
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Customer Service",
    "email": "andi.purwanto@medikanusantara.co.id",
    "employee_id": "MN-10125",
    "grade_level": "L1",
    "hire_date": "2018-08-26",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Customer Service",
    "location": "Jakarta Pusat",
    "name": "Andi Purwanto",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "ai_inferred"
      },
      {
        "category": "Customer Service",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "ai_inferred"
      },
      {
        "category": "Customer Service",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Data Entry",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "dian.kurniawan@medikanusantara.co.id",
    "employee_id": "MN-10126",
    "grade_level": "L2",
    "hire_date": "2016-12-12",
    "identity_confidence": 0.75,
    "identity_resolution_method": "fuzzy",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Human Resources Staff",
    "location": "Lampung",
    "name": "Dian Kurniawan",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.65,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "joko.suharto@medikanusantara.co.id",
    "employee_id": "MN-10127",
    "grade_level": "L2",
    "hire_date": "2020-06-06",
    "identity_confidence": 0.8,
    "identity_resolution_method": "fuzzy",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Perwakilan Penjualan",
    "location": "Solo",
    "name": "Joko Suharto",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.91,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2022-09-23",
        "proficiency": "advanced",
        "skill": "Key Account Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2024-05-17",
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2023-10-25",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "agus.tanjung@medikanusantara.co.id",
    "employee_id": "MN-10128",
    "grade_level": "L1",
    "hire_date": "2019-06-27",
    "identity_confidence": 0.93,
    "identity_resolution_method": "rule_based",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Customer Service",
    "location": "Palembang",
    "name": "Agus Tanjung",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.75,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-19",
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "ai_inferred"
      },
      {
        "category": "Customer Service",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Basic)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "lia.hartono@medikanusantara.co.id",
    "employee_id": "MN-10129",
    "grade_level": "L2",
    "hire_date": "2022-01-09",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Koordinator Logistik",
    "location": "Cirebon",
    "name": "Lia Hartono",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.8,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Customer Service",
    "email": "tini.nugroho@medikanusantara.co.id",
    "employee_id": "MN-10130",
    "grade_level": "L1",
    "hire_date": "2022-03-23",
    "identity_confidence": 0.76,
    "identity_resolution_method": "fuzzy",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Customer Service",
    "location": "Jakarta Pusat",
    "name": "Tini Nugroho",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      },
      {
        "course_name": "CRM Tools & Best Practices",
        "duration_hours": 10,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "CRM Software"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "CRM Software"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Communication",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "CRM Software",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Basic)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "intan.firmansyah@medikanusantara.co.id",
    "employee_id": "MN-10131",
    "grade_level": "L2",
    "hire_date": "2023-03-05",
    "identity_confidence": 0.72,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Koordinator Logistik",
    "location": "Palembang",
    "name": "Intan Firmansyah",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Last-Mile Delivery Management",
        "duration_hours": 14,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Last-Mile Logistics"
        ]
      },
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.77,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Last-Mile Logistics"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "hadi.tanjung@medikanusantara.co.id",
    "employee_id": "MN-10132",
    "grade_level": "L2",
    "hire_date": "2017-10-08",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Support",
    "location": "Pontianak",
    "name": "Hadi Tanjung",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      },
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.66,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "fajar.firmansyah@medikanusantara.co.id",
    "employee_id": "MN-10133",
    "grade_level": "L2",
    "hire_date": "2021-06-11",
    "identity_confidence": 0.81,
    "identity_resolution_method": "fuzzy",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Staf Keuangan",
    "location": "Medan",
    "name": "Fajar Firmansyah",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2021-12-09",
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "certification"
      },
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2024-11-27",
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Budget Management",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "vina.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10134",
    "grade_level": "L2",
    "hire_date": "2019-03-08",
    "identity_confidence": 0.72,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Staff",
    "location": "Medan",
    "name": "Vina Iskandar",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2024-03-14",
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 4.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "fuad.firmansyah@medikanusantara.co.id",
    "employee_id": "MN-10135",
    "grade_level": "L2",
    "hire_date": "2018-01-19",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Senior Sales",
    "location": "Palembang",
    "name": "Fuad Firmansyah",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.62,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "denny.cahyadi@medikanusantara.co.id",
    "employee_id": "MN-10136",
    "grade_level": "L2",
    "hire_date": "2017-09-14",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Gudang Staff",
    "location": "Semarang",
    "name": "Denny Cahyadi",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems",
      "No performance history available for validation"
    ],
    "skill_confidence": 0.91,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2019-10-02",
        "proficiency": "advanced",
        "skill": "Inventory Management",
        "source": "training"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-10",
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.83,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "wahyu.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10137",
    "grade_level": "L2",
    "hire_date": "2017-12-26",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Koordinator",
    "location": "Bekasi",
    "name": "Wahyu Iskandar",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.74,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "wulandari.suharto@medikanusantara.co.id",
    "employee_id": "MN-10138",
    "grade_level": "L1",
    "hire_date": "2022-05-27",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Layanan Pelanggan",
    "location": "Tangerang",
    "name": "Wulandari Suharto",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Problem Solving & Decision Making",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Problem Solving"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Problem Solving"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2022-01-20",
        "proficiency": "intermediate",
        "skill": "Communication",
        "source": "certification"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Problem Solving",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "dian.pratama@medikanusantara.co.id",
    "employee_id": "MN-10139",
    "grade_level": "L2",
    "hire_date": "2022-11-04",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Staff",
    "location": "Samarinda",
    "name": "Dian Pratama",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      },
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      },
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.66,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Financial Reporting",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Budget Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Warehouse & Distribution",
    "email": "zaki.maulana@medikanusantara.co.id",
    "employee_id": "MN-10140",
    "grade_level": "L2",
    "hire_date": "2019-02-17",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Warehouse Staff",
    "location": "Jakarta Pusat",
    "name": "Zaki Maulana",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Warehouse & Inventory Management",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Inventory Management"
        ]
      },
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Inventory Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2024-05-20",
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "training"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Inventory Management",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Good Distribution Practice (GDP)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Stock Counting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "lestari.yahya@medikanusantara.co.id",
    "employee_id": "MN-10141",
    "grade_level": "L2",
    "hire_date": "2023-04-19",
    "identity_confidence": 0.78,
    "identity_resolution_method": "fuzzy",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Samarinda",
    "name": "Lestari Yahya",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      },
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      },
      {
        "course_name": "SAP Basis & System Administration",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP System Support"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.63,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "SAP System Support"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Network Administration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "SAP System Support",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Help Desk",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "fajar.mahmud@medikanusantara.co.id",
    "employee_id": "MN-10142",
    "grade_level": "L1",
    "hire_date": "2022-07-13",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Agen CS",
    "location": "Tangerang",
    "name": "Fajar Mahmud",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2020-03-02",
        "proficiency": "advanced",
        "skill": "CRM Software",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2024-11-04",
        "proficiency": "advanced",
        "skill": "Problem Solving",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Communication",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Basic)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.2,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "eko.hartono@medikanusantara.co.id",
    "employee_id": "MN-10143",
    "grade_level": "L3",
    "hire_date": "2017-10-03",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sales Senior",
    "location": "Semarang",
    "name": "Eko Hartono",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2023-08-01",
        "proficiency": "advanced",
        "skill": "Team Coaching",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-03-27",
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "dewi.setiawan@medikanusantara.co.id",
    "employee_id": "MN-10144",
    "grade_level": "L2",
    "hire_date": "2016-10-09",
    "identity_confidence": 0.92,
    "identity_resolution_method": "rule_based",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Staf Keuangan",
    "location": "Yogyakarta",
    "name": "Dewi Setiawan",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.73,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "bunga.christianto@medikanusantara.co.id",
    "employee_id": "MN-10145",
    "grade_level": "L2",
    "hire_date": "2018-12-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "QC Officer",
    "location": "Balikpapan",
    "name": "Bunga Christianto",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.61,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "laras.salim@medikanusantara.co.id",
    "employee_id": "MN-10146",
    "grade_level": "L2",
    "hire_date": "2023-05-17",
    "identity_confidence": 0.93,
    "identity_resolution_method": "rule_based",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Admin",
    "location": "Malang",
    "name": "Laras Salim",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      },
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      },
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Financial Reporting",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.75,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Budget Management",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Operations",
    "email": "budi.hartono@medikanusantara.co.id",
    "employee_id": "MN-10147",
    "grade_level": "L4",
    "hire_date": "2022-02-24",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Jakarta Pusat",
    "name": "Budi Hartono",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      },
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      },
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.74,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2019-09-12",
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "P&L Management",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Strategic Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Operations",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "People Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "juliana.pratama@medikanusantara.co.id",
    "employee_id": "MN-10148",
    "grade_level": "L2",
    "hire_date": "2021-04-13",
    "identity_confidence": 0.8,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Supply Chain Staff",
    "location": "Jakarta Selatan",
    "name": "Juliana Pratama",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2021-01-23",
        "proficiency": "advanced",
        "skill": "Last-Mile Logistics",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "mulyadi.saputra@medikanusantara.co.id",
    "employee_id": "MN-10149",
    "grade_level": "L2",
    "hire_date": "2016-06-27",
    "identity_confidence": 0.79,
    "identity_resolution_method": "fuzzy",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Staff",
    "location": "Jakarta Utara",
    "name": "Mulyadi Saputra",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.86,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2024-11-22",
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2022-07-12",
        "proficiency": "advanced",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.86,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.83,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "mulyadi.aditya@medikanusantara.co.id",
    "employee_id": "MN-10150",
    "grade_level": "L2",
    "hire_date": "2017-02-17",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Sales 1",
    "location": "Bandung",
    "name": "Mulyadi Aditya",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "CRM Mastery for Healthcare Sales",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Customer Relationship Management"
        ]
      },
      {
        "course_name": "Healthcare Product Fundamentals",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Product Knowledge (Pharma)"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Customer Relationship Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 25,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-11-24",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "anita.lukman@medikanusantara.co.id",
    "employee_id": "MN-10151",
    "grade_level": "L2",
    "hire_date": "2018-01-04",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Staf QC",
    "location": "Bali",
    "name": "Anita Lukman",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2021-07-21",
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.86,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "wahyu.lestari@medikanusantara.co.id",
    "employee_id": "MN-10152",
    "grade_level": "L2",
    "hire_date": "2022-03-09",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Petugas QC",
    "location": "Bali",
    "name": "Wahyu Lestari",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.84,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2019-09-20",
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "certification"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.86,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "bayu.nasution@medikanusantara.co.id",
    "employee_id": "MN-10153",
    "grade_level": "L2",
    "hire_date": "2016-08-28",
    "identity_confidence": 0.92,
    "identity_resolution_method": "rule_based",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staff HRD",
    "location": "Jakarta Timur",
    "name": "Bayu Nasution",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS",
      "No performance history available for validation"
    ],
    "skill_confidence": 0.74,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2023-08-24",
        "proficiency": "advanced",
        "skill": "Recruitment",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      },
      {
        "category": "Human Resources",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "alfi.irawan@medikanusantara.co.id",
    "employee_id": "MN-10154",
    "grade_level": "L1",
    "hire_date": "2023-04-21",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Agen CS",
    "location": "Manado",
    "name": "Alfi Irawan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Communication",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "self_declared"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Product Knowledge (Basic)",
        "source": "ai_inferred"
      },
      {
        "category": "Customer Service",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Data Entry",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "bunga.wahyudi@medikanusantara.co.id",
    "employee_id": "MN-10155",
    "grade_level": "L2",
    "hire_date": "2023-05-04",
    "identity_confidence": 0.91,
    "identity_resolution_method": "rule_based",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Koordinator",
    "location": "Palembang",
    "name": "Bunga Wahyudi",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.87,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2021-12-16",
        "proficiency": "advanced",
        "skill": "Last-Mile Logistics",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2020-11-22",
        "proficiency": "advanced",
        "skill": "Delivery Coordination",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "lestari.bernardus@medikanusantara.co.id",
    "employee_id": "MN-10156",
    "grade_level": "L2",
    "hire_date": "2017-07-06",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Quality Control",
    "location": "Mataram",
    "name": "Lestari Bernardus",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "BPOM Regulatory Compliance",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "okta.firmansyah@medikanusantara.co.id",
    "employee_id": "MN-10157",
    "grade_level": "L2",
    "hire_date": "2016-08-15",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "QC Officer",
    "location": "Bekasi",
    "name": "Okta Firmansyah",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2022-04-14",
        "proficiency": "advanced",
        "skill": "GDP/GMP Knowledge",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.81,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.7,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Information Technology",
    "email": "wahyu.christianto@medikanusantara.co.id",
    "employee_id": "MN-10158",
    "grade_level": "L2",
    "hire_date": "2018-12-27",
    "identity_confidence": 0.93,
    "identity_resolution_method": "rule_based",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Support IT",
    "location": "Palembang",
    "name": "Wahyu Christianto",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems",
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2019-11-26",
        "proficiency": "advanced",
        "skill": "SAP System Support",
        "source": "training"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Hardware Troubleshooting",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Software Configuration",
        "source": "self_declared"
      },
      {
        "category": "Information Technology",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 7
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "rizky.natsir@medikanusantara.co.id",
    "employee_id": "MN-10159",
    "grade_level": "L3",
    "hire_date": "2019-07-19",
    "identity_confidence": 0.81,
    "identity_resolution_method": "fuzzy",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Sr. Sales Rep",
    "location": "Banjarmasin",
    "name": "Rizky Natsir",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems",
      "No performance history available for validation"
    ],
    "skill_confidence": 0.84,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2022-06-18",
        "proficiency": "advanced",
        "skill": "Territory Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-08-10",
        "proficiency": "advanced",
        "skill": "Key Account Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "agus.budiman@medikanusantara.co.id",
    "employee_id": "MN-10160",
    "grade_level": "L2",
    "hire_date": "2023-07-11",
    "identity_confidence": 0.95,
    "identity_resolution_method": "rule_based",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Staff",
    "location": "Surabaya",
    "name": "Agus Budiman",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.85,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2020-01-23",
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2024-10-04",
        "proficiency": "advanced",
        "skill": "Financial Reporting",
        "source": "certification"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Accounts Payable/Receivable",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Microsoft Excel Advanced",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "agus.basuki@medikanusantara.co.id",
    "employee_id": "MN-10161",
    "grade_level": "L4",
    "hire_date": "2016-09-09",
    "identity_confidence": 0.81,
    "identity_resolution_method": "fuzzy",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Branch Manager",
    "location": "Bali",
    "name": "Agus Basuki",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      },
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      },
      {
        "course_name": "Leadership Essentials Program",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "External: DDI",
        "skills_addressed": [
          "Team Leadership"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Team Leadership"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Team Leadership",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.85,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "dewi.wijaya@medikanusantara.co.id",
    "employee_id": "MN-10162",
    "grade_level": "L2",
    "hire_date": "2017-07-15",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staf SDM",
    "location": "Malang",
    "name": "Dewi Wijaya",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2022-12-15",
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Employee Relations",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Payroll Processing",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Learning & Development",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "zahra.junaidi@medikanusantara.co.id",
    "employee_id": "MN-10163",
    "grade_level": "L2",
    "hire_date": "2021-03-19",
    "identity_confidence": 0.82,
    "identity_resolution_method": "fuzzy",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Coordinator",
    "location": "Bogor",
    "name": "Zahra Junaidi",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Logistics & Route Optimization",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Route Planning"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.67,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Route Planning"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "hamid.nugroho@medikanusantara.co.id",
    "employee_id": "MN-10164",
    "grade_level": "L2",
    "hire_date": "2022-08-10",
    "identity_confidence": 0.82,
    "identity_resolution_method": "fuzzy",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Spesialis IT",
    "location": "Malang",
    "name": "Hamid Nugroho",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Network Fundamentals & Administration",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Network Administration"
        ]
      },
      {
        "course_name": "IT Hardware & Maintenance",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Hardware Troubleshooting"
        ]
      }
    ],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.78,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Network Administration"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Hardware Troubleshooting"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2020-02-27",
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "fitri.fauzan@medikanusantara.co.id",
    "employee_id": "MN-10165",
    "grade_level": "L2",
    "hire_date": "2021-01-17",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistics Coordinator",
    "location": "Pontianak",
    "name": "Fitri Fauzan",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.74,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "ai_inferred"
      },
      {
        "category": "Logistics",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "kevin.darmawan@medikanusantara.co.id",
    "employee_id": "MN-10166",
    "grade_level": "L2",
    "hire_date": "2023-06-27",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "QC Staff",
    "location": "Tangerang",
    "name": "Kevin Darmawan",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.95,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2021-04-22",
        "proficiency": "advanced",
        "skill": "Quality Management Systems",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2024-09-01",
        "proficiency": "advanced",
        "skill": "BPOM Regulatory Compliance",
        "source": "certification"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "candra.suharto@medikanusantara.co.id",
    "employee_id": "MN-10167",
    "grade_level": "L1",
    "hire_date": "2018-07-02",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Staf CS",
    "location": "Mataram",
    "name": "Candra Suharto",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "CRM Tools & Best Practices",
        "duration_hours": 10,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "CRM Software"
        ]
      },
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.74,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "CRM Software"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Communication",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.69,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "sari.iskandar@medikanusantara.co.id",
    "employee_id": "MN-10168",
    "grade_level": "L2",
    "hire_date": "2022-07-22",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Quality Control",
    "location": "Jakarta Barat",
    "name": "Sari Iskandar",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      },
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.65,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Quality Management Systems",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "BPOM Regulatory Compliance",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "GDP/GMP Knowledge",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "surya.wibowo@medikanusantara.co.id",
    "employee_id": "MN-10169",
    "grade_level": "L2",
    "hire_date": "2017-04-11",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staff HRD",
    "location": "Tangerang",
    "name": "Surya Wibowo",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "SAP SuccessFactors HR Module",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "HRIS (SAP SuccessFactors)"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2022-08-01",
        "proficiency": "advanced",
        "skill": "Recruitment",
        "source": "training"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Payroll Processing",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Learning & Development",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "zaki.alamsyah@medikanusantara.co.id",
    "employee_id": "MN-10170",
    "grade_level": "L2",
    "hire_date": "2017-10-24",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Senior Sales",
    "location": "Jakarta Pusat",
    "name": "Zaki Alamsyah",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "CRM Mastery for Healthcare Sales",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Customer Relationship Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Customer Relationship Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2022-05-23",
        "proficiency": "intermediate",
        "skill": "Territory Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2022-04-22",
        "proficiency": "advanced",
        "skill": "Product Knowledge (Pharma)",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-05-04",
        "proficiency": "advanced",
        "skill": "Sales Negotiation",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.7,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "ogi.darmawan@medikanusantara.co.id",
    "employee_id": "MN-10171",
    "grade_level": "L2",
    "hire_date": "2020-05-03",
    "identity_confidence": 0.96,
    "identity_resolution_method": "rule_based",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Staf Keuangan",
    "location": "Malang",
    "name": "Ogi Darmawan",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.86,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2022-12-13",
        "proficiency": "advanced",
        "skill": "SAP Finance",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2021-01-14",
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "certification"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Financial Reporting",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Human Resources",
    "email": "mulyadi.gunawan@medikanusantara.co.id",
    "employee_id": "MN-10172",
    "grade_level": "L2",
    "hire_date": "2018-01-28",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "Staf SDM",
    "location": "Balikpapan",
    "name": "Mulyadi Gunawan",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Employee Relations Fundamentals",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Employee Relations"
        ]
      }
    ],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.87,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Employee Relations"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2020-08-09",
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "training"
      },
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2023-04-06",
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Employee Relations",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.8,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Learning & Development",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 7
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "eko.wahyudi@medikanusantara.co.id",
    "employee_id": "MN-10173",
    "grade_level": "L1",
    "hire_date": "2016-07-04",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Customer Service",
    "location": "Yogyakarta",
    "name": "Eko Wahyudi",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.89,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2020-06-27",
        "proficiency": "intermediate",
        "skill": "CRM Software",
        "source": "training"
      },
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2019-10-09",
        "proficiency": "intermediate",
        "skill": "Problem Solving",
        "source": "certification"
      },
      {
        "category": "Customer Service",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Communication",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "ratna.fauzan@medikanusantara.co.id",
    "employee_id": "MN-10174",
    "grade_level": "L2",
    "hire_date": "2020-01-19",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Perwakilan Penjualan",
    "location": "Pontianak",
    "name": "Ratna Fauzan",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Healthcare Product Fundamentals",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Product Knowledge (Pharma)"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.88,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-10-20",
        "proficiency": "advanced",
        "skill": "Territory Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2020-06-08",
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-11-05",
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Product Knowledge (Pharma)",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "budi.budiman@medikanusantara.co.id",
    "employee_id": "MN-10175",
    "grade_level": "L2",
    "hire_date": "2023-02-25",
    "identity_confidence": 0.82,
    "identity_resolution_method": "fuzzy",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Senior Sales",
    "location": "Yogyakarta",
    "name": "Budi Budiman",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      },
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      },
      {
        "course_name": "CRM Mastery for Healthcare Sales",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Customer Relationship Management"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Customer Relationship Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Product Knowledge (Pharma)",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "taufik.arifin@medikanusantara.co.id",
    "employee_id": "MN-10176",
    "grade_level": "L2",
    "hire_date": "2023-09-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Senior Sales",
    "location": "Bandung",
    "name": "Taufik Arifin",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "CRM Mastery for Healthcare Sales",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Customer Relationship Management"
        ]
      },
      {
        "course_name": "Healthcare Product Fundamentals",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Product Knowledge (Pharma)"
        ]
      },
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.64,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Customer Relationship Management"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.63,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Product Knowledge (Pharma)",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Territory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "andi.wibowo@medikanusantara.co.id",
    "employee_id": "MN-10177",
    "grade_level": "L2",
    "hire_date": "2023-10-19",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Administration",
    "location": "Padang",
    "name": "Andi Wibowo",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      },
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      },
      {
        "course_name": "SAP Finance Fundamentals",
        "duration_hours": 40,
        "estimated_completion_weeks": 5,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "SAP Finance"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "SAP Finance"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Financial Reporting",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.62,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "dewi.tjandra@medikanusantara.co.id",
    "employee_id": "MN-10178",
    "grade_level": "L2",
    "hire_date": "2019-08-06",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Supply Chain Staff",
    "location": "Makassar",
    "name": "Dewi Tjandra",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Delivery Operations Excellence",
        "duration_hours": 10,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Delivery Coordination"
        ]
      }
    ],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Delivery Coordination"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2023-05-07",
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Human Resources",
    "email": "ogi.tanjung@medikanusantara.co.id",
    "employee_id": "MN-10179",
    "grade_level": "L2",
    "hire_date": "2022-11-18",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Human Resources",
    "job_title_normalized": "HR Generalist",
    "job_title_raw": "HR Generalist",
    "location": "Jakarta Utara",
    "name": "Ogi Tanjung",
    "performance_trend": "declining",
    "recommended_learning": [],
    "required_skills": [
      "Recruitment",
      "Employee Relations",
      "HRIS (SAP SuccessFactors)"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Human Resources",
        "confidence": 0.95,
        "last_demonstrated": "2021-06-11",
        "proficiency": "intermediate",
        "skill": "HRIS (SAP SuccessFactors)",
        "source": "certification"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Recruitment",
        "source": "self_declared"
      },
      {
        "category": "Human Resources",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Employee Relations",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Human Resources",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Payroll Processing",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "siti.saputra@medikanusantara.co.id",
    "employee_id": "MN-10180",
    "grade_level": "L4",
    "hire_date": "2019-11-04",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Samarinda",
    "name": "Siti Saputra",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      },
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2021-07-26",
        "proficiency": "intermediate",
        "skill": "Operations Management",
        "source": "certification"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "P&L Management",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 6
  },
  {
    "avg_performance_score": 3.5,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "bunga.fauzan@medikanusantara.co.id",
    "employee_id": "MN-10181",
    "grade_level": "L4",
    "hire_date": "2021-04-04",
    "identity_confidence": 0.75,
    "identity_resolution_method": "fuzzy",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Manager Cabang",
    "location": "Lampung",
    "name": "Bunga Fauzan",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Operations Excellence Certification",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: SWA",
        "skills_addressed": [
          "Operations Management"
        ]
      },
      {
        "course_name": "Coaching & Mentoring for Managers",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "External: DDI",
        "skills_addressed": [
          "People Development"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.86,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Operations Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "People Development"
      }
    ],
    "skill_readiness_score": 50,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2024-12-15",
        "proficiency": "intermediate",
        "skill": "P&L Management",
        "source": "training"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Operations",
        "confidence": 0.85,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Operations",
    "email": "ilham.zainal@medikanusantara.co.id",
    "employee_id": "MN-10182",
    "grade_level": "L4",
    "hire_date": "2017-08-15",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Operations",
    "job_title_normalized": "Branch Manager",
    "job_title_raw": "Kepala Cabang",
    "location": "Tangerang",
    "name": "Ilham Zainal",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Financial Acumen for Managers",
        "duration_hours": 24,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "P&L Management"
        ]
      }
    ],
    "required_skills": [
      "Team Leadership",
      "P&L Management",
      "Operations Management",
      "People Development"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "P&L Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2023-02-08",
        "proficiency": "advanced",
        "skill": "People Development",
        "source": "training"
      },
      {
        "category": "Operations",
        "confidence": 0.95,
        "last_demonstrated": "2023-06-15",
        "proficiency": "advanced",
        "skill": "Operations Management",
        "source": "training"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Leadership",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "P&L Management",
        "source": "self_declared"
      },
      {
        "category": "Operations",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Strategic Planning",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Logistics",
    "email": "wawan.budiman@medikanusantara.co.id",
    "employee_id": "MN-10183",
    "grade_level": "L2",
    "hire_date": "2016-10-24",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Koordinator Logistik",
    "location": "Surabaya",
    "name": "Wawan Budiman",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2021-04-23",
        "proficiency": "advanced",
        "skill": "Last-Mile Logistics",
        "source": "training"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Fleet Management",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Delivery Coordination",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Quality Control",
    "email": "siti.rahayu@medikanusantara.co.id",
    "employee_id": "MN-10184",
    "grade_level": "L2",
    "hire_date": "2023-03-02",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Petugas QC",
    "location": "Manado",
    "name": "Siti Rahayu",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.81,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2024-05-18",
        "proficiency": "advanced",
        "skill": "GDP/GMP Knowledge",
        "source": "training"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "self_declared"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "fitri.kasim@medikanusantara.co.id",
    "employee_id": "MN-10185",
    "grade_level": "L2",
    "hire_date": "2016-12-23",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Staff Gudang",
    "location": "Padang",
    "name": "Fitri Kasim",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      },
      {
        "course_name": "Cold Chain Logistics Essentials",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Cold Chain Management"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.81,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Cold Chain Management"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2024-09-26",
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "certification"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Good Distribution Practice (GDP)",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Cold Chain Management",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Stock Counting",
        "source": "self_declared"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Forklift Operation",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.1,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "hadi.kusuma@medikanusantara.co.id",
    "employee_id": "MN-10186",
    "grade_level": "L2",
    "hire_date": "2023-09-03",
    "identity_confidence": 0.79,
    "identity_resolution_method": "fuzzy",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Quality Assurance Staff",
    "location": "Manado",
    "name": "Hadi Kusuma",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "QMS Essentials & ISO Standards",
        "duration_hours": 24,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Quality Management Systems"
        ]
      },
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      },
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "medium",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.7,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Quality Management Systems"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      },
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "awareness",
        "skill": "GDP/GMP Knowledge",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Audit Skills",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 2
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "wawan.zainal@medikanusantara.co.id",
    "employee_id": "MN-10187",
    "grade_level": "L2",
    "hire_date": "2016-07-01",
    "identity_confidence": 0.73,
    "identity_resolution_method": "fuzzy",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "IT Staff",
    "location": "Depok",
    "name": "Wawan Zainal",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Fuzzy identity match — name variant detected across systems"
    ],
    "skill_confidence": 0.69,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.72,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.61,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.71,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Information Technology",
    "email": "hamid.pramono@medikanusantara.co.id",
    "employee_id": "MN-10188",
    "grade_level": "L2",
    "hire_date": "2017-04-12",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Information Technology",
    "job_title_normalized": "IT Support Specialist",
    "job_title_raw": "Technical Support",
    "location": "Cirebon",
    "name": "Hamid Pramono",
    "performance_trend": "insufficient_data",
    "recommended_learning": [],
    "required_skills": [
      "Network Administration",
      "Hardware Troubleshooting",
      "SAP System Support"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.76,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Information Technology",
        "confidence": 0.95,
        "last_demonstrated": "2019-01-06",
        "proficiency": "intermediate",
        "skill": "SAP System Support",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Information Technology",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Network Administration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Hardware Troubleshooting",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Software Configuration",
        "source": "ai_inferred"
      },
      {
        "category": "Information Technology",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Help Desk",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "hamid.latif@medikanusantara.co.id",
    "employee_id": "MN-10189",
    "grade_level": "L2",
    "hire_date": "2021-08-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Admin",
    "location": "Makassar",
    "name": "Hamid Latif",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.82,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2020-04-26",
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.73,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Logistics",
    "email": "nita.tjandra@medikanusantara.co.id",
    "employee_id": "MN-10190",
    "grade_level": "L2",
    "hire_date": "2016-06-05",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Logistics",
    "job_title_normalized": "Logistics Coordinator",
    "job_title_raw": "Logistik Koordinator",
    "location": "Semarang",
    "name": "Nita Tjandra",
    "performance_trend": "stable",
    "recommended_learning": [],
    "required_skills": [
      "Route Planning",
      "Delivery Coordination",
      "Last-Mile Logistics"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.85,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2024-11-13",
        "proficiency": "advanced",
        "skill": "Delivery Coordination",
        "source": "certification"
      },
      {
        "category": "Logistics",
        "confidence": 0.95,
        "last_demonstrated": "2019-02-17",
        "proficiency": "intermediate",
        "skill": "Last-Mile Logistics",
        "source": "certification"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Route Planning",
        "source": "self_declared"
      },
      {
        "category": "Logistics",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Fleet Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [
      {
        "category": "Logistics",
        "confidence": 0.8,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Logistics",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.9,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Sales",
    "email": "ogi.junaidi@medikanusantara.co.id",
    "employee_id": "MN-10191",
    "grade_level": "L2",
    "hire_date": "2020-11-18",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Sales",
    "job_title_normalized": "Sales Representative",
    "job_title_raw": "Account Sales",
    "location": "Batam",
    "name": "Ogi Junaidi",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Advanced Negotiation Skills",
        "duration_hours": 12,
        "estimated_completion_weeks": 2,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Sales Negotiation"
        ]
      }
    ],
    "required_skills": [
      "Customer Relationship Management",
      "Product Knowledge (Pharma)",
      "Sales Negotiation",
      "Territory Management"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.88,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Sales Negotiation"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2019-06-08",
        "proficiency": "advanced",
        "skill": "Customer Relationship Management",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-05-01",
        "proficiency": "intermediate",
        "skill": "Product Knowledge (Pharma)",
        "source": "certification"
      },
      {
        "category": "Sales",
        "confidence": 0.95,
        "last_demonstrated": "2021-04-02",
        "proficiency": "advanced",
        "skill": "Territory Management",
        "source": "training"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Sales Negotiation",
        "source": "self_declared"
      },
      {
        "category": "Sales",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 4.3,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "putri.tjandra@medikanusantara.co.id",
    "employee_id": "MN-10192",
    "grade_level": "L2",
    "hire_date": "2020-10-14",
    "identity_confidence": 0.91,
    "identity_resolution_method": "rule_based",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Staf QC",
    "location": "Depok",
    "name": "Putri Tjandra",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "BPOM Regulatory Standards",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "BPOM Regulatory Compliance"
        ]
      },
      {
        "course_name": "GDP/GMP Certification Program",
        "duration_hours": 32,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "External: BPOM",
        "skills_addressed": [
          "GDP/GMP Knowledge"
        ]
      }
    ],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.59,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.59,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 5
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Quality Control",
    "email": "okta.suharto@medikanusantara.co.id",
    "employee_id": "MN-10193",
    "grade_level": "L2",
    "hire_date": "2021-04-22",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Quality Control",
    "job_title_normalized": "Quality Control Officer",
    "job_title_raw": "Staf QC",
    "location": "Palembang",
    "name": "Okta Suharto",
    "performance_trend": "improving",
    "recommended_learning": [],
    "required_skills": [
      "Quality Management Systems",
      "BPOM Regulatory Compliance",
      "GDP/GMP Knowledge"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "Conflicting hire dates between HRIS and ATS"
    ],
    "skill_confidence": 0.71,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Quality Control",
        "confidence": 0.95,
        "last_demonstrated": "2020-07-19",
        "proficiency": "intermediate",
        "skill": "GDP/GMP Knowledge",
        "source": "training"
      }
    ],
    "skills_inferred": [
      {
        "category": "Quality Control",
        "confidence": 0.58,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Quality Management Systems",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "BPOM Regulatory Compliance",
        "source": "ai_inferred"
      },
      {
        "category": "Quality Control",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Documentation Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "agus.latif@medikanusantara.co.id",
    "employee_id": "MN-10194",
    "grade_level": "L2",
    "hire_date": "2019-01-03",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "Warehouse Operator",
    "location": "Samarinda",
    "name": "Agus Latif",
    "performance_trend": "declining",
    "recommended_learning": [],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [],
    "skill_readiness_score": 100,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Inventory Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.64,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "ai_inferred"
      },
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Forklift Operation",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 6
  },
  {
    "avg_performance_score": null,
    "data_completeness": {
      "has_performance": false,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "panji.maulana@medikanusantara.co.id",
    "employee_id": "MN-10195",
    "grade_level": "L2",
    "hire_date": "2021-07-16",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Admin",
    "location": "Pontianak",
    "name": "Panji Maulana",
    "performance_trend": "insufficient_data",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "medium",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": true,
    "review_priority": "normal",
    "review_reasons": [
      "No performance history available for validation"
    ],
    "skill_confidence": 0.85,
    "skill_gaps": [
      {
        "current_proficiency": "basic",
        "gap_severity": "moderate",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      }
    ],
    "skill_readiness_score": 100,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2020-06-28",
        "proficiency": "advanced",
        "skill": "SAP Finance",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2020-05-21",
        "proficiency": "advanced",
        "skill": "Accounts Payable/Receivable",
        "source": "training"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Financial Reporting",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "basic",
        "skill": "Budget Management",
        "source": "self_declared"
      },
      {
        "category": "Finance",
        "confidence": 0.78,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "self_declared"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Warehouse & Distribution",
    "email": "kevin.mahmud@medikanusantara.co.id",
    "employee_id": "MN-10196",
    "grade_level": "L2",
    "hire_date": "2022-05-20",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Warehouse & Distribution",
    "job_title_normalized": "Warehouse Operator",
    "job_title_raw": "WH Operator",
    "location": "Jakarta Timur",
    "name": "Kevin Mahmud",
    "performance_trend": "improving",
    "recommended_learning": [
      {
        "course_name": "Warehouse & Inventory Management",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Inventory Management"
        ]
      },
      {
        "course_name": "GDP Certification Course",
        "duration_hours": 30,
        "estimated_completion_weeks": 4,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Good Distribution Practice (GDP)"
        ]
      }
    ],
    "required_skills": [
      "Inventory Management",
      "Good Distribution Practice (GDP)",
      "Cold Chain Management"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.95,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Inventory Management"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Good Distribution Practice (GDP)"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [
      {
        "category": "Warehouse & Distribution",
        "confidence": 0.95,
        "last_demonstrated": "2019-09-27",
        "proficiency": "intermediate",
        "skill": "Cold Chain Management",
        "source": "training"
      }
    ],
    "skills_inferred": [],
    "tenure_years": 3
  },
  {
    "avg_performance_score": 4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Finance",
    "email": "yanto.gunawan@medikanusantara.co.id",
    "employee_id": "MN-10197",
    "grade_level": "L2",
    "hire_date": "2017-10-05",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Administration",
    "location": "Surabaya",
    "name": "Yanto Gunawan",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Financial Reporting & Analysis",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Financial Reporting"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.76,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Financial Reporting"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [
      {
        "category": "Finance",
        "confidence": 0.95,
        "last_demonstrated": "2024-01-27",
        "proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Budget Management",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 8
  },
  {
    "avg_performance_score": 3.6,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "medium",
    "department": "Sales",
    "email": "citra.purwanto@medikanusantara.co.id",
    "employee_id": "MN-10198",
    "grade_level": "L3",
    "hire_date": "2021-10-06",
    "identity_confidence": 0.76,
    "identity_resolution_method": "single_source",
    "job_family": "Sales",
    "job_title_normalized": "Senior Sales Representative",
    "job_title_raw": "Senior Penjualan",
    "location": "Manado",
    "name": "Citra Purwanto",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "Territory Planning & Management",
        "duration_hours": 20,
        "estimated_completion_weeks": 3,
        "priority": "high",
        "provider": "External: Prasetiya Mulya",
        "skills_addressed": [
          "Territory Management"
        ]
      }
    ],
    "required_skills": [
      "Key Account Management",
      "Sales Negotiation",
      "Territory Management",
      "Team Coaching"
    ],
    "requires_human_review": true,
    "review_priority": "urgent",
    "review_reasons": [
      "Potential duplicate record detected in source systems"
    ],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Territory Management"
      }
    ],
    "skill_readiness_score": 75,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Sales",
        "confidence": 0.68,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Customer Relationship Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.77,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Key Account Management",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.6,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Sales Negotiation",
        "source": "ai_inferred"
      },
      {
        "category": "Sales",
        "confidence": 0.67,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Team Coaching",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 4
  },
  {
    "avg_performance_score": 3.4,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": false,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Finance",
    "email": "ilham.latif@medikanusantara.co.id",
    "employee_id": "MN-10199",
    "grade_level": "L2",
    "hire_date": "2016-10-05",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Finance",
    "job_title_normalized": "Finance Administrator",
    "job_title_raw": "Finance Staff",
    "location": "Batam",
    "name": "Ilham Latif",
    "performance_trend": "declining",
    "recommended_learning": [
      {
        "course_name": "AP/AR Management Essentials",
        "duration_hours": 16,
        "estimated_completion_weeks": 2,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Accounts Payable/Receivable"
        ]
      }
    ],
    "required_skills": [
      "Financial Reporting",
      "SAP Finance",
      "Accounts Payable/Receivable"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.68,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Accounts Payable/Receivable"
      }
    ],
    "skill_readiness_score": 67,
    "skills_explicit": [],
    "skills_inferred": [
      {
        "category": "Finance",
        "confidence": 0.66,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Financial Reporting",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.65,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "SAP Finance",
        "source": "ai_inferred"
      },
      {
        "category": "Finance",
        "confidence": 0.74,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Microsoft Excel Advanced",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  },
  {
    "avg_performance_score": 3.8,
    "data_completeness": {
      "has_performance": true,
      "has_skills": true,
      "has_training": true,
      "identity_resolved": true
    },
    "data_confidence": "high",
    "department": "Customer Service",
    "email": "panji.harahap@medikanusantara.co.id",
    "employee_id": "MN-10200",
    "grade_level": "L1",
    "hire_date": "2016-06-08",
    "identity_confidence": 0.99,
    "identity_resolution_method": "exact",
    "job_family": "Customer Service",
    "job_title_normalized": "Customer Service Agent",
    "job_title_raw": "Staf CS",
    "location": "Makassar",
    "name": "Panji Harahap",
    "performance_trend": "stable",
    "recommended_learning": [
      {
        "course_name": "Professional Communication Skills",
        "duration_hours": 8,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "Communication"
        ]
      },
      {
        "course_name": "CRM Tools & Best Practices",
        "duration_hours": 10,
        "estimated_completion_weeks": 1,
        "priority": "high",
        "provider": "Moodle LMS",
        "skills_addressed": [
          "CRM Software"
        ]
      }
    ],
    "required_skills": [
      "Communication",
      "Problem Solving",
      "CRM Software"
    ],
    "requires_human_review": false,
    "review_priority": null,
    "review_reasons": [],
    "skill_confidence": 0.86,
    "skill_gaps": [
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "Communication"
      },
      {
        "current_proficiency": "none",
        "gap_severity": "critical",
        "required_proficiency": "intermediate",
        "skill": "CRM Software"
      }
    ],
    "skill_readiness_score": 33,
    "skills_explicit": [
      {
        "category": "Customer Service",
        "confidence": 0.95,
        "last_demonstrated": "2022-06-25",
        "proficiency": "advanced",
        "skill": "Problem Solving",
        "source": "certification"
      }
    ],
    "skills_inferred": [
      {
        "category": "Customer Service",
        "confidence": 0.76,
        "last_demonstrated": null,
        "proficiency": "intermediate",
        "skill": "Data Entry",
        "source": "ai_inferred"
      }
    ],
    "tenure_years": 9
  }
];
