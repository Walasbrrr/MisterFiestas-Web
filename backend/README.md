# Backend — Mister Fiestas API

API REST para el sitio web de Mister Fiestas, construida con **Spring Boot 3.4** y **Java 25**.

---

## Estado actual (v0.1.0)

El backend está **funcional y probado en desarrollo local**. La galería de Instagram sincroniza correctamente con la Graph API de Meta y sirve los medios cacheados al frontend Next.js.

La landing **no requiere** este backend para cotizar. `/galeria` llama a `NEXT_PUBLIC_API_URL`; si la API no está, muestra ejemplos locales.

> **Base de datos en desarrollo:** Se puede usar H2 en memoria para desarrollo local sin necesidad de Docker (ver sección de inicio rápido). Para producción se requiere PostgreSQL.

---

## Stack

| Tecnología                                  | Uso                                 |
| ------------------------------------------- | ----------------------------------- |
| Java 25 + Spring Boot 3.4.5                 | Framework principal                 |
| Spring Data JPA                             | Acceso a base de datos              |
| PostgreSQL 16 (producción) / H2 (dev local) | Base de datos                       |
| Flyway                                      | Migraciones de base de datos        |
| Spring Security                             | Seguridad de endpoints              |
| OpenAPI / Swagger                           | Documentación interactiva de la API |
| Maven Wrapper (`mvnw.cmd`)                  | Build sin instalar Maven            |

---

## Módulos activos

### Galería (Instagram Graph API)

Sincroniza el feed de Instagram y cachea los medios en la base de datos. El frontend consume los datos desde la API local, sin depender de Instagram en tiempo real.

**Comportamiento:**

- Sincronización automática cada **lunes a las 6:00 AM** (scheduler)
- Sincronización manual disponible vía endpoint
- Posts sin `media_url` (ej. CAROUSEL_ALBUM) usan `thumbnail_url` como fallback
- Posts sin ninguna URL son ignorados con un warning en los logs

**Endpoints:**

| Método | Ruta                   | Acceso             | Descripción                                                   |
| ------ | ---------------------- | ------------------ | ------------------------------------------------------------- |
| `GET`  | `/api/v1/gallery`      | Público            | Lista paginada de medios (soporta `?page=0&size=12&type=ALL`) |
| `GET`  | `/api/v1/gallery/{id}` | Público            | Detalle de un medio por ID                                    |
| `POST` | `/api/v1/gallery/sync` | Público (solo dev) | Fuerza sincronización inmediata con Instagram                 |

**Tipos de medio soportados:** `IMAGE`, `VIDEO`, `CAROUSEL_ALBUM`

---

## Módulos planificados (próximas versiones)

- **Reseñas de Google Maps:** Sincronización de reseñas del perfil de Google Business para mostrarlas en la página web. _(No implementado en esta versión)_

---

## Inicio rápido

### Prerequisitos

- **Java 25** ([Eclipse Temurin](https://adoptium.net/))
- El proyecto incluye `mvnw.cmd` (Maven Wrapper) — **no necesitas instalar Maven**

### Opción A — Desarrollo local sin Docker (H2 en memoria)

Ideal para desarrollo rápido. Los datos se pierden al reiniciar.

1. **Copia y configura las variables de entorno:**

```bash
cp .env.example .env
```

Edita `.env` con tus credenciales de Instagram y cambia la URL de BD a H2:

```env
DB_URL=jdbc:h2:mem:mister_fiestas;DB_CLOSE_DELAY=-1;MODE=PostgreSQL
DB_USER=sa
DB_PASSWORD=
INSTAGRAM_USER_ID=tu-user-id
INSTAGRAM_ACCESS_TOKEN=tu-token
```

2. **Ejecuta el backend:**

```bash
# Windows
.\mvnw.cmd spring-boot:run

# Con variables de entorno cargadas desde .env (PowerShell)
Get-Content .env | Where-Object { $_ -match "^[A-Za-z]" } | ForEach-Object { $name, $value = $_.Split('=', 2); [Environment]::SetEnvironmentVariable($name, $value, 'Process') }
.\mvnw.cmd spring-boot:run
```

3. **Sincroniza manualmente con Instagram:**

```bash
# PowerShell
Invoke-RestMethod -Uri http://localhost:8080/api/v1/gallery/sync -Method POST
```

### Opción B — Desarrollo con PostgreSQL y Docker

Requiere Docker Desktop con virtualización habilitada en BIOS.

```bash
docker-compose up -d
```

Esto levanta PostgreSQL en `localhost:5432`. Luego usa la URL de PostgreSQL en `.env`.

---

## Verificación

| URL                                   | Descripción               |
| ------------------------------------- | ------------------------- |
| http://localhost:8080/api/v1/gallery  | Lista de medios en JSON   |
| http://localhost:8080/swagger-ui.html | Documentación interactiva |
| http://localhost:8080/actuator/health | Health check              |

---

## Estructura del proyecto

```text
backend/
├── src/main/java/com/misterfiestas/api/
│   ├── MisterFiestasApplication.java
│   ├── config/
│   │   ├── CorsConfig.java
│   │   ├── SecurityConfig.java
│   │   └── OpenApiConfig.java
│   ├── gallery/
│   │   ├── GalleryController.java
│   │   ├── GalleryService.java
│   │   ├── InstagramApiClient.java
│   │   ├── GalleryMedia.java
│   │   ├── GalleryMediaRepository.java
│   │   ├── dto/
│   │   │   ├── GalleryMediaResponse.java
│   │   │   └── InstagramMediaPayload.java
│   │   └── scheduler/
│   │       └── InstagramSyncScheduler.java
│   └── common/
│       ├── ApiResponse.java
│       └── GlobalExceptionHandler.java
├── src/main/resources/
│   ├── application.yml
│   └── db/migration/
│       └── V1__create_gallery_media.sql
├── pom.xml
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── .gitignore
```

---

## Obtener credenciales de Instagram

1. Convierte tu cuenta de Instagram a **Business** o **Creator**.
2. Vincula la cuenta a una **Facebook Business Page**.
3. Crea un **Meta App** en [developers.facebook.com](https://developers.facebook.com).
4. En el **Graph API Explorer**, genera un User Token con el permiso `instagram_basic`.
5. Intercambia el token corto por un **Long-Lived Token** (dura 60 días).
6. Copia el token y el User ID al archivo `backend/.env` (nunca al `.env.example`).

> ⚠️ El token dura **60 días**. El scheduler renueva automáticamente el token el día 1 de cada mes. Si expira antes, deberás generar uno nuevo manualmente desde el Graph API Explorer.

---

## Notas de seguridad

- El archivo `.env` está en `.gitignore` — **nunca se sube al repositorio**.
- El endpoint `/api/v1/gallery/sync` es público en desarrollo. En producción debería protegerse con un API key o restringirse por IP.
- Spring Security está configurado como stateless (sin sesiones). Preparado para JWT en futuras versiones (panel admin).
