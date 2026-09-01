# Mapa del sitio

Sitio informativo con conversión en **WhatsApp** (asistente + mensaje prellenado).
Sin tienda, checkout ni confirmación automática de reserva.

```text
Inicio
├── Hero + propuesta de valor
├── Servicios destacados (carrusel / cards)
├── Segmentos (particulares / empresas)
├── Testimonios
├── Galería (enlace)
└── CTA principal → WhatsApp

Servicios
├── Listado por categoría
└── Detalle por servicio (/servicios/[slug])
    └── CTA → WhatsApp (mensaje con servicio prellenado)

Eventos particulares          [informativo]
├── Cumpleaños, bodas, baby shower, etc.
└── CTA → WhatsApp

Empresas                      [informativo]
├── Corporativos, activaciones, ferias
└── CTA → WhatsApp

Galería
└── Fotos por tipo de evento + CTA → WhatsApp

Nosotros
└── Historia, valores, confianza

Contacto
├── Asistente (fecha + servicios + datos) → WhatsApp prellenado
├── CTA rápido WhatsApp
├── Teléfono / email (opcional)
└── Redes sociales
```

## Rutas del asistente

| Ruta / componente         | Rol                                     |
| ------------------------- | --------------------------------------- |
| `/cotizar`                | Asistente multi-paso → mensaje WhatsApp |
| Home — calendario + modal | Atajo: fecha → mismo flujo o WhatsApp   |
| `/servicios/[slug]`       | CTA con servicio ya en el mensaje       |

## Fuera del mapa (descartado)

- `/tienda` con compra — no e-commerce. La ruta se conserva únicamente como
  redirección permanente a `/cotizar`.
- Checkout, depósitos y confirmación automática de reserva.
- Persistencia de solicitudes en base de datos (MVP).

## Conversión

Cada página relevante debe tener al menos un CTA visible hacia WhatsApp. El mensaje
puede incluir servicio, tipo de evento o sección de origen para facilitar la
atención manual.
