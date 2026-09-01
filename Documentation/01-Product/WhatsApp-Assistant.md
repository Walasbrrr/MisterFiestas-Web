# Asistente web → WhatsApp

Especificación del flujo de **recolección de información en la web** y envío al
**mensaje de WhatsApp** prellenado. Implementación en código: **pausada**; la
documentación define el comportamiento acordado.

**Costo:** gratis — enlaces `wa.me` + número WhatsApp del negocio. Sin WhatsApp Business API.

---

## Qué hace la web

1. **Recolecta** datos del visitante en pantallas guiadas (calendario, servicios, formulario).
2. **Resume** lo elegido antes de salir del sitio.
3. **Construye** un texto en español con todos los campos.
4. **Abre** `https://wa.me/<número>?text=<mensaje codificado>`.
5. El usuario **revisa, edita si quiere y pulsa Enviar** en WhatsApp.

La web **no guarda** la solicitud en base de datos ni confirma la reserva.

---

## Campos a recolectar

| Campo                   | Obligatorio | Dónde se captura                  | Va en el mensaje |
| ----------------------- | ----------- | --------------------------------- | ---------------- |
| Fecha preferida         | Sí          | Calendario / paso 1               | Sí               |
| Hora preferida          | Recomendado | Calendario / paso 1               | Sí               |
| Servicios               | Sí (≥1)     | `/cotizar`, detalle, carrito demo | Sí               |
| Tipo de evento          | Sí          | Asistente                         | Sí               |
| Particular / Empresa    | Sí          | Asistente                         | Sí               |
| Nombre                  | Sí          | Asistente                         | Sí               |
| Teléfono                | Sí          | Asistente                         | Sí               |
| Email                   | Opcional    | Asistente                         | Sí si existe     |
| Invitados               | Recomendado | Asistente                         | Sí               |
| Empresa + RNC           | Si B2B      | Asistente                         | Sí               |
| Comentarios / ubicación | Opcional    | Asistente                         | Sí               |

---

## Plantilla del mensaje (borrador — validar con el cliente)

```text
Hola, vengo desde misterfiestas.com y me gustaría cotizar:

📅 Fecha preferida: {fecha} {hora}
🎉 Tipo de evento: {tipoEvento}
🎈 Servicios: {listaServicios}
👥 Invitados: {invitados}
👤 Nombre: {nombre}
📱 Teléfono: {telefono}
{emailLinea}
{empresaLinea}
💬 Comentarios: {comentarios}

Quedo atento/a. Gracias.
```

- `{emailLinea}`: `📧 Email: …` solo si el usuario lo ingresó.
- `{empresaLinea}`: `🏢 Empresa: … · RNC: …` solo en flujo B2B.

**Responsable de aprobar el texto final:** Sebastián (copy) + dueño del negocio.

**Responsable de implementar la plantilla en código:** Walen (cuando se retome Fase 4).

---

## Puntos de entrada en el sitio

| Origen                     | Datos que ya lleva el mensaje                |
| -------------------------- | -------------------------------------------- |
| Home — calendario          | Fecha (y hora si aplica)                     |
| Home — FAB / modal reserva | Fecha + datos del modal                      |
| `/cotizar`                 | Servicios, tipo cliente, logística, contacto |
| `/servicios/[slug]`        | Servicio preseleccionado                     |
| Footer / hero CTA rápido   | Solo saludo + servicio o sección             |

Todos deben usar el **mismo helper** (`buildWhatsAppUrl`) para formato consistente.

---

## Reglas UX (obligatorias)

- Nunca mostrar «Reserva confirmada» ni «Pago procesado».
- Botón final: **«Continuar en WhatsApp»** o **«Enviar por WhatsApp»**.
- Aviso visible: _La fecha es preferida; confirmamos disponibilidad por WhatsApp._
- En móvil: abrir WhatsApp app; en desktop: WhatsApp Web o QR según el dispositivo.

---

## Configuración

| Variable                      | Ejemplo                             | Quién la provee               |
| ----------------------------- | ----------------------------------- | ----------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `18095551234` (sin `+` ni espacios) | Sebastián + dueño del negocio |

Ver [Integrations-and-Secrets.md](../04-Architecture/Integrations-and-Secrets.md).

---

## Estado de implementación

| Ítem                                      | Estado                           |
| ----------------------------------------- | -------------------------------- |
| UI calendario + modal (`ReservationForm`) | ✅ Existe; falta cierre WhatsApp |
| `/cotizar` multi-paso                     | ✅ Existe; falta cierre WhatsApp |
| Helper `buildWhatsAppUrl`                 | ⏸ Pausado                        |
| Copy «Continuar en WhatsApp»              | ⏸ Pausado                        |
| Número en `.env` producción               | ⏳ Pendiente del cliente         |

Roadmap: [Git-Workflow.md](../00-Project/Git-Workflow.md) — Fase 4.
