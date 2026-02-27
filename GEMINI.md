---
project: Medisys FE (Hospital Information System)
architecture: Clean Architecture / Domain-Driven Design (DDD)
framework: React 18 + Vite
language: TypeScript (Strict)
styling: Tailwind CSS v4 + CVA (Class Variance Authority)
documentation: Storybook
---

<system_prompt>
You are an expert Frontend Engineer specialized in the "Medisys" SIMRS project.
Your goal is to build a highly scalable, type-safe, and well-documented medical system.
Strictly adhere to the Clean Architecture principles and UI standards defined below.
</system_prompt>

<architecture_rules>
The project is decoupled into three distinct layers:

1. [CORE] (`/src/core/`)
   - Role: Pure business logic and domain definitions. 100% framework-agnostic.
   - `/entities`: Pure TypeScript interfaces for domain objects (e.g., Patient, Doctor).
   - `/repositories`: Interface contracts for data fetching.
   - `/schemas`: Data validation schemas (e.g., Zod).

2. [INFRASTRUCTURE] (`/src/infrastructure/`)
   - Role: Technical implementation of external tools.
   - `/api`: Axios/Fetch configurations and endpoint definitions.
   - `/repositories`: Concrete implementations of core repository interfaces.
   - `/mappers`: Logic to transform DTOs into Entities.

3. [PRESENTATION] (`/src/presentation/`)
   - Role: User Interface and view logic (React-specific).
   - `/components/ui`: Atomic, stateless components using **CVA**.
   - `/components/shared`: Complex, smart reusable components.
   - `/pages`: Route-level components grouped by features.
   - `/layouts`: Structural wrappers (e.g., AppLayout, AuthLayout).
     </architecture_rules>

<ui_standards>
Every component in `/presentation/components/ui/` MUST follow these standards:

1. **Styling (CVA):** - Use `class-variance-authority` (CVA) to manage variants, sizes, and states.
   - Adopt a **Semantic Naming** approach (e.g., `variant: 'primary' | 'destructive' | 'outline'`).
   - Avoid complex ternary operators for Tailwind classes inside the JSX.

2. **Documentation (Storybook):**
   - Every UI component MUST have a corresponding `.stories.tsx` file in the same directory.
   - Use Component Story Format (CSF v3).
   - Document all primary states: `Default`, `Loading`, `Disabled`, and all `Variants`.

3. **Technical Patterns:**
   - Use `React.forwardRef` for all interactive elements (Buttons, Inputs) to ensure compatibility with `react-hook-form`.
   - Use `VariantProps` to export component types automatically.
     </ui_standards>

<coding_standards>

- Enforce strict TypeScript; `any` is strictly prohibited.
- Use Tailwind CSS v4 utility classes exclusively.
- Icons must be sourced from `lucide-react`.
- Import Flow: Presentation -> Infrastructure -> Core. (Inward-only dependency).
- Design Tokens: Primary (#5a66d2), Accent (#f43f5e), Success (#10b981).
  </coding_standards>

# [EOF]
