import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export type Testimonial = {
  id: string;
  author: string;
  role?: string;
  eventType: string;
  quote: string;
  rating: number;
  location: string;
  serviceTag?: string;
};

export const sampleTestimonials: Testimonial[] = [
  {
    id: "1",
    author: "Camila & Alejandro",
    eventType: "Boda",
    serviceTag: "Túnel Infinito + DJ",
    location: "Santo Domingo",
    rating: 5,
    quote:
      "El túnel infinito fue el centro de atención de la noche. Todos nuestros invitados se tomaron fotos al entrar y el ambiente musical estuvo impecable de principio a fin.",
  },
  {
    id: "2",
    author: "Banco BHD (Eventos Corp.)",
    eventType: "Empresa",
    serviceTag: "Videobooth 360",
    location: "Piantini, DN",
    rating: 5,
    quote:
      "Puntualidad y profesionalismo total para nuestra gala de fin de año. La coordinación por WhatsApp fue rápida y nos emitieron factura con RNC sin complicaciones.",
  },
  {
    id: "3",
    author: "Valeria Martínez",
    eventType: "Cumpleaños",
    serviceTag: "Hora Loca + Efectos",
    location: "Bella Vista",
    rating: 5,
    quote:
      "La energía de los animadores y los efectos de confeti elevaron la fiesta por completo. Nadie se quedó sentado. ¡Definitivamente los volveré a contratar!",
  },
];

export function TestimonialCard({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const initials = testimonial.author
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

  return (
    <article className={cn("testimonial-card", className)}>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <div
            className="testimonial-stars"
            aria-label={`Calificación ${testimonial.rating} de 5 estrellas`}
          >
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} aria-hidden="true" />
            ))}
          </div>
          <span className="chip" style={{ padding: "4px 10px", fontSize: 10 }}>
            {testimonial.eventType}
          </span>
        </div>

        <p className="testimonial-quote">“{testimonial.quote}”</p>
      </div>

      <div className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">
          {initials}
        </div>
        <div className="testimonial-meta">
          <h4>{testimonial.author}</h4>
          <p>
            {testimonial.serviceTag ? `${testimonial.serviceTag} · ` : ""}
            {testimonial.location}
          </p>
        </div>
      </div>
    </article>
  );
}
