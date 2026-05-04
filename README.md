# Portfolio (React + Vite + Tailwind)

Modern, responsive personal portfolio with a dark theme, subtle animations, sticky navbar, smooth scrolling, scroll progress indicator, loading screen, and back-to-top button.

## Tech
- React + Vite
- Tailwind CSS (v4 via `@tailwindcss/vite`)
- Framer Motion
- React Icons

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Vercel)
- Import the repo/project in Vercel
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

## Update your content
- Hero / sections live in `src/sections/*`
- Navbar items are defined in `src/App.tsx`
- Projects and links are in `src/sections/Projects.tsx`
- Social links are in `src/sections/Contact.tsx`

## Resume download
Add your PDF at `public/resume.pdf` to enable the Resume download button.

