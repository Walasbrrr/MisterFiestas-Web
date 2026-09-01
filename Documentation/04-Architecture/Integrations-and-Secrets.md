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
- Implementación en código: Fase 4 **pausada** hasta tener número y plantilla.

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

- Sebastián coordina el material visual y los accesos autorizados del negocio.
- Walen evaluará la integración técnica antes de comprometer el diseño con una API concreta.
- La galería debe admitir imágenes cargadas manualmente; Instagram es una fuente posible, no una dependencia obligatoria.
- Tokens o credenciales de Instagram nunca se guardan en Markdown ni en variables `NEXT_PUBLIC_`.

### Google Maps — testimonios

- Google Maps es la fuente candidata para testimonios reales, todavía por confirmar.
- Solo se publicarán reseñas verificadas con la atribución requerida por la fuente utilizada.
- La integración técnica se decidirá después de validar el contenido y el método de acceso.

## Post-MVP (no activar ahora)

- Pasarelas de pago (Stripe, Azul, CardNET).
- WhatsApp Business API.
- Backend y webhooks.
