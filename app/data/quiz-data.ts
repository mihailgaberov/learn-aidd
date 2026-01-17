export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface QuizModule {
  id: string;
  title: string;
  description: string;
  explainer: string;
  questions: QuizQuestion[];
}

export const quizModules: QuizModule[] = [
  {
    id: "typescript-advanced",
    title: "Advanced TypeScript Patterns",
    description: "Master TypeScript utility types, generics, and advanced patterns for productivity",
    explainer: `Advanced TypeScript patterns are essential for building maintainable, type-safe applications at scale. This module covers utility types, conditional types, mapped types, and patterns that eliminate boilerplate and catch errors at compile time.

Key topics:
- Utility types: Pick, Omit, Partial, Required, Record, Exclude, Extract
- Conditional types and type inference
- Template literal types
- Branded types and nominal typing
- Advanced generics with constraints
- Type guards and assertion functions
- Discriminated unions for state management
- Type-safe API clients and data transformations

Productivity patterns:
- Creating reusable type utilities
- Type-safe form handling
- Generic hooks and components
- Type inference optimization
- Reducing any types in codebase`,
    questions: [
      {
        id: "ts-1",
        question: "What utility type creates a new type with all properties of T set to optional?",
        options: ["Pick<T>", "Partial<T>", "Required<T>", "Omit<T>"],
        correctAnswer: 1,
        explanation: "Partial<T> makes all properties of T optional, useful for update operations and form handling."
      },
      {
        id: "ts-2",
        question: "How do you create a type that excludes specific types from a union?",
        options: ["Extract<T, U>", "Exclude<T, U>", "Omit<T, U>", "Pick<T, U>"],
        correctAnswer: 1,
        explanation: "Exclude<T, U> removes types from T that are assignable to U. Example: Exclude<'a' | 'b' | 'c', 'a'> = 'b' | 'c'."
      },
      {
        id: "ts-3",
        question: "What pattern allows TypeScript to narrow types based on a discriminant property?",
        options: ["Type guards", "Discriminated unions", "Branded types", "Template literals"],
        correctAnswer: 1,
        explanation: "Discriminated unions use a common property (discriminant) to help TypeScript narrow types, perfect for state machines and API responses."
      },
      {
        id: "ts-4",
        question: "What is the purpose of 'as const' assertion?",
        options: ["Type casting", "Creating readonly tuple types", "Making values immutable at type level", "All of the above"],
        correctAnswer: 3,
        explanation: "'as const' creates deeply readonly types and narrows literals, enabling precise type inference for constants and configurations."
      },
      {
        id: "ts-5",
        question: "How do you create a type that represents all keys of T that have values of type V?",
        options: ["Pick<T, V>", "Record<keyof T, V>", "Extract keyof T where T[K] extends V", "Using conditional types"],
        correctAnswer: 3,
        explanation: "You need conditional types: type KeysWithType<T, V> = { [K in keyof T]: T[K] extends V ? K : never }[keyof T]"
      },
      {
        id: "ts-6",
        question: "What is the benefit of using branded types?",
        options: ["Runtime validation", "Preventing primitive type confusion", "Better performance", "Smaller bundle size"],
        correctAnswer: 1,
        explanation: "Branded types prevent mixing semantically different primitives (e.g., UserId vs OrderId) at compile time without runtime overhead."
      },
      {
        id: "ts-7",
        question: "What utility type creates a record type with specific keys and value type?",
        options: ["Pick<T, K>", "Record<K, V>", "Partial<Record<K, V>>", "Omit<T, K>"],
        correctAnswer: 1,
        explanation: "Record<K, V> creates an object type with keys of type K and values of type V. Perfect for dictionaries and maps."
      },
      {
        id: "ts-8",
        question: "How do you infer the return type of a function?",
        options: ["typeof fn", "ReturnType<typeof fn>", "fn['return']", "infer ReturnType"],
        correctAnswer: 1,
        explanation: "ReturnType<T> is a built-in utility that extracts the return type of a function type T."
      },
      {
        id: "ts-9",
        question: "What pattern allows creating type-safe API clients?",
        options: ["Function overloading", "Generic constraints", "Template literal types", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining function overloading, generics with constraints, and template literal types enables fully type-safe API clients with autocomplete."
      },
      {
        id: "ts-10",
        question: "What is the purpose of 'satisfies' operator (TypeScript 4.9+)?",
        options: ["Type assertion", "Type checking without widening", "Runtime validation", "Type casting"],
        correctAnswer: 1,
        explanation: "'satisfies' ensures a value matches a type without widening the type, preserving literal types while checking compatibility."
      },
      {
        id: "ts-11",
        question: "How do you create a type that makes specific properties required?",
        options: ["Required<Pick<T, K>>", "Partial<T> & Pick<T, K>", "Required<Pick<T, K>> & Omit<T, K>", "All of the above"],
        correctAnswer: 2,
        explanation: "Required<Pick<T, K>> & Omit<T, K> makes properties K required while keeping others as they were."
      },
      {
        id: "ts-12",
        question: "What is a conditional type that checks if T extends U?",
        options: ["T extends U ? X : Y", "T is U", "T === U", "T instanceof U"],
        correctAnswer: 0,
        explanation: "T extends U ? X : Y is the syntax for conditional types, allowing type-level branching based on type relationships."
      },
      {
        id: "ts-13",
        question: "What pattern helps create type-safe form state management?",
        options: ["Discriminated unions", "Partial<FormData> & { errors: ... }", "Template literal types", "Branded types"],
        correctAnswer: 1,
        explanation: "Combining Partial for optional fields, error tracking, and validation state creates robust type-safe form management."
      },
      {
        id: "ts-14",
        question: "How do you create a type that extracts all function property names?",
        options: ["Pick<T, Function>", "Extract keyof T where T[K] extends Function", "Using mapped types", "All of the above"],
        correctAnswer: 3,
        explanation: "You need mapped types with conditional types: { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]"
      },
      {
        id: "ts-15",
        question: "What is the most productive approach to reducing 'any' types?",
        options: ["Using 'unknown' and type guards", "Type assertions", "Disabling strict mode", "Using 'as any'"],
        correctAnswer: 0,
        explanation: "Using 'unknown' with type guards is the safest way to handle untyped data, forcing explicit type narrowing."
      }
    ]
  },
  {
    id: "react-performance",
    title: "React Performance & Advanced Patterns",
    description: "Master React optimization, advanced hooks, and performance patterns",
    explainer: `React performance optimization is crucial for building fast, responsive applications. This module covers rendering optimization, advanced hooks patterns, code splitting, and techniques for handling large datasets.

Key topics:
- React.memo, useMemo, useCallback optimization strategies
- Virtualization for large lists (react-window, react-virtual)
- Code splitting with React.lazy and Suspense
- Concurrent features (useTransition, useDeferredValue)
- Advanced custom hooks patterns
- Context optimization and splitting
- Bundle size optimization
- Profiling and identifying performance bottlenecks

Productivity patterns:
- Reusable optimization hooks
- Component composition patterns
- State colocation strategies
- Avoiding unnecessary re-renders
- Optimizing expensive computations`,
    questions: [
      {
        id: "react-perf-1",
        question: "When should you use React.memo?",
        options: ["Always", "For components that receive stable props", "Only for class components", "Never"],
        correctAnswer: 1,
        explanation: "React.memo is most effective when props are stable and the component renders frequently. Measure first, then optimize."
      },
      {
        id: "react-perf-2",
        question: "What is the primary use case for useMemo?",
        options: ["Caching function references", "Memoizing expensive computations", "Preventing re-renders", "State management"],
        correctAnswer: 1,
        explanation: "useMemo caches the result of expensive computations, recalculating only when dependencies change."
      },
      {
        id: "react-perf-3",
        question: "When should you use useCallback?",
        options: ["Always", "When passing functions to memoized children", "For all functions", "Never"],
        correctAnswer: 1,
        explanation: "useCallback is useful when passing stable function references to memoized components to prevent unnecessary re-renders."
      },
      {
        id: "react-perf-4",
        question: "What is the purpose of useTransition?",
        options: ["State transitions", "Marking non-urgent updates", "Animation", "Route transitions"],
        correctAnswer: 1,
        explanation: "useTransition marks state updates as non-urgent, allowing React to keep the UI responsive during expensive updates."
      },
      {
        id: "react-perf-5",
        question: "How do you optimize rendering large lists?",
        options: ["Render all items", "Pagination only", "Virtualization", "Hidden overflow"],
        correctAnswer: 2,
        explanation: "Virtualization (react-window, react-virtual) renders only visible items, dramatically improving performance for large lists."
      },
      {
        id: "react-perf-6",
        question: "What is the best way to split React context to avoid unnecessary re-renders?",
        options: ["Single large context", "Split by concern (state, actions)", "Use Redux instead", "Avoid context"],
        correctAnswer: 1,
        explanation: "Splitting context by concern (e.g., UserStateContext, UserActionsContext) prevents components from re-rendering when unrelated values change."
      },
      {
        id: "react-perf-7",
        question: "What does useDeferredValue do?",
        options: ["Defers state updates", "Defers expensive value calculations", "Defers rendering", "Defers side effects"],
        correctAnswer: 1,
        explanation: "useDeferredValue defers updating a value, useful for keeping the UI responsive while expensive computations complete."
      },
      {
        id: "react-perf-8",
        question: "How do you prevent unnecessary re-renders from context?",
        options: ["Use multiple contexts", "Memoize context value", "Use selectors", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining context splitting, memoized values, and selector patterns minimizes unnecessary re-renders."
      },
      {
        id: "react-perf-9",
        question: "What is the React Profiler used for?",
        options: ["Code profiling", "Performance measurement", "Identifying slow components", "All of the above"],
        correctAnswer: 3,
        explanation: "React Profiler measures component render times, helping identify performance bottlenecks in the component tree."
      },
      {
        id: "react-perf-10",
        question: "When is code splitting most beneficial?",
        options: ["Small apps", "Large apps with route-based chunks", "All apps", "Never"],
        correctAnswer: 1,
        explanation: "Code splitting is most beneficial for large apps, splitting by routes or features to reduce initial bundle size."
      },
      {
        id: "react-perf-11",
        question: "What pattern helps optimize expensive list operations?",
        options: ["useMemo with list dependencies", "Virtualization", "Debouncing", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining memoization, virtualization, and debouncing optimizes list rendering and filtering operations."
      },
      {
        id: "react-perf-12",
        question: "How do you optimize context providers?",
        options: ["Single provider", "Split providers by domain", "Memoize provider value", "Both B and C"],
        correctAnswer: 3,
        explanation: "Splitting providers by domain and memoizing values prevents unnecessary re-renders of consumer components."
      },
      {
        id: "react-perf-13",
        question: "What is the purpose of React.startTransition?",
        options: ["Starting animations", "Marking urgent updates", "Marking non-urgent state updates", "Route transitions"],
        correctAnswer: 2,
        explanation: "startTransition marks state updates as non-urgent, keeping the UI responsive during transitions."
      },
      {
        id: "react-perf-14",
        question: "How do you measure React performance?",
        options: ["React DevTools Profiler", "Performance API", "console.time", "All of the above"],
        correctAnswer: 3,
        explanation: "React DevTools Profiler is best, but Performance API and timing measurements also provide valuable insights."
      },
      {
        id: "react-perf-15",
        question: "What is the best practice for optimizing custom hooks?",
        options: ["Memoize all values", "Return stable references", "Use useMemo/useCallback appropriately", "All of the above"],
        correctAnswer: 3,
        explanation: "Returning stable references from hooks and using memoization appropriately prevents unnecessary re-renders in consuming components."
      }
    ]
  },
  {
    id: "nextjs-advanced",
    title: "Next.js Advanced Features",
    description: "Master Next.js App Router, Server Components, and production optimization",
    explainer: `Next.js App Router introduces powerful patterns for building fast, scalable applications. This module covers Server Components, streaming, advanced routing, and production optimization strategies.

Key topics:
- Server Components vs Client Components
- Streaming and Suspense boundaries
- Route handlers and API routes
- Advanced routing patterns (parallel routes, intercepting routes)
- Data fetching strategies (fetch, cache, revalidate)
- Image and font optimization
- Middleware and edge functions
- Production deployment optimization

Productivity patterns:
- Optimal Server/Client Component boundaries
- Streaming data fetching patterns
- Route organization strategies
- Caching strategies for performance
- Bundle optimization techniques`,
    questions: [
      {
        id: "next-adv-1",
        question: "What is the main advantage of Server Components?",
        options: ["They support hooks", "They reduce client bundle size", "They run faster", "They support browser APIs"],
        correctAnswer: 1,
        explanation: "Server Components run on the server, reducing JavaScript sent to the client and improving initial load performance."
      },
      {
        id: "next-adv-2",
        question: "When should you use 'use client' directive?",
        options: ["Always", "When using hooks, browser APIs, or event handlers", "Never", "Only for forms"],
        correctAnswer: 1,
        explanation: "'use client' is needed when components use React hooks, browser APIs, or need interactivity."
      },
      {
        id: "next-adv-3",
        question: "What does streaming enable in Next.js?",
        options: ["Video streaming", "Progressive page rendering", "File downloads", "WebSocket connections"],
        correctAnswer: 1,
        explanation: "Streaming allows progressive rendering, showing page content as it becomes available rather than waiting for everything."
      },
      {
        id: "next-adv-4",
        question: "How do you implement incremental static regeneration (ISR)?",
        options: ["revalidate option in fetch", "getStaticProps", "getServerSideProps", "useEffect"],
        correctAnswer: 0,
        explanation: "In App Router, use the 'revalidate' option in fetch() or route segment config to enable ISR."
      },
      {
        id: "next-adv-5",
        question: "What is the purpose of route groups in Next.js?",
        options: ["URL segments", "Organizing routes without affecting URLs", "API routes", "Middleware"],
        correctAnswer: 1,
        explanation: "Route groups (folders in parentheses) organize routes without creating URL segments, useful for layouts and organization."
      },
      {
        id: "next-adv-6",
        question: "How do you handle loading states in App Router?",
        options: ["loading.tsx", "getServerSideProps", "useEffect", "Suspense boundaries"],
        correctAnswer: 0,
        explanation: "loading.tsx files automatically create Suspense boundaries for route segments, showing loading UI during data fetching."
      },
      {
        id: "next-adv-7",
        question: "What is the difference between Route Handlers and API Routes?",
        options: ["No difference", "Route Handlers use Web APIs, API Routes use Node.js", "Route Handlers are async by default", "Both B and C"],
        correctAnswer: 3,
        explanation: "Route Handlers use Web Request/Response APIs, are async by default, and support streaming, unlike Pages Router API routes."
      },
      {
        id: "next-adv-8",
        question: "How do you optimize images in Next.js?",
        options: ["Regular img tags", "next/image with optimization", "CSS background images", "Base64 encoding"],
        correctAnswer: 1,
        explanation: "next/image automatically optimizes images with lazy loading, responsive sizing, and modern format support."
      },
      {
        id: "next-adv-9",
        question: "What is the purpose of middleware in Next.js?",
        options: ["Server-side logic", "Edge runtime request/response manipulation", "API routes", "Static generation"],
        correctAnswer: 1,
        explanation: "Middleware runs on the Edge runtime, allowing you to modify requests/responses before they reach route handlers."
      },
      {
        id: "next-adv-10",
        question: "How do you implement parallel data fetching in Server Components?",
        options: ["Sequential await", "Promise.all()", "useEffect", "React Query"],
        correctAnswer: 1,
        explanation: "Use Promise.all() to fetch multiple data sources in parallel, reducing total loading time."
      },
      {
        id: "next-adv-11",
        question: "What is the benefit of using generateStaticParams?",
        options: ["Dynamic routes", "Pre-generating static pages at build time", "API routes", "Middleware"],
        correctAnswer: 1,
        explanation: "generateStaticParams pre-generates static pages for dynamic routes at build time, improving performance."
      },
      {
        id: "next-adv-12",
        question: "How do you handle errors in App Router?",
        options: ["error.tsx", "try/catch", "Error boundaries", "Both A and C"],
        correctAnswer: 3,
        explanation: "error.tsx files create error boundaries for route segments, providing error UI and recovery options."
      },
      {
        id: "next-adv-13",
        question: "What is the purpose of notFound() in Next.js?",
        options: ["404 pages", "Triggering 404 response in Server Components", "API errors", "Route errors"],
        correctAnswer: 1,
        explanation: "notFound() triggers the nearest not-found.tsx boundary, useful for handling missing data in Server Components."
      },
      {
        id: "next-adv-14",
        question: "How do you optimize bundle size in Next.js?",
        options: ["Code splitting", "Tree shaking", "Dynamic imports", "All of the above"],
        correctAnswer: 3,
        explanation: "Next.js automatically code splits, but you can optimize further with dynamic imports, tree shaking, and analyzing bundles."
      },
      {
        id: "next-adv-15",
        question: "What is the best practice for data fetching in Server Components?",
        options: ["useEffect", "Direct async/await fetch", "React Query", "SWR"],
        correctAnswer: 1,
        explanation: "Server Components can use async/await directly with fetch, leveraging Next.js caching and revalidation features."
      }
    ]
  },
  {
    id: "productivity-patterns",
    title: "Code Generation & Productivity",
    description: "Learn patterns and tools to 10x your development speed",
    explainer: `Productivity in development comes from eliminating repetition, automating common tasks, and building reusable patterns. This module covers code generation, automation, and patterns that accelerate development.

Key topics:
- Code generation strategies (CLI tools, templates)
- Reusable component libraries and design systems
- Custom hooks for common patterns
- Type-safe API client generation
- Automated testing setup
- Monorepo patterns and tooling
- Development workflow automation
- Shared utilities and helpers

Productivity patterns:
- Scaffolding tools and generators
- Template-based component creation
- Automated CRUD generation
- Type generation from schemas
- Shared configuration management
- Development environment setup automation`,
    questions: [
      {
        id: "prod-1",
        question: "What is the most effective way to eliminate repetitive code?",
        options: ["Copy-paste", "Code generation", "Manual refactoring", "Ignore it"],
        correctAnswer: 1,
        explanation: "Code generation eliminates repetition at the source, ensuring consistency and reducing maintenance burden."
      },
      {
        id: "prod-2",
        question: "What pattern helps create reusable React components quickly?",
        options: ["Copy-paste components", "Component templates with generators", "Write from scratch", "Use only libraries"],
        correctAnswer: 1,
        explanation: "Component templates with CLI generators (like Plop, Hygen) create consistent, reusable components with proper structure."
      },
      {
        id: "prod-3",
        question: "How do you generate type-safe API clients?",
        options: ["Manual typing", "OpenAPI/Swagger to TypeScript generators", "Using 'any'", "Runtime validation only"],
        correctAnswer: 1,
        explanation: "Tools like openapi-typescript-codegen generate type-safe clients from OpenAPI specs, ensuring API type safety."
      },
      {
        id: "prod-4",
        question: "What is the benefit of a shared component library?",
        options: ["Consistency", "Reusability", "Faster development", "All of the above"],
        correctAnswer: 3,
        explanation: "Shared component libraries provide consistency, reusability, and faster development across projects."
      },
      {
        id: "prod-5",
        question: "How do you automate common development tasks?",
        options: ["Manual execution", "npm scripts", "CLI tools", "Both B and C"],
        correctAnswer: 3,
        explanation: "Combining npm scripts with custom CLI tools automates repetitive tasks like scaffolding, testing, and deployment."
      },
      {
        id: "prod-6",
        question: "What pattern helps manage shared utilities across projects?",
        options: ["Copy-paste", "Monorepo with shared packages", "Git submodules", "All of the above"],
        correctAnswer: 1,
        explanation: "Monorepos with shared packages (npm workspaces, pnpm, Turborepo) enable code sharing while maintaining version control."
      },
      {
        id: "prod-7",
        question: "How do you generate CRUD operations efficiently?",
        options: ["Write manually", "Code generators from schemas", "Use only ORMs", "Copy from examples"],
        correctAnswer: 1,
        explanation: "Generating CRUD from schemas (Prisma, TypeORM, custom generators) ensures consistency and reduces errors."
      },
      {
        id: "prod-8",
        question: "What is the purpose of custom hooks libraries?",
        options: ["State management", "Reusable logic patterns", "Component composition", "All of the above"],
        correctAnswer: 3,
        explanation: "Custom hooks encapsulate reusable logic, state patterns, and side effects, promoting code reuse and consistency."
      },
      {
        id: "prod-9",
        question: "How do you maintain consistency across multiple projects?",
        options: ["Manual coordination", "Shared configs (ESLint, Prettier, TS)", "No consistency needed", "Copy configs"],
        correctAnswer: 1,
        explanation: "Shared configuration packages ensure consistent code style, types, and tooling across all projects."
      },
      {
        id: "prod-10",
        question: "What tooling helps with monorepo management?",
        options: ["npm workspaces", "Turborepo", "pnpm", "All of the above"],
        correctAnswer: 3,
        explanation: "Modern tools like npm workspaces, Turborepo, and pnpm simplify monorepo management and build optimization."
      },
      {
        id: "prod-11",
        question: "How do you generate types from database schemas?",
        options: ["Manual typing", "ORM type generation", "Schema-first tools", "Both B and C"],
        correctAnswer: 3,
        explanation: "ORMs (Prisma, TypeORM) and schema-first tools (GraphQL Code Generator) generate types from schemas automatically."
      },
      {
        id: "prod-12",
        question: "What is the benefit of template-based scaffolding?",
        options: ["Consistency", "Speed", "Best practices", "All of the above"],
        correctAnswer: 3,
        explanation: "Templates ensure consistent structure, speed up creation, and embed best practices automatically."
      },
      {
        id: "prod-13",
        question: "How do you share TypeScript utilities across projects?",
        options: ["Copy-paste", "Shared npm package", "Git submodules", "Both B and C"],
        correctAnswer: 1,
        explanation: "Shared npm packages (or monorepo packages) enable type-safe utility sharing with version control."
      },
      {
        id: "prod-14",
        question: "What pattern accelerates form development?",
        options: ["Manual form code", "Form libraries (react-hook-form, Formik)", "Code generation", "Both B and C"],
        correctAnswer: 3,
        explanation: "Form libraries provide patterns, and generators can create form components from schemas, accelerating development."
      },
      {
        id: "prod-15",
        question: "What is the key to 10x productivity?",
        options: ["Working faster", "Eliminating repetition", "Better tools", "All of the above"],
        correctAnswer: 3,
        explanation: "10x productivity comes from eliminating repetition through automation, using better tools, and working smarter, not just faster."
      }
    ]
  },
  {
    id: "state-management",
    title: "Advanced State Management",
    description: "Master state management patterns for complex applications",
    explainer: `Effective state management is crucial for building maintainable applications. This module covers advanced patterns, optimization strategies, and choosing the right approach for different scenarios.

Key topics:
- Redux patterns (Autodux, redux-saga)
- Context API optimization
- Zustand and modern state libraries
- Server state management (React Query, SWR)
- State machine patterns (XState)
- Local vs global state decisions
- State normalization strategies
- Performance optimization

Productivity patterns:
- Reusable state management utilities
- Type-safe state patterns
- Optimized selectors
- State colocation strategies
- Caching and synchronization patterns`,
    questions: [
      {
        id: "state-1",
        question: "When should you use Redux vs Context API?",
        options: ["Always Redux", "Redux for complex global state, Context for simple/domain state", "Always Context", "Never use Redux"],
        correctAnswer: 1,
        explanation: "Redux excels for complex global state with time-travel debugging. Context is better for simple, domain-specific state."
      },
      {
        id: "state-2",
        question: "What is the saga pattern used for?",
        options: ["Synchronous operations", "Managing side effects and async flows", "State updates", "Component logic"],
        correctAnswer: 1,
        explanation: "Saga pattern (redux-saga) manages complex async flows, side effects, and orchestration in a testable way."
      },
      {
        id: "state-3",
        question: "How do you optimize Context API to prevent unnecessary re-renders?",
        options: ["Single context", "Split contexts by domain", "Memoize context value", "Both B and C"],
        correctAnswer: 3,
        explanation: "Splitting contexts by domain and memoizing values prevents components from re-rendering when unrelated state changes."
      },
      {
        id: "state-4",
        question: "What is the benefit of using React Query or SWR?",
        options: ["Local state", "Server state management with caching", "State machines", "Form state"],
        correctAnswer: 1,
        explanation: "React Query/SWR handle server state with automatic caching, synchronization, and background updates."
      },
      {
        id: "state-5",
        question: "What pattern helps with state normalization?",
        options: ["Nested objects", "Flat structure with IDs as keys", "Arrays only", "Mixed structures"],
        correctAnswer: 1,
        explanation: "Normalized state (flat structure with entities keyed by ID) simplifies updates and prevents duplication."
      },
      {
        id: "state-6",
        question: "When should state be local vs global?",
        options: ["Always global", "Local when possible, global when shared across distant components", "Always local", "No rules"],
        correctAnswer: 1,
        explanation: "Keep state local (colocated) when possible. Lift to global only when needed across distant component trees."
      },
      {
        id: "state-7",
        question: "What is the purpose of selectors in Redux?",
        options: ["Selecting components", "Deriving computed state", "State updates", "Side effects"],
        correctAnswer: 1,
        explanation: "Selectors derive computed state from the store, enabling memoization and preventing unnecessary recalculations."
      },
      {
        id: "state-8",
        question: "How do you handle optimistic updates?",
        options: ["Wait for server", "Update UI immediately, rollback on error", "Never update", "Use only local state"],
        correctAnswer: 1,
        explanation: "Optimistic updates improve UX by updating UI immediately, then rolling back if the server request fails."
      },
      {
        id: "state-9",
        question: "What is the benefit of state machines (XState)?",
        options: ["Performance", "Explicit state transitions and guards", "Smaller bundle", "Easier debugging"],
        correctAnswer: 1,
        explanation: "State machines make state transitions explicit, prevent invalid states, and improve testability."
      },
      {
        id: "state-10",
        question: "How do you manage form state efficiently?",
        options: ["useState for each field", "Form libraries (react-hook-form)", "Redux for all forms", "No state management"],
        correctAnswer: 1,
        explanation: "Form libraries like react-hook-form optimize re-renders and provide validation, reducing boilerplate."
      },
      {
        id: "state-11",
        question: "What pattern helps with state persistence?",
        options: ["localStorage directly", "State persistence libraries", "Server only", "Both A and B"],
        correctAnswer: 3,
        explanation: "Libraries like redux-persist handle serialization, but localStorage can work for simple cases."
      },
      {
        id: "state-12",
        question: "How do you handle loading and error states?",
        options: ["Separate state fields", "State machine", "Error boundaries", "All of the above"],
        correctAnswer: 3,
        explanation: "Combining explicit loading/error fields, state machines, and error boundaries provides robust state management."
      },
      {
        id: "state-13",
        question: "What is the benefit of using Zustand over Redux?",
        options: ["Smaller bundle", "Simpler API", "Less boilerplate", "All of the above"],
        correctAnswer: 3,
        explanation: "Zustand provides Redux-like capabilities with less boilerplate, smaller bundle, and simpler API."
      },
      {
        id: "state-14",
        question: "How do you optimize selector performance?",
        options: ["No memoization", "Reselect library", "useMemo in components", "Both B and C"],
        correctAnswer: 3,
        explanation: "Reselect memoizes selectors, and useMemo in components prevents unnecessary recalculations."
      },
      {
        id: "state-15",
        question: "What is the best practice for state management architecture?",
        options: ["One global store", "Domain-driven state organization", "Component-level only", "No structure"],
        correctAnswer: 1,
        explanation: "Organizing state by domain (features/modules) improves maintainability and scalability."
      }
    ]
  },
  {
    id: "testing-strategies",
    title: "Testing & Quality Assurance",
    description: "Master testing strategies for reliable, maintainable code",
    explainer: `Effective testing strategies ensure code quality and enable confident refactoring. This module covers testing patterns, tools, and strategies for React, TypeScript, and full-stack applications.

Key topics:
- Unit testing patterns and best practices
- Component testing (React Testing Library)
- Integration testing strategies
- E2E testing with Playwright/Cypress
- Test-driven development (TDD)
- Mocking and test doubles
- Test organization and structure
- Coverage and quality metrics

Productivity patterns:
- Reusable test utilities
- Test data factories
- Custom render functions
- Automated test generation
- CI/CD testing strategies`,
    questions: [
      {
        id: "test-1",
        question: "What is the primary principle of React Testing Library?",
        options: ["Test implementation details", "Test user behavior", "Test internal state", "Test props"],
        correctAnswer: 1,
        explanation: "React Testing Library emphasizes testing from the user's perspective, focusing on behavior rather than implementation."
      },
      {
        id: "test-2",
        question: "What is the testing pyramid?",
        options: ["Many E2E, some integration, few unit", "Many unit, some integration, few E2E", "Equal amounts", "No structure"],
        correctAnswer: 1,
        explanation: "The testing pyramid: many fast unit tests, some integration tests, few slow E2E tests."
      },
      {
        id: "test-3",
        question: "What is TDD (Test-Driven Development)?",
        options: ["Write tests after code", "Write tests before code (Red-Green-Refactor)", "No tests", "Manual testing only"],
        correctAnswer: 1,
        explanation: "TDD: Write failing test (Red), make it pass (Green), refactor (Refactor). Ensures tests drive design."
      },
      {
        id: "test-4",
        question: "How do you test async operations?",
        options: ["Synchronous assertions", "waitFor and findBy queries", "setTimeout", "No testing"],
        correctAnswer: 1,
        explanation: "Use waitFor and findBy queries from React Testing Library to handle async operations and state updates."
      },
      {
        id: "test-5",
        question: "What is the purpose of test data factories?",
        options: ["Generate random data", "Create consistent, reusable test data", "Mock APIs", "Performance testing"],
        correctAnswer: 1,
        explanation: "Test data factories (like Factory Bot pattern) create consistent, reusable test data with sensible defaults."
      },
      {
        id: "test-6",
        question: "How do you test custom hooks?",
        options: ["In components only", "renderHook from @testing-library/react", "Manual testing", "No testing"],
        correctAnswer: 1,
        explanation: "renderHook utility from @testing-library/react allows testing hooks in isolation."
      },
      {
        id: "test-7",
        question: "What is the benefit of integration tests over unit tests?",
        options: ["Faster", "Test component interactions", "Smaller scope", "No benefit"],
        correctAnswer: 1,
        explanation: "Integration tests verify that multiple units work together correctly, catching interaction bugs."
      },
      {
        id: "test-8",
        question: "How do you mock API calls in tests?",
        options: ["Real API calls", "MSW (Mock Service Worker)", "Manual mocks", "Both B and C"],
        correctAnswer: 3,
        explanation: "MSW intercepts network requests, while manual mocks work for specific cases. Both are valid approaches."
      },
      {
        id: "test-9",
        question: "What is the purpose of test coverage metrics?",
        options: ["100% coverage goal", "Identify untested code", "Quality indicator", "All of the above"],
        correctAnswer: 3,
        explanation: "Coverage metrics identify untested code and indicate quality, but 100% coverage isn't always necessary."
      },
      {
        id: "test-10",
        question: "How do you test error boundaries?",
        options: ["Throw errors in components", "Simulate errors with test utilities", "Manual testing", "Both A and B"],
        correctAnswer: 3,
        explanation: "Test error boundaries by throwing errors in test components or using utilities that simulate errors."
      },
      {
        id: "test-11",
        question: "What is the benefit of snapshot testing?",
        options: ["Catch unintended UI changes", "Test logic", "Performance", "State management"],
        correctAnswer: 0,
        explanation: "Snapshot tests catch unintended UI changes but should be used sparingly and updated intentionally."
      },
      {
        id: "test-12",
        question: "How do you organize test files?",
        options: ["Separate test directory", "Colocated with source", "No organization", "Both A and B are valid"],
        correctAnswer: 3,
        explanation: "Both approaches work: colocated tests (test.tsx) or separate __tests__ directories. Choose based on team preference."
      },
      {
        id: "test-13",
        question: "What is the purpose of E2E tests?",
        options: ["Unit testing", "Testing complete user flows", "Component testing", "API testing"],
        correctAnswer: 1,
        explanation: "E2E tests verify complete user flows from start to finish, ensuring the entire system works together."
      },
      {
        id: "test-14",
        question: "How do you test accessibility in components?",
        options: ["Manual only", "@testing-library/jest-dom matchers", "axe-core", "Both B and C"],
        correctAnswer: 3,
        explanation: "Use @testing-library/jest-dom accessibility matchers and axe-core for automated accessibility testing."
      },
      {
        id: "test-15",
        question: "What is the best practice for test maintenance?",
        options: ["Write once, never update", "Keep tests simple and focused", "Test everything", "No maintenance"],
        correctAnswer: 1,
        explanation: "Keep tests simple, focused, and maintainable. Tests should be easy to understand and update when requirements change."
      }
    ]
  }
];

export function getRandomQuestions(module: QuizModule, count: number = 10): QuizQuestion[] {
  const shuffled = [...module.questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, module.questions.length));
}

export function getModuleById(id: string): QuizModule | undefined {
  return quizModules.find(module => module.id === id);
}
