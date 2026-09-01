# Flujo de Trabajo Git — Plan de Desarrollo por Fases

Roadmap: **landing que recolecta datos → mensaje WhatsApp prellenado** (gratis, sin API).
Implementación Fase 4: **pausada**; ver [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md).

**Quién hace qué:** [Responsibilities.md](../03-Team/Responsibilities.md)

Comandos: [Git-Daily-Flow.md](Git-Daily-Flow.md).

---

## Convenciones

- Desarrollo en **`dev`** · solo **Walen** en **`main`**
- Identificadores `(ejemplo)` son tareas, no ramas
- CI informativo en cada push a `dev`; CI verde obligatorio antes de promover a `main`
- **Sin force-push** a `dev` ni `main` (ruleset GitHub)

---

## Fase 0 — Infraestructura · Walen ✅

- [x] Repositorio GitHub + CI informativo en `dev`
- [x] Push directo a `dev` sin gate obligatorio, por decisión del equipo
- [x] `main` reservado para promoción por Walen

---

## Fase 1 — Contenido del negocio

| Tarea                                                          | Responsable                                                                      |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [x] Decisiones iniciales del cliente                           | Mario + equipo                                                                   |
| [x] Catálogo y precios documentados (14 servicios)             | **Sebastián** (carga) · **Mario** (mantenimiento)                                |
| [ ] Combos/paquetes informativos (sin tienda)                  | **Sebastián**                                                                    |
| [ ] Material visual real y accesos de Instagram                | **Sebastián**                                                                    |
| [ ] Evaluar integración de Instagram para alimentar galería    | **Walen** + **Sebastián**                                                        |
| [ ] Carga manual de imágenes no cubiertas por la integración   | **Sebastián** + equipo                                                           |
| [ ] Evaluar Google Maps como fuente de testimonios reales      | **Sebastián** + **David**                                                        |
| [ ] Textos Nosotros, FAQ, eventos, empresas                    | **Sebastián** · revisión **David**                                               |
| [ ] Número WhatsApp + plantilla mensaje                        | **Sebastián** → ver [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md) |
| [x] `src/content/services.ts` catálogo oficial (14 publicados) | **Sebastián** (ago. 2026) · **Mario** (mantenimiento)                            |

---

## Fase 2 — Diseño y componentes UI · Walen (+ David revisión)

### Hecho

- [x] Header, footer, dark mode, motion, componentes de testimonios y galería, home, catálogo

### Pendiente

- [ ] Copy alineado a «recolección + WhatsApp» (no checkout) · **David**
- [ ] SEO metadata por página · **Walen**
- [ ] Componente `WhatsAppCTA` / `buildWhatsAppUrl` · **Walen** ⏸ Fase 4
- [ ] Reemplazar testimonios y galería demo por fuentes reales aprobadas · **Sebastián** + **Walen**

---

## Fase 3 — Páginas informativas

| Tarea                                                                    | Responsable                                                    |
| ------------------------------------------------------------------------ | -------------------------------------------------------------- |
| [x] `/servicios`, `/servicios/[slug]`, `/galeria`                        | Walen                                                          |
| [ ] `/eventos`, `/empresas`, `/nosotros`, `/contacto` con contenido real | **David** (copy) · **Walen** (código) · **Sebastián** (textos) |
| [ ] Home con fotos y copy finales                                        | **Sebastián** + **Walen**                                      |
| [x] `sitemap.ts` sin rutas de e-commerce                                 | **Walen**                                                      |

---

## Fase 4 — Recolección web → WhatsApp ⏸ PAUSADA

> **Líder:** Walen · **Consulta:** David (UX), Sebastián (plantilla + número)

Spec: [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md)

| Tarea                                 | Responsable                        | Estado    |
| ------------------------------------- | ---------------------------------- | --------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` en prod | Sebastián provee · Walen configura | Bloqueado |
| `buildWhatsAppUrl()` en `src/lib/`    | Walen                              | Pausado   |
| Plantilla mensaje aprobada            | Sebastián                          | Pendiente |
| `ReservationForm` → abrir WhatsApp    | Walen                              | Pausado   |
| `/cotizar` paso final → WhatsApp      | Walen                              | Pausado   |
| Copy «Continuar en WhatsApp»          | David                              | Pausado   |
| CTAs rápidos hero/footer/detalle      | Walen                              | Pausado   |

**Retomar cuando:** número WhatsApp + plantilla aprobados por el cliente.

---

## Fase 5 — Lanzamiento

| Tarea                                    | Responsable              |
| ---------------------------------------- | ------------------------ |
| [x] Dominio `misterfiestas.com` decidido | Walen                    |
| [ ] DNS, SSL, `NEXT_PUBLIC_SITE_URL`     | **Walen**                |
| [ ] Search Console + GA4                 | **Sebastián** + Walen    |
| [ ] Deploy frontend                      | **Walen**                |
| [ ] Lighthouse + accesibilidad           | **David**                |
| [ ] Smoke test producción                | **David** + equipo       |
| [ ] 🚀 Lanzamiento                       | **Walen** (merge `main`) |

---

## Diferido (post-MVP)

Backend, pagos web, WhatsApp Business API, calendario con agenda real (API/DB).

---

## Diagrama

```text
Fase 1 (Contenido)     Sebastián + Mario
        │
Fase 2–3 (UI/Páginas)  Walen + David + Mario
        │
Fase 4 (WhatsApp)      Walen  ⏸ pausada — espera número + plantilla
        │
Fase 5 (Lanzamiento)   Walen + David + Mario
```
