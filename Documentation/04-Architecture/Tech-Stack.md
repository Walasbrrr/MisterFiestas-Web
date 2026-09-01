# Tech Stack

## MVP actual — solo frontend

- **Next.js 16**, App Router, **React 19** y **TypeScript**.
- **Tailwind CSS 4** y **shadcn/ui** sobre Radix UI.
- **Motion for React** y **Lucide React**.
- Contenido estático tipado en `src/content/`.
- Enlaces **WhatsApp** (`wa.me`) como canal de conversión (sin API en el MVP).

## SEO y analítica

- Metadata API, Open Graph, sitemap, robots.txt y JSON-LD.
- Google Analytics 4 y Search Console (cuando estén configurados).

## Herramientas de desarrollo

- pnpm, Git, GitHub Actions, ESLint, Prettier, Husky y lint-staged.
- Figma para referencia visual.

## Despliegue

- Frontend: Hostinger o Vercel.
- Dominio: `https://misterfiestas.com`.

## Diferido (no requerido para lanzar la landing)

| Tecnología                                 | Motivo                                    |
| ------------------------------------------ | ----------------------------------------- |
| Spring Boot, PostgreSQL, Flyway            | Backend post-MVP                          |
| React Hook Form + Zod (formularios largos) | Conversión vía WhatsApp                   |
| Stripe, Azul, CardNET                      | Sin pagos en web                          |
| WhatsApp Business API                      | Enlaces directos suficientes              |
| Cloudinary                                 | Opcional; imágenes en `public/` al inicio |
| Google Maps                                | Opcional en contacto                      |

## Estado

| Área                                   | Estado             |
| -------------------------------------- | ------------------ |
| Next.js, React, TypeScript, Tailwind   | Instalado          |
| shadcn/ui, Motion, componentes landing | Instalado          |
| CI (lint, typecheck, build)            | Configurado        |
| WhatsApp CTAs unificados               | Pendiente (Fase 4) |
| Backend / API                          | Diferido           |
| Pagos y reservas en línea              | Fuera de alcance   |
