# Workforce Intelligence

An evidence-first workforce intelligence prototype that connects source-data validation, employee records, role-fit analysis, skill gaps, and human-reviewed learning recommendations.

## Live demo

- Current deployment: https://document-review-aid.replit.app/workforce-intelligence/
- Portfolio destination: `https://juniusprimavera.com/workforceintelligence/`

## Why this project exists

Workforce decisions are often made from fragmented HRIS, ATS, performance, training, and skill data. This prototype demonstrates how an operational team can:

1. inspect source-data readiness;
2. preserve conflicting source evidence;
3. make local Confirm or Hold decisions;
4. review employment facts separately from capability evidence;
5. assess role standards and skill gaps;
6. review learning pathways without treating them as automatic assignments.

All workforce records in this repository are synthetic.

## Product areas

- **Decision Desk** — summarizes source readiness, validation workload, and capability signals.
- **Data Validation** — presents source evidence and records local Confirm or Hold decisions.
- **Employees** — provides a factual employment register.
- **Skill Intelligence** — separates role standards, evidence, role fit, gaps, and learning pathways.
- **Evidence Report** — documents denominators, methods, and analytical limitations.

## Product principles

- Data confidence is evidence quality, not a validation decision.
- Identity confidence does not automatically make a profile valid.
- Confirm and Hold are local decisions and do not write back to source systems.
- Held profiles are excluded from intelligence analysis.
- AI-inferred and peer-pattern skills are contextual signals, not mandatory role requirements.
- Learning pathways are options for human review, not automatic LMS assignments.

## Technology

- React 19
- TypeScript
- Vite
- Node.js and Express
- PostgreSQL and Drizzle ORM
- OpenAPI-generated API clients
- TanStack Query
- Recharts
- Tailwind CSS

## Repository structure

```text
artifacts/
  api-server/                 Express API
  workforce-intelligence/     React application
lib/
  api-client-react/           Generated React Query client
  api-spec/                   OpenAPI contract
  api-zod/                    Generated validation schemas
  db/                         Database schema and access
```

## Requirements

- Node.js 22 or later
- pnpm through Corepack
- PostgreSQL for persistent validation decisions

## Install

```bash
corepack enable
pnpm install --frozen-lockfile
```

## Typecheck

```bash
pnpm run typecheck
```

## Build

```bash
PORT=5173 BASE_PATH=/workforce-intelligence/ pnpm run build
```

## Run locally

Start the API and web application in separate terminals:

```bash
pnpm --filter @workspace/api-server run dev
```

```bash
pnpm --filter @workspace/workforce-intelligence run dev
```

Environment variables and credentials must be configured through the hosting platform. Do not commit `.env` files or secrets.

## Planned portfolio deployment

The first portfolio deployment will use:

- frontend: `https://juniusprimavera.com/workforceintelligence/`;
- API and persistent validation decisions: the existing Replit deployment;
- source code: this public GitHub repository.

The Hostinger build must use `/workforceintelligence/` as the frontend base path and deploy only into the matching subdirectory, without replacing the main portfolio site.