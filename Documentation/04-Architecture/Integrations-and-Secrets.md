# Integraciones y secretos

## Dominio y URL canónica

| Concepto                         | Valor                                            |
| -------------------------------- | ------------------------------------------------ |
| Dominio oficial                  | `misterfiestas.com`                              |
| URL canónica                     | `https://misterfiestas.com`                      |
| Variable de entorno (producción) | `NEXT_PUBLIC_SITE_URL=https://misterfiestas.com` |

## WhatsApp (conversión principal — gratis)

| Variable                      | Uso                     | Quién provee el valor             |
| ----------------------------- | ----------------------- | --------------------------------- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `wa.me/<número>?text=…` | **Sebastián** + dueño del negocio |

- La web **recolecta** datos; el **envío** ocurre cuando el usuario pulsa Enviar en WhatsApp.
- Plantilla del mensaje: [WhatsApp-Assistant.md](../01-Product/WhatsApp-Assistant.md) (aprobar con Sebastián).
- Implementación en código: Fase 4 **pausada**. El número **no está configurado** en el
  repositorio. `/cotizar` genera `wa.me/?text=…` sin destinatario.
- No afirmar que el número vive en `.env.local` versionado: ese archivo no se commitea.

## Reglas

- Copiar `.env.example` como `.env.local` solo para desarrollo.
- Nunca confirmar secretos en Git.
- Las variables `NEXT_PUBLIC_` son visibles en el navegador.

## Orden de activación (MVP)

1. ~~Dominio~~ → `https://misterfiestas.com`. Siguiente: DNS/SSL.
2. **WhatsApp:** número del negocio y plantillas de mensaje.
3. **GA4** y Search Console.
4. Maps en contacto (opcional).
5. Cloudinary (opcional si la galería crece mucho).

## Fuentes de contenido externo

### Instagram — galería

- Implementación en `backend/` (Mario, v0.1): Graph API → cache en BD →
  `GET /api/v1/gallery`. El frontend usa `NEXT_PUBLIC_API_URL`.
- Si la API no responde, `/galeria` muestra ejemplos locales (`src/content/gallery-demo.ts`).
- Instagram no es dependencia obligatoria para publicar la landing.
- Tokens (`INSTAGRAM_ACCESS_TOKEN`, `INSTAGRAM_USER_ID`) viven en `backend/.env`,
  nunca en Markdown ni en variables `NEXT_PUBLIC_`.
- `POST /api/v1/gallery/sync` está público en desarrollo; hay que restringirlo
  antes de producción.

### Google Maps — testimonios

- Google Maps es la fuente candidata para testimonios reales, todavía por confirmar.
- Solo se publicarán reseñas verificadas con la atribución requerida por la fuente utilizada.
- La integración técnica se decidirá después de validar el contenido y el método de acceso.

## Post-MVP (no activar ahora)

- Pasarelas de pago (Stripe, Azul, CardNET).
- WhatsApp Business API.
- Persistencia de leads y webhooks.

Las claves `STRIPE_*`, `AZUL_*`, `CARDNET_*`, `DATABASE_URL` y `JWT_SECRET` en
`.env.example` corresponden a ese futuro. `NEXT_PUBLIC_API_URL` sí se usa para
la galería (opcional).
