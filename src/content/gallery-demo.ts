export type GalleryDemoItem = {
  id: string;
  title: string;
  category: "experiencias" | "bodas" | "empresas" | "show" | "ambientacion";
  categoryLabel: string;
  description: string;
  serviceSlug?: string;
  highlightTag: string;
};

export const galleryDemoItems: GalleryDemoItem[] = [
  {
    id: "gal-1",
    title: "Entrada con Túnel Infinito",
    category: "experiencias",
    categoryLabel: "Experiencias",
    description:
      "Túnel de espejos y luces programables instalado en la recepción de una boda en Santo Domingo.",
    serviceSlug: "tunel-infinito",
    highlightTag: "Boda Exclusiva",
  },
  {
    id: "gal-2",
    title: "Activación Corporativa 360",
    category: "empresas",
    categoryLabel: "Empresas",
    description:
      "Plataforma de video 360° para gala de premiación empresarial con entrega digital instantánea.",
    serviceSlug: "videobooth-360",
    highlightTag: "Evento B2B",
  },
  {
    id: "gal-3",
    title: "Momento Clímax con Hora Loca",
    category: "show",
    categoryLabel: "Música y Show",
    description:
      "Show de animación en vivo con personajes iluminados, accesorios y percusión caribeña.",
    serviceSlug: "hora-loca-navidena",
    highlightTag: "Cumpleaños 30",
  },
  {
    id: "gal-4",
    title: "Serenata con Mariachis",
    category: "show",
    categoryLabel: "Música y Show",
    description:
      "Presentación musical acústica para sorpresa de aniversario familiar.",
    serviceSlug: "mariachi-trio",
    highlightTag: "Aniversario",
  },
  {
    id: "gal-5",
    title: "Luces Arquitectónicas y Sonido",
    category: "ambientacion",
    categoryLabel: "Ambientación",
    description:
      "Iluminación escénica cálida para jardín y pista de baile con audio de alta fidelidad.",
    serviceSlug: "sonido-iluminacion-navidena",
    highlightTag: "Quinceañero",
  },
  {
    id: "gal-6",
    title: "VideoBooth 360 en pista",
    category: "experiencias",
    categoryLabel: "Experiencias",
    description:
      "Cabina 360 para capturar el brindis y la pista con entrega digital.",
    serviceSlug: "videobooth-360",
    highlightTag: "Graduación",
  },
];

export const galleryDemoFilters = [
  { id: "all", label: "Todos" },
  { id: "experiencias", label: "Experiencias" },
  { id: "bodas", label: "Bodas" },
  { id: "empresas", label: "Empresas" },
  { id: "show", label: "Música y Show" },
  { id: "ambientacion", label: "Ambientación" },
] as const;
