# Paradise Builders Las Vegas

Modern static website rebuild for Paradise Builders Las Vegas.

## Project Goals

- Build a fast static website for cPanel hosting
- Avoid WordPress, databases, CRMs, and server-side app complexity
- Improve local SEO for Las Vegas contractor searches
- Create trust-focused service and project pages
- Support responsive layouts for mobile, tablet, and desktop
- Add light/dark mode using simple CSS variables
- Make future content updates easy through reusable files and page templates

## Tech Stack

- Astro
- TypeScript
- Static HTML/CSS/JS
- cPanel-compatible build output

## Hosting Target

The production site will be deployed as static files from the Astro `dist/` folder to cPanel hosting.

## Current Status

Early rebuild foundation. Existing starter files are being replaced with Paradise Builders-specific layouts, data, styles, and content.

## Planned Site Sections

- Home
- Services
- Projects
- About
- Contact
- FAQ
- Service Areas

## Core Services

- Patio Covers
- Pavers
- Concrete
- Outdoor Lighting
- Landscape
- Outdoor Living

## Development

Install dependencies:

```bash
npm install
```

Run local dev server:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Image Workflow

Image folders and naming conventions are documented in [docs/image-workflow.md](docs/image-workflow.md). Use web-ready `webp` or `avif` files and avoid committing huge original phone images.

## Deployment

Build output is generated in:

```bash
dist/
```

That folder is intended to be uploaded to cPanel.
