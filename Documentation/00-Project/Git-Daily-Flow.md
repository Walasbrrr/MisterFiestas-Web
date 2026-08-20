# Flujo Diario de Git

Este repositorio usa dos ramas principales:

| Rama   | Quién                       | Regla                                                              |
| ------ | --------------------------- | ------------------------------------------------------------------ |
| `main` | Solo **Walen** (maintainer) | Production-ready. Push directo permitido solo para Walen.          |
| `dev`  | Todo el equipo              | Rama de integración. Push y merge solo si **GitHub Actions** pasa. |

El resto del equipo **no hace push a `main`**. Trabaja en ramas de feature y integra en `dev`.

## Resumen

```text
main  (solo Walen — producción)
  ▲
  │  merge cuando dev esté listo
  │
dev   (equipo — integración + CI obligatorio)
  ▲
  │  Pull Request + CI en verde
  │
feature/mi-tarea
```

## Equipo — empezar una tarea

```bash
git switch dev
git pull origin dev

git switch -c feature/nombre-de-la-cosa
# ... commits ...
git push -u origin HEAD
```

Abre un **Pull Request hacia `dev`**. El merge solo es posible si GitHub Actions pasa.

## Equipo — actualizar tu rama si `dev` cambió

No uses `git switch -c` otra vez; la rama ya existe.

```bash
git switch dev
git pull origin dev

git switch feature/mi-tarea
git merge dev
git push
```

## Walen — promover `dev` a `main`

Cuando `dev` esté estable y listo para producción:

```bash
git switch main
git pull origin main
git merge dev
git push origin main
```

Solo Walen tiene permiso de push directo a `main`.

## Comandos útiles

| Acción           | Comando moderno           |
| ---------------- | ------------------------- |
| Cambiar de rama  | `git switch dev`          |
| Crear rama nueva | `git switch -c feature/x` |
| Primer push      | `git push -u origin HEAD` |
| Push siguientes  | `git push`                |

## Qué no hacer

- No hacer push a `main` si no eres Walen.
- No mergear a `dev` con CI en rojo.
- No usar `git switch -c feature/x` si esa rama ya existe.
- No usar `git push -u origin` sin rama: usa `git push -u origin HEAD`.

Guía completa de contribución: [CONTRIBUTING.md](../../CONTRIBUTING.md).
