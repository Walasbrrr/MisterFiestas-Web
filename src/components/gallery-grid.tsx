"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export type GalleryItem = {
  id: string;
  title: string;
  category: "experiencias" | "bodas" | "empresas" | "show" | "ambientacion";
  categoryLabel: string;
  description: string;
  serviceSlug?: string;
  highlightTag: string;
};

export const sampleGallery: GalleryItem[] = [
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
    serviceSlug: "hora-loca",
    highlightTag: "Cumpleaños 30",
  },
  {
    id: "gal-4",
    title: "Serenata con Mariachis",
    category: "show",
    categoryLabel: "Música y Show",
    description:
      "Presentación musical acústica para sorpresa de aniversario familiar.",
    serviceSlug: "dj",
    highlightTag: "Aniversario",
  },
  {
    id: "gal-5",
    title: "Luces Arquitectónicas y Sonido",
    category: "ambientacion",
    categoryLabel: "Ambientación",
    description:
      "Iluminación escénica cálida para jardín y pista de baile con audio de alta fidelidad.",
    serviceSlug: "sonido-iluminacion",
    highlightTag: "Quinceañero",
  },
  {
    id: "gal-6",
    title: "Explosión de Confeti y Pirotecnia Fría",
    category: "experiencias",
    categoryLabel: "Experiencias",
    description:
      "Efectos visuales seguros para interiores durante el brindis principal.",
    serviceSlug: "maquina-de-confeti",
    highlightTag: "Graduación",
  },
];

const galleryFilters = [
  { id: "all", label: "Todos" },
  { id: "experiencias", label: "Experiencias" },
  { id: "bodas", label: "Bodas" },
  { id: "empresas", label: "Empresas" },
  { id: "show", label: "Música y Show" },
  { id: "ambientacion", label: "Ambientación" },
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return sampleGallery;
    return sampleGallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Handle escape key to close modal
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedItem(null);
      }
    }
    if (selectedItem) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedItem]);

  return (
    <>
      {/* Category filters */}
      <div
        className="filter-row"
        role="tablist"
        aria-label="Filtrar galería de fotos"
      >
        {galleryFilters.map((filter) => {
          const count =
            filter.id === "all"
              ? sampleGallery.length
              : sampleGallery.filter((item) => item.category === filter.id)
                  .length;
          return (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === filter.id}
              className={cn(
                "filter-chip",
                activeCategory === filter.id && "is-active",
              )}
              onClick={() => setActiveCategory(filter.id)}
            >
              {filter.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery cards */}
      <section className="gallery-grid" aria-label="Fotos de eventos">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="gallery-card"
            onClick={() => setSelectedItem(item)}
            tabIndex={0}
            role="button"
            aria-label={`Ver detalle de ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedItem(item);
              }
            }}
          >
            <div className="gallery-card-bg" aria-hidden="true">
              <Sparkles
                style={{ width: 120, height: 120, color: "var(--orange)" }}
              />
            </div>

            <div className="gallery-card-content">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 8,
                }}
              >
                <span
                  className="chip"
                  style={{ fontSize: 10, padding: "2px 8px" }}
                >
                  {item.categoryLabel}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--orange)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Eye style={{ width: 14, height: 14 }} aria-hidden="true" />
                  Ver foto
                </span>
              </div>
              <h3>{item.title}</h3>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 13,
                  color: "var(--taupe)",
                  lineHeight: 1.4,
                }}
              >
                {item.highlightTag}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem ? (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="lightbox-modal"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={selectedItem.title}
            >
              <div className="lightbox-header">
                <div>
                  <span className="chip">{selectedItem.categoryLabel}</span>
                  <h2 style={{ fontSize: 24, marginTop: 6 }}>
                    {selectedItem.title}
                  </h2>
                </div>
                <button
                  type="button"
                  className="menu-toggle"
                  onClick={() => setSelectedItem(null)}
                  aria-label="Cerrar vista previa"
                >
                  <X aria-hidden="true" />
                </button>
              </div>

              <div className="lightbox-media">
                <Sparkles aria-hidden="true" />
              </div>

              <div className="lightbox-body">
                <p>{selectedItem.description}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 12,
                    paddingTop: 12,
                    borderTop: "1px solid rgb(223 192 178 / 40%)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "var(--taupe)",
                    }}
                  >
                    Evento: {selectedItem.highlightTag}
                  </span>
                  <Link
                    className="button button-small"
                    href={
                      selectedItem.serviceSlug
                        ? `/cotizar?add=${selectedItem.serviceSlug}`
                        : "/cotizar"
                    }
                  >
                    Cotizar este servicio <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
