# Modelo de Datos

Estructuras de contenido para la landing. El catálogo y la cotización **no** usan
base de datos. La galería Instagram opcional sí: tabla `gallery_media` en
`backend/` (H2 o PostgreSQL).

## Entidades de contenido

### `Service` (Servicio)

Oferta del catálogo informativo.
_Implementación:_ `src/types/service.ts`, `src/content/services.ts`

| Campo                      | Tipo              | Descripción                                                                                 |
| -------------------------- | ----------------- | ------------------------------------------------------------------------------------------- |
| `slug`                     | `string`          | URL amigable (`tunel-infinito`)                                                             |
| `name`                     | `string`          | Nombre comercial                                                                            |
| `description`              | `string`          | Texto largo para la ficha                                                                   |
| `shortDescription`         | `string`          | Resumen en listados                                                                         |
| `category`                 | `ServiceCategory` | `fotografia`, `musica`, `navidad`, `experiencias`, `ambientacion`, `efectos`, `gastronomia` |
| `priceFrom`                | `number?`         | Precio orientativo «desde» en RD$                                                           |
| `tagline`                  | `string?`         | Frase corta en detalle                                                                      |
| `idealFor`                 | `string?`         | Ocasiones recomendadas                                                                      |
| `plans`                    | `ServicePlan[]?`  | Tarifas nombradas (`name`, `price`, `note?`)                                                |
| `includes`                 | `string[]?`       | Qué incluye                                                                                 |
| `extras`                   | `string[]?`       | Recargos, upgrades, notas de traslado                                                       |
| `requirements`             | `string[]?`       | Requisitos generales                                                                        |
| `installationRequirements` | `string[]?`       | Espacio, energía, dimensiones                                                               |
| `notes`                    | `string[]?`       | Avisos adicionales                                                                          |
| `seasonal`                 | `boolean?`        | Oferta de temporada (Navidad)                                                               |
| `featured`                 | `boolean?`        | Destacado en Home / carrusel                                                                |
| `outOfCatalog`             | `boolean?`        | Oculto en `/servicios`; el slug puede seguir existiendo                                     |

`/servicios` filtra `!outOfCatalog`. El detalle `/servicios/[slug]` sigue resolviendo
cualquier slug válido (incluidos los fuera de listado).

### Mensaje WhatsApp (conceptual)

Se construirá al vuelo con `buildWhatsAppUrl()` (Fase 4, **no implementado**):

| Campo                                    | Origen                                         |
| ---------------------------------------- | ---------------------------------------------- |
| Número                                   | `NEXT_PUBLIC_WHATSAPP_NUMBER` (pendiente)      |
| Fecha / hora preferida                   | Calendario UI                                  |
| Servicios                                | `/cotizar` o detalle                           |
| Tipo evento, invitados, nombre, teléfono | Pasos del asistente                            |
| Texto final                              | Plantilla en `src/lib/whatsapp.ts` (por crear) |

Hoy `/cotizar` arma un `wa.me/?text=…` **sin número** (abre el selector de WhatsApp).

## UI de fecha (no es agenda)

`src/lib/calendar-data.ts` alimenta el calendario y `ReservationForm`. Las fechas
marcadas son **demo / preferencia del cliente**, no disponibilidad real. Se **reutiliza**
en el MVP; no se elimina. El dueño confirma en WhatsApp.

### `GalleryMedia` (backend, opcional)

Cache del feed de Instagram. Implementación: `backend/src/main/java/.../gallery/`.

Campos relevantes: `id` (Instagram), `mediaType`, `mediaUrl`, `thumbnailUrl`,
`permalink`, `caption`, `timestamp`, `likeCount`.

## Fuera de alcance actual

- `QuoteRequest` en `src/schemas/quote.ts` — schema Zod **sin uso** en pantallas
  (legacy; el flujo vivo es `/cotizar` + modal).
- Entidades JPA de leads, cotizaciones o pagos.

## Diagrama futuro (solo referencia)

Si en el futuro se implementa backend para leads o cotizaciones, el modelo
relacional previsto (Cliente, Servicio, Cotización) sigue documentado como borrador
en versiones anteriores del repo; no es guía de implementación para el MVP actual.
