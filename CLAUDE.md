# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server on port 3000
npm run build      # Type-check (tsc -b) then bundle (vite build)
npm run lint       # ESLint with TypeScript + React rules
npm run preview    # Preview production build
```

There is no test framework configured.

## Architecture

React 19 + TypeScript SPA built with Vite. Key libraries: React Router v7, TanStack Query v5, Zustand, React Hook Form + Zod, Tailwind CSS v4.

**API layer (`src/api/`):**
- `client.ts` — custom fetch wrapper with automatic `Bearer` token injection from `localStorage.access_token`. Throws `ApiError` (has `.status`, `.statusText`, `.body`) on non-OK responses.
- `query-client.ts` — React Query client; retries up to 3× on 5xx, never on 4xx; stale time 1 min.
- `query-keys.ts` — query key factory organized by resource (`products`, `orders`, `auth`); use these for all `useQuery`/`useMutation` cache keys and invalidation.

**Routing (`src/router.tsx`):** Three routes — `/`, `/products`, `/orders` — all wrapped in `RootLayout` (header nav).

**State:** Server state via React Query; client state via Zustand (add stores in `src/stores/`).

**Styling:** Tailwind v4 with custom design tokens defined in `src/index.css` under `@theme` (colors, radius, font). Use `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge) for conditional class names.

**Path alias:** `@/` maps to `src/`. Use it for all internal imports.

**Dev proxy:** `/api/*` proxies to `http://localhost:3001` in Vite config — no need to hardcode the backend URL in API calls.