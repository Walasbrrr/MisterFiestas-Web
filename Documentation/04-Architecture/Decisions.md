# Decisiones técnicas

| Fecha      | Decisión                                              | Razón                                                                |
| ---------- | ----------------------------------------------------- | -------------------------------------------------------------------- |
| 2026-08-16 | Next.js App Router con TypeScript                     | Sitio web moderno, tipado y desplegable como una unidad              |
| 2026-08-16 | Frontend primero y espacio reservado para Spring Boot | Permite publicar el sitio sin bloquear la futura API                 |
| 2026-08-16 | Contenido comercial local y tipado                    | Permite avanzar sin introducir un CMS antes de necesitarlo           |
| 2026-08-16 | `Documentation/` como fuente documental               | Mantiene decisiones y contexto junto al código                       |
| 2026-08-16 | Hostinger para frontend y VPS/Docker para backend     | Separa la web pública de servicios y datos privados                  |
| 2026-08-16 | JWT inicial; OAuth posterior                          | Evita ampliar autenticación antes del panel protegido                |
| 2026-08-21 | Dominio oficial `misterfiestas.com`                   | URL canónica de producción: `https://misterfiestas.com`              |
| 2026-08-27 | Landing informativa + WhatsApp como conversión        | Sin e-commerce, pagos ni backend en el MVP                           |
| 2026-08-27 | Asistente web → mensaje WhatsApp prellenado           | Recolección en la web; envío en WhatsApp; Fase 4 pausada             |
| 2026-08-27 | Responsibilities.md y WhatsApp-Assistant.md           | Visibilidad de tareas por integrante para Walen                      |
| 2026-08-27 | CI informativo y no bloqueante en `dev`               | Permite colaboración directa; los fallos se corrigen antes de `main` |
| 2026-08-27 | Túnel Infinito como prioridad comercial principal     | Es el servicio más rentable y debe liderar la conversión             |
| 2026-08-27 | Instagram opcional + carga manual para galería        | Evita bloquear contenido mientras se evalúa la integración           |
| 2026-08-27 | Google Maps como fuente candidata de testimonios      | Falta validar acceso y atribución antes de adoptarla                 |
