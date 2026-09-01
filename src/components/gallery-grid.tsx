"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Eye, RefreshCw, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import {
  galleryDemoFilters,
  galleryDemoItems,
  type GalleryDemoItem,
} from "@/content/gallery-demo";
import { getPublicApiUrl } from "@/lib/api";
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

const instagramFilters = [
  { id: "ALL", label: "Todos" },
  { id: "IMAGE", label: "Fotos" },
  { id: "VIDEO", label: "Videos" },
  { id: "CAROUSEL_ALBUM", label: "Álbumes" },
];

export function GalleryGrid() {
  const apiUrl = getPublicApiUrl();
  const [activeType, setActiveType] = useState("ALL");
  const [items, setItems] = useState<ApiMediaItem[]>([]);
  const [loading, setLoading] = useState(Boolean(apiUrl));
  const [useDemo, setUseDemo] = useState(!apiUrl);
  const [selectedMedia, setSelectedMedia] = useState<ApiMediaItem | null>(null);
  const [selectedDemo, setSelectedDemo] = useState<GalleryDemoItem | null>(
    null,
  );
  const [activeDemoCategory, setActiveDemoCategory] = useState("all");

  useEffect(() => {
    if (!apiUrl) return;

    let cancelled = false;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 4000);

    fetch(`${apiUrl}/api/v1/gallery?page=0&size=44&type=${activeType}`, {
      cache: "no-store",
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then((json: { data?: { content?: ApiMediaItem[] } }) => {
        if (cancelled) return;
        setItems(json.data?.content ?? []);
        setUseDemo(false);
        setLoading(false);
      })
      .catch(() => {
        if (cancelled) return;
        setItems([]);
        setUseDemo(true);
        setLoading(false);
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
      });

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, [activeType, apiUrl]);

  const selectedItem = selectedMedia ?? selectedDemo;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setSelectedMedia(null);
        setSelectedDemo(null);
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

  const previewUrl = (item: ApiMediaItem) =>
    item.mediaType === "VIDEO"
      ? (item.thumbnailUrl ?? item.mediaUrl)
      : item.mediaUrl;

  const filteredDemo = useMemo(() => {
    if (activeDemoCategory === "all") return galleryDemoItems;
    return galleryDemoItems.filter(
      (item) => item.category === activeDemoCategory,
    );
  }, [activeDemoCategory]);

  if (loading) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 0",
          color: "var(--taupe)",
        }}
      >
        <RefreshCw
          style={{
            width: 32,
            height: 32,
            margin: "0 auto 12px",
            animation: "spin 1s linear infinite",
          }}
        />
        <p>Cargando galería...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (useDemo) {
    return (
      <>
        {apiUrl ? (
          <p
            style={{
              textAlign: "center",
              marginBottom: 24,
              color: "var(--taupe)",
              fontSize: 14,
            }}
          >
            El feed de Instagram no está disponible. Mostramos ejemplos locales.
          </p>
        ) : null}

        <div
          className="filter-row"
          role="tablist"
          aria-label="Filtrar galería de fotos"
        >
          {galleryDemoFilters.map((filter) => {
            const count =
              filter.id === "all"
                ? galleryDemoItems.length
                : galleryDemoItems.filter((item) => item.category === filter.id)
                    .length;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeDemoCategory === filter.id}
                className={cn(
                  "filter-chip",
                  activeDemoCategory === filter.id && "is-active",
                )}
                onClick={() => setActiveDemoCategory(filter.id)}
              >
                {filter.label} ({count})
              </button>
            );
          })}
        </div>

        <section className="gallery-grid" aria-label="Fotos de eventos">
          {filteredDemo.map((item) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedDemo(item)}
              tabIndex={0}
              role="button"
              aria-label={`Ver detalle de ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedDemo(item);
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

        <AnimatePresence>
          {selectedDemo ? (
            <motion.div
              className="lightbox-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDemo(null)}
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
                aria-label={selectedDemo.title}
              >
                <div className="lightbox-header">
                  <div>
                    <span className="chip">{selectedDemo.categoryLabel}</span>
                    <h2 style={{ fontSize: 24, marginTop: 6 }}>
                      {selectedDemo.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setSelectedDemo(null)}
                    aria-label="Cerrar vista previa"
                  >
                    <X aria-hidden="true" />
                  </button>
                </div>

                <div className="lightbox-media">
                  <Sparkles aria-hidden="true" />
                </div>

                <div className="lightbox-body">
                  <p>{selectedDemo.description}</p>
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
                      Evento: {selectedDemo.highlightTag}
                    </span>
                    <Link
                      className="button button-small"
                      href={
                        selectedDemo.serviceSlug
                          ? `/cotizar?add=${selectedDemo.serviceSlug}`
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

  return (
    <>
      <div
        className="filter-row"
        role="tablist"
        aria-label="Filtrar galería de fotos"
      >
        {instagramFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={activeType === filter.id}
            className={cn(
              "filter-chip",
              activeType === filter.id && "is-active",
            )}
            onClick={() => {
              setActiveType(filter.id);
              setLoading(true);
              setUseDemo(false);
            }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {items.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 0",
            color: "var(--taupe)",
          }}
        >
          <Sparkles style={{ width: 40, height: 40, margin: "0 auto 12px" }} />
          <p>No hay fotos en esta categoría todavía.</p>
        </div>
      ) : (
        <section className="gallery-grid" aria-label="Fotos de eventos">
          {items.map((item) => (
            <article
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedMedia(item)}
              tabIndex={0}
              role="button"
              aria-label="Ver detalle del post"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMedia(item);
                }
              }}
              style={{
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
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
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
                }}
                aria-hidden="true"
              />
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

              <div
                className="gallery-card-content"
                style={{ position: "relative", zIndex: 1 }}
              >
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
                    Instagram
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
                {item.caption && (
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: 12,
                      color: "#fff",
                      lineHeight: 1.4,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.caption}
                  </p>
                )}
              </div>
            </article>
          ))}
        </section>
      )}

      <AnimatePresence>
        {selectedMedia ? (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
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
                    {selectedMedia.caption
                      ? selectedMedia.caption.slice(0, 60) +
                        (selectedMedia.caption.length > 60 ? "…" : "")
                      : "Post de Mister Fiestas"}
                  </h2>
                </div>
                <button
                  type="button"
                  className="menu-toggle"
                  onClick={() => setSelectedMedia(null)}
                  aria-label="Cerrar vista previa"
                >
                  <X aria-hidden="true" />
                </button>
              </div>

              <div
                className="lightbox-media"
                style={{
                  padding: 0,
                  overflow: "hidden",
                  borderRadius: 8,
                  maxHeight: 420,
                }}
              >
                {selectedMedia.mediaType === "VIDEO" ? (
                  <video
                    src={selectedMedia.mediaUrl}
                    poster={selectedMedia.thumbnailUrl ?? undefined}
                    controls
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={previewUrl(selectedMedia)}
                    alt={selectedMedia.caption ?? "Post de Mister Fiestas"}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                )}
              </div>

              <div className="lightbox-body">
                {selectedMedia.caption && <p>{selectedMedia.caption}</p>}
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
                    ❤️ {selectedMedia.likeCount} me gusta
                  </span>
                  <a
                    className="button button-small"
                    href={selectedMedia.permalink}
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
