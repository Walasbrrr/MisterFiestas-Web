# MisterFiestas

Sitio web oficial de Mister Fiestas. El objetivo inicial es presentar la oferta
real del negocio y convertir visitas en solicitudes de cotización calificadas.

## Prerequisitos e Inicio rápido

Asegúrate de tener instalados Node.js (v20+) y `pnpm`.

```bash
# Instalar dependencias
pnpm install

# Iniciar el servidor de desarrollo
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

Completa solo las integraciones que se vayan activando. Las claves privadas de pagos
y autenticación pertenecen al backend, nunca al navegador.
