# Guía de Contribución

¡Bienvenido al repositorio de MisterFiestas! Este documento establece las reglas y convenciones para mantener el código limpio, organizado y fácil de mantener por todos los miembros del equipo.

## Flujo de Trabajo (Git Workflow)

### Ramas principales

| Rama   | Propósito                                         | Quién puede hacer push                 |
| ------ | ------------------------------------------------- | -------------------------------------- |
| `main` | Producción. Siempre desplegable.                  | Solo **Walen**                         |
| `dev`  | Integración del equipo. Donde se juntan features. | Todo el equipo, con **CI obligatorio** |

### Reglas

- El equipo trabaja en ramas `feature/...`, `fix/...` o `docs/...` creadas desde `dev`.
- Los cambios entran a `dev` por **Pull Request** con **GitHub Actions en verde**.
- `main` solo la actualiza Walen cuando `dev` está listo para producción.
- **Nadie del equipo hace push directo a `main`.**

Guía paso a paso: [Flujo Diario de Git](Documentation/00-Project/Git-Daily-Flow.md).

### Ciclo rápido (equipo)

```bash
git switch dev
git pull origin dev
git switch -c feature/nombre-de-la-cosa
# ... commits ...
git push -u origin HEAD
```

Abre un Pull Request hacia **`dev`** y espera que pase el CI.

### Nombrado de Ramas

Prefija tus ramas con el tipo de trabajo que estás realizando:

- `feature/nombre-de-la-funcionalidad` (ej. `feature/catalogo-servicios`)
- `fix/descripcion-del-bug` (ej. `fix/error-formulario`)
- `docs/que-se-documento` (ej. `docs/actualizar-api-contract`)

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

### Comandos Útiles

Antes de abrir un Pull Request, es buena práctica correr estos comandos manualmente:

```bash
pnpm exec next typegen  # Genera tipos de rutas de Next (necesario antes del typecheck)
pnpm run format:check   # Verifica el formato
pnpm run lint           # Verifica errores de linter
pnpm run typecheck      # Verifica errores de tipos TypeScript
pnpm run build          # Verifica que el proyecto compila
```

**GitHub Actions** ejecuta los mismos pasos en cada PR y push a `dev` y `main`.

## Proceso de Pull Request (PR)

1.  Haz `git push -u origin HEAD` de tu rama (nunca de `main`).
2.  Abre un _Pull Request_ hacia **`dev`**.
3.  Asigna al menos a un miembro del equipo (David o Walen) para revisión.
4.  Espera a que pasen los **checks de CI** (GitHub Actions).
5.  Con CI en verde y PR aprobado, haz merge a `dev` y borra la rama.

Walen promueve `dev` → `main` cuando el equipo acuerda que está listo para producción.
