"use client";

import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Music2,
  PartyPopper,
  Camera,
  Cake,
  Mic2,
  Star,
  Tent,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Túnel Infinito",
    description:
      "Convierte la llegada en parte de la celebración con una experiencia visual que invita a entrar, mirar y compartir.",
    icon: Sparkles,
    tone: "red" as const,
    eyebrow: "La entrada que todos recuerdan",
  },
  {
    title: "Mariachis",
    description:
      "Ese momento en que alguien reconoce la primera canción y toda la fiesta empieza a cantar.",
    icon: Music2,
    tone: "peach" as const,
    eyebrow: "Música que reúne",
  },
  {
    title: "Combos",
    description:
      "Combina experiencias y servicios en una propuesta hecha alrededor de tu fecha, espacio e invitados.",
    icon: PartyPopper,
    tone: "cream" as const,
    eyebrow: "Más fiesta, menos vueltas",
  },
  {
    title: "Fotocabina",
    description:
      "Fotos divertidas con props y fondos personalizados que tus invitados se llevan como recuerdo.",
    icon: Camera,
    tone: "espresso" as const,
    eyebrow: "Recuerdos instantáneos",
  },
  {
    title: "Mesa de Dulces",
    description:
      "Un rincón irresistible con golosinas, postres y una presentación que combina con tu evento.",
    icon: Cake,
    tone: "peach" as const,
    eyebrow: "Dulce tentación",
  },
  {
    title: "DJ & Sonido",
    description:
      "La música correcta en el momento justo, con equipos profesionales que llenan cada rincón.",
    icon: Mic2,
    tone: "red" as const,
    eyebrow: "El ritmo de tu fiesta",
  },
  {
    title: "Animación",
    description:
      "Dinámicas, juegos y entretenimiento que mantienen la energía de la fiesta de principio a fin.",
    icon: Star,
    tone: "cream" as const,
    eyebrow: "Diversión garantizada",
  },
  {
    title: "Decoración",
    description:
      "Transformamos tu espacio con diseños temáticos, globos, iluminación y detalles que inspiran.",
    icon: Tent,
    tone: "espresso" as const,
    eyebrow: "Espacios que enamoran",
  },
] as const;

const CARD_WIDTH = 340;
const CARD_GAP = 22;

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);

    // Calculate active index based on scroll position
    const index = Math.round(el.scrollLeft / (CARD_WIDTH + CARD_GAP));
    setActiveIndex(Math.min(index, services.length - 1));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState, { passive: true });
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = CARD_WIDTH + CARD_GAP;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({
      left: index * (CARD_WIDTH + CARD_GAP),
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">
      {/* Navigation arrows */}
      <div className="carousel-controls">
        <div className="carousel-dots">
          {services.map((s, i) => (
            <button
              key={s.title}
              className={`carousel-dot ${i === activeIndex ? "carousel-dot-active" : ""}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir al servicio ${s.title}`}
            />
          ))}
        </div>
        <div className="carousel-arrows">
          <button
            className="carousel-arrow"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Anterior"
          >
            <ArrowLeft />
          </button>
          <button
            className="carousel-arrow"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Siguiente"
          >
            <ArrowRight />
          </button>
        </div>
      </div>

      {/* Scrollable track */}
      <div className="carousel-track" ref={trackRef}>
        {services.map(({ title, description, icon: Icon, tone, eyebrow }) => (
          <article
            className={`carousel-card carousel-card-${tone}`}
            key={title}
          >
            <div className="carousel-card-top">
              <div className="carousel-card-icon">
                <Icon aria-hidden="true" />
              </div>
              <p className="eyebrow">{eyebrow}</p>
              <h3>{title}</h3>
            </div>
            <div className="carousel-card-bottom">
              <p>{description}</p>
              <Link href="#cotizar">
                Agregar a mi idea <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Gradient fades */}
      {canScrollLeft && <div className="carousel-fade carousel-fade-left" />}
      {canScrollRight && <div className="carousel-fade carousel-fade-right" />}
    </div>
  );
}
