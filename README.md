# Holaway Custom Builds — Kitchen Remodeling Website

Client site for [Holaway Custom Builds](https://holawaycustombuilds.com/), a kitchen remodeling contractor based in the Fayetteville area.

## Features

- Multi-step lead qualification funnel (15 steps) collecting contact info, property details, project scope, and decision-making context
- Calendly self-booking embed (`mark-agm/site-visit`) on the funnel completion page
- Client project photo gallery on the completion page
- Roofing lead funnel (separate flow)
- Booking page with Calendly integration
- Instagram integration (`@holawaycustombuilds`)

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** components (Radix UI primitives)
- **React Router** for client-side routing
- **react-calendly** for Calendly inline widget

## Getting Started

```sh
npm install
npm run dev
```

## Build & Preview

```sh
npm run build
npm run preview
```

## Deployment

Deployed via Netlify, auto-deploying from this GitHub repository on push to `main`.
