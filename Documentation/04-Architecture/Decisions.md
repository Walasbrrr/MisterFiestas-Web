# Decisiones técnicas

| Fecha      | Decisión                                              | Razón                                                      |
| ---------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| 2026-08-16 | Next.js App Router con TypeScript                     | Sitio web moderno, tipado y desplegable como una unidad    |
| 2026-08-16 | Frontend primero y espacio reservado para Spring Boot | Permite publicar el sitio sin bloquear la futura API       |
| 2026-08-16 | Contenido comercial local y tipado                    | Permite avanzar sin introducir un CMS antes de necesitarlo |
| 2026-08-16 | `Documentation/` como fuente documental               | Mantiene decisiones y contexto junto al código             |
| 2026-08-16 | Hostinger para frontend y VPS/Docker para backend     | Separa la web pública de servicios y datos privados        |
| 2026-08-16 | JWT inicial; OAuth posterior                          | Evita ampliar autenticación antes del panel protegido      |
