# Operations Hub

Base project for a multi-tenant operations management platform.

## Stack

- `pnpm` monorepo
- NestJS API in `apps/api`
- Next.js web app in `apps/web`
- Shared constants and types in `packages/shared`
- PostgreSQL and Prisma

## Documentation

- [Class Diagram](docs/diagrams/class-diagram.md) — current domain model, class relationships, business invariants, module mapping, and identified design gaps.

## Quick Start

1. Copy `.env.example` to `.env`. For Prisma CLI commands run inside `apps/api`, also copy `apps/api/.env.example` to `apps/api/.env` or export the same variables in your shell.
2. Start PostgreSQL: `docker compose up -d`.
3. Install dependencies: `pnpm install`.
4. Generate Prisma client: `pnpm db:generate`.
5. Apply the initial schema: `pnpm db:migrate`.
6. Seed demo data: `pnpm db:seed`.
7. Run both apps: `pnpm dev`.

API: `http://localhost:3001`

Swagger: `http://localhost:3001/api/docs`

Web: `http://localhost:3000`

Demo users all use password `Password123!`:

- `owner@demo.example`
- `finance@demo.example`
- `member@demo.example`
- `owner@green.example`
