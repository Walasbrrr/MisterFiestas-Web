# Guía de Contribución

¡Bienvenido al repositorio de MisterFiestas! Este documento establece las reglas y convenciones para mantener el código limpio, organizado y fácil de mantener por todos los miembros del equipo.

## Flujo de Trabajo (Git Workflow)

Modelo simple con **dos ramas**, sin ramas `feature/`:

| Rama   | Propósito             | Quién hace push                          |
| ------ | --------------------- | ---------------------------------------- |
| `dev`  | Desarrollo del equipo | Sebastian, Mario, David (CI obligatorio) |
| `main` | Producción            | Solo **Walen**                           |

### Reglas

- Todo el equipo trabaja **directamente en `dev`**: pull, commits y push.
- **No se usan ramas feature.** No hace falta crear ramas por tarea.
- GitHub Actions debe pasar en cada push a `dev` (ruleset en GitHub).
- Solo Walen promueve cambios de `dev` → `main` cuando están listos para producción.
- **Nadie más hace push a `main`.**

Guía paso a paso: [Flujo Diario de Git](Documentation/00-Project/Git-Daily-Flow.md).

### Ciclo rápido (equipo)

```bash
git switch dev
git pull origin dev
# ... editar, commit ...
git push origin dev
```

Espera a que **GitHub Actions** termine en verde antes de considerar el cambio integrado.

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

El proyecto tiene configuradas herramientas que garantizan la calidad del código. **No puedes hacer commit si el código no pasa estas verificaciones.**

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

**GitHub Actions** ejecuta los mismos pasos en cada push a `dev` y `main`.

## Coordinación en equipo

- Avisen en el chat del equipo **antes de hacer push a `dev`** si van a tocar archivos grandes o compartidos.
- Si `dev` avanzó mientras trabajabas: `git pull origin dev` antes de volver a pushear.
- Resuelvan conflictos en local antes del push; no dejen `dev` rota.
