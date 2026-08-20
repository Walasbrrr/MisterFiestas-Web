# Documentación de Mister Fiestas

## Secciones

Esta documentación está dividida en las siguientes áreas clave:

### Proyecto y Alcance

- [Visión General y Estado](00-Project/Project-Overview.md)
- [Alcance del MVP](00-Project/MVP-Scope.md)
- [Bitácora de Progreso (Changelog)](00-Project/Changelog.md)
- [Flujo Diario de Git](00-Project/Git-Daily-Flow.md)
- [Flujo de Trabajo Git (Roadmap por Fases)](00-Project/Git-Workflow.md)

### Producto y Negocio

- [Glosario de Negocio](01-Product/Business-Glossary.md)
- [Mapa del sitio](01-Product/Site-Map.md)
- [Recorrido del cliente](01-Product/Customer-Journey.md)
- [Catálogo y precios](01-Product/Catalog-and-Pricing.md)
- [Preguntas Pendientes para el Cliente](01-Product/Pending-Client-Questions.md)

### Diseño e Interfaces

- [Sistema de Diseño (Design System)](02-Design/Design-System.md)
- [Inspiración visual](02-Design/Visual-Inspiration.md)

### Equipo y Responsabilidades

- [Integrantes del Equipo](03-Team/Team.md)
- [Matriz de Responsabilidades](03-Team/Responsibilities.md)

### Arquitectura y Tecnología

- [Tech stack](04-Architecture/Tech-Stack.md)
- [Estructura Técnica](04-Architecture/Technical-Structure.md)
- [Modelo de Datos](04-Architecture/Data-Model.md)
- [Contrato de API](04-Architecture/API-Contract.md)
- [Integraciones y secretos](04-Architecture/Integrations-and-Secrets.md)
- [Decisiones técnicas](04-Architecture/Decisions.md)

## Regla de mantenimiento

- **Las decisiones del producto viven aquí:** El contenido publicado por la aplicación vive en `src/content/`; cuando un dato real del negocio cambie, se deben mantener ambos lugares consistentes.
- **Mantener actualizado:** Cada vez que se tome una decisión arquitectónica o de diseño, debe registrarse en el archivo correspondiente (e.g., `Decisions.md` o `Design-System.md`).
- **Nuevos documentos:** Si se crea un nuevo archivo de documentación, asegúrate de enlazarlo en este índice y en `Documentación del Proyecto.md`.
