# Contrato de API

> **Estado:** la landing **no** usa API para cotizar (WhatsApp). Sí puede consumir
> galería si `NEXT_PUBLIC_API_URL` apunta a `backend/` (Spring Boot). El resto
> de este documento sigue siendo borrador.

URL base (desarrollo): `http://localhost:8080/api/v1`

---

## 0. Galería (implementado)

| Método | Ruta            | Acceso                                  | Descripción                                       |
| ------ | --------------- | --------------------------------------- | ------------------------------------------------- |
| `GET`  | `/gallery`      | Público                                 | Página de medios cacheados (`?page=&size=&type=`) |
| `GET`  | `/gallery/{id}` | Público                                 | Detalle por ID de Instagram                       |
| `POST` | `/gallery/sync` | Público en dev — **restringir en prod** | Fuerza sync con Graph API                         |

Tipos: `IMAGE`, `VIDEO`, `CAROUSEL_ALBUM`, `ALL`. Detalle en `backend/README.md`.

---

## 1. Servicios (borrador — no implementado)

### `GET /services`

Lista de servicios activos (sustituiría `src/content/services.ts` si hubiera CMS/API).

```json
{
  "data": [
    {
      "slug": "tunel-infinito",
      "name": "Túnel Infinito LED",
      "description": "...",
      "priceFrom": 29995.0
    }
  ]
}
```

---

## 2. Leads / cotizaciones (futuro)

### `POST /quotes`

Solo relevante si se deja de usar WhatsApp como único canal o se quieren guardar
leads en base de datos. Campos de referencia: `src/schemas/quote.ts`.

---

## Integraciones descartadas para el MVP

- Google Calendar API (sin reservas en web).
- Webhooks de pago.
