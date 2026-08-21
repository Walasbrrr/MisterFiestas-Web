"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Plus, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { services } from "@/content/services";
import { categoryLabels } from "@/lib/nav";
import type { ServiceCategory } from "@/types/service";
import { cn } from "@/lib/utils";

const filters: Array<{ id: "all" | ServiceCategory; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "experiencias", label: "Experiencias" },
  { id: "musica", label: "Música" },
  { id: "ambientacion", label: "Ambientación" },
  { id: "efectos", label: "Efectos" },
  { id: "gastronomia", label: "Gastronomía" },
];

function formatPrice(value?: number) {
  if (value == null) return "Por confirmar";
  return `$${value}`;
}

export default function ServiciosPage() {
  const [active, setActive] = useState<"all" | ServiceCategory>("all");

  const filtered = useMemo(() => {
    if (active === "all") return services;
    return services.filter((service) => service.category === active);
  }, [active]);

  return (
    <div className="page-shell">
      <SiteHeader />
      <main>
        <Reveal className="page-hero">
          <p className="eyebrow">Catálogo completo</p>
          <h1>Momentos diseñados con calidez.</h1>
          <p>
            Explora nuestra selección curada de servicios para tu evento. Desde
            atmósferas sensoriales hasta música y efectos.
          </p>
        </Reveal>

        <div
          className="filter-row"
          role="tablist"
          aria-label="Filtrar servicios"
        >
          {filters.map((filter) => {
            const count =
              filter.id === "all"
                ? services.length
                : services.filter((s) => s.category === filter.id).length;
            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={active === filter.id}
                className={cn(
                  "filter-chip",
                  active === filter.id && "is-active",
                )}
                onClick={() => setActive(filter.id)}
              >
                {filter.label} ({count})
              </button>
            );
          })}
        </div>

        <section className="service-list" aria-live="polite">
          {filtered.map((service) => (
            <article className="service-row" key={service.slug}>
              <div className="service-row-media" aria-hidden="true">
                <Sparkles />
              </div>
              <div className="service-row-body">
                <div className="service-row-top">
                  <h2>{service.name}</h2>
                  <span className="chip">
                    {categoryLabels[service.category]}
                  </span>
                </div>
                <p>{service.shortDescription}</p>
                <div className="service-row-footer">
                  <div className="price-label">
                    <span>Tarifa desde</span>
                    <strong>{formatPrice(service.priceFrom)}</strong>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Link
                      className="button button-small button-secondary"
                      href={`/cotizar?add=${service.slug}`}
                      aria-label={`Añadir ${service.name} a la cotización`}
                    >
                      <Plus aria-hidden="true" /> Cotizar
                    </Link>
                    <Link
                      className="button button-small"
                      href={`/servicios/${service.slug}`}
                    >
                      Detalle <ArrowRight aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
