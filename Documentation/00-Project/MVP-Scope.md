# Alcance del MVP

## Objetivo

Publicar una **landing page** móvil y profesional que presente los servicios reales
de Mister Fiestas, genere confianza y convierta visitas en **conversaciones por
WhatsApp** con el dueño del negocio.

La web **no** procesa pagos ni confirma reservas. Su trabajo es informar, inspirar
y **armar un mensaje de WhatsApp** para que el cliente solo pulse enviar.

## Incluido

- Home con propuesta de valor, spotlight del Túnel Infinito LED, servicios
  destacados, prueba social, calendario de fecha preferida y CTAs a `/cotizar`.
- Catálogo informativo de servicios (`/servicios` y detalle por slug), con 14
  ítems publicados y el resto marcado `outOfCatalog`.
- Páginas de contexto: eventos, empresas, galería, nosotros y contacto (copy real
  pendiente en varias). `/tienda` no es tienda: redirect a `/cotizar`.
- Galería: feed de Instagram vía `backend/` si está disponible; si no, ejemplos
  locales. Material real sigue a cargo de Sebastián.
- Google Maps como fuente candidata de testimonios reales; confirmar su viabilidad y
  requisitos de atribución antes de publicar reseñas.
- Precios orientativos en RD$ (y planes) tomados del catálogo oficial; el monto
  final se confirma en WhatsApp. Sin checkout.
- **Asistente de contacto:** el usuario elige fecha, servicios y datos básicos; la web
  genera un **mensaje prellenado** y abre WhatsApp (`wa.me`) para que solo confirme
  con «Enviar».
- Selector de fecha (calendario UI) como **preferencia del cliente**, no como reserva
  confirmada. La disponibilidad real se valida en WhatsApp.
- SEO local, analítica, diseño responsive y modo oscuro.

## Fuera del MVP

- E-commerce, tienda online, carrito y checkout.
- Pagos en la web (Stripe, Azul, CardNET, etc.).
- Confirmación automática de reserva o bloqueo de fechas en base de datos.
- Backend, base de datos, panel administrativo y API.
- Inventario, cuentas de clientes y sincronización con calendario real (Google Calendar, etc.).

## Criterio de éxito

Un visitante entiende la oferta, arma su solicitud en la web (fecha + servicios) y
**abre WhatsApp con el mensaje listo** para iniciar la conversación con el dueño.

## Componentes existentes (reutilizar, no eliminar)

El calendario, selector de servicios y flujos multi-paso (`/cotizar`, `ReservationForm`,
`InlineCalendar`) **recolectan datos en la web** y deben terminar en mensaje WhatsApp.
Spec: [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md). Implementación en
código: **pausada** (Fase 4).
