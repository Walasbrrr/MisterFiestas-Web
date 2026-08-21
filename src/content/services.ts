import type { Service } from "@/types/service";

/**
 * Array of services offered by MisterFiestas.
 * @see ../../../Documentation/01-Product/Catalog-and-Pricing.md for the source of truth
 * and pending confirmations for this data.
 */
export const services: Service[] = [
  {
    slug: "tunel-infinito",
    name: "Túnel Infinito",
    category: "experiencias",
    shortDescription:
      "Entrada inmersiva con luz y profundidad infinita para fotos inolvidables.",
    description:
      "Una experiencia visual cautivadora que transforma la entrada a tu evento. Contenido y tarifas finales por confirmar.",
    priceFrom: 450,
    featured: true,
    includes: [
      "Estructura modular adaptable al espacio",
      "Programación de iluminación personalizada",
      "Montaje y desmontaje con personal técnico",
    ],
    requirements: [
      "Espacio libre nivelado con altura mínima adecuada",
      "Toma eléctrica independiente cercana al punto de instalación",
    ],
  },
  {
    slug: "videobooth-360",
    name: "Videobooth 360",
    category: "experiencias",
    shortDescription:
      "Video 360° compartible al instante para que tus invitados se sientan protagonistas.",
    description:
      "Estación de video inmersivo con entrega digital inmediata. Detalles de paquete por confirmar.",
    priceFrom: 400,
    includes: [
      "Sesiones ilimitadas durante el tiempo contratado",
      "Compartir por QR o enlace digital",
      "Atención en sitio",
    ],
    requirements: [
      "Superficie plana y acceso claro para montaje",
      "Circuito eléctrico dedicado cercano",
    ],
  },
  {
    slug: "dj",
    name: "DJ",
    category: "musica",
    shortDescription:
      "Selección musical personalizada con sonido de alta fidelidad.",
    description:
      "Mezcla versátil para mantener la energía de tu celebración. Contenido por confirmar.",
    priceFrom: 450,
    includes: [
      "Equipo de sonido",
      "Repertorio adaptable",
      "Iluminación básica",
    ],
  },
  {
    slug: "animacion",
    name: "Animación",
    category: "experiencias",
    shortDescription:
      "Conducción y dinámica para que la fiesta fluya de principio a fin.",
    description: "Contenido por confirmar.",
    priceFrom: 200,
  },
  {
    slug: "hora-loca",
    name: "Hora loca",
    category: "experiencias",
    shortDescription: "El pico de energía de la noche con show, props y ritmo.",
    description: "Contenido por confirmar.",
  },
  {
    slug: "decoracion",
    name: "Decoración",
    category: "ambientacion",
    shortDescription:
      "Ambientación editorial cálida alineada a tu tipo de evento.",
    description: "Contenido por confirmar.",
  },
  {
    slug: "photobooth",
    name: "Photobooth",
    category: "experiencias",
    shortDescription: "Fotos ilimitadas con props y diseño a medida.",
    description: "Contenido por confirmar.",
    priceFrom: 350,
  },
  {
    slug: "inflables",
    name: "Inflables",
    category: "experiencias",
    shortDescription: "Diversión segura para invitados de todas las edades.",
    description: "Contenido por confirmar.",
  },
  {
    slug: "sonido-iluminacion",
    name: "Sonido e iluminación",
    category: "ambientacion",
    shortDescription:
      "Refuerzo técnico para atmósfera, escenario y pista de baile.",
    description: "Contenido por confirmar.",
  },
  {
    slug: "catering",
    name: "Catering",
    category: "gastronomia",
    shortDescription:
      "Propuesta gastronómica presentada con precisión y calidez.",
    description: "Contenido por confirmar.",
  },
  {
    slug: "pirotecnia",
    name: "Pirotecnia",
    category: "efectos",
    shortDescription: "Cierre espectacular sujeto a permisos y espacio.",
    description: "Contenido y condiciones de seguridad por confirmar.",
  },
  {
    slug: "maquina-de-humo",
    name: "Máquina de humo",
    category: "efectos",
    shortDescription: "Efecto atmosférico para pista e iluminación.",
    description: "Contenido por confirmar.",
  },
  {
    slug: "maquina-de-confeti",
    name: "Máquina de confeti",
    category: "efectos",
    shortDescription: "Explosión de color para el momento clave de la fiesta.",
    description: "Contenido por confirmar.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((service) => service.featured);
}
