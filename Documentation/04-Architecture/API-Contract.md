# Contrato de API (Borrador — diferido)

> **Estado:** No aplica al MVP actual. La landing no consume API; la conversión es
> por WhatsApp. Este documento se conserva como referencia si más adelante se
> implementa `backend/` (Spring Boot + PostgreSQL).

URL base prevista (desarrollo): `http://localhost:8080/api/v1`

---

## 1. Servicios

### `GET /services`

Lista de servicios activos (sustituiría `src/content/services.ts` si hubiera CMS/API).

```json
{
  "data": [
    {
      "slug": "tunel-infinito",
      "name": "Túnel Infinito",
      "description": "...",
      "priceFrom": 15000.0
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
