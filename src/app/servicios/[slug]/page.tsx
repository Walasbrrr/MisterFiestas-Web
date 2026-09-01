import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Plus, Sparkles, Info } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getServiceBySlug, services } from "@/content/services";
import { categoryLabels } from "@/lib/nav";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Servicio" };
  return {
    title: service.name,
    description: service.shortDescription,
  };
}

export default async function ServicioDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const includes = service.includes?.length
    ? service.includes
    : ["Alcance y detalle del paquete por confirmar con el equipo."];

  const requirements = service.installationRequirements?.length
    ? service.installationRequirements
    : service.requirements?.length
      ? service.requirements
      : ["Requerimientos técnicos por confirmar según el espacio del evento."];

  const priceText =
    service.priceFrom != null
      ? `RD$${service.priceFrom.toLocaleString("en-US")}`
      : "Por confirmar";

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <Reveal className="detail-hero">
          <div className="detail-hero-media" aria-hidden="true">
            <Sparkles />
          </div>
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <p className="chip">{categoryLabels[service.category]}</p>
            {service.seasonal && (
              <p
                className="chip"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                Temporada Navideña
              </p>
            )}
          </div>
          <h1 style={{ marginTop: 16, fontSize: "clamp(40px, 8vw, 72px)" }}>
            {service.name}
          </h1>
          {service.tagline && (
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: 500,
                color: "var(--foreground)",
                marginTop: "16px",
              }}
            >
              &ldquo;{service.tagline}&rdquo;
            </p>
          )}
          <p
            className="hero-lede"
            style={{ marginTop: service.tagline ? "8px" : "16px" }}
          >
            {service.description}
          </p>
        </Reveal>

        <div className="detail-layout has-sticky-bottom">
          <div>
            <Reveal>
              <h2 style={{ fontSize: 28, marginBottom: 20 }}>Qué incluye</h2>
              <ul className="detail-list">
                {includes.map((item) => (
                  <li key={item}>
                    <CheckCircle2 aria-hidden="true" />
                    <div>
                      <h3>{item}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {service.extras && service.extras.length > 0 && (
              <Reveal style={{ marginTop: 40 }}>
                <h2 style={{ fontSize: 28, marginBottom: 20 }}>
                  Personaliza tu experiencia
                </h2>
                <ul className="detail-list">
                  {service.extras.map((item) => (
                    <li key={item}>
                      <Plus aria-hidden="true" />
                      <div>
                        <h3>{item}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            <Reveal style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 28, marginBottom: 20 }}>
                Requerimientos de instalación
              </h2>
              <div className="req-grid">
                {requirements.map((item) => (
                  <article className="req-card" key={item}>
                    <h4>Nota técnica</h4>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="detail-aside">
            {service.plans && service.plans.length > 0 ? (
              <div
                style={{
                  marginBottom: "24px",
                  padding: "16px",
                  background: "var(--muted)",
                  borderRadius: "12px",
                }}
              >
                <h3 style={{ fontSize: "1.25rem", marginBottom: "16px" }}>
                  Planes disponibles
                </h3>
                <ul
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {service.plans.map((plan, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom:
                          i !== (service.plans?.length || 0) - 1
                            ? "1px solid var(--border)"
                            : "none",
                        paddingBottom:
                          i !== (service.plans?.length || 0) - 1 ? "12px" : "0",
                      }}
                    >
                      <span>{plan.name}</span>
                      <strong>RD${plan.price.toLocaleString("en-US")}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="price-label">
                <span>Tarifa estimada</span>
                <strong>{priceText}</strong>
              </div>
            )}

            {service.idealFor && (
              <div style={{ marginBottom: "24px" }}>
                <h4
                  style={{
                    fontSize: "0.875rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--muted-foreground)",
                    marginBottom: "8px",
                  }}
                >
                  Ideal para
                </h4>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {service.idealFor}
                </p>
              </div>
            )}

            {service.notes && service.notes.length > 0 && (
              <div
                style={{
                  marginBottom: "24px",
                  padding: "12px",
                  background: "rgba(255, 204, 0, 0.1)",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 204, 0, 0.2)",
                }}
              >
                <h4
                  style={{
                    fontSize: "0.875rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--foreground)",
                    marginBottom: "8px",
                    fontWeight: 600,
                  }}
                >
                  <Info size={16} /> Notas importantes
                </h4>
                <ul
                  style={{
                    paddingLeft: "20px",
                    margin: 0,
                    fontSize: "0.875rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                  }}
                >
                  {service.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="quote-note">
              Precio referencial. La cotización final depende de fecha,
              ubicación y requerimientos logísticos.
            </p>
            <Link
              className="button"
              style={{ width: "100%" }}
              href={`/cotizar?add=${service.slug}`}
            >
              Añadir a cotización <ArrowRight aria-hidden="true" />
            </Link>
            <Link
              className="button button-secondary"
              style={{ width: "100%", marginTop: "8px" }}
              href="/servicios"
            >
              Volver al catálogo
            </Link>
          </Reveal>
        </div>

        {/* Mobile Sticky Bottom CTA Bar */}
        <aside
          className="sticky-bottom-bar"
          aria-label="Acción de cotización rápida"
        >
          <div className="sticky-bottom-inner">
            <div className="sticky-bottom-price">
              <span>Tarifa desde</span>
              <strong>{priceText}</strong>
            </div>
            <Link
              className="button sticky-bottom-btn"
              href={`/cotizar?add=${service.slug}`}
            >
              <Plus aria-hidden="true" /> Añadir a cotización
            </Link>
          </div>
        </aside>
      </main>
      <SiteFooter />
    </div>
  );
}
