"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  ClipboardList,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import { Reveal, RevealItem, RevealStagger } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  sampleTestimonials,
  TestimonialCard,
} from "@/components/testimonial-card";
import ServicesCarousel from "@/components/services-carousel";
import ReservationForm from "@/components/reservation-form";
import type { ReservationFormHandle } from "@/components/reservation-form";
import InlineCalendar from "@/components/inline-calendar";

export default function HomePage() {
  const reservationRef = useRef<ReservationFormHandle>(null);
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        {/* Mobile & Desktop Hero */}
        <section className="hero-bleed" aria-labelledby="home-hero-title">
          <div className="hero-bleed-bg" aria-hidden="true">
            <div className="hero-bleed-wash" />
          </div>
          <Reveal className="hero-bleed-content">
            <p className="chip">
              <PartyPopper aria-hidden="true" /> Santo Domingo · Experiencias
              únicas
            </p>
            <h1 id="home-hero-title">
              Tu evento
              <br />
              <em>merece más</em>
            </h1>
            <p className="hero-lede">
              Túneles de luz infinita, música en vivo y momentos diseñados con
              calidez para que nadie quiera irse temprano.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/cotizar">
                Cotizar ahora <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="button button-secondary" href="/servicios">
                Explorar servicios
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Featured Signature Spotlight (Direct from Design Pack Screen) */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <Reveal className="mobile-spotlight">
            <div className="mobile-spotlight-art" aria-hidden="true">
              <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
                <rect
                  x="10"
                  y="10"
                  width="200"
                  height="200"
                  rx="16"
                  stroke="#ec6d20"
                  strokeWidth="4"
                />
                <rect
                  x="35"
                  y="35"
                  width="150"
                  height="150"
                  rx="12"
                  stroke="#ec6d20"
                  strokeWidth="4"
                />
                <rect
                  x="60"
                  y="60"
                  width="100"
                  height="100"
                  rx="8"
                  stroke="#ec6d20"
                  strokeWidth="4"
                />
                <rect
                  x="85"
                  y="85"
                  width="50"
                  height="50"
                  rx="4"
                  stroke="#ec6d20"
                  strokeWidth="4"
                />
              </svg>
            </div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <span
                  className="eyebrow"
                  style={{ margin: 0, color: "#ff914d" }}
                >
                  01 / DESTACADO
                </span>
                <span className="spotlight-badge">Más rentable</span>
              </div>
              <div className="mobile-spotlight-copy">
                <h3>Túnel Infinito</h3>
                <p>
                  Convierte la llegada en el primer gran recuerdo de la noche
                  con nuestra entrada inmersiva de luces infinitas.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <Link
                    className="button button-small"
                    href="/servicios/tunel-infinito"
                  >
                    Ver detalles <ArrowRight aria-hidden="true" />
                  </Link>
                  <Link
                    className="spotlight-btn-secondary"
                    href="/cotizar?add=tunel-infinito"
                  >
                    + Añadir a cotización
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="section" id="servicios">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">Servicios destacados</p>
              <h2>Momentos que hacen la fiesta.</h2>
            </div>
            <p>
              Una selección inicial pensada para ayudarte a imaginar el evento y
              solicitar solo lo que realmente necesitas.
            </p>
          </Reveal>
          <ServicesCarousel />
        </section>

        {/* Bento Specialties */}
        <section className="section-muted" aria-labelledby="specialties-title">
          <div className="section-inner">
            <Reveal className="section-heading-row">
              <div className="section-heading" style={{ marginBottom: 0 }}>
                <p className="eyebrow">02 / Más formas de celebrar</p>
                <h2 id="specialties-title">Arma tu momento</h2>
                <p>
                  Selecciones curadas para aportar sofisticación y sorpresa,
                  tanto en celebraciones íntimas como en eventos de empresa.
                </p>
              </div>
              <Link className="section-link" href="/servicios">
                Ver todo el catálogo <ArrowRight aria-hidden="true" />
              </Link>
            </Reveal>

            <RevealStagger className="bento-grid">
              <RevealItem>
                <Link className="bento-card bento-feature" href="/eventos">
                  <div className="bento-copy">
                    <p className="chip" style={{ marginBottom: 16 }}>
                      <Sparkles aria-hidden="true" /> Experiencias únicas
                    </p>
                    <h3>Eventos particulares</h3>
                    <p>
                      Bodas, cumpleaños, baby showers y graduaciones con
                      atención a cada detalle.
                    </p>
                    <span className="text-link">
                      Conocer detalles <ArrowRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </RevealItem>

              <RevealItem>
                <Link className="bento-card bento-peach" href="/empresas">
                  <div className="bento-icon">
                    <Building2 aria-hidden="true" />
                  </div>
                  <div className="bento-copy">
                    <p className="eyebrow">Corporativo</p>
                    <h3>Empresas</h3>
                    <p>
                      Activaciones, lanzamientos y fiestas de equipo con impacto
                      profesional.
                    </p>
                    <span className="text-link">Ver opciones ↗</span>
                  </div>
                </Link>
              </RevealItem>

              <RevealItem>
                <Link className="bento-card bento-cream" href="/cotizar">
                  <div className="bento-icon">
                    <ClipboardList aria-hidden="true" />
                  </div>
                  <div className="bento-copy">
                    <p className="eyebrow">A tu medida</p>
                    <h3>Arma tu cotización</h3>
                    <p>
                      Selecciona los servicios que necesitas y prepara tu
                      solicitud en pocos pasos.
                    </p>
                    <span className="text-link">Empezar cotización ↗</span>
                  </div>
                </Link>
              </RevealItem>
            </RevealStagger>
          </div>
        </section>

        {/* Personal vs Enterprise */}
        <Reveal className="section">
          <div className="section-heading">
            <p className="eyebrow">Personal o empresarial</p>
            <h2>La misma alegría, preparada para tu tipo de evento.</h2>
            <p>
              Adaptamos la propuesta a celebraciones familiares, activaciones y
              encuentros corporativos.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gap: 14,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <article
              className="bento-card bento-peach"
              style={{ minHeight: 0 }}
            >
              <div className="bento-icon">
                <CalendarHeart aria-hidden="true" />
              </div>
              <div className="bento-copy">
                <h3 style={{ fontSize: 28 }}>Celebraciones personales</h3>
                <p>Bodas, cumpleaños y reuniones íntimas.</p>
              </div>
            </article>
            <article
              className="bento-card bento-cream"
              style={{ minHeight: 0 }}
            >
              <div className="bento-icon">
                <Building2 aria-hidden="true" />
              </div>
              <div className="bento-copy">
                <h3 style={{ fontSize: 28 }}>Eventos empresariales</h3>
                <p>Empresa y RNC en la solicitud cuando aplique factura.</p>
              </div>
            </article>
          </div>
        </Reveal>

        {/* Testimonials Section */}
        <section className="section-muted" aria-labelledby="testimonials-title">
          <div className="section-inner">
            <Reveal className="section-heading-row">
              <div className="section-heading" style={{ marginBottom: 0 }}>
                <p className="eyebrow">Prueba social y confianza</p>
                <h2 id="testimonials-title">
                  Lo que dicen quienes ya celebraron
                </h2>
                <p>
                  Historias y experiencias reales de clientes que confiaron su
                  evento a Mister Fiestas en Santo Domingo.
                </p>
              </div>
              <Link className="section-link" href="/galeria">
                Ver galería de fotos <ArrowRight aria-hidden="true" />
              </Link>
            </Reveal>

            <RevealStagger className="testimonial-grid">
              {sampleTestimonials.map((t) => (
                <RevealItem key={t.id}>
                  <TestimonialCard testimonial={t} />
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        <section className="reservation-section" id="reservar">
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">Reserva tu fecha</p>
              <h2>Tu celebración empieza aquí.</h2>
            </div>
            <p>
              Consulta la disponibilidad en nuestro calendario, identifica las
              fechas abiertas y reserva tu evento en pocos pasos.
            </p>
          </Reveal>
          <Reveal>
            <InlineCalendar
              onReserveClick={() => reservationRef.current?.open()}
            />
          </Reveal>
        </section>
        <ReservationForm ref={reservationRef} />

        {/* Quote Band */}
        <Reveal className="quote-band">
          <div>
            <p className="eyebrow">Listo cuando tú estés</p>
            <h2>Cotiza en 4 pasos.</h2>
            <p>
              Selecciona servicios, revisa el resumen estimado y solicita
              confirmación rápida por WhatsApp. Sin pagos automáticos.
            </p>
          </div>
          <Link className="button button-dark" href="/cotizar">
            Empezar cotización <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
