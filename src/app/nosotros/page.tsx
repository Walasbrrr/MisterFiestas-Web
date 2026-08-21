import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NosotrosPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <p className="eyebrow">Próximamente</p>
        <h1>Nosotros</h1>
        <p>
          Historia, valores y equipo de Mister Fiestas. El contenido definitivo
          se publicará cuando el negocio apruebe los textos finales.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/contacto">
            Contacto <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="button button-secondary" href="/">
            Volver al inicio
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
