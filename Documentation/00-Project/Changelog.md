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

- **GitHub Actions:** Pipeline en `.github/workflows/ci.yml` con `lint`, `next typegen`, `typecheck`, `format:check` y `build` en PRs y push a `dev` y `main`.
- **Entorno de CI:** Node.js **22.13** y pnpm 11.3.0 (Node 20 tiene problemas de compatibilidad con pnpm 11), caché de dependencias y `HUSKY=0`.
- **Modelo de ramas:** `main` (producción, push solo Walen) + `dev` (integración del equipo con CI obligatorio vía ruleset).
- **Guía diaria:** `Documentation/00-Project/Git-Daily-Flow.md` con flujo `feature → dev → main`.

### Pendiente en GitHub

- Crear rama `dev`, aplicar ruleset con checks de CI y restringir push a `main` al rol de maintainer (Walen).

### Flujo de trabajo Git

- **Guía diaria:** Nuevo documento `Documentation/00-Project/Git-Daily-Flow.md` con el ciclo rama → push → Pull Request → merge. Usa comandos modernos (`git switch`, `git switch -c`) y deja claro que no hay push directo a `main`.
- **Sincronizar con `main`:** La guía documenta `git merge main` en ramas existentes (sin volver a usar `-c`) cuando `main` avanza.
- **Push inicial:** Corregido a `git push -u origin HEAD` (o nombre explícito de rama); `-u` solo no basta.
- **Contribución:** `CONTRIBUTING.md` incluye el ciclo rápido, el push correcto y `next typegen` antes del typecheck local.
- **Índices:** El flujo diario quedó enlazado en `Documentation/README.md`, `Documentación del Proyecto.md` y las convenciones de `Git-Workflow.md`.

### Decisiones de Producto y Equipo

- **Definición de MVP (Pagos y Reservas):** Se acordó que no habrá cálculo automático de traslados. Se integrará una opción de pago en la web, además de la opción de coordinar pagos vía WhatsApp con el dueño. El tiempo de anticipación mínimo para reservar será de 72 horas. Aún está en discusión si se requerirá un porcentaje de pago por adelantado para asegurar la reserva.
- **Gestión B2B y Solicitudes:** Las solicitudes del formulario enviarán al usuario directamente al WhatsApp de la empresa para entablar conversación inmediata. Los clientes corporativos no requerirán datos adicionales aparte de Nombre de Empresa y RNC.
- **Ajuste de Roles:** Se redefinió el rol de Walen a _Tech Lead & Full Stack Developer_ (abarcando de forma transversal todas las áreas) y se enfocó el perfil de Sebastián exclusivamente a _Arquitectura de Datos y Lógica Core_, removiendo sus tareas visuales y móviles.
