# Flujo Diario de Git

Dos ramas. Sin ramas `feature/`. El equipo en `dev`; Walen en `main`.

| Rama   | Quién                    | Regla                                                  |
| ------ | ------------------------ | ------------------------------------------------------ |
| `dev`  | Sebastián, Mario y David | Push directo; CI informa pero no bloquea               |
| `main` | Solo **Walen**           | Producción; promoción con checks locales y CI en verde |

## Resumen

```text
main  ← solo Walen (producción)
  ▲
  │  git merge dev  (cuando esté listo)
  │
dev   ← todo el equipo (desarrollo + CI informativo)
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

Revisa **GitHub Actions** después del push. Si falla:

1. Abre el job y localiza el paso exacto (`lint`, `typecheck`, `format:check` o `build`).
2. Reproduce el comando en local.
3. Comunica la causa y corrígela en el siguiente commit disponible.

El fallo no impide otros commits en `dev`, pero bloquea la promoción a `main`.

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
- No ocultar ni ignorar un fallo de CI: debe quedar identificada la causa.
- No promover `dev` a `main` con CI rojo.

## Comandos útiles

| Acción           | Comando               |
| ---------------- | --------------------- |
| Ir a desarrollo  | `git switch dev`      |
| Actualizar `dev` | `git pull origin dev` |
| Subir cambios    | `git push origin dev` |
| Ir a producción  | `git switch main`     |

Guía completa: [CONTRIBUTING.md](../../CONTRIBUTING.md).
