# HostelHub — UI/UX mockups (React + Vite)

A standalone React + Vite + TypeScript + Tailwind v4 app containing 7 fully designed screens for **HostelHub**, a trusted student accommodation platform for African university students.

## Screens

| Route                  | Page              |
| ---------------------- | ----------------- |
| `/`                    | Index (gallery)   |
| `/landing`             | Landing           |
| `/student-dashboard`   | Student Dashboard |
| `/listings`            | Listings          |
| `/property-details`    | Property Details  |
| `/agent-dashboard`     | Agent Dashboard   |
| `/admin-dashboard`     | Admin Dashboard   |
| `/payment`             | Payment Flow      |

## Run locally

Requires Node.js 18+ and npm (or pnpm/yarn).

```bash
npm install
npm run dev
```

Open http://localhost:5173 — the gallery page lists every screen.

## Build for production

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Project structure

```
hostelhub-app/
├── public/
│   └── images/                        # generated hostel photography
├── src/
│   ├── App.tsx                        # routes
│   ├── main.tsx
│   ├── index.css                      # Tailwind v4 + shadcn tokens
│   ├── lib/utils.ts                   # cn() helper
│   ├── components/
│   │   ├── ui/                        # shadcn primitives (only the ones used)
│   │   └── hostelhub/
│   │       ├── _group.css             # HostelHub brand tokens (hh-* vars)
│   │       ├── _shared/
│   │       │   ├── Brand.tsx          # logo + SCHOOLS data
│   │       │   └── AppShell.tsx       # sidebar + topbar shell
│   │       ├── Index.tsx              # gallery
│   │       ├── Landing.tsx
│   │       ├── StudentDashboard.tsx
│   │       ├── Listings.tsx
│   │       ├── PropertyDetails.tsx
│   │       ├── AgentDashboard.tsx
│   │       ├── AdminDashboard.tsx
│   │       └── PaymentFlow.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Design system

- **Primary**: `#3b63f0` (electric blue) — trust + action
- **Deep**: `#1f37ab` — gradients, premium surfaces
- **Escrow / success**: `#12b76a`
- **Ink**: `#0b1220` — body copy
- **Surface**: `#f6f8fc` on `#ffffff` cards
- **Type**: Plus Jakarta Sans (display) + Inter (body)
- **Radii**: 14–22px on cards, 10px on inputs/buttons
- **Shadows**: `--hh-shadow-sm`, `--hh-shadow`, `--hh-shadow-lg`

All tokens live in `src/components/hostelhub/_group.css` as CSS custom properties (`--hh-*`).

## Notes

- Mockups are fully static — no backend wiring. Replace fixture data with API calls when ready.
- Images were AI-generated for visualization. Swap in real property photography before launch.
- Built originally as a Replit canvas mockup, then exported as a standalone Vite app.
