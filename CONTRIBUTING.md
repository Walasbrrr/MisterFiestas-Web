# Guía de Contribución

¡Bienvenido al repositorio de MisterFiestas! Este documento establece las reglas y convenciones para mantener el código limpio, organizado y fácil de mantener por todos los miembros del equipo.

## Flujo de Trabajo (Git Workflow)

Modelo simple con **dos ramas**, sin ramas `feature/`:

| Rama   | Propósito             | Quién hace push                        |
| ------ | --------------------- | -------------------------------------- |
| `dev`  | Desarrollo del equipo | Sebastián, Mario y David; push directo |
| `main` | Producción            | Solo **Walen**                         |

### Reglas

- Todo el equipo trabaja **directamente en `dev`**: pull, commits y push.
- **No se usan ramas feature.** No hace falta crear ramas por tarea.
- GitHub Actions revisa cada push a `dev`, pero su resultado es **informativo** y no bloquea los commits del equipo.
- Si CI falla, se identifica el paso y la causa, se comunica al equipo y se corrige en el siguiente trabajo disponible.
- Solo Walen promueve cambios de `dev` → `main` cuando están listos para producción.
- La promoción a `main` sí requiere checks locales y CI en verde.
- **Nadie más hace push a `main`.**

Guía paso a paso: [Flujo Diario de Git](Documentation/00-Project/Git-Daily-Flow.md).

### Ciclo rápido (equipo)

```bash
git switch dev
git pull origin dev
# ... editar, commit ...
git push origin dev
```

Revisa el resultado de **GitHub Actions** después del push. Un fallo no bloquea el
trabajo diario en `dev`, pero tampoco debe ignorarse ni promoverse a `main`.

### Ciclo rápido (Walen — producción)

```bash
git switch main
git pull origin main
git merge dev
git push origin main
```

### Convención de Commits (Conventional Commits)

Los mensajes de commit deben seguir la especificación [Conventional Commits](https://www.conventionalcommits.org/):

- `feat: añade sección de testimonios` (Nuevas funcionalidades)
- `fix: corrige validación de teléfono en cotización` (Reparación de bugs)
- `docs: actualiza glosario de negocio` (Cambios en la documentación)
- `style: formatea componentes UI` (Cambios de formato, sin afectar lógica)
- `refactor: simplifica lógica de ruteo` (Refactorización de código)
- `chore: actualiza dependencias` (Mantenimiento general)

## Herramientas de Calidad de Código

El proyecto tiene herramientas para detectar problemas temprano. Los hooks locales
formatean y revisan los archivos preparados; el CI remoto funciona como diagnóstico
compartido y como requisito antes de promover a producción.

1.  **Husky & Lint-Staged:** Al hacer `git commit`, un _pre-commit hook_ (Husky) ejecutará automáticamente `lint-staged`.
2.  **ESLint:** Revisa errores sintácticos y de buenas prácticas en TypeScript/React. (Se ejecuta automáticamente `--fix`).
3.  **Prettier:** Formatea el código (espacios, comillas, etc.) para mantener un estilo unificado. (Se ejecuta automáticamente `--write`).
4.  **TypeScript:** Valida que no haya errores de tipado.

### Comandos útiles (antes de push a `dev`)

```bash
pnpm exec next typegen  # Genera tipos de rutas de Next (necesario antes del typecheck)
pnpm run format:check   # Verifica el formato
pnpm run lint           # Verifica errores de linter
pnpm run typecheck      # Verifica errores de tipos TypeScript
pnpm run build          # Verifica que el proyecto compila
```

**GitHub Actions** ejecuta los mismos pasos en cada push a `dev` y `main`. En `dev`
informa; antes del merge a `main`, Walen confirma que todos estén verdes.

## Coordinación en equipo

- Avisen en el chat del equipo **antes de hacer push a `dev`** si van a tocar archivos grandes o compartidos.
- Si `dev` avanzó mientras trabajabas: `git pull origin dev` antes de volver a pushear.
- Resuelvan conflictos en local antes del push.
- Si `dev` queda con CI rojo, registren qué check falló y quién continuará la corrección.
