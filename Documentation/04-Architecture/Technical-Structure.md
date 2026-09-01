# Estructura técnica

## Decisión actual

Una sola aplicación **Next.js** en la raíz del repositorio. Contenido comercial en
`src/content/` y componentes en `src/components/`. Sin backend ni base de datos para
el lanzamiento de la landing.

```text
mister-fiestas/
├── backend/            # Reservado; no requerido para el MVP
├── Documentation/
├── public/
│   └── images/
├── src/
│   ├── app/            # Rutas (landing, servicios, galería, etc.)
│   ├── components/
│   ├── content/        # Servicios y textos tipados
│   ├── lib/            # site config, nav, helpers WhatsApp
│   └── types/
├── package.json
└── README.md
```

## Conversión

La lógica de negocio de cotización, reserva y pago **no vive en el frontend**. La
web enlaza a WhatsApp; el dueño cierra en el canal habitual.

## Evolución post-MVP

Si más adelante se necesita persistir leads, inventario o pagos, se evaluará
`backend/` (Spring Boot) y posible separación `apps/web`. No anticipar esa migración
hasta que el negocio lo requiera.
