# Responsabilidades del equipo

Documento de referencia para **Walen (Tech Lead)** y el resto del equipo: quién
hace qué, qué entrega y en qué fase del [roadmap](../00-Project/Git-Workflow.md).

**Modelo de producto:** landing que **recolecta información** y la **envía dentro del
mensaje de WhatsApp** (gratis, sin API). Ver
[WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md).

---

## Vista rápida — quién hace qué

| Persona       | Rol en el MVP                               | Decisión final en…                                    | Reporta a Walen vía                                      |
| ------------- | ------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------- |
| **Walen**     | Tech Lead, frontend, arquitectura, deploy   | Código, CI, integraciones técnicas, merge a `main`    | — (dueño del repo)                                       |
| **David**     | UX, flujos, QA, validación con negocio      | Recorrido usuario y copy de pantallas                 | PR/commits en `dev` + checklist de pruebas               |
| **Sebastián** | Contenido comercial, medios y coordinación  | Textos, precios, fotos, testimonios y número WhatsApp | Docs + assets en repo / carpeta compartida               |
| **Mario**     | Datos del catálogo y contenido estructurado | Estructura de `src/content/` y tablas en docs         | Actualizaciones en `Catalog-and-Pricing` y `services.ts` |

---

## Walen — Tech Lead & Full Stack

**Objetivo:** que el sitio funcione, pase CI y esté listo para producción cuando el
contenido esté aprobado.

| Área                 | Entregables concretos                                               | Fase     |
| -------------------- | ------------------------------------------------------------------- | -------- |
| Repositorio y CI     | `dev` directo con CI informativo; gate verde antes de `main`        | 0 ✅     |
| Frontend             | Páginas, componentes, `globals.css`, rutas                          | 2–3      |
| Asistente → WhatsApp | `buildWhatsAppUrl`, conectar `/cotizar` y modal                     | 4 ⏸      |
| Deploy               | DNS, SSL, `NEXT_PUBLIC_SITE_URL`, hosting                           | 5        |
| Supervisión          | Revisar que el trabajo de David/Sebastián/Mario encaje en el código | Continuo |

**Cómo ver el trabajo de los demás:** commits en `dev`, docs actualizadas en
`Documentation/`, y tablas de estado en este archivo (abajo).

**No es prioridad ahora:** backend Spring Boot, pagos, WhatsApp Business API.

---

## David — Flujos, requisitos y pruebas

**Objetivo:** que la experiencia landing → asistente → WhatsApp sea clara y fiel al negocio.

| Tarea                                                                      | Entregable                            | Estado               |
| -------------------------------------------------------------------------- | ------------------------------------- | -------------------- |
| Validar [Customer-Journey](../01-Product/Customer-Journey.md) con el dueño | OK por escrito o en reunión           | Pendiente            |
| Revisar textos del asistente (no «reserva confirmada»)                     | Lista de cambios de copy              | Pendiente            |
| Probar flujo en móvil y desktop cuando Fase 4 se active                    | Checklist en Fase 7 del roadmap       | Bloqueado por Fase 4 |
| Completar stubs `/eventos`, `/empresas`, `/nosotros`, `/contacto` (copy)   | Textos en doc o PR                    | Pendiente            |
| Pruebas manuales antes de lanzamiento                                      | Informe breve (navegación + WhatsApp) | Pendiente            |

**Commits esperados:** copy en páginas, revisión de `Documentation/01-Product/`, issues o comentarios en PR.

---

## Sebastián — Contenido, medios y coordinación comercial

**Objetivo:** conseguir y aprobar con el negocio el material real que debe publicarse.

| Tarea                                                                                        | Entregable                                                                                 | Estado                         |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------ |
| Material visual real y accesos autorizados del negocio                                       | Assets y permisos confirmados                                                              | Pendiente                      |
| Coordinar investigación de Instagram con Walen                                               | Fuente viable o decisión de usar carga manual                                              | En evaluación                  |
| Cargar manualmente imágenes no cubiertas por Instagram                                       | Archivos organizados en `public/images/`                                                   | Pendiente                      |
| Evaluar Google Maps como fuente de testimonios reales                                        | Viabilidad, acceso y atribución documentados                                               | Por confirmar                  |
| Número WhatsApp del negocio para producción                                                  | Valor para `NEXT_PUBLIC_WHATSAPP_NUMBER` (no está en el repo; `.env.local` no se commitea) | **Pendiente — bloquea Fase 4** |
| Aprobar plantilla de mensaje en [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md) | Texto final con el dueño                                                                   | Pendiente                      |
| Textos Nosotros, FAQ y precios «desde» o «consultar»                                         | Contenido comercial aprobado                                                               | Pendiente                      |

**No es su foco en el MVP:** implementar APIs o el helper WhatsApp; eso corresponde a Walen.

**Commits esperados:** assets autorizados, textos comerciales y decisiones documentadas.

---

## Mario — Catálogo y datos estructurados

**Objetivo:** que el catálogo en código coincida con la operación aprobada.

| Tarea                                                                        | Entregable                               | Estado                           |
| ---------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------- |
| Completar [Catalog-and-Pricing.md](../01-Product/Catalog-and-Pricing.md)     | Tabla alineada a `services.ts`           | Hecho (ago. 2026)                |
| Actualizar `src/content/services.ts`                                         | 14 servicios publicados + `outOfCatalog` | Hecho (Sebastián)                |
| Alinear slugs con rutas `/servicios/[slug]`                                  | Fichas y listado coinciden               | Hecho                            |
| Mantener [Data-Model.md](../04-Architecture/Data-Model.md) si cambian campos | Doc al día con `src/types/service.ts`    | Hecho; revisar si cambian campos |
| Combos/paquetes si el negocio los aprueba                                    | No hay página publicada                  | Pendiente                        |

**Commits esperados:** `src/content/`, `src/types/` y tablas de producto en documentación.

---

## Matriz RACI simplificada

Leyenda: **R** = hace el trabajo · **A** = aprueba · **C** = consultado · **I** = informado

| Actividad                  | Walen   | David | Sebastián | Mario   |
| -------------------------- | ------- | ----- | --------- | ------- |
| Código Next.js y CI        | **R/A** | C     | I         | I       |
| Flujo asistente → WhatsApp | **R/A** | **C** | I         | C       |
| Plantilla mensaje WhatsApp | C       | C     | **R/A**   | I       |
| Catálogo `services.ts`     | C       | I     | C         | **R/A** |
| Fotos y textos comerciales | I       | C     | **R/A**   | I       |
| Pruebas pre-lanzamiento    | **A**   | **R** | C         | C       |
| Deploy producción          | **R/A** | I     | I         | C       |
| Merge `dev` → `main`       | **R/A** | I     | I         | I       |

---

## Seguimiento semanal (sugerido para Walen)

Revisar en cada sync o al final de la semana:

1. **`git log dev --oneline`** — quién pusheó y qué.
2. **Fase activa** en [Git-Workflow.md](../00-Project/Git-Workflow.md) — checkboxes.
3. **Bloqueos:** ¿número WhatsApp? ¿fotos? ¿precios aprobados?
4. **CI** — si está rojo, ¿qué paso falló y quién lo corregirá antes de `main`?

| Pregunta                               | Responsable       |
| -------------------------------------- | ----------------- |
| ¿El catálogo en código está al día?    | Mario             |
| ¿Los textos de pantalla son correctos? | David + Sebastián |
| ¿Tenemos número y plantilla WhatsApp?  | Sebastián         |
| ¿Qué falta para Fase 4 / deploy?       | Walen             |

---

## Fases del roadmap ↔ equipo

| Fase          | Líder             | Apoyo                                    |
| ------------- | ----------------- | ---------------------------------------- |
| 0 Infra       | Walen             | —                                        |
| 1 Contenido   | Sebastián + Mario | David (copy)                             |
| 2 UI          | Walen             | David                                    |
| 3 Páginas     | Walen             | David, Sebastián (textos y medios)       |
| 4 WhatsApp ⏸  | Walen             | David (UX), Sebastián (mensaje + número) |
| 5 Lanzamiento | Walen             | Sebastián (assets), David (QA)           |

---

Cada integrante tiene perfil extendido en [Team.md](Team.md).
