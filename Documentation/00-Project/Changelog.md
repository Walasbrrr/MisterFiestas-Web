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

- **GitHub Actions:** Configuración del pipeline de CI en `.github/workflows/ci.yml` para ejecutar `lint`, `typecheck`, `format:check` y `build` en cada PR y push a `main`. `next typegen` corre antes del typecheck para generar `.next/types/routes.d.ts` en runners limpios.
- **Entorno de CI:** Uso de Node.js 20 y pnpm 11.3.0 (alineados con `package.json`), con caché de dependencias y `HUSKY=0` para evitar hooks de git en el runner.
- **Protección de ramas:** Reglas activas en `main` que bloquean push directo y exigen al menos 1 aprobación en PRs antes de merge.

### Flujo de trabajo Git

- **Guía diaria:** Nuevo documento `Documentation/00-Project/Git-Daily-Flow.md` con el ciclo rama → push → Pull Request → merge. Usa comandos modernos (`git switch`, `git switch -c`) y deja claro que no hay push directo a `main`.
- **Sincronizar con `main`:** La guía documenta `git merge main` en ramas existentes (sin volver a usar `-c`) cuando `main` avanza.
- **Push inicial:** Corregido a `git push -u origin HEAD` (o nombre explícito de rama); `-u` solo no basta.
- **Contribución:** `CONTRIBUTING.md` incluye el ciclo rápido, el push correcto y `next typegen` antes del typecheck local.
- **Índices:** El flujo diario quedó enlazado en `Documentation/README.md`, `Documentación del Proyecto.md` y las convenciones de `Git-Workflow.md`.
