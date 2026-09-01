"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  Clock,
  MessageSquare,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServiceBySlug } from "@/content/services";

type QuoteLine = {
  slug: string;
  quantity: number;
};

type EventType = "personal" | "empresa";

const DEMO_SLUGS = ["tunel-infinito", "dj"] as const;
const LOGISTICS_FEE = 50;

function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

function buildInitialLines(add: string | null): QuoteLine[] {
  const lines: QuoteLine[] = DEMO_SLUGS.map((slug) => ({
    slug,
    quantity: 1,
  }));

  if (!add || !getServiceBySlug(add)) return lines;

  const existing = lines.find((line) => line.slug === add);
  if (existing) {
    existing.quantity += 1;
    return lines;
  }

  return [...lines, { slug: add, quantity: 1 }];
}

function QuoteContent({ initialAdd }: { initialAdd: string | null }) {
  const [eventType, setEventType] = useState<EventType>("personal");
  const [lines, setLines] = useState<QuoteLine[]>(() =>
    buildInitialLines(initialAdd),
  );

  const resolved = lines
    .map((line) => {
      const service = getServiceBySlug(line.slug);
      if (!service) return null;
      const unit = service.priceFrom ?? 0;
      return {
        ...line,
        service,
        unit,
        subtotal: unit * line.quantity,
      };
    })
    .filter(Boolean) as Array<{
    slug: string;
    quantity: number;
    service: NonNullable<ReturnType<typeof getServiceBySlug>>;
    unit: number;
    subtotal: number;
  }>;

  const subtotal = resolved.reduce((sum, line) => sum + line.subtotal, 0);
  const total = subtotal + (resolved.length ? LOGISTICS_FEE : 0);

  function updateQuantity(slug: string, delta: number) {
    setLines((current) =>
      current
        .map((line) =>
          line.slug === slug
            ? { ...line, quantity: Math.max(0, line.quantity + delta) }
            : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }

  function removeLine(slug: string) {
    setLines((current) => current.filter((line) => line.slug !== slug));
  }

  const typeLabel = eventType === "personal" ? "Particular" : "Empresarial";
  const whatsappMessage = encodeURIComponent(
    `Hola Mister Fiestas, quiero consultar disponibilidad para un evento ${typeLabel}:\n${resolved
      .map(
        (line) =>
          `- ${line.service.name} x${line.quantity}${
            line.unit ? ` (desde $${line.unit})` : ""
          }`,
      )
      .join("\n")}\nTotal estimado: ${formatMoney(total)}`,
  );

  return (
    <>
      <Reveal className="page-hero">
        <div className="quote-step-header">
          <span>Paso 1 de 4</span>
          <span>Tu selección</span>
        </div>
        <div className="quote-step-bar" aria-hidden="true">
          <div className="quote-step-fill" style={{ width: "25%" }} />
        </div>

        <p className="eyebrow">Empecemos por aquí</p>
        <h1>¿Para quién es el evento?</h1>
        <p>
          Selecciona tu tipo de celebración y ajusta los servicios. No necesitas
          pagar nada por adelantado en la web.
        </p>

        {/* Personal vs Enterprise Toggle */}
        <div className="quote-type-group" style={{ marginTop: 24 }}>
          <button
            type="button"
            className={`quote-type-btn ${eventType === "personal" ? "is-active" : ""}`}
            onClick={() => setEventType("personal")}
            aria-pressed={eventType === "personal"}
          >
            <div className="quote-type-title">
              <CalendarHeart aria-hidden="true" />
              <span>Personal</span>
            </div>
            <p className="quote-type-desc">
              Cumpleaños, bodas, aniversarios y reuniones íntimas.
            </p>
          </button>

          <button
            type="button"
            className={`quote-type-btn ${eventType === "empresa" ? "is-active" : ""}`}
            onClick={() => setEventType("empresa")}
            aria-pressed={eventType === "empresa"}
          >
            <div className="quote-type-title">
              <Building2 aria-hidden="true" />
              <span>Empresa</span>
            </div>
            <p className="quote-type-desc">
              Activaciones, lanzamientos y fiestas corporativas (con RNC).
            </p>
          </button>
        </div>
      </Reveal>

      <div className="quote-layout has-sticky-bottom">
        <section className="quote-items" aria-label="Servicios seleccionados">
          <h2 style={{ fontSize: 24, marginBottom: 8 }}>Servicios incluidos</h2>
          {resolved.length === 0 ? (
            <div className="quote-empty">
              <p>Aún no hay servicios en tu cotización.</p>
              <Link className="button" href="/servicios">
                Explorar catálogo
              </Link>
            </div>
          ) : (
            resolved.map((line) => (
              <article className="quote-item" key={line.slug}>
                <div className="quote-item-thumb" aria-hidden="true">
                  <Sparkles />
                </div>
                <div>
                  <h3>{line.service.name}</h3>
                  <p>{line.service.shortDescription}</p>
                  <div className="quote-item-meta">
                    <div className="qty-control">
                      <button
                        type="button"
                        aria-label={`Reducir cantidad de ${line.service.name}`}
                        onClick={() => updateQuantity(line.slug, -1)}
                      >
                        <Minus />
                      </button>
                      <span>{line.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Aumentar cantidad de ${line.service.name}`}
                        onClick={() => updateQuantity(line.slug, 1)}
                      >
                        <Plus />
                      </button>
                    </div>
                    <strong>
                      {line.unit ? formatMoney(line.subtotal) : "Por confirmar"}
                    </strong>
                    <button
                      type="button"
                      className="button button-small button-secondary"
                      aria-label={`Quitar ${line.service.name}`}
                      onClick={() => removeLine(line.slug)}
                    >
                      <Trash2 aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}

          <Link
            className="section-link"
            href="/servicios"
            style={{ marginTop: 8 }}
          >
            + Agregar más servicios del catálogo{" "}
            <ArrowRight aria-hidden="true" />
          </Link>

          {/* Trust & Status Notes */}
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card-icon" aria-hidden="true">
                <ShieldCheck />
              </div>
              <div>
                <h4>Sin cobros automáticos</h4>
                <p>
                  Primero confirmamos la fecha, el lugar y los detalles técnicos
                  contigo sin compromiso.
                </p>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-card-icon" aria-hidden="true">
                <Clock />
              </div>
              <div>
                <h4>Anticipación mínima</h4>
                <p>
                  Sugerimos al menos 72 horas para garantizar disponibilidad y
                  montaje impecable.
                </p>
              </div>
            </div>

            <div className="trust-card">
              <div className="trust-card-icon" aria-hidden="true">
                <MessageSquare />
              </div>
              <div>
                <h4>Atención personalizada</h4>
                <p>
                  Tu solicitud abre un chat directo con nuestro asesor para
                  aclarar cualquier duda al instante.
                </p>
              </div>
            </div>
          </div>
        </section>

        <aside className="quote-summary-card">
          <h2>Resumen estimado</h2>
          <div className="quote-line">
            <span>Tipo de evento</span>
            <strong style={{ textTransform: "capitalize" }}>{typeLabel}</strong>
          </div>
          <div className="quote-line">
            <span>Subtotal</span>
            <span>{formatMoney(subtotal)}</span>
          </div>
          <div className="quote-line muted">
            <span>Logística y montaje</span>
            <span>{resolved.length ? formatMoney(LOGISTICS_FEE) : "$0"}</span>
          </div>
          <div className="quote-total">
            <span>Total estimado</span>
            <span>{formatMoney(total)}</span>
          </div>
          <p className="quote-note">
            Tarifa referencial en Santo Domingo. Traslados al interior se
            coordinan con el equipo.
          </p>
          {resolved.length > 0 ? (
            <a
              className="button"
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Solicitar confirmación <ArrowRight aria-hidden="true" />
            </a>
          ) : (
            <Link className="button" href="/servicios">
              Elegir servicios
            </Link>
          )}
          <p className="quote-note">
            Al presionar se abrirá WhatsApp con el resumen de tu cotización
            listo.
          </p>
        </aside>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      {resolved.length > 0 ? (
        <aside
          className="sticky-bottom-bar"
          aria-label="Confirmar cotización móvil"
        >
          <div className="sticky-bottom-inner">
            <div className="sticky-bottom-price">
              <span>Total estimado</span>
              <strong>{formatMoney(total)}</strong>
            </div>
            <a
              className="button sticky-bottom-btn"
              href={`https://wa.me/?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              Confirmar WhatsApp <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </aside>
      ) : null}
    </>
  );
}

function QuoteLoader() {
  const searchParams = useSearchParams();
  const add = searchParams.get("add");
  return <QuoteContent key={add ?? "default"} initialAdd={add} />;
}

export default function CotizarPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <Suspense
          fallback={
            <div className="page-hero">
              <h1>Tu selección</h1>
              <p>Cargando resumen…</p>
            </div>
          }
        >
          <QuoteLoader />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  );
}
