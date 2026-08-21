export const mainNav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/eventos", label: "Eventos" },
  { href: "/empresas", label: "Empresas" },
  { href: "/tienda", label: "Tienda" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const footerLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/cotizar", label: "Cotizar" },
] as const;

export const categoryLabels: Record<string, string> = {
  ambientacion: "Ambientación",
  musica: "Música",
  experiencias: "Experiencias",
  efectos: "Efectos",
  gastronomia: "Gastronomía",
};
