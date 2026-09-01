import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery-grid";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Galería de Experiencias",
  description:
    "Explora fotos y momentos de eventos reales organizados por Mister Fiestas: bodas, cumpleaños, activaciones y shows en vivo.",
};

export default function GaleriaPage() {
  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <Reveal className="page-hero">
          <p className="eyebrow">Momentos capturados</p>
          <h1>Galería de experiencias.</h1>
          <p>
            Inspírate con celebraciones y activaciones reales. Cada imagen
            refleja la energía, la iluminación y el cuidado por el detalle que
            llevamos a cada fiesta.
          </p>
        </Reveal>

        <GalleryGrid />

        <Reveal className="quote-band">
          <div>
            <p className="eyebrow">¿Te inspiró alguna idea?</p>
            <h2>Hazlo realidad en tu fecha.</h2>
            <p>
              Selecciona tus servicios preferidos y recibe confirmación rápida
              por WhatsApp.
            </p>
          </div>
          <Link className="button button-dark" href="/cotizar">
            Comenzar cotización <ArrowRight aria-hidden="true" />
          </Link>
        </Reveal>
      </main>
      <SiteFooter />
    </div>
  );
}
