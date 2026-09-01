# Modelo de Datos

Estructuras de contenido para la landing. **No hay base de datos** en el MVP; los
tipos viven en TypeScript (`src/types`, `src/content`).

## Entidades de contenido

### `Service` (Servicio)

Oferta del catálogo informativo.
_Implementación:_ `src/types/service.ts`, `src/content/services.ts`

| Campo         | Tipo      | Descripción                           |
| ------------- | --------- | ------------------------------------- |
| `slug`        | `string`  | URL amigable (`tunel-infinito`)       |
| `name`        | `string`  | Nombre comercial                      |
| `description` | `string`  | Texto para la web                     |
| `category`    | `string`  | Agrupación en el listado              |
| `priceFrom`   | `number?` | Precio orientativo «desde» (opcional) |

### Mensaje WhatsApp (conceptual)

Se construye al vuelo con `buildWhatsAppUrl()`:

| Campo                                    | Origen                                         |
| ---------------------------------------- | ---------------------------------------------- |
| Número                                   | `NEXT_PUBLIC_WHATSAPP_NUMBER`                  |
| Fecha / hora preferida                   | Calendario UI                                  |
| Servicios                                | `/cotizar` o detalle                           |
| Tipo evento, invitados, nombre, teléfono | Pasos del asistente                            |
| Texto final                              | Plantilla en `src/lib/whatsapp.ts` (por crear) |

## Fuera de alcance actual

- `QuoteRequest` multi-campo con persistencia (ver `src/schemas/quote.ts` — legacy).
- Calendario y slots (`calendar-data.ts` — a eliminar).
- Entidades JPA / PostgreSQL — ver sección diferida en [API-Contract.md](API-Contract.md).

## Diagrama futuro (solo referencia)

Si en el futuro se implementa backend para leads o cotizaciones, el modelo
relacional previsto (Cliente, Servicio, Cotización) sigue documentado como borrador
en versiones anteriores del repo; no es guía de implementación para el MVP actual.
