import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Plus, Sparkles } from "lucide-react";
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
  const requirements = service.requirements?.length
    ? service.requirements
    : ["Requerimientos técnicos por confirmar según el espacio del evento."];

  const priceText =
    service.priceFrom != null ? `$${service.priceFrom}` : "Por confirmar";

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <Reveal className="detail-hero">
          <div className="detail-hero-media" aria-hidden="true">
            <Sparkles />
          </div>
          <p className="chip">{categoryLabels[service.category]}</p>
          <h1 style={{ marginTop: 16, fontSize: "clamp(40px, 8vw, 72px)" }}>
            {service.name}
          </h1>
          <p className="hero-lede">{service.description}</p>
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

            <Reveal style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: 28, marginBottom: 20 }}>Requerimientos</h2>
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
            <div className="price-label">
              <span>Tarifa estimada</span>
              <strong>{priceText}</strong>
            </div>
            <p className="quote-note">
              Precio referencial. La cotización final depende de fecha,
              ubicación y requerimientos logísticos.
            </p>
            <Link className="button" href={`/cotizar?add=${service.slug}`}>
              Añadir a cotización <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="/servicios">
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
