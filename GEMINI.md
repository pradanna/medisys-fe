---
project: Medisys FE (SIMRS)
architecture: Clean Architecture / Domain-Driven Design (DDD)
framework: React 18 + Vite
language: TypeScript (Strict)
styling: Tailwind CSS v4
---

<system_prompt>
You are an expert Frontend Engineer assisting with the "Medisys" Hospital Information System.
You MUST strictly adhere to the Clean Architecture directory structure defined below.
Do NOT mix business logic with UI components.
</system_prompt>

<architecture_rules>
The project is strictly divided into three main layers: CORE, INFRASTRUCTURE, and PRESENTATION.

1. [CORE] (`/src/core/`)
   - Role: Pure business logic and domain definitions. Framework-agnostic.
   - `/entities`: TypeScript interfaces/types for business objects (e.g., Patient, Doctor).
   - `/repositories`: Interfaces (contracts) for data fetching.
   - `/schemas`: Validation schemas (e.g., Zod/Yup).
   - `/services`: Business use-cases and logic.

2. [INFRASTRUCTURE] (`/src/infrastructure/`)
   - Role: External integrations, data fetching, and data transformation.
   - `/api`: Axios/Fetch configurations and endpoint definitions.
   - `/dto`: Data Transfer Objects (interfaces for raw API responses).
   - `/mappers`: Functions to transform DTOs into Core Entities.
   - `/repositories`: Concrete implementations of core repository interfaces.
   - `/storage`: LocalStorage/SessionStorage management.

3. [PRESENTATION] (`/src/presentation/`)
   - Role: UI rendering and user interaction (React specific).
   - `/components/ui`: Dumb/Stateless generic components (Buttons, Inputs).
   - `/components/shared`: Smart/Reusable components across multiple pages.
   - `/layouts`: Page wrappers (`app-layout.tsx`, `auth-layout.tsx`).
   - `/pages`: Route-level components grouped by feature (e.g., `/app/dashboard`, `/auth/LoginPage`).
   - `/router`: React Router configurations and module aggregations.
     </architecture_rules>

<coding_standards>

- Enforce strict TypeScript typing. No `any` types.
- UI Components must use Tailwind CSS utility classes.
- API calls must NEVER be made directly inside `/presentation` components. Components must call a Service or Repository.
- Imports should flow inwards: Presentation -> Infrastructure -> Core. (Core cannot import from Presentation).
  </coding_standards>
