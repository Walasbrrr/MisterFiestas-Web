# Bitácora de Progreso (Changelog)

Este documento registra los avances significativos del proyecto MisterFiestas de manera cronológica. Sirve para que todo el equipo esté al tanto de qué se ha construido y qué decisiones se han implementado.

## [Draft] - Agosto 2026

### Inicialización y Documentación Base

- **Frontend Core:** Setup inicial del proyecto utilizando Next.js 16 (App Router), React 19, TypeScript y pnpm.
- **UI/UX Base:** Instalación y configuración de Tailwind CSS 4, junto con un sistema de diseño inicial usando variables CSS (Cream, Peach, Orange, Red, Espresso).
- **Componentes:** Integración de la biblioteca `shadcn/ui` base (botones, tarjetas, inputs).
- **Landing Page (v0):** Creación de `src/app/page.tsx` funcional incluyendo un Hero destacado, sección de servicios principales, diferenciación B2C/B2B y footer.
- **Documentación:** Reestructuración de la carpeta `Documentation/`. Creación de Glosario de Negocio, Sistema de Diseño, Borrador del Modelo de Datos y Contrato de API, así como directrices de contribución (`CONTRIBUTING.md`).

### Infraestructura y CI

- **GitHub Actions:** Configuración del pipeline de CI en `.github/workflows/ci.yml` para ejecutar `lint`, `typecheck`, `format:check` y `build` en cada PR y push a `main`.
- **Entorno de CI:** Uso de Node.js 20 y pnpm 11.3.0 (alineados con `package.json`), con caché de dependencias y `HUSKY=0` para evitar hooks de git en el runner.
- **Protección de ramas:** Reglas activas en `main` que bloquean push directo y exigen al menos 1 aprobación en PRs antes de merge.
- **Flujo diario de Git:** Documentado en `Documentation/00-Project/Git-Daily-Flow.md` con `git switch` / `git switch -c`; `CONTRIBUTING.md` enlaza el mismo ciclo.
