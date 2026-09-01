# MisterFiestas

Landing page oficial de Mister Fiestas — [misterfiestas.com](https://misterfiestas.com).

Presenta servicios y **recolecta** fecha, servicios y datos del visitante; al final
abre **WhatsApp con el mensaje listo** para enviar (Fase 4 en código: pausada).

Documentación del equipo: [Documentation/03-Team/Responsibilities.md](Documentation/03-Team/Responsibilities.md)

## Prerequisitos e Inicio rápido

Asegúrate de tener instalados Node.js (v22+) y `pnpm`.

```bash
git switch dev
git pull origin dev
pnpm install
pnpm run dev
```

Abre `http://localhost:3000` en tu navegador.

### Comandos útiles

```bash
pnpm run build       # Construir para producción
pnpm run lint        # Verificar errores de código
pnpm run typecheck   # Verificar tipado estricto
pnpm run format      # Formatear el código con Prettier
```

> **Importante:** Antes de escribir código, por favor lee la [Guía de Contribución](CONTRIBUTING.md) para conocer nuestras convenciones de Git y formateo.

## Estructura

- `src/app/`: rutas y estilos globales de Next.js.
- `src/components/`: componentes reutilizables.
- `src/content/`: contenido estático tipado del negocio.
- `src/lib/`: utilidades e integraciones.
- `src/types/`: tipos compartidos.
- `public/images/`: imágenes publicadas por el sitio.
- `Documentation/`: producto, diseño, equipo y decisiones técnicas.

La documentación comienza en [Documentation/README.md](Documentation/README.md).

## Configuración

```bash
cp .env.example .env.local
```

Completa `NEXT_PUBLIC_SITE_URL` y, cuando exista, `NEXT_PUBLIC_WHATSAPP_NUMBER`.
`NEXT_PUBLIC_API_URL` apunta al backend de galería (opcional). Si no responde,
`/galeria` muestra ejemplos locales. Pagos, JWT y `DATABASE_URL` del frontend
son legado post-MVP.

La API Java está en [`backend/`](backend/README.md). No hace falta para cotizar.
