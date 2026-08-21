import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function TiendaPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <p className="eyebrow">Próximamente</p>
        <h1>Tienda y paquetes</h1>
        <p>
          Combos y productos estarán aquí. Por ahora puedes cotizar servicios
          individuales desde el catálogo.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/servicios">
            Ir al catálogo <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="button button-secondary" href="/cotizar">
            Ver cotización
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
