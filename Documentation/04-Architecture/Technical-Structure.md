# Estructura técnica

## Decisión actual

Una aplicación **Next.js** en la raíz. Contenido comercial en `src/content/`.
La conversión sigue siendo WhatsApp. `backend/` (Spring Boot) es **opcional**:
sirve el feed de Instagram para `/galeria`. La landing arranca sin él.

```text
mister-fiestas/
├── backend/            # API galería Instagram (opcional para el MVP)
├── Documentation/
├── public/
│   └── images/
├── src/
│   ├── app/            # Rutas (landing, servicios, cotizar, galería, …)
│   ├── components/
│   ├── content/        # Catálogo tipado (services.ts)
│   ├── lib/            # site config, nav, URL de API; helper WhatsApp pendiente
│   └── types/
├── package.json
└── README.md
```

`src/app/tienda/page.tsx` solo hace redirect permanente a `/cotizar`.

## Conversión

La lógica de cobro y confirmación de fecha **no vive en el frontend**. `/cotizar`
y el calendario recolectan datos; el dueño cierra en WhatsApp. El helper
`buildWhatsAppUrl` aún no existe.

## Evolución post-MVP

Leads, inventario o pagos se evaluarían **ampliando** este `backend/`, no
como requisito para publicar la landing.
