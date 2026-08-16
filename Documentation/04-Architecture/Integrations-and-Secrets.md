# Integraciones y secretos

## Reglas

- Copiar `.env.example` como `.env.local` solo para desarrollo.
- Nunca confirmar secretos, tokens o credenciales en Git.
- Las variables `NEXT_PUBLIC_` son visibles en el navegador.
- Las claves privadas de pagos y JWT pertenecen al backend.
- Validar la firma de cada webhook de pagos.
- Restringir Google Maps por dominio y API habilitada.
- Usar cargas firmadas de Cloudinary cuando el navegador suba archivos.

## Orden de activación

1. Dominio, URL canónica, Search Console y GA4.
2. Maps si la ubicación agrega valor al flujo comercial.
3. Cloudinary cuando exista gestión de galería.
4. Pagos después de aprobar depósito, cancelaciones, moneda e impuestos.
5. WhatsApp Business API cuando el volumen justifique automatización; el MVP puede
   comenzar con enlaces de WhatsApp.
