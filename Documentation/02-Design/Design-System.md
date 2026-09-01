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

- `.site-header` / `.site-footer`: navegación y pie compartidos (nav del sitemap).
- `.hero-bleed`: hero full-bleed de la Home.
- `.bento-grid` / `.bento-card`: recorridos principales (Eventos, Empresas y Cotización).
- `.button`: botón primario redondeado (pill) con fondo `--orange`.
- `.button-secondary` / `.button-dark`: variantes outline y espresso.
- `.chip` / `.eyebrow`: etiquetas y cejas tipográficas.
- `.service-row` / `.detail-*` / `.quote-*`: catálogo, detalle y resumen de cotización.

Motion: componentes `Reveal`, `RevealStagger` y `RevealItem` en `src/components/reveal.tsx` (Motion for React).

## Componentes shadcn/ui

Instalados en `src/components/ui/` para inputs puntuales si hicieran falta. La
conversión principal no usa formularios largos: **CTAs a WhatsApp**.

## Componentes de landing (implementados)

- `site-header.tsx` / `site-footer.tsx` — navegación y WhatsApp en drawer
- `services-carousel.tsx` — servicios destacados en Home
- `gallery-grid.tsx`, `testimonial-card.tsx`, `theme-toggle.tsx`, `reveal.tsx`

## Legacy (refactorizar hacia WhatsApp)

- `reservation-form.tsx`, `inline-calendar.tsx` — mantener UI; cierre = `wa.me`
- `/cotizar` — asistente multi-paso → mensaje prellenado
- Evitar copy de «reserva confirmada»; usar «Continuar en WhatsApp»

## Recursos visuales

- [Bases de la Marca (SVG)](assets/mister-fiestas-brand-foundations.svg)
- [Componentes Visuales (SVG)](assets/mister-fiestas-components.svg)
- [Pantallas (SVG)](assets/mister-fiestas-screens.svg)
