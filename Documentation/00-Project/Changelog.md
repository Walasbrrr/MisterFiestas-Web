# Bitácora de Progreso (Changelog)

Este documento registra los avances significativos del proyecto MisterFiestas de manera cronológica. Sirve para que todo el equipo esté al tanto de qué se ha construido y qué decisiones se han implementado.

## [Draft] - Agosto 2026

### Integración del Catálogo Oficial

- **Contenido real:** Se integró el catálogo completo de Mister Fiestas con 14 servicios, incluyendo descripciones, precios en RD$, y requerimientos.
- **Nuevas categorías:** Se agregaron las categorías `"fotografia"` y `"navidad"`.
- **Estructura de precios:** Se extendió el modelo de datos para soportar múltiples planes por servicio (Ej. Sencillo, VIP, Full).
- **Páginas de servicio actualizadas:** Se rediseñó la página de detalle (`/servicios/[slug]`) para renderizar extras, "Ideal para", planes dinámicos y un badge para servicios de temporada.

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
- **Corrección de CI (27 ago. 2026):** Se aplicó Prettier a
  `src/components/inline-calendar.tsx`, `src/components/reservation-form.tsx` y
  `src/lib/calendar-data.ts`. La corrección fue únicamente de formato, sin cambios
  funcionales. `format:check`, generación de tipos, `typecheck` y el build de
  producción quedaron validados correctamente.

### Flujo de trabajo Git (simplificado)

- **Modelo:** Dos ramas — `dev` (equipo) y `main` (producción, solo Walen).
- **Sin ramas feature:** El equipo hace pull, commit y push directo en `dev`; CI revisa cada push sin bloquearlo.
- **Promoción:** Walen mergea `dev` → `main` cuando el código está listo para producción.
- **Documentación:** `CONTRIBUTING.md` y `Git-Daily-Flow.md` actualizados con el flujo simplificado.

### Política actual de GitHub

- `dev` permite push directo del equipo; su ruleset no exige checks obligatorios.
- CI funciona como diagnóstico compartido. Si falla, se identifica la causa y se
  corrige, pero no se bloquean otros commits en `dev`.
- Solo se promueve a `main` con checks locales y CI en verde; `main` queda bajo control de Walen.

### Dominio oficial

- **Dominio:** `misterfiestas.com`
- **URL canónica:** `https://misterfiestas.com`
- Documentado en Overview, Integraciones, Decisions y roadmap Git; en producción usar `NEXT_PUBLIC_SITE_URL=https://misterfiestas.com`.

### Decisiones de Producto y Equipo

- **Pivot a landing + WhatsApp (ago. 2026):** Sin e-commerce ni pagos web. Conversión en WhatsApp.
- **Asistente de contacto (ago. 2026):** Se mantienen calendario, `/cotizar` y selección de servicios para generar un **mensaje prellenado**; el usuario solo envía en WhatsApp. No hay reserva confirmada en backend.
- **Definición de MVP (histórico):** Decisiones previas sobre pagos web y reservas quedan supersedidas; ver [Pending-Client-Questions.md](../01-Product/Pending-Client-Questions.md).
- **Gestión B2B:** Nombre de empresa y RNC cuando aplique; recolección en WhatsApp.
- **Ajuste de roles:** Walen — _Tech Lead & Full Stack Developer_; Sebastián — contenido comercial, medios y coordinación con el cliente; Mario — catálogo y datos estructurados.

### Fuentes de contenido acordadas

- **Prioridad comercial:** Túnel Infinito.
- **Galería:** Sebastián coordina assets; Instagram se evaluará como fuente parcial y
  las imágenes restantes se incorporarán manualmente.
- **Testimonios:** Google Maps queda como fuente candidata; falta confirmar el método de acceso y atribución antes de reemplazar los datos demo.

### Frontend — flujo core visual

- **Home rediseñada:** Hero full-bleed, nav alineada al sitemap (Servicios, Eventos, Empresas, Tienda, Nosotros, Contacto) y bento de especialidades con motion (`Reveal` / stagger).
- **Catálogo y detalle:** Rutas `/servicios` y `/servicios/[slug]` con filtros por categoría y CTA hacia cotización.
- **Cotización demo:** `/cotizar` con resumen estimado, cantidades y enlace WhatsApp prellenado.
- **Stubs del sitemap:** Placeholders para `/eventos`, `/empresas`, `/tienda`, `/nosotros` y `/contacto`.
- **Retiro de Tienda (dirección vigente):** Se eliminó “Tienda” de la navegación y
  del sitemap. La tarjeta “Tienda y combos” de la Home ahora invita a armar una
  cotización en `/cotizar`, y `/tienda` conserva una redirección permanente para
  evitar enlaces rotos. Los paquetes podrán incorporarse más adelante en una ruta
  informativa propia cuando exista contenido comercial aprobado.

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

### Documentación de equipo y asistente WhatsApp

- **Responsibilities.md:** matriz por persona, entregables, RACI y seguimiento semanal para Walen.
- **Configuración de Entorno:** Se configuró el número de WhatsApp oficial en las variables de entorno locales (`.env.local`).
- **WhatsApp-Assistant.md:** campos a recolectar, plantilla de mensaje, reglas UX, estado (Fase 4 pausada).
- **Git-Workflow.md:** cada fase con responsable explícito (Walen / David / Sebastián / Mario).

### Cambio de dirección del producto — Landing + WhatsApp

- **Alcance redefinido:** Landing sin e-commerce ni pagos web. Conversión en WhatsApp.
- **Asistente de contacto:** Calendario, servicios y pasos en la web arman el mensaje; cierre en `wa.me` (solo pulsar Enviar).
- **Documentación actualizada:** MVP, Site-Map, Customer Journey, Git-Workflow Fase 4.
- **Código pendiente:** Cambiar copy y paso final de `ReservationForm` y `/cotizar` de «reserva enviada» a apertura de WhatsApp prellenado.
