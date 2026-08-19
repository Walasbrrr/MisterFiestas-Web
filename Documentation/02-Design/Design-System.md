# Sistema de Diseño (Design System)

Este documento describe las bases visuales y componentes de interfaz utilizados en la aplicación web de MisterFiestas. La implementación de estos estilos se encuentra centralizada en `src/app/globals.css`, utilizando CSS Variables y Tailwind CSS 4.

## Colores (Tokens)

La paleta de colores de MisterFiestas está diseñada para transmitir calidez, celebración y elegancia (Premium UI).

| Variable CSS   | Nombre     | Valor     | Uso Principal                                        |
| :------------- | :--------- | :-------- | :--------------------------------------------------- |
| `--cream`      | Cream      | `#fff8f0` | Fondos principales (Background, Card, Popover)       |
| `--peach`      | Peach      | `#f1d3ba` | Fondos secundarios, acentos suaves, tags             |
| `--peach-deep` | Peach Deep | `#e3b69c` | Gradientes, sombras de acento                        |
| `--orange`     | Orange     | `#ec6d20` | Color primario, botones, íconos principales          |
| `--red`        | Red        | `#d72b2d` | Color destructivo, cejas (eyebrows), acentos fuertes |
| `--espresso`   | Espresso   | `#392d2a` | Texto principal, fondos oscuros contrastantes        |
| `--taupe`      | Taupe      | `#765f57` | Texto secundario (muted), detalles sutiles           |
| `--line`       | Line       | `#d9b7a4` | Bordes, divisores, inputs                            |

_Nota: La aplicación está configurada con `color-scheme: light`._

## Tipografía

El proyecto utiliza fuentes optimizadas provistas por Google Fonts a través de `next/font/google`.

- **Tipografía Base (Sans):** `Geist`. Utilizada para el cuerpo del texto, descripciones y botones. Variable CSS: `--font-sans`.
- **Tipografía de Títulos (Display):** `Archivo Narrow`. Utilizada para encabezados (h1, h2, h3) y elementos destacados. Variable CSS: `--font-display`.

## Componentes UI Base (CSS)

La interfaz se construye con clases CSS modulares definidas en `globals.css`:

- `.site-header`: Navegación principal, sticky, con efecto glassmorphism (fondo translúcido + blur).
- `.button`: Botón primario redondeado (pill) con fondo `--orange` y transición de hover (eleva -2px).
- `.button-secondary`: Variante transparente con borde `--espresso`.
- `.button-dark`: Variante sólida oscura con fondo `--espresso`.
- `.chip`: Etiqueta (tag) redondeada usada para destacar categorías (e.g., "Experiencias para celebrar en grande").
- `.service-card`: Tarjetas para listar servicios con un diseño de borde y sombra suave. Tiene modificadores de color:
  - `.service-card-red`
  - `.service-card-peach`
  - `.service-card-cream`
- `.eyebrow`: Pequeño texto introductorio sobre los títulos, generalmente en uppercase y `--red`.

## Componentes shadcn/ui

El proyecto tiene instalada la librería `shadcn/ui` sobre `Radix UI` para componentes interactivos accesibles. Actualmente disponibles en `src/components/ui/`:

- `button.tsx`
- `card.tsx`
- `input.tsx`
- `label.tsx`
- `select.tsx`
- `textarea.tsx`

Estos componentes se utilizarán principalmente para los formularios de cotización (integrados con `react-hook-form` y `zod`).

## Recursos y Referencias Visuales

- [Bases de la Marca (SVG)](assets/mister-fiestas-brand-foundations.svg)
- [Componentes Visuales (SVG)](assets/mister-fiestas-components.svg)
- [Pantallas (SVG)](assets/mister-fiestas-screens.svg)
