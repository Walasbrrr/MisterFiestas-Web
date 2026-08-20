# Flujo Diario de Git

`main` está protegida: **no se hace push directo**. Todo el trabajo entra por una rama y un Pull Request.

Usamos comandos modernos de Git: `git switch` para cambiar o crear ramas, y `git restore` si hace falta deshacer archivos.

## Resumen

```text
main  (protegida)
  └── feature/mi-tarea   ← trabajas aquí
         ├── commits
         ├── git push -u origin feature/mi-tarea
         └── Pull Request → main → merge
```

## 1. Actualizar `main`

```bash
git switch main
git pull
```

## 2. Crear la rama de trabajo

```bash
git switch -c feature/nombre-de-la-cosa
```

Otros prefijos: `fix/...`, `docs/...`, `chore/...`. Ver [CONTRIBUTING.md](../../CONTRIBUTING.md).

## 3. Commitear en esa rama

```bash
git add .
git commit -m "feat: descripción del cambio"
```

Sigue [Conventional Commits](https://www.conventionalcommits.org/).

## 4. Subir la rama (nunca `main`)

```bash
git push -u origin feature/nombre-de-la-cosa
```

## 5. Abrir el Pull Request

En GitHub:

1. Usa **Compare & pull request** tras el primer push, o **Pull requests → New**.
2. Base: `main` ← Compare: tu rama.
3. Asigna al menos un revisor (David o Walen).
4. Espera revisión **y** que el CI pase.

## 6. Después del merge

```bash
git switch main
git pull
git branch -d feature/nombre-de-la-cosa
```

La última línea borra la rama local. En GitHub conviene borrar también la rama remota al hacer merge.

## Qué no hacer

- No trabajar ni hacer `git push` sobre `main`.
- No abrir un PR con `main` desactualizada: vuelve al paso 1 si `main` avanzó.

Si `main` local quedó adelante porque commitiste ahí por error, mueve el trabajo a una rama y no intentes empujar `main`:

```bash
git switch -c chore/nombre-de-la-tarea
git push -u origin chore/nombre-de-la-tarea
git switch main
git reset --hard origin/main
```

`git reset --hard` descarta commits locales de `main` que no estén en el remoto. Úsalo solo en ese caso.

## Comandos equivalentes (referencia)

| Moderno                   | Equivalente clásico         |
| ------------------------- | --------------------------- |
| `git switch main`         | `git checkout main`         |
| `git switch -c feature/x` | `git checkout -b feature/x` |
| `git restore archivo`     | `git checkout -- archivo`   |
