import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type PlaceholderProps = {
  title: string;
  description: string;
};

function PlaceholderPage({ title, description }: PlaceholderProps) {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <p className="eyebrow">Próximamente</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <Link className="button" href="/servicios">
            Ver servicios <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="button button-secondary" href="/cotizar">
            Ir a cotizar
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function EventosPage() {
  return (
    <PlaceholderPage
      title="Eventos particulares"
      description="Aquí vivirán cumpleaños, bodas, baby showers, gender reveals y graduaciones con servicios recomendados. Mientras tanto, explora el catálogo y arma tu cotización."
    />
  );
}
