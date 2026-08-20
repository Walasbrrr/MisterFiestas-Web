# Bitácora de Progreso (Changelog)

Este documento registra los avances significativos del proyecto MisterFiestas de manera cronológica. Sirve para que todo el equipo esté al tanto de qué se ha construido y qué decisiones se han implementado.

## [Draft] - Agosto 2026

### Inicialización y Documentación Base

- **Frontend Core:** Setup inicial del proyecto utilizando Next.js 16 (App Router), React 19, TypeScript y pnpm.
- **UI/UX Base:** Instalación y configuración de Tailwind CSS 4, junto con un sistema de diseño inicial usando variables CSS (Cream, Peach, Orange, Red, Espresso).
- **Componentes:** Integración de la biblioteca `shadcn/ui` base (botones, tarjetas, inputs).
- **Landing Page (v0):** Creación de `src/app/page.tsx` funcional incluyendo un Hero destacado, sección de servicios principales, diferenciación B2C/B2B y footer.
- **Documentación:** Reestructuración de la carpeta `Documentation/`. Creación de Glosario de Negocio, Sistema de Diseño, Borrador del Modelo de Datos y Contrato de API, así como directrices de contribución (`CONTRIBUTING.md`).
- **Repositorio:** Remoto en GitHub conectado.

### Infraestructura y CI

- **GitHub Actions:** Pipeline en `.github/workflows/ci.yml` con `lint`, `next typegen`, `typecheck`, `format:check` y `build` en push a `dev` y `main`.
- **Entorno de CI:** Node.js **22.13** y pnpm 11.3.0, caché de dependencias y `HUSKY=0`.

### Flujo de trabajo Git (simplificado)

- **Modelo:** Dos ramas — `dev` (equipo) y `main` (producción, solo Walen).
- **Sin ramas feature:** El equipo hace pull, commit y push directo en `dev`; CI valida cada push.
- **Promoción:** Walen mergea `dev` → `main` cuando el código está listo para producción.
- **Documentación:** `CONTRIBUTING.md` y `Git-Daily-Flow.md` actualizados con el flujo simplificado.

### Pendiente en GitHub

- Ruleset en `dev` con checks de CI obligatorios.
- Restringir push a `main` al rol de maintainer (Walen).
