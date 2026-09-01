# Mister Fiestas

Landing page para Mister Fiestas. La web **recolecta** fecha, servicios y datos del
visitante; al final abre **WhatsApp con el mensaje armado** (implementación Fase 4
pausada).

## Dominio oficial

- **Dominio:** [misterfiestas.com](https://misterfiestas.com)
- **URL canónica:** `https://misterfiestas.com`
- En producción, `NEXT_PUBLIC_SITE_URL` debe apuntar a esa URL (metadata, sitemap y robots).

## Estado actual

- Etapa digital: beta / iteración de contenido y diseño.
- Equipo: Walen, Sebastian, Mario y David.
- Stack: Next.js en la raíz del repositorio; contenido estático tipado en `src/content/`.
- Dirección de producto (ago. 2026): **landing informativa + WhatsApp**, sin e-commerce.
- Catálogo oficial en código (14 servicios publicados): fotografía/booths, mariachis y
  temporada navideña. Ver [Catalog-and-Pricing.md](../01-Product/Catalog-and-Pricing.md).
- Prioridad comercial principal: **Túnel Infinito LED**.

## Alcance del sitio

- **Servicios publicados:** VideoBooth 360, booths (Cajita Negra, Selfie, Salsa),
  Túnel Infinito LED, Túnel Espejado LED, mariachis (Express y Trío) y pack de
  Navidad. Ítems legacy (DJ, catering, inflables, etc.) están `outOfCatalog`.
- **Segmentos:** cumpleaños, bodas, baby showers, gender reveals, graduaciones y
  eventos empresariales.
- **Secciones:** inicio, servicios, cotizar, eventos, empresas, galería, nosotros y
  contacto. `/tienda` redirige a `/cotizar`.
- **Conversión:** asistente en `/cotizar` y calendario en Home. El cierre `wa.me`
  unificado (número + plantilla) está **pausado** en Fase 4.
- **Experiencia:** entrada desde Google, propuesta clara, navegación visual,
  animaciones de scroll, fotos y confianza (testimonios, galería).

## Qué no es este proyecto

- No es una tienda online ni un sistema de reservas.
- No cobra depósitos ni confirma fechas automáticamente.
- No requiere backend ni base de datos para el lanzamiento.

## Notas del proyecto

- [Alcance del MVP](MVP-Scope.md)
- [Asistente WhatsApp (spec)](../01-Product/WhatsApp-Assistant.md)
- [Responsabilidades del equipo](../03-Team/Responsibilities.md)
- [Mapa del sitio](../01-Product/Site-Map.md)
- [Flujo del cliente](../01-Product/Customer-Journey.md)
- [Estructura técnica](../04-Architecture/Technical-Structure.md)
- [Equipo](../03-Team/Team.md)
- [Inspiración visual](../02-Design/Visual-Inspiration.md)

## Próximos pasos

- Mantener CI como diagnóstico no bloqueante en `dev` y resolver sus fallos antes de promover a `main`.
- Apuntar DNS/hosting y `NEXT_PUBLIC_SITE_URL` a `https://misterfiestas.com`.
- Completar contenido real: Sebastián coordina assets; se evaluará Instagram para la galería y se cargarán manualmente las imágenes restantes.
- Evaluar Google Maps como fuente de reseñas reales para sustituir los testimonios demo.
- Simplificar copy legacy («reserva enviada») y conectar paso final a WhatsApp prellenado.
- Unificar CTAs hacia WhatsApp con mensaje prellenado.

## Contexto del negocio

- Mister Fiestas ya presta servicios actualmente.
- El sitio presenta la oferta real, genera confianza y deriva al canal comercial
  actual (WhatsApp con el dueño).
- Catálogo, precios, fotografías y testimonios deben levantarse de la operación
  real, sin inventar información.
