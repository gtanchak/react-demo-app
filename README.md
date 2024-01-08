# 1. Organize Project Structure

**Date:** 2024-01-09

## Status

Accepted

## Context

The current folder structure of the "PCOM-REACT" project lacks organization, making it difficult to maintain and scale. The team recognizes the need for a more structured approach to improve code organization, modularity, and maintainability.

## Decision

The decision to reorganize the project structure is grounded in the need for a more systematic and scalable approach to software development. The current structure lacks clarity, hindering the team's ability to efficiently navigate, maintain, and extend the codebase. To address these challenges, the following structural changes are proposed and adopted:

```
📦 PCOM-REACT
├─ src
│  ├─ assets
│  │  └─ myAccount
│  │     └─ plan.png
│  ├─ components
│  │  ├─ shared
│  │  │  ├─ AuthLayout
│  │  │  │  ├─ AuthLayout.tsx
│  │  │  │  ├─ useAuthLayout.ts
│  │  │  │  └─ types.ts
│  │  │  └─ index.ts
│  │  ├─ ui
│  │  │  ├─ Button
│  │  │  │  ├─ Button.tsx
│  │  │  │  ├─ Button.stories.tsx
│  │  │  │  ├─ types.ts
│  │  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ hooks
│  │  ├─ useLocalstorage.ts
│  │  └─ index.ts
│  ├─ modules
│  │  ├─ index.ts
│  │  └─ myAccount
│  │     ├─ components
│  │     │  ├─ AccountHeader
│  │     │  │  ├─ AccountHeader.tsx
│  │     │  │  ├─ AccountHeader.css
│  │     │  │  └─ index.ts
│  │     │  ├─ AccountSidebar
│  │     │  │  ├─ AccountSidebar.tsx
│  │     │  │  ├─ AccountSidebar.css
│  │     │  │  └─ index.ts
│  │     ├─ hook
│  │     │  ├─ useAccountInfo.ts
│  │     │  └─ index.ts
│  │     ├─ service
│  │     │  ├─ useGetProfileInfo.ts
│  │     │  └─ index.ts
│  │     ├─ MyAccount.tsx
│  │     ├─ useMyAccount.ts
│  │     └─ types.ts
│  ├─ pages
│  │  └─ myAccount
│  │     └─ MyAccount.tsx
│  ├─ services
│  │  ├─ useGetPlanList.ts
│  ├─ routes
│  │  └─ Routes.tsx
│  ├─ utils
│  │  ├─ helpers.ts
│  │  └─ dateConversion.ts
│  ├─ constants
│  │  ├─ routes.ts
│  │  └─ api.ts
│  └─ store
│     ├─ actions
│     │  └─ authActions.ts
│     ├─ reducers
│     │  └─ authReducer.ts
│     ├─ middleware
│     │  └─ loggerMiddleware.ts
│     ├─ configureStore.ts
│     └─ index.ts
```
## Consequences

This new structure enhances modularity, improves code organization, and follows best practices.

1. **Modularity and Maintainability:**
   - Components, hooks, and services are organized into dedicated folders, enhancing modularity.
   - The modular structure makes it easier to locate and maintain specific functionalities.

2. **Code Organization and Readability:**
   - The separation of components into `UI` and `Shared` categories improves code organization and readability.
   - The inclusion of specific modules (e.g., `myAccount`) helps isolate functionality related to different parts of the application.

3. **Scalability:**
   - The new structure sets a foundation for scalability. As the project grows, the modular organization allows for the seamless addition of new features and modules.
