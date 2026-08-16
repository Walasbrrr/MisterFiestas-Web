import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Escribe tu nombre."),
  phone: z.string().trim().min(8, "Escribe un teléfono válido."),
  eventType: z.string().trim().min(1, "Selecciona el tipo de evento."),
  eventDate: z.string().trim().min(1, "Selecciona la fecha."),
  location: z.string().trim().min(2, "Escribe la ubicación."),
  guestCount: z.coerce.number().int().positive("Indica los invitados."),
  services: z.array(z.string()).min(1, "Selecciona al menos un servicio."),
  budget: z.string().trim().optional(),
  comments: z.string().trim().max(1000).optional(),
});

export type QuoteRequest = z.infer<typeof quoteSchema>;
