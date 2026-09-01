"use client";

import { useEffect, useState } from "react";
import { Eye, Sparkles, X, RefreshCw } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

type ApiMediaItem = {
  id: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl: string | null;
  permalink: string;
  caption: string | null;
  timestamp: string;
  likeCount: number;
};

const galleryFilters = [
  { id: "ALL", label: "Todos" },
  { id: "IMAGE", label: "Fotos" },
  { id: "VIDEO", label: "Videos" },
  { id: "CAROUSEL_ALBUM", label: "Álbumes" },
];

const BACKEND_URL = "http://localhost:8080";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [items, setItems] = useState<ApiMediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<ApiMediaItem | null>(null);

  async function fetchGallery(type: string) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(
        `${BACKEND_URL}/api/v1/gallery?page=0&size=44&type=${type}`,
        { cache: "no-store" }
      );
      if (!res.ok) throw new Error(`Error ${res.status}`);
      const json = await res.json();
      setItems(json.data?.content ?? []);
    } catch (e) {
      setError("No se pudo conectar con el servidor. Asegúrate de que el backend está corriendo.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGallery(activeCategory);
  }, [activeCategory]);

  // Handle escape key to close modal
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setSelectedItem(null);
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

  const previewUrl = (item: ApiMediaItem) =>
    item.mediaType === "VIDEO" ? (item.thumbnailUrl ?? item.mediaUrl) : item.mediaUrl;

  return (
    <>
      {/* Category filters */}
      <div className="filter-row" role="tablist" aria-label="Filtrar galería de fotos">
        {galleryFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === filter.id}
            className={cn("filter-chip", activeCategory === filter.id && "is-active")}
            onClick={() => setActiveCategory(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {loading && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--taupe)" }}>
          <RefreshCw style={{ width: 32, height: 32, margin: "0 auto 12px", animation: "spin 1s linear infinite" }} />
          <p>Cargando galería...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--orange)" }}>
          <p style={{ marginBottom: 12 }}>{error}</p>
          <button className="button button-small" onClick={() => fetchGallery(activeCategory)}>
            Reintentar
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && items.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "var(--taupe)" }}>
          <Sparkles style={{ width: 40, height: 40, margin: "0 auto 12px" }} />
          <p>No hay fotos en esta categoría todavía.</p>
        </div>
      )}

      {/* Gallery cards */}
      {!loading && !error && items.length > 0 && (
        <section className="gallery-grid" aria-label="Fotos de eventos">
          {items.map((item) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedItem(item)}
              tabIndex={0}
              role="button"
              aria-label={`Ver detalle del post`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
              style={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
            >
              {/* Real Instagram image */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${previewUrl(item)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "transform 0.4s ease",
                }}
                aria-hidden="true"
              />
              {/* Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
              {/* Video badge */}
              {item.mediaType === "VIDEO" && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: 999,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  VIDEO
                </span>
              )}
              {item.mediaType === "CAROUSEL_ALBUM" && (
                <span
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "2px 7px",
                    borderRadius: 999,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  ÁLBUM
                </span>
              )}

              <div className="gallery-card-content" style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <span className="chip" style={{ fontSize: 10, padding: "2px 8px" }}>
                    Instagram
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: "var(--orange)", display: "flex", alignItems: "center", gap: 4 }}>
                    <Eye style={{ width: 14, height: 14 }} aria-hidden="true" />
                    Ver foto
                  </span>
                </div>
                {item.caption && (
                  <p style={{ margin: "6px 0 0", fontSize: 12, color: "#fff", lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {item.caption}
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>
      )}

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
              aria-label="Detalle del post de Instagram"
            >
              <div className="lightbox-header">
                <div>
                  <span className="chip">Instagram</span>
                  <h2 style={{ fontSize: 18, marginTop: 6 }}>
                    {selectedItem.caption
                      ? selectedItem.caption.slice(0, 60) + (selectedItem.caption.length > 60 ? "…" : "")
                      : "Post de Mister Fiestas"}
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

              <div className="lightbox-media" style={{ padding: 0, overflow: "hidden", borderRadius: 8, maxHeight: 420 }}>
                {selectedItem.mediaType === "VIDEO" ? (
                  <video
                    src={selectedItem.mediaUrl}
                    poster={selectedItem.thumbnailUrl ?? undefined}
                    controls
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={previewUrl(selectedItem)}
                    alt={selectedItem.caption ?? "Post de Mister Fiestas"}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                )}
              </div>

              <div className="lightbox-body">
                {selectedItem.caption && <p>{selectedItem.caption}</p>}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, paddingTop: 12, borderTop: "1px solid rgb(223 192 178 / 40%)" }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--taupe)" }}>
                    ❤️ {selectedItem.likeCount} me gusta
                  </span>
                  <a
                    className="button button-small"
                    href={selectedItem.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver en Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        .gallery-card:hover > div:first-child { transform: scale(1.05); }
      `}</style>
    </>
  );
}
