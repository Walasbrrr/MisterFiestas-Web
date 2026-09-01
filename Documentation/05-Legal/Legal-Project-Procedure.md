# Procedimiento: qué debe tener el proyecto

**Versión:** 1.0  
**Para:** equipo (Walen) antes de publicar y cada vez que se sube contenido.  
**Sitio:** landing. Sin pagos, sin cuentas, sin subida de fotos.

Documentos: [acuerdo](Content-Authorization-Agreement.md) · [guía](Legal-and-Content-Compliance.md)

Esto es la lista corta. Si está marcada, el equipo está cubierto para una landing.

---

## 1. Una vez (antes del primer publish)

| #   | Qué                                                                                                                               | Quién             | Hecho |
| --- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ----- |
| 1.1 | Enviar el [acuerdo 1.1](Content-Authorization-Agreement.md) **por correo** al dueño (PDF o este Markdown).                        | Walen             | [ ]   |
| 1.2 | El dueño **responde el mismo hilo** pegando el texto de aceptación, sin cambiarlo.                                                | Dueño             | [ ]   |
| 1.3 | Guardar ese correo (remitente, fecha, cuerpo) y una copia de la versión 1.1. No editar el acuerdo después.                        | Walen             | [ ]   |
| 1.4 | Número de WhatsApp de producción en `.env.local` / hosting (`NEXT_PUBLIC_WHATSAPP_NUMBER`). No commitear el número si no quieren. | Sebastián + Walen | [ ]   |

Sin 1.1–1.3 no se publican fotos, logos ni testimonios del negocio.

---

## 2. Lo que la landing tiene que decir (copy)

| #   | Qué                                                                                                                | Dónde                          | Hecho |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------ | ----- |
| 2.1 | Aviso de una línea junto al CTA de WhatsApp: enviar el mensaje **no reserva** ni es un pago.                       | `/cotizar` y cualquier `wa.me` | [ ]   |
| 2.2 | Nada de “reserva confirmada”, “reserva enviada” ni “pago procesado”. Usar fecha preferida / continuar en WhatsApp. | Home, calendario, modal        | [ ]   |
| 2.3 | El calendario no se presenta como agenda real (los días “ocupados” son demo).                                      | Home                           | [ ]   |
| 2.4 | Galería: no decir “eventos reales” hasta tener fotos **aprobadas por correo**.                                     | `/galeria`                     | [ ]   |
| 2.5 | Testimonios: reales y autorizados, o marcados ilustrativos. Nada de marcas (bancos, etc.) sin permiso.             | Home                           | [ ]   |

---

## 3. Cada vez que entra contenido nuevo

El dueño **no sube** a la web. Entrega por correo, Drive o WhatsApp. El equipo publica.

```text
Dueño envía el material
        ↓
Se anota qué archivo, quién lo mandó, fecha
        ↓
Dueño confirma por correo que puede usarse
        ↓
Se publica
        ↓
Se guarda el correo de aprobación
```

| #   | Qué                                                                                          | Hecho |
| --- | -------------------------------------------------------------------------------------------- | ----- |
| 3.1 | El lote está aprobado por correo (quién, qué, cuándo).                                       | [ ]   |
| 3.2 | Si hay personas identificables o menores, el dueño lo declaró en el acuerdo / en ese correo. | [ ]   |
| 3.3 | Si es IA, no va como evento real (aviso o no se publica).                                    | [ ]   |

---

## 4. Técnico (no negociable, tampoco es un MVP)

| #   | Qué                                                                                                       | Hecho |
| --- | --------------------------------------------------------------------------------------------------------- | ----- |
| 4.1 | Token de Instagram y secretos **solo** en el servidor. Nunca `NEXT_PUBLIC_`.                              | [ ]   |
| 4.2 | La web no guarda solicitudes ni fotos de visitantes (no hay upload).                                      | [ ]   |
| 4.3 | Si la app de Instagram/Meta queda **pública**, entonces sí una página corta `/eliminar-datos`. Si no, no. | [ ]   |
| 4.4 | `/privacidad` de un párrafo en el footer: opcional, cuando haya WhatsApp de producción.                   | [ ]   |

---

## 5. Si alguien reclama una foto

1. Ocultarla el mismo día.
2. Avisar al dueño por correo.
3. Pedir el permiso o dejarla fuera.
4. No discutir en público.
5. Anotar la decisión.

---

## 6. Qué no hay que construir

No bloquear el lanzamiento por esto:

- casilla de “autorizo esta foto” (no hay foto);
- panel de firma;
- banner de cookies;
- términos de tienda;
- aviso “esta página se hizo con IA”;
- cuentas, pagos, reservas automáticas.

---

## Listo para publicar

Marcar **1.1–1.3** y **2.1–2.5**. El resto se va completando con el contenido.

Si más adelante hay pagos, Pixel o Analytics no esencial, volver a la [guía](Legal-and-Content-Compliance.md) y revisar. Hasta entonces, este procedimiento es suficiente.
