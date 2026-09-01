import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function EmpresasPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <p className="eyebrow">Próximamente</p>
        <h1>Empresas</h1>
        <p>
          Eventos corporativos, activaciones y ferias con propuestas B2B. Esta
          sección se completará con casos y paquetes recomendados.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/servicios">
            Ver servicios <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="button button-secondary" href="/cotizar">
            Solicitar cotización
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
