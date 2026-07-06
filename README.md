# Operations Hub

Base project for a multi-tenant operations management platform.

## Stack

- `pnpm` monorepo
- NestJS API in `apps/api`
- Next.js web app in `apps/web`
- Shared constants and types in `packages/shared`
- PostgreSQL and Prisma

## Quick Start

1. Copy `.env.example` to `.env`. For Prisma CLI commands run inside `apps/api`, also copy `apps/api/.env.example` to `apps/api/.env` or export the same variables in your shell.
2. Start PostgreSQL: `docker compose up -d`.
3. Install dependencies: `pnpm install`.
4. Generate Prisma client: `pnpm db:generate`.
5. Apply the initial schema: `pnpm db:migrate`.
6. Seed demo/mock data: `pnpm mock:data` or `pnpm db:seed`.
7. Run both apps: `pnpm dev`.

API: `http://localhost:3001`

Swagger: `http://localhost:3001/api/docs`

Web: `http://localhost:3000`

## Mock Data

Use `pnpm mock:data` to load the demo data used by the web app. The command runs the frontend workspace script, which delegates to the API Prisma seed script.

Equivalent commands:

- `pnpm mock:data`
- `pnpm --filter @operations-hub/web mock:data`
- `pnpm db:seed`

Demo users all use password `Password123!`:

- `owner@demo.example`
- `finance@demo.example`
- `member@demo.example`
- `owner@green.example`
