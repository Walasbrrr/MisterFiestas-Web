# Flujo Diario de Git

Dos ramas. Sin ramas `feature/`. El equipo en `dev`; Walen en `main`.

| Rama   | Quién                   | Regla                                          |
| ------ | ----------------------- | ---------------------------------------------- |
| `dev`  | Sebastian, Mario, David | Push directo; CI de GitHub Actions obligatorio |
| `main` | Solo **Walen**          | Producción; promoción desde `dev`              |

## Resumen

```text
main  ← solo Walen (producción)
  ▲
  │  git merge dev  (cuando esté listo)
  │
dev   ← todo el equipo (desarrollo + CI)
  │
  ├── git pull origin dev
  ├── commits
  └── git push origin dev
```

## Equipo — día a día en `dev`

```bash
git switch dev
git pull origin dev

# ... editar archivos ...

git add .
git commit -m "feat: descripción del cambio"
git push origin dev
```

Espera a que **GitHub Actions** pase. Si falla, corrige y vuelve a pushear.

### Si alguien más pusheó mientras trabajabas

```bash
git pull origin dev
# resolver conflictos si hay
git push origin dev
```

## Walen — promover a producción

Cuando `dev` esté estable:

```bash
git switch main
git pull origin main
git merge dev
git push origin main
```

## Qué no hacer

- No crear ramas `feature/`, `fix/` ni `docs/` para el flujo normal.
- No hacer push a `main` si no eres Walen.
- No pushear a `dev` sin que pasen los checks locales (lint, typecheck, build).
- No dejar `dev` con CI en rojo.

## Comandos útiles

| Acción           | Comando               |
| ---------------- | --------------------- |
| Ir a desarrollo  | `git switch dev`      |
| Actualizar `dev` | `git pull origin dev` |
| Subir cambios    | `git push origin dev` |
| Ir a producción  | `git switch main`     |

Guía completa: [CONTRIBUTING.md](../../CONTRIBUTING.md).
