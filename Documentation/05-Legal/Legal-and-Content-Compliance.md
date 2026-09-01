# Cumplimiento legal — landing Mister Fiestas

**Versión:** 1.1  
**Última revisión:** 1 de septiembre de 2026  
**Qué es esto:** una landing en República Dominicana. No es un producto con cuentas, pagos ni subida de fotos.

> Guía práctica para el equipo. No sustituye a un abogado si más adelante hay pagos, reservas vinculantes o publicidad comportamental.

**Acuerdo para que el dueño acepte:** [Acuerdo de autorización de contenido](Content-Authorization-Agreement.md)  
**Qué tiene que tener el proyecto:** [Procedimiento](Legal-Project-Procedure.md)

---

## 1. Qué hace (y qué no hace) la página

Hace:

- mostrar servicios y copy;
- dejar armar un mensaje y abrirlo en WhatsApp (`wa.me`);
- mostrar galería si hay fotos aprobadas o, si aplica, un feed de Instagram cacheado en el backend.

No hace:

- cobros ni checkout;
- reserva confirmada;
- cuentas de usuario;
- que el visitante o el dueño **suban imágenes a la web**.

Las fotos las entrega el dueño al equipo por fuera del sitio. El equipo las publica cuando él las apruebe.

---

## 2. Lo mínimo para no cargar con problemas

Esto sí conviene. El resto es ruido para una landing.

### 2.1 Un acuerdo por correo, una vez

Enviar el [acuerdo](Content-Authorization-Agreement.md) al dueño y que **responda el mismo hilo** con el texto exacto. Guardar ese correo (remitente, fecha, cuerpo) y la versión 1.1.

Eso cubre el riesgo grande: fotos, logos y testimonios que el negocio entrega y el equipo publica. Es lo serio. El resto, en una landing, es menor.

### 2.2 Un aviso corto junto a WhatsApp

En `/cotizar` (y cualquier otro `wa.me`), una línea:

> Al continuar, se abre WhatsApp con tu nombre, fecha o servicios elegidos para que Mister Fiestas pueda cotizar. Enviar el mensaje no reserva la fecha ni implica un pago.

No hace falta casilla de foto: **no hay subida de fotos**.

### 2.3 Copy que no mienta

Hoy el calendario y el modal dicen “reserva”, “días reservados” y “¡Reserva enviada!”. Eso es lo más delicado: parece que la web confirma algo que no confirma.

Cambiar a “fecha preferida”, “continuar en WhatsApp”, “solicitud enviada a WhatsApp”. El calendario demo no debe parecer agenda real.

### 2.4 No vender demo como real

- Galería: no decir “eventos reales” hasta tener fotos aprobadas por el dueño.
- Testimonios: o son reales y autorizados, o se marcan como ilustrativos. No usar nombres de empresas (p. ej. un banco) si no hay permiso.
- IA: no publicar imágenes generadas como si fueran un evento de Mister Fiestas.

### 2.5 Instagram, si se usa

Token solo en el servidor. Si la app de Meta queda pública, entonces sí una página corta `/eliminar-datos`. Mientras sea desarrollo local, no es urgente.

Una `/privacidad` de un párrafo en el footer es suficiente cuando haya número de WhatsApp de producción. No hace falta un portal de datos.

---

## 3. Lo que no hace falta en esta landing

- Casilla “autorizo compartir esta foto” (no hay foto).
- Firma en papel.
- Banner de cookies (si solo hay cookies técnicas).
- Términos de e-commerce.
- Aviso “esta página se hizo con IA”.
- Sistema de aprobación en panel admin.

Revisar esto si más adelante hay pagos, Pixel, Analytics no esencial, chatbot o almacenamiento de leads.

---

## 4. Si alguien reclama una foto

1. Ocultarla.
2. Avisar al dueño.
3. Pedir el permiso o retirarla.
4. No discutir en público.

---

## 5. Decisión para este proyecto

1. Aceptación del acuerdo 1.1 **por correo** (una vez). Seguir el [procedimiento](Legal-Project-Procedure.md).
2. Aviso de una línea en el CTA de WhatsApp.
3. Quitar lenguaje de “reserva confirmada”.
4. Publicar solo material que el dueño entregó y aprobó.
5. No subir fotos de visitantes: no existe ese flujo.

Con eso el equipo queda cubierto para una landing. El dueño responde por el material que entrega.
