# Contrato de API (Borrador)

Este documento define las especificaciones de los endpoints de la API que comunicará el frontend de Next.js con el backend de Spring Boot. **Actualmente este contrato es un borrador y debe ser implementado en el backend antes de integrarlo.**

URL Base de desarrollo: `http://localhost:8080/api/v1`

---

## 1. Servicios

### Obtener catálogo de servicios activos

Obtiene la lista de servicios disponibles para mostrar en la web.

- **Endpoint:** `GET /services`
- **Response (200 OK):**

```json
{
  "data": [
    {
      "slug": "tunel-infinito",
      "name": "Túnel Infinito",
      "description": "...",
      "price": 15000.0
    }
  ]
}
```

---

## 2. Cotizaciones

### Enviar Solicitud de Cotización

Recibe los datos del formulario de la web para guardarlos en la base de datos y generar alertas. Los campos deben coincidir con `src/schemas/quote.ts`.

- **Endpoint:** `POST /quotes`
- **Headers:** `Content-Type: application/json`
- **Request Body:**

```json
{
  "name": "Juan Pérez",
  "phone": "809-555-0199",
  "eventType": "Boda",
  "eventDate": "2026-11-15T00:00:00Z",
  "location": "Santo Domingo",
  "guestCount": 150,
  "services": ["tunel-infinito", "dj"],
  "budget": "50k-100k",
  "comments": "Necesitamos instalación temprano."
}
```

- **Response (201 Created):**

```json
{
  "message": "Cotización solicitada exitosamente.",
  "quoteId": "123e4567-e89b-12d3-a456-426614174000"
}
```

- **Response (400 Bad Request):**

```json
{
  "error": "Validation Error",
  "details": [{ "field": "phone", "message": "Escribe un teléfono válido." }]
}
```
