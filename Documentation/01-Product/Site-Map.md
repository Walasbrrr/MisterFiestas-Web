# Mapa del sitio

Sitio informativo con conversión en **WhatsApp** (asistente + mensaje prellenado).
Sin tienda, checkout ni confirmación automática de reserva.

Navegación principal (`src/lib/nav.ts`): Servicios, Eventos, Empresas, Galería,
Nosotros, Contacto. Cotizar está en el footer y en CTAs (no en `mainNav`).

```text
Inicio
├── Hero + propuesta de valor
├── Spotlight Túnel Infinito LED
├── Servicios destacados (carrusel)
├── Segmentos (particulares / empresas / armar cotización)
├── Testimonios
├── Calendario (fecha preferida) + modal de solicitud
└── CTA → /cotizar

Servicios
├── Listado por categoría (Fotografía, Navidad, Música, …)
│   └── Solo ítems sin outOfCatalog
└── Detalle por servicio (/servicios/[slug])
    └── CTA → /cotizar (WhatsApp unificado: Fase 4)

Eventos particulares          [stub — copy real pendiente]
Empresas                      [stub — copy real pendiente]
Galería                       /galeria — Instagram si hay API; si no, ejemplos
Nosotros                      [stub]
Contacto                      [stub]

Cotizar                       /cotizar
└── Asistente multi-paso (servicios, tipo, datos)
    └── Enlace wa.me con texto (sin número de destino aún)

/tienda                       redirect 301 → /cotizar
```

Páginas legales: no son parte del mapa público todavía. Para una landing basta el
[acuerdo de contenido](../05-Legal/Content-Authorization-Agreement.md) y un aviso
junto a WhatsApp. `/privacidad` o `/eliminar-datos` solo si se publica Instagram
con app de Meta o se quiere un párrafo de privacidad en el footer.

Ver [Cumplimiento legal](../05-Legal/Legal-and-Content-Compliance.md).

## Rutas del asistente

| Ruta / componente         | Rol                                     |
| ------------------------- | --------------------------------------- |
| `/cotizar`                | Asistente multi-paso → mensaje WhatsApp |
| Home — calendario + modal | Atajo: fecha → mismo flujo o WhatsApp   |
| `/servicios/[slug]`       | CTA hacia cotización con el servicio    |

## Fuera del mapa (descartado)

- `/tienda` con compra — no e-commerce. La ruta se conserva únicamente como
  redirección permanente a `/cotizar`.
- Checkout, depósitos y confirmación automática de reserva.
- Persistencia de solicitudes en base de datos (MVP).

## Conversión

Cada página relevante debe tener al menos un CTA visible hacia cotización o
WhatsApp. El mensaje puede incluir servicio, tipo de evento o sección de origen.
Helper unificado `buildWhatsAppUrl`: **pendiente** (Fase 4).
