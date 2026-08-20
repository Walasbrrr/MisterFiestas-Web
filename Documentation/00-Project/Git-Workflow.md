# Flujo de Trabajo Git — Plan de Desarrollo por Fases

Este documento organiza todo el trabajo pendiente del proyecto MisterFiestas en fases claras. Cada fase agrupa tareas que el equipo puede ir completando en la rama `dev`. Al completar todas las tareas de una fase, se considera un **Milestone** del proyecto.

---

## Convenciones

- Todo el desarrollo ocurre en la rama **`dev`** (push directo del equipo).
- Solo **Walen** hace push a **`main`** (producción), mergeando `dev` cuando corresponda.
- No se usan ramas `feature/` por tarea; los códigos entre paréntesis (ej. `pagina-servicios`) son **identificadores de tarea** para el roadmap, no nombres de rama.
- GitHub Actions debe pasar en cada push a `dev`.
- Comandos del día a día: [Flujo Diario de Git](Git-Daily-Flow.md).

---

## Fase 0 — Infraestructura y Configuración Base

> **Objetivo:** Tener el entorno de desarrollo listo y las bases del proyecto sólidas para que todo el equipo pueda trabajar sin bloqueos.
>
> **Responsable principal:** Walen

### Completado

- [x] Crear repositorio remoto en GitHub y conectar el proyecto local (`chore/setup-github-remote`)
- [x] Configurar CI con GitHub Actions en `.github/workflows/ci.yml` (`chore/setup-ci-pipeline`)

### En curso

- [x] Configurar ruleset en **`dev`**: push solo con checks de CI en verde (`chore/dev-branch-ruleset`)
- [x] Configurar permisos en **`main`**: push directo solo para Walen (`chore/main-maintainer-role`)

### Más adelante (no activo por ahora)

- Verificar que `husky` + `lint-staged` funcionan correctamente en todas las máquinas del equipo (`chore/verify-precommit-hooks`)
- Configurar archivo `.env.local` en cada máquina del equipo a partir de `.env.example` (`chore/setup-env-local`)
- Crear tablero de proyecto en GitHub Projects o Jira y vincular las tareas de este documento (`chore/setup-project-board`)

---

## Fase 1 — Contenido y Datos del Negocio

> **Objetivo:** Tener toda la información real del negocio lista antes de construir las páginas. Sin contenido real, el frontend no puede avanzar bien.
>
> **Responsable principal:** Mario (contenidos) + David (validación) + Sebastián (datos)

- [x] Reunión con el dueño de MisterFiestas para responder las [Preguntas Pendientes](01-Product/Pending-Client-Questions.md) (`docs/respuestas-cliente`)
- [ ] Completar la tabla de servicios en [Catalog-and-Pricing.md](01-Product/Catalog-and-Pricing.md) con datos reales: descripción, qué incluye, precio, capacidad (`docs/completar-catalogo`)
- [ ] Definir los combos/paquetes reales que ofrece el negocio y agregarlos al catálogo (`docs/definir-paquetes`)
- [ ] Recopilar y seleccionar fotografías reales de cada servicio (mínimo 3 por servicio) (`docs/recopilar-fotos-servicios`)
- [ ] Recopilar fotos y videos de eventos reales para la galería (`docs/recopilar-galeria`)
- [ ] Redactar textos finales de la sección "Nosotros" (historia, valores, equipo) (`docs/redactar-nosotros`)
- [ ] Redactar preguntas frecuentes (FAQ) y sus respuestas (`docs/redactar-faq`)
- [ ] Confirmar la tabla de recargos por provincia y registrarla en la documentación (`docs/tabla-recargos-provincia`)
- [ ] Actualizar `src/content/services.ts` con las descripciones reales aprobadas (`feature/contenido-servicios-real`)

---

## Fase 2 — Diseño UI/UX y Componentes

> **Objetivo:** Diseñar las pantallas en Figma y construir los componentes reutilizables en código antes de ensamblar las páginas.
>
> **Responsable principal:** Walen (diseño + código) + David (revisión de flujos)

- [ ] Crear wireframes en Figma de todas las páginas del [Sitemap](01-Product/Site-Map.md): Inicio, Servicios, Clientes, Empresas, Galería, Nosotros, Contacto/Cotización (`design/wireframes-completos`)
- [ ] Diseñar versión móvil de cada pantalla en Figma (`design/wireframes-mobile`)
- [ ] Construir componente `Header` con navegación responsive + menú hamburguesa móvil (`feature/header-nav-responsive`)
- [ ] Construir componente `Footer` completo con redes sociales, enlaces y schema markup (`feature/footer-completo`)
- [ ] Construir componente `ServiceCard` reutilizable con imagen, título, descripción y CTA (`feature/service-card-component`)
- [ ] Construir componente `PackageCard` para combos/paquetes (`feature/package-card-component`)
- [ ] Construir componente `TestimonialCard` para testimonios de clientes (`feature/testimonial-card`)
- [ ] Construir componente `GalleryGrid` con lightbox para fotos/videos (`feature/gallery-grid-component`)
- [ ] Implementar animaciones de scroll con `motion` en las secciones principales (`feature/scroll-animations`)
- [ ] Implementar modo oscuro (dark mode) si se decide incluirlo en el MVP (`feature/dark-mode`)

---

## Fase 3 — Páginas y Rutas del Frontend

> **Objetivo:** Ensamblar las páginas completas usando los componentes de la Fase 2 y el contenido de la Fase 1.
>
> **Responsable principal:** Walen + David

- [ ] Crear página `/servicios` con listado completo de servicios individuales (`feature/pagina-servicios`)
- [ ] Crear rutas dinámicas `/servicios/[slug]` con página de detalle por servicio (`feature/pagina-servicio-detalle`)
- [ ] Crear página `/paquetes` o `/combos` con listado de paquetes (`feature/pagina-paquetes`)
- [ ] Crear página `/empresas` dedicada a clientes B2B con CTA directo al formulario (`feature/pagina-empresas`)
- [ ] Crear página `/galeria` con filtros por tipo de evento (Bodas, Cumpleaños, Corporativo) (`feature/pagina-galeria`)
- [ ] Crear página `/nosotros` con historia, valores y equipo (`feature/pagina-nosotros`)
- [ ] Crear página `/contacto` con datos de contacto y mapa (si se activa Google Maps) (`feature/pagina-contacto`)
- [ ] Mejorar la página de inicio (Home) integrando fotos reales y contenido definitivo (`feature/home-contenido-final`)
- [ ] Agregar metadata SEO (`title`, `description`, Open Graph) a cada nueva página (`feature/seo-metadata-paginas`)
- [ ] Actualizar `sitemap.ts` para incluir todas las rutas nuevas (`feature/actualizar-sitemap`)

---

## Fase 4 — Formulario de Cotización

> **Objetivo:** Implementar el flujo completo de cotización en 4 pasos como indica el [Customer Journey](01-Product/Customer-Journey.md).
>
> **Responsable principal:** David (flujo) + Walen (implementación) + Sebastián (validaciones)

- [ ] Crear página `/cotizar` con formulario multi-paso (`feature/formulario-cotizacion`)
- [ ] Paso 1: Selector de tipo de cliente (Particular / Empresa) con campos dinámicos (RNC, nombre empresa) (`feature/cotizar-paso1-tipo-cliente`)
- [ ] Paso 2: Selector de servicios y/o paquetes con checkboxes interactivos (`feature/cotizar-paso2-servicios`)
- [ ] Paso 3: Datos de logística — selector de provincia, fecha, hora, cantidad de invitados (`feature/cotizar-paso3-logistica`)
- [ ] Paso 4: Pantalla de confirmación con resumen y mensaje de éxito (`feature/cotizar-paso4-confirmacion`)
- [ ] Integrar validación completa con `react-hook-form` + `zod` usando el schema `quoteSchema` (`feature/cotizar-validacion-zod`)
- [ ] Implementar lógica de advertencia/recargo por provincia lejana (`feature/cotizar-recargo-provincia`)
- [ ] Conectar envío del formulario por WhatsApp (enlace `wa.me` con datos pre-rellenados) como canal MVP (`feature/cotizar-envio-whatsapp`)
- [ ] Agregar envío alternativo por correo electrónico si se activa esa integración (`feature/cotizar-envio-email`)

---

## Fase 5 — Backend y API (Spring Boot)

> **Objetivo:** Crear la API REST que recibirá y persistirá las solicitudes de cotización.
>
> **Responsable principal:** Sebastián (modelo de datos) + Mario (endpoints)

- [ ] Inicializar proyecto Spring Boot dentro de `backend/` con las dependencias aprobadas en [Tech-Stack.md](../04-Architecture/Tech-Stack.md) (`feature/backend-init-spring-boot`)
- [ ] Crear entidades JPA basadas en el [Modelo de Datos](../04-Architecture/Data-Model.md): `Cliente`, `Servicio`, `Cotizacion`, `CotizacionServicio` (`feature/backend-entidades-jpa`)
- [ ] Crear migraciones Flyway para el esquema inicial de PostgreSQL (`feature/backend-flyway-migraciones`)
- [ ] Implementar endpoint `GET /api/v1/services` para listar servicios activos (`feature/backend-endpoint-services`)
- [ ] Implementar endpoint `POST /api/v1/quotes` para recibir solicitudes de cotización (`feature/backend-endpoint-quotes`)
- [ ] Agregar validaciones de entrada en los endpoints con Bean Validation (`feature/backend-validaciones`)
- [ ] Configurar Swagger/OpenAPI para documentación automática de la API (`feature/backend-swagger`)
- [ ] Configurar Docker para el despliegue del backend en VPS (`feature/backend-docker`)
- [ ] Conectar el frontend Next.js con la API del backend (`feature/frontend-conectar-api`)

---

## Fase 6 — Integraciones Externas

> **Objetivo:** Activar las integraciones externas según el [orden de activación](../04-Architecture/Integrations-and-Secrets.md).
>
> **Responsable principal:** Walen + Mario

- [ ] Configurar dominio definitivo y URL canónica (`chore/configurar-dominio`)
- [ ] Activar Google Search Console y verificar propiedad del sitio (`chore/google-search-console`)
- [ ] Activar Google Analytics 4 con el Measurement ID real (`chore/activar-ga4`)
- [ ] Integrar Google Maps en página de contacto si agrega valor al flujo (`feature/integracion-google-maps`)
- [ ] Configurar Cloudinary para gestión de imágenes de la galería (`feature/integracion-cloudinary`)
- [ ] Integrar pasarela de pagos (Azul, CardNET o Stripe) cuando se apruebe el flujo de depósitos (`feature/integracion-pagos`)

---

## Fase 7 — Testing, QA y Lanzamiento

> **Objetivo:** Asegurar la calidad del producto antes de publicarlo.
>
> **Responsable principal:** David (pruebas manuales) + Walen (pruebas automatizadas)

- [ ] Pruebas manuales de navegación completa en desktop y móvil (`test/pruebas-manuales-navegacion`)
- [ ] Pruebas del formulario de cotización con datos reales y edge cases (`test/pruebas-formulario-cotizacion`)
- [ ] Auditoría Lighthouse: Performance, Accessibility, SEO y Best Practices (objetivo: >90 en cada categoría) (`test/auditoria-lighthouse`)
- [ ] Verificar que todas las imágenes tienen `alt` text y los formularios son accesibles (`test/accesibilidad-basica`)
- [ ] Revisar que los datos estructurados (JSON-LD) se renderizan correctamente (`test/verificar-json-ld`)
- [ ] Configurar despliegue en Hostinger (o Vercel) para el frontend (`chore/deploy-frontend-produccion`)
- [ ] Configurar despliegue del backend en VPS con Docker (`chore/deploy-backend-vps`)
- [ ] Realizar prueba final en producción con todo el equipo antes de anunciar públicamente (`test/smoke-test-produccion`)
- [ ] 🚀 **Lanzamiento público del sitio web** (`release/v1.0`)

---

## Diagrama de Dependencias entre Fases

```text
Fase 0 (Infra)
  │
  ├──► Fase 1 (Contenido)  ──────────────────────┐
  │                                                │
  ├──► Fase 2 (Diseño UI)  ──┐                    │
  │                           ▼                    ▼
  │                     Fase 3 (Páginas) ◄── requiere ambas
  │                           │
  │                           ▼
  │                     Fase 4 (Formulario)
  │                           │
  ├──► Fase 5 (Backend) ─────┤ (pueden ir en paralelo con Fases 2-4)
  │                           │
  │                           ▼
  │                     Fase 6 (Integraciones)
  │                           │
  │                           ▼
  └──────────────────── Fase 7 (QA y Lanzamiento)
```

> **Nota:** Las Fases 1, 2 y 5 pueden avanzar **en paralelo** ya que no dependen entre sí. Esto permite que el equipo trabaje simultáneamente en contenido, diseño y backend.
