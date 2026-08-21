import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactoPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main className="placeholder-page">
        <p className="eyebrow">Contacto</p>
        <h1>Hablemos de tu evento</h1>
        <p>
          El formulario completo y los datos de soporte llegarán pronto.
          Mientras tanto, arma tu selección y solicita confirmación por WhatsApp
          desde la cotización.
        </p>
        <div className="hero-actions">
          <Link className="button" href="/cotizar">
            Ir a cotizar <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="button button-secondary" href="/servicios">
            Ver servicios
          </Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
