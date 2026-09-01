# Glosario de Negocio

Términos del dominio de negocio de MisterFiestas. La web es informativa; la venta
y coordinación ocurren en WhatsApp.

## Servicios clave

- **Túnel Infinito LED:** Experiencia visual e inmersiva (fotos, video, efectos).
  Es el servicio de mayor rentabilidad y la **prioridad comercial principal**.
  Slug: `tunel-infinito`.
- **Mariachis:** Mariachi Express y Mariachi Trío. Música en vivo dentro de la
  oferta, sin prioridad por encima del Túnel Infinito.
- **Fotografía / booths:** VideoBooth 360, Photo Booth “La Cajita Negra”, Selfie
  Booth, Salsa Booth, Túnel Espejado LED.
- **Navidad:** Servicios de temporada (`seasonal`): cabina espejada, Santa,
  conjunto típico, hora loca y sonido navideños.

Catálogo publicado: [Catalog-and-Pricing.md](Catalog-and-Pricing.md).

## Agrupaciones

- **Combos / Paquetes:** Agrupación de servicios con condiciones específicas. Se
  **presentarían** en la web si el negocio los aprueba; **aún no hay página
  publicada**. La contratación se acuerda por WhatsApp.
- **Servicios individuales:** Ofertas unitarias del catálogo (mariachis, booths,
  túneles, shows de temporada).

## Segmentos

- **B2C / Particulares:** Bodas, cumpleaños, baby showers, gender reveals,
  graduaciones.
- **B2B / Corporativos:** Activaciones, ferias, eventos de empresa. En WhatsApp puede
  pedirse nombre de empresa y RNC si aplica factura.

## Cotización y contacto

- **Asistente WhatsApp:** Recolección en la web → mensaje en `wa.me`. Spec:
  [WhatsApp-Assistant.md](WhatsApp-Assistant.md). Implementación en código: Fase 4
  pausada (falta número de producción y helper unificado).
- **CTA WhatsApp rápido:** Enlace directo con texto corto (servicio o sección).
- **Fecha preferida:** La elige el usuario en el calendario UI; **no** implica reserva
  confirmada hasta que el dueño responda en WhatsApp.
- **Precio orientativo:** “Desde RD$X” o planes por duración; precio final en WhatsApp.
- **Recargos por provincia:** Se negocian en la conversación, no en la web.

## Términos descartados

- ~~Checkout / pago en la web~~ — fuera de alcance.
- ~~Carrito / tienda online~~ — fuera de alcance. `/tienda` solo redirige a `/cotizar`.
- ~~Reserva confirmada automáticamente~~ — no hay backend ni bloqueo de agenda.
