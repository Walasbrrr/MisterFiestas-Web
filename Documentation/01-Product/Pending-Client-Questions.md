# Decisiones y Respuestas del Cliente (MisterFiestas)

Decisiones clave sobre el modelo de negocio y los flujos operativos.

## Vigentes

1. **Canal principal de conversión:**
   - _Decisión:_ La web es una **landing informativa**. Los clientes contactan al
     dueño por **WhatsApp** para cotizar, reservar fecha y cerrar.

2. **Cálculo de traslados a provincias:**
   - _Decisión:_ No hay cálculo automatizado en la web. El precio de traslado se
     negocia en WhatsApp.

3. **Pagos:**
   - _Decisión (actualizada):_ **No habrá pagos en la web** en el MVP. Pago y
     depósitos se coordinan por WhatsApp con el dueño.

4. **Reservas y fechas:**
   - _Decisión (actualizada):_ **No hay reserva automática en la web.** El usuario
     elige fecha preferida en el asistente; el mensaje va a WhatsApp y el dueño
     confirma disponibilidad manualmente.

5. **Asistente de contacto:**
   - _Decisión:_ La web **recolecta** fecha, servicios y datos del visitante; al
     final se abre WhatsApp con el **mensaje prellenado** (gratis, `wa.me`). El
     cliente solo pulsa Enviar.
   - _Implementación en código:_ **pausada** hasta número WhatsApp + plantilla aprobada.
     Ver [WhatsApp-Assistant.md](WhatsApp-Assistant.md).

6. **Clientes corporativos (B2B):**
   - _Decisión:_ Nombre de empresa y RNC suficientes cuando aplique; se recogen en
     la conversación de WhatsApp.

7. **Dominio del sitio:**
   - _Decisión:_ Dominio oficial **misterfiestas.com**. URL canónica:
     `https://misterfiestas.com`.

8. **Prioridad comercial:**
   - _Decisión:_ El **Túnel Infinito LED** es el servicio principal que debe
     priorizarse visual y comercialmente. Mariachis permanece en la oferta, pero
     no es la prioridad.

9. **Imágenes y galería:**
   - _Decisión:_ Sebastián coordina el material visual. Se investigará una integración
     con Instagram para alimentar parte de la galería; las imágenes restantes se
     incorporarán manualmente y la galería no dependerá por completo de la API.

10. **Testimonios:**
    - _Propuesta por confirmar:_ usar reseñas reales de Google Maps. Antes de
      publicarlas se debe validar el método de acceso, autenticidad, texto y atribución.

11. **Catálogo publicado (ago. 2026):**
    - _Estado:_ 14 servicios reales en `src/content/services.ts` (fotografía,
      mariachis, Navidad). Precios orientativos en RD$. Combos/paquetes y fotos
      de ficha siguen pendientes.

## Supersedidas (dirección anterior)

Las siguientes decisiones quedaron reemplazadas por el pivot a landing + WhatsApp:

- ~~Pago directo en la página web~~
- ~~Reserva confirmada automáticamente en la web (sin pasar por WhatsApp)~~
- ~~Calendario conectado a agenda real / base de datos~~

## Temas en discusión

- Condiciones de depósito y plazos de pago (solo aplican en WhatsApp / operación).
- Texto estándar del mensaje prellenado de WhatsApp por tipo de servicio.
