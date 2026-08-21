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

### Decisiones de Producto y Equipo

- **Definición de MVP (Pagos y Reservas):** Se acordó que no habrá cálculo automático de traslados. Se integrará una opción de pago en la web, además de la opción de coordinar pagos vía WhatsApp con el dueño. El tiempo de anticipación mínimo para reservar será de 72 horas. Aún está en discusión si se requerirá un porcentaje de pago por adelantado para asegurar la reserva.
- **Gestión B2B y Solicitudes:** Las solicitudes del formulario enviarán al usuario directamente al WhatsApp de la empresa para entablar conversación inmediata. Los clientes corporativos no requerirán datos adicionales aparte de Nombre de Empresa y RNC.
- **Ajuste de Roles:** Se redefinió el rol de Walen a _Tech Lead & Full Stack Developer_ (abarcando de forma transversal todas las áreas) y se enfocó el perfil de Sebastián exclusivamente a _Arquitectura de Datos y Lógica Core_, removiendo sus tareas visuales y móviles.

### Frontend — flujo core visual

- **Home rediseñada:** Hero full-bleed, nav alineada al sitemap (Servicios, Eventos, Empresas, Tienda, Nosotros, Contacto) y bento de especialidades con motion (`Reveal` / stagger).
- **Catálogo y detalle:** Rutas `/servicios` y `/servicios/[slug]` con filtros por categoría y CTA hacia cotización.
- **Cotización demo:** `/cotizar` con resumen estimado, cantidades y enlace WhatsApp prellenado.
- **Stubs del sitemap:** Placeholders para `/eventos`, `/empresas`, `/tienda`, `/nosotros` y `/contacto`.

### Frontend — Versión Mobile Dedicada (Mobile Design Pack)

- **Top Bar Tipo App Móvil:** Header optimizado para touch screens con logo compacto, acceso rápido a cotización (`ShoppingBag` con badge) y menú drawer animado con Motion (Framer Motion), backdrop blur, enlaces activos y acceso directo a WhatsApp.
- **Sticky Bottom Action Bars:** Implementación de barras flotantes inferiores fijas con elevación y `safe-area-inset` en `/cotizar` (Total estimado + Confirmar WhatsApp) y en `/servicios/[slug]` (Tarifa desde + Añadir a cotización).
- **Home Móvil & Spotlight:** Hero compacto de alto impacto visual con badge de ubicación/experiencias y bloque de producto destacado ("01 / DESTACADO: TÚNEL INFINITO" con tag "Más rentable").
- **Catálogo Táctil:** Selector de filtros por categoría con desplazamiento táctil horizontal (`scroll-snap`), conteo por categoría y botones de acción rápida.
- **Flujo de Cotización Móvil:** Indicador de pasos visual ("Paso 1 de 4: Tu selección"), selector interactivo Particular vs. Empresarial, controles de cantidad touch-friendly (>=44px) y tarjetas de confianza ("Sin cobros automáticos", "72h anticipación", "Atención personalizada").
- **Tokens y Tipografía Responsive:** Integración de tokens `--margin-mobile: 18px;`, `--safe-bottom`, tamaños `clamp()` y reglas de compensación de scroll (`.has-sticky-bottom`).

### Frontend — Componentes UI, Galería Multimedia y Dark Mode

- **Modo Oscuro Premium (_Warm Luxury Dark_):**
  - Implementación de tokens `[data-theme="dark"]` con fondo Espresso profundo (`#140f0e`), tarjetas en café cálido oscuro (`#1d1514`), texto en crema suave (`#f8f0e6`) y acentos en naranja vibrante (`#f2772b`).
  - Componente `ThemeToggle` (`Sun`/`Moon`) con sincronización en React 19 (`useSyncExternalStore`), detección automática de preferencia de sistema (`prefers-color-scheme`) y persistencia en `localStorage`. Integrado en desktop header y drawer móvil.
  - Corrección de contrastes en Bento Grid (`.bento-feature`, `.bento-peach`, `.bento-cream`), tarjeta destacada (`.mobile-spotlight`), franja de cotización (`.quote-band`) y botón secundario (`.spotlight-btn-secondary`).
- **Testimonios y Prueba Social (`TestimonialCard`):**
  - Componente de reseñas con calificación por estrellas (5★), chip de tipo de evento (_Boda_, _Empresa_, _Cumpleaños_), cita de cliente, avatar y ubicación.
  - Sección _"Lo que dicen quienes ya celebraron"_ agregada en la Home (`/`) con animaciones `RevealStagger`.
- **Galería Multimedia y Visor Lightbox (`GalleryGrid` & `/galeria`):**
  - Componente `GalleryGrid` con selector de filtros táctiles por categoría (_Todos_, _Experiencias_, _Bodas_, _Empresas_, _Música y Show_, _Ambientación_) con conteo dinámico de fotos.
  - Visor modal tipo _Lightbox_ a pantalla completa con backdrop blur, tecla `Escape` para cerrar, detalle ampliado y CTA directo a cotización (`/cotizar?add=slug`).
  - Nueva página estática `/galeria` incorporada en la navegación principal (`mainNav`), en el pie de página (`footerLinks`) y en `sitemap.ts`.
