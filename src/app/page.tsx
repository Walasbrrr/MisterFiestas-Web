"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  Check,
  PartyPopper,
} from "lucide-react";
import ServicesCarousel from "@/components/services-carousel";
import ReservationForm from "@/components/reservation-form";
import type { ReservationFormHandle } from "@/components/reservation-form";
import InlineCalendar from "@/components/inline-calendar";



export default function HomePage() {
  const reservationRef = useRef<ReservationFormHandle>(null);

  return (
    <main>
      <header className="site-header">
        <Link
          className="brand"
          href="#inicio"
          aria-label="Mister Fiestas, inicio"
        >
          <Image
            src="/brand/mister-fiestas-logo.jpeg"
            alt="Mister Fiestas"
            width={52}
            height={52}
            priority
          />
          <span>Mister Fiestas</span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          <Link href="#servicios">Servicios</Link>
          <Link href="#combos">Combos</Link>
          <Link href="#empresas">Empresas</Link>
          <Link href="#reservar">Reservar</Link>
          <Link href="#nosotros">Nosotros</Link>
        </nav>

        <Link className="button button-small" href="#cotizar">
          Cotizar mi evento <ArrowRight aria-hidden="true" />
        </Link>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="chip">
            <PartyPopper aria-hidden="true" /> Experiencias para celebrar en
            grande
          </p>
          <h1>
            Tu evento
            <span> merece más.</span>
          </h1>
          <p className="hero-lede">
            Creamos momentos que se sienten cercanos, alegres y completamente
            tuyos. Cuéntanos qué celebras; nosotros te ayudamos a darle forma.
          </p>
          <div className="hero-actions">
            <Link className="button" href="#cotizar">
              Empezar mi cotización <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" href="#servicios">
              Ver servicios
            </Link>
          </div>
          <div className="trust-row" aria-label="Beneficios">
            <span>
              <Check aria-hidden="true" /> Atención personalizada
            </span>
            <span>
              <Check aria-hidden="true" /> Disponibilidad confirmada
            </span>
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Espacio reservado para fotografía del Túnel Infinito"
        >
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
          <span className="hero-orbit hero-orbit-three" />
          <div className="visual-note">
            <span>Experiencia destacada</span>
            <strong>Túnel Infinito</strong>
            <small>Fotografía real próximamente</small>
          </div>
        </div>
      </section>

      <section className="services-section" id="servicios">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Servicios destacados</p>
            <h2>Momentos que hacen la fiesta.</h2>
          </div>
          <p>
            Una selección inicial pensada para ayudarte a imaginar el evento y
            solicitar solo lo que realmente necesitas.
          </p>
        </div>

        <ServicesCarousel />
      </section>

      <section className="audience-section" id="empresas">
        <div className="audience-copy">
          <p className="eyebrow">Personal o empresarial</p>
          <h2>La misma alegría, preparada para tu tipo de evento.</h2>
          <p>
            Adaptamos la propuesta a celebraciones familiares, activaciones,
            encuentros de equipos y eventos para clientes.
          </p>
        </div>
        <div className="audience-options">
          <article>
            <CalendarHeart aria-hidden="true" />
            <div>
              <strong>Celebraciones personales</strong>
              <span>Bodas, cumpleaños y reuniones.</span>
            </div>
          </article>
          <article>
            <Building2 aria-hidden="true" />
            <div>
              <strong>Eventos empresariales</strong>
              <span>Información de empresa y RNC en la solicitud.</span>
            </div>
          </article>
        </div>
      </section>

      <section className="quote-banner" id="cotizar">
        <div>
          <p className="eyebrow">Cotización en cuatro pasos</p>
          <h2>Cuéntanos qué estás celebrando.</h2>
          <p>
            Selecciona servicios, agrega los detalles de tu fecha y recibe una
            propuesta después de confirmar disponibilidad. No necesitas pagar
            ahora.
          </p>
        </div>
        <Link className="button button-dark" href="#cotizar">
          Comenzar <ArrowRight aria-hidden="true" />
        </Link>
      </section>

      <section className="reservation-section" id="reservar">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Reserva tu fecha</p>
            <h2>Tu celebración empieza aquí.</h2>
          </div>
          <p>
            Consulta la disponibilidad en nuestro calendario, identifica
            las fechas abiertas y reserva tu evento en pocos pasos.
          </p>
        </div>

        <InlineCalendar
          onReserveClick={() => reservationRef.current?.open()}
        />
      </section>

      <ReservationForm ref={reservationRef} />

      <footer id="nosotros">
        <div className="footer-brand">
          Mister <span>Fiestas</span>
        </div>
        <p>Eventos que se viven con alegría.</p>
        <p>© {new Date().getFullYear()} Mister Fiestas</p>
      </footer>
    </main>
  );
}
