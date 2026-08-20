# Flujo Diario de Git

`main` está protegida: **no se hace push directo**. Todo el trabajo entra por una rama y un Pull Request.

Usamos comandos modernos de Git: `git switch` para cambiar o crear ramas, y `git restore` si hace falta deshacer archivos.

## Resumen

```text
main  (protegida)
  └── feature/mi-tarea   ← trabajas aquí
         ├── commits
         ├── git push -u origin HEAD
         └── Pull Request → main → merge
```

## 1. Actualizar `main`

```bash
git switch main
git pull origin main
```

## 2. Crear la rama de trabajo

Solo al **empezar una tarea nueva**:

```bash
git switch -c feature/nombre-de-la-cosa
```

`-c` crea la rama. Si ya existe, usa `git switch feature/nombre-de-la-cosa` (sin `-c`).

Otros prefijos: `fix/...`, `docs/...`, `chore/...`. Ver [CONTRIBUTING.md](../../CONTRIBUTING.md).

## 3. Commitear en esa rama

```bash
git add .
git commit -m "feat: descripción del cambio"
```

Sigue [Conventional Commits](https://www.conventionalcommits.org/).

## 4. Subir la rama (nunca `main`)

Primer push de la rama:

```bash
git push -u origin HEAD
```

`HEAD` es la rama en la que estás ahora. También puedes usar el nombre explícito:

```bash
git push -u origin feature/nombre-de-la-cosa
```

`-u` guarda la relación con la rama remota; en pushes siguientes basta con:

```bash
git push
```

## 5. Abrir el Pull Request

En GitHub:

1. Usa **Compare & pull request** tras el primer push, o **Pull requests → New**.
2. Base: `main` ← Compare: tu rama.
3. Asigna al menos un revisor (David o Walen).
4. Espera revisión **y** que el CI pase.

## 6. Actualizar tu rama cuando `main` cambió

Si `main` avanzó mientras trabajas (otros merges, etc.), **no vuelvas a usar `git switch -c`**: esa rama ya existe.

Trae los cambios de `main` **dentro de tu rama de trabajo**:

```bash
git switch main
git pull origin main

git switch feature/mi-tarea
git merge main
```

Resuelve conflictos si aparecen, commitea el merge y vuelve a subir:

```bash
git push
```

> **Nota:** También existe `git rebase main`, pero es más avanzado. Si no lo dominas, quédate con `git merge main`.

## 7. Después del merge

```bash
git switch main
git pull origin main
git branch -d feature/nombre-de-la-cosa
```

La última línea borra la rama local. En GitHub conviene borrar también la rama remota al hacer merge.

## Qué no hacer

- No trabajar ni hacer `git push` sobre `main`.
- No usar `git push -u origin` sin nombre de rama: Git no sabe qué rama remota crear.
- No ejecutar `git switch -c feature/mi-tarea` si esa rama ya existe.

Si `main` local quedó adelante porque commitiste ahí por error, mueve el trabajo a una rama y no intentes empujar `main`:

```bash
git switch -c chore/nombre-de-la-tarea
git push -u origin HEAD
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
