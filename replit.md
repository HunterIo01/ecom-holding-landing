# Ecom Holding - Corporate E-Commerce Portfolio Website

## Overview

This is a corporate landing page for Ecom Holding, a company that acquires and scales e-commerce brands. The application is a full-stack TypeScript project with a React frontend and Express backend, featuring a brand portfolio showcase and contact inquiry system.

The site is primarily in Spanish and includes sections for: hero/introduction, about the company, brand portfolio grid, and a contact form for business inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for scroll animations and transitions
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Feature components in `client/src/components/`
- Custom hooks in `client/src/hooks/`

### Backend Architecture
- **Framework**: Express 5 on Node.js
- **Language**: TypeScript (compiled with tsx)
- **API Design**: REST endpoints with typed contracts defined in `shared/routes.ts`
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Validation**: Zod schemas shared between frontend and backend

Key backend files:
- `server/index.ts` - Express app entry point
- `server/routes.ts` - API route handlers
- `server/storage.ts` - Database operations abstraction layer
- `server/db.ts` - Database connection setup

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `shared/schema.ts` - Drizzle table definitions and Zod schemas
- `shared/routes.ts` - API contract definitions with input/output types

### Database Schema
Two main tables:
1. **brands** - Portfolio brands (id, name, description, imageUrl, websiteUrl)
2. **inquiries** - Contact form submissions (id, name, email, message, createdAt)

Database migrations are managed with Drizzle Kit and stored in `migrations/`.

### Build System
- Development: Vite dev server with HMR, proxied through Express
- Production: Vite builds to `dist/public/`, esbuild bundles server to `dist/index.cjs`
- Scripts in `script/build.ts` handle the production build process

## External Dependencies

### Database
- **PostgreSQL** - Primary database (connection via `DATABASE_URL` environment variable)
- **Drizzle ORM** - Database queries and schema management
- **connect-pg-simple** - Session store (available but not currently used)

### UI Libraries
- **shadcn/ui** - Pre-built accessible components (Radix UI primitives)
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Development Tools
- **Vite** - Frontend build tool with HMR
- **tsx** - TypeScript execution for Node.js
- **Drizzle Kit** - Database migration tooling

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` - Error overlay in development
- `@replit/vite-plugin-cartographer` - Development tooling
- `@replit/vite-plugin-dev-banner` - Development banner

### Key NPM Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:push` - Push schema changes to database