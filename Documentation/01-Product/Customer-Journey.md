# Recorrido del cliente

Especificación detallada de campos y plantilla:
[WhatsApp-Assistant.md](WhatsApp-Assistant.md).

## Flujo principal — recolección web → WhatsApp

1. Descubre Mister Fiestas (Google, redes, recomendación).
2. Explora la landing: servicios, galería, testimonios.
3. Inicia el asistente (desde Home, `/cotizar`, detalle de servicio o calendario).
4. **Selecciona en la web:**
   - Fecha preferida (y opcionalmente hora).
   - Servicios o paquetes de interés.
   - Tipo de evento (particular / empresa).
   - Datos básicos: nombre, teléfono, invitados, comentarios.
5. Revisa un resumen y pulsa **«Continuar en WhatsApp»**.
6. Se abre WhatsApp con el **mensaje ya escrito**; el usuario solo presiona **Enviar**.
7. El dueño responde: confirma disponibilidad, precio, depósito y cierre.

```text
Web (guiar + resumir)          WhatsApp (cerrar venta)
─────────────────────          ──────────────────────
Elegir fecha preferida    →    Confirmar si hay disponibilidad
Elegir servicios          →    Cotizar y negociar
Ver resumen               →    Pago y condiciones
Abrir wa.me prellenado    →    Conversación humana
```

## CTAs rápidos (sin asistente)

En hero, footer o detalle de un solo servicio también puede haber enlaces directos
a WhatsApp con mensaje corto prellenado (ej. «Hola, me interesa el Túnel Infinito»).

## Rol de la web vs WhatsApp

| En la web                                  | En WhatsApp                               |
| ------------------------------------------ | ----------------------------------------- |
| Presentar servicios y precios orientativos | Confirmar fecha y disponibilidad **real** |
| Ayudar a elegir fecha y servicios          | Cotizar, traslados y condiciones          |
| Armar el mensaje prellenado                | Atención personalizada y cierre           |
| Mostrar galería y testimonios              | Depósito y pago                           |

## Ejemplo de mensaje prellenado

```text
Hola, vengo desde misterfiestas.com y me gustaría cotizar:

• Fecha preferida: 15 de noviembre de 2026, 18:00
• Tipo de evento: Cumpleaños
• Servicios: Túnel Infinito, DJ
• Invitados: ~80
• Nombre: Juan Pérez
• Teléfono: 809-555-0199

Comentarios: Evento en Santo Domingo Este.
```

El cliente edita el mensaje en WhatsApp si quiere antes de enviar.

## Aclaración UX (importante)

- El calendario **no reserva** ni bloquea fechas.
- Textos como «Reserva enviada» deben cambiarse por «Te redirigimos a WhatsApp» o similar.
- Colores de disponibilidad en el calendario (si se mantienen) son **orientativos** o
  demo hasta que exista integración real (post-MVP).
