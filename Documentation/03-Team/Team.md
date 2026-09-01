# Equipo

Cuatro integrantes. Producto actual: **landing + recolección de datos + mensaje
WhatsApp prellenado** (sin e-commerce ni backend en el MVP).

**Para ver quién hace qué hoy:** [Responsibilities.md](Responsibilities.md) (matriz,
entregables y seguimiento para Walen).

---

## Walen

- **Rol:** Tech Lead & Full Stack Developer
- **Enfoque MVP:** Next.js, CI diagnóstico en `dev`, gate de producción, asistente web → WhatsApp, integraciones y deploy
- **Herramientas:** Next.js, TypeScript, Tailwind, GitHub Actions, Figma, hosting
- **Entregables clave:** repo estable, páginas funcionales, integración `wa.me`, producción en `misterfiestas.com`
- **Decisión final:** arquitectura, código, merges a producción

---

## David

- **Rol:** UX, requisitos de negocio, pruebas y revisión
- **Enfoque MVP:** recorrido landing → asistente → WhatsApp, copy de pantallas, QA manual
- **Herramientas:** React/Next (lectura y PRs), Jira, navegadores móvil/desktop
- **Entregables clave:** journey validado, textos sin ambigüedad («reserva» vs «WhatsApp»), checklist pre-lanzamiento
- **Decisión final:** que la experiencia de usuario refleje el negocio real

---

## Sebastián

**Rol:** Contenido comercial, medios y coordinación con el cliente

- **Enfoque MVP:** fotos, textos, precios orientativos, **número WhatsApp**, plantilla del mensaje, coordinación de Instagram y evaluación de Google Maps para testimonios
- **Herramientas:** assets, documentación, GA4/Search Console (con Walen)
- **Entregables clave:** material visual real, estrategia Instagram + carga manual, fuente de testimonios validada, copy aprobado y variable `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **Decisión final:** lo que se publica del negocio (precios, fotos, tono del mensaje WhatsApp)

---

## Mario

**Rol:** Datos del catálogo y contenido estructurado

- **Enfoque MVP:** `src/content/services.ts`, catálogo documentado, slugs y tipos
- **Herramientas:** TypeScript, Markdown, diagramas ER (post-MVP)
- **Entregables clave:** tabla de servicios completa, código alineado con [Catalog-and-Pricing.md](../01-Product/Catalog-and-Pricing.md)
- **Decisión final:** estructura y exactitud de los datos de servicios en repo

---

## Comunicación

- Trabajo diario en rama **`dev`** — ver [Git-Daily-Flow.md](../00-Project/Git-Daily-Flow.md)
- Decisiones de producto → `Documentation/01-Product/` y [Changelog.md](../00-Project/Changelog.md)
- Dudas de alcance → [MVP-Scope.md](../00-Project/MVP-Scope.md) y [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md)
