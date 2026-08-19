import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  Check,
  Music2,
  PartyPopper,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    eyebrow: "La entrada que todos recuerdan",
    title: "Túnel Infinito",
    description:
      "Convierte la llegada en parte de la celebración con una experiencia visual que invita a entrar, mirar y compartir.",
    icon: Sparkles,
    tone: "red",
  },
  {
    eyebrow: "Música que reúne",
    title: "Mariachis",
    description:
      "Ese momento en que alguien reconoce la primera canción y toda la fiesta empieza a cantar.",
    icon: Music2,
    tone: "peach",
  },
  {
    eyebrow: "Más fiesta, menos vueltas",
    title: "Combos",
    description:
      "Combina experiencias y servicios en una propuesta hecha alrededor de tu fecha, espacio e invitados.",
    icon: PartyPopper,
    tone: "cream",
  },
] as const;

export default function HomePage() {
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

        <div className="service-grid">
          {highlights.map(
            ({ eyebrow, title, description, icon: Icon, tone }) => (
              <article
                className={`service-card service-card-${tone}`}
                key={title}
              >
                <div className="service-icon">
                  <Icon aria-hidden="true" />
                </div>
                <div>
                  <p className="eyebrow">{eyebrow}</p>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link href="#cotizar">
                    Agregar a mi idea <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
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
