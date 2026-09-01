# Catálogo y Precios

Oferta publicada en la landing. La fuente en código es `src/content/services.ts`
(transcrita del archivo `Catalogo_Servicios_Mister_Fiestas.docx`). Solo se lista
en `/servicios` lo que **no** tiene `outOfCatalog`.

Los precios son **orientativos en RD$**. El monto final (traslados, horas extra,
condiciones del espacio) se confirma por WhatsApp. No hay carrito, checkout ni
reserva automática.

## Cómo se muestran los precios en la web

| Modo en web             | Significado                                           |
| ----------------------- | ----------------------------------------------------- |
| **Desde RD$X**          | Precio orientativo; el final se confirma en WhatsApp. |
| **Planes**              | Tarifas por duración o paquete (Sencillo, VIP, Full). |
| **Consultar**           | Sin precio público; CTA a WhatsApp.                   |
| **Incluido en paquete** | Solo descriptivo; sin compra en línea.                |

## Prioridad comercial

El **Túnel Infinito LED** (`/servicios/tunel-infinito`) es la prioridad comercial
principal: Home (spotlight), catálogo (`featured`) y CTAs. El nombre comercial en
código es «Túnel Infinito LED»; el slug se mantiene `tunel-infinito`.

## Catálogo publicado (14 servicios)

| Servicio                               | Categoría  | Slug                          | Desde (RD$) | Notas                        |
| -------------------------------------- | ---------- | ----------------------------- | ----------: | ---------------------------- |
| Mariachi Express                       | Música     | `mariachi-express`            |       3,995 | Presentación breve           |
| Mariachi Trío                          | Música     | `mariachi-trio`               |       7,995 | ~30 minutos                  |
| VideoBooth 360                         | Fotografía | `videobooth-360`              |       7,995 | Planes Sencillo / VIP / Full |
| Photo Booth “La Cajita Negra”          | Fotografía | `photo-booth-cajita-negra`    |      12,495 | 1 hora o evento completo     |
| Selfie Booth                           | Fotografía | `selfie-booth`                |      16,495 | Mínimo 2 horas               |
| Salsa Booth                            | Fotografía | `salsa-booth`                 |      18,495 | 2 horas o evento completo    |
| **Túnel Infinito LED**                 | Fotografía | `tunel-infinito`              |      29,995 | Destacado · prioridad        |
| Túnel Espejado LED                     | Fotografía | `tunel-espejado-led`          |      29,995 | Evento completo              |
| Cabina Espejada Navideña               | Navidad    | `cabina-espejada-navidena`    |      34,995 | Temporada                    |
| Visita de Santa Claus y Duende         | Navidad    | `visita-santa-claus-duende`   |       6,495 | Temporada · 1 hora           |
| Conjunto Típico Navideño               | Navidad    | `conjunto-tipico-navideno`    |      12,995 | Temporada · 1 hora           |
| Santa Claus + Conjunto Típico Navideño | Navidad    | `santa-claus-conjunto-tipico` |      16,495 | Temporada · 1 hora           |
| Hora Loca Navideña                     | Navidad    | `hora-loca-navidena`          |      18,995 | Temporada · 45 min           |
| Sonido e Iluminación Navideña          | Navidad    | `sonido-iluminacion-navidena` |      12,495 | Temporada · 5 horas          |

Detalle (incluye, extras, requisitos de instalación, planes): página
`/servicios/[slug]` y el objeto correspondiente en `src/content/services.ts`.

## Fuera de listado (`outOfCatalog`)

Quedan en código para no romper slugs antiguos; **no aparecen** en `/servicios`:

DJ, Animación, Hora loca, Decoración, Photobooth, Inflables, Sonido e iluminación,
Catering, Pirotecnia, Máquina de humo, Máquina de confeti.

## Combos / paquetes

No hay página de paquetes ni agrupaciones publicadas. La Home invita a armar la
solicitud en `/cotizar`. Si el negocio aprueba combos, irían a una ruta
informativa (`/paquetes` o sección en `/servicios`), nunca a una tienda.

## Datos por servicio (modelo)

Campos en `src/types/service.ts`: nombre, descripción, categoría, `priceFrom`,
planes, extras, incluye, requisitos de instalación, `idealFor`, `seasonal`,
`featured`, `outOfCatalog`.

Fotografías propias autorizadas: **pendientes** (galería y fichas siguen con
material demo o placeholder).

## Tareas pendientes con el cliente

- [x] Publicar catálogo activo en `src/content/services.ts` (Sebastián, ago. 2026).
- [ ] Confirmar combos/paquetes reales, si aplican.
- [ ] Sebastián coordina fotografías y accesos necesarios del negocio.
- [ ] Evaluar Instagram como fuente para la galería; mantener carga manual como alternativa.
- [ ] Evaluar Google Maps como fuente de testimonios y validar acceso, texto, autor y atribución.
- [ ] Definir número de WhatsApp de producción y plantilla de mensaje prellenado.
