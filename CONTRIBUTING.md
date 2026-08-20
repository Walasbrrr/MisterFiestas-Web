# Guía de Contribución

¡Bienvenido al repositorio de MisterFiestas! Este documento establece las reglas y convenciones para mantener el código limpio, organizado y fácil de mantener por todos los miembros del equipo.

## Flujo de Trabajo (Git Workflow)

Utilizamos un enfoque basado en ramas (Branching Strategy) sencillo.

- La rama `main` debe ser siempre desplegable (Production-ready).
- Todo el trabajo nuevo se hace en ramas creadas a partir de `main`.
- `main` está protegida: no hay push directo; los cambios entran por Pull Request.

Guía paso a paso con comandos: [Flujo Diario de Git](Documentation/00-Project/Git-Daily-Flow.md).

### Ciclo rápido

```bash
git switch main
git pull
git switch -c feature/nombre-de-la-cosa
# ... commits ...
git push -u origin feature/nombre-de-la-cosa
```

Luego abre el Pull Request en GitHub hacia `main`.

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

Antes de abrir un Pull Request, es buena práctica correr estos comandos manualmente para asegurarte de que todo está bien:

```bash
pnpm run format:check  # Verifica el formato
pnpm run lint          # Verifica errores de linter
pnpm run typecheck     # Verifica errores de tipos TypeScript
```

## Proceso de Pull Request (PR)

1.  Haz `git push -u origin` de tu rama (nunca de `main`).
2.  Abre un _Pull Request_ hacia la rama `main`.
3.  Asigna al menos a un miembro del equipo (como David o Walen) para revisión.
4.  Una vez aprobado y si los chequeos (CI) pasan, haz merge y borra la rama.
5.  En local: `git switch main`, `git pull` y `git branch -d` de tu rama.
