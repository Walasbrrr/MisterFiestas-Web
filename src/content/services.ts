import type { Service } from "@/types/service";

/**
 * Array of services offered by MisterFiestas.
 * Published catalog: items without `outOfCatalog`.
 * @see ../../../Documentation/01-Product/Catalog-and-Pricing.md
 */
export const services: Service[] = [
  {
    slug: "mariachi-express",
    name: "Mariachi Express",
    category: "musica",
    shortDescription:
      "Un detalle breve, emotivo y memorable para sorprender a alguien especial.",
    description:
      "Una presentación pensada para crear un momento de emoción inmediata. El Mariachi Express llega listo para interpretar cuatro canciones seleccionadas según la ocasión y convertir un homenaje, cumpleaños o fecha especial en un recuerdo inolvidable.",
    tagline:
      "Un detalle breve, emotivo y memorable para sorprender a alguien especial.",
    priceFrom: 3995,
    plans: [{ name: "Presentación Mariachi Express", price: 3995 }],
    idealFor:
      "Día de las Madres, Día de los Enamorados, Día del Padre, cumpleaños, aniversarios, sorpresas y celebraciones especiales.",
    extras: [
      "Fuera de la zona metropolitana aplica cargo de traslado. Como referencia, zonas cercanas pueden iniciar desde RD$500, sujeto a distancia.",
    ],
    includes: [
      "Un mariachi con vestimenta formal y presentación profesional.",
      "Equipo de sonido para la presentación.",
      "Un asistente de apoyo.",
      "Cuatro canciones adaptadas a la ocasión.",
      "Sombrero adicional para fotografías con el agasajado y sus invitados.",
      "Traslado incluido dentro del polígono central o zona metropolitana de Santo Domingo.",
    ],
  },
  {
    slug: "mariachi-trio",
    name: "Mariachi Trío",
    category: "musica",
    shortDescription: "Tradición, presencia y emoción en cada nota.",
    description:
      "Tres mariachis vestidos con traje formal e interpretando sus instrumentos en vivo crean una presentación musical de mayor presencia. Durante 30 minutos, el repertorio se adapta a la ocasión para deleitar tanto al agasajado como a todos los invitados.",
    tagline: "Tradición, presencia y emoción en cada nota.",
    priceFrom: 7995,
    plans: [{ name: "Presentación de 30 minutos", price: 7995 }],
    idealFor:
      "Bodas, cumpleaños, quince años, graduaciones, despedidas, aniversarios, Día de los Enamorados y celebraciones en general.",
    extras: [
      "Fuera de la zona metropolitana se aplica un cargo adicional por traslado según la distancia, a partir de RD$500 como referencia para zonas cercanas.",
    ],
    includes: [
      "Tres mariachis con vestimenta profesional.",
      "Instrumentos musicales en vivo.",
      "Presentación de aproximadamente 30 minutos.",
      "Repertorio adaptado al tipo de celebración.",
      "Traslado incluido dentro del polígono central o zona metropolitana de Santo Domingo.",
    ],
  },
  {
    slug: "videobooth-360",
    name: "VideoBooth 360",
    category: "fotografia",
    shortDescription:
      "Videos dinámicos, efectos en vivo y contenido listo para compartir al instante.",
    description:
      "Una experiencia audiovisual interactiva con plataforma profesional de 360°, operador dedicado y un sistema de entrega inmediata para que cada invitado reciba su video en el momento. Todos los planes incluyen personalización visual y entrega digital del material al cliente.",
    tagline:
      "Videos dinámicos, efectos en vivo y contenido listo para compartir al instante.",
    priceFrom: 7995,
    plans: [
      { name: "Plan Sencillo · 1 hora", price: 7995 },
      { name: "Plan VIP · 1 hora", price: 9995 },
      { name: "Plan Full · 1 hora", price: 14995 },
    ],
    extras: [
      "Plan VIP: añade efectos especiales en vivo como humo, burbujas, confeti y pistola de dinero.",
      "Plan Full: integra los efectos del VIP y suma pirotecnia fría, velitas pirotécnicas y pistola LED de CO₂.",
      "Al contratar dos horas o más, las horas posteriores a la primera reciben un 50% de descuento.",
    ],
    includes: [
      "Máquina profesional VideoBooth 360 operada por personal de Mister Fiestas.",
      "Creación y edición automática de videos durante la experiencia.",
      "Envío inmediato por AirDrop, WhatsApp, código QR o correo electrónico, según disponibilidad del dispositivo del invitado.",
      "Marco digital personalizado con identidad del evento o marca.",
      "Link personalizado con los videos generados durante la actividad.",
      "Accesorios divertidos y props según la temática.",
    ],
    installationRequirements: [
      "Plataforma aproximada de 40 pulgadas.",
      "El brazo giratorio requiere un margen de operación cercano a 5 pies alrededor de la plataforma.",
      "Se recomienda disponer de un área libre aproximada de 6 a 7 pies para una operación cómoda y segura.",
      "Mesa auxiliar de 72 pulgadas para accesorios y equipos complementarios.",
      "Punto de energía cercano y superficie estable.",
    ],
    featured: true,
  },
  {
    slug: "photo-booth-cajita-negra",
    name: "Photo Booth “La Cajita Negra”",
    category: "fotografia",
    shortDescription: "Imprime sonrisas y crea recuerdos al instante.",
    description:
      "Una estación fotográfica profesional diseñada para que los invitados puedan tomarse todas las fotos que deseen y recibir sus impresiones de inmediato. Combina cámara, iluminación, software y una impresora fotográfica de alto rendimiento en una experiencia atendida por personal especializado.",
    tagline: "Imprime sonrisas y crea recuerdos al instante.",
    priceFrom: 12495,
    plans: [
      { name: "Primera hora", price: 12495 },
      { name: "Evento completo", price: 24995 },
    ],
    extras: [
      "Horas adicionales con 50% de descuento.",
      "La tarifa de evento completo cubre la experiencia de principio a fin de la actividad, según el horario acordado.",
    ],
    includes: [
      "Cámara profesional.",
      "Iluminación profesional.",
      "Computadora con software especializado.",
      "Impresora fotográfica profesional para impresión al instante.",
      "Personal de atención durante el servicio.",
      "Props y accesorios divertidos.",
      "Diseño y personalización del marco fotográfico.",
      "Opciones de fotografía y GIF.",
      "Link personalizado con el contenido digital del evento.",
    ],
  },
  {
    slug: "selfie-booth",
    name: "Selfie Booth",
    category: "fotografia",
    shortDescription:
      "Elegancia, tecnología y diversión en una estación fotográfica moderna.",
    description:
      "El Selfie Booth aporta una presencia visual sofisticada al evento y permite que los invitados se tomen fotografías frente a una estación de diseño moderno, reciban sus impresiones al instante y disfruten una experiencia ágil y atractiva.",
    tagline:
      "Elegancia, tecnología y diversión en una estación fotográfica moderna.",
    priceFrom: 16495,
    plans: [
      { name: "Plan mínimo · 2 horas", price: 16495 },
      { name: "Evento completo", price: 26495 },
    ],
    notes: ["Este servicio se contrata a partir de dos horas."],
    includes: [
      "Cámara e iluminación profesional.",
      "Software especializado.",
      "Impresora fotográfica profesional.",
      "Personal de atención.",
      "Props y accesorios divertidos.",
      "Marco fotográfico personalizado.",
      "Opciones de fotos y GIF.",
      "Entrega digital mediante enlace personalizado.",
    ],
  },
  {
    slug: "salsa-booth",
    name: "Salsa Booth",
    category: "fotografia",
    shortDescription:
      "La fotografía interactiva que se mueve al ritmo de tu evento.",
    description:
      "Una experiencia de vanguardia que combina fotografía, iluminación y música. Su diseño ovalado y su sistema de luces reaccionan al sonido del ambiente, cambiando de tonalidad y creando una presencia visual dinámica que llama la atención desde el primer momento.",
    tagline: "La fotografía interactiva que se mueve al ritmo de tu evento.",
    priceFrom: 18495,
    plans: [
      { name: "Plan · 2 horas", price: 18495 },
      { name: "Evento completo", price: 30000 },
    ],
    includes: [
      "Diseño moderno y ovalado con iluminación reactiva al sonido.",
      "Cámara profesional.",
      "Iluminación profesional.",
      "Software especializado.",
      "Impresora fotográfica profesional con impresión aproximada en 8 segundos.",
      "Personal de atención.",
      "Props y accesorios divertidos.",
      "Marco personalizado.",
      "Opciones de fotografía y GIF.",
      "Entrega digital mediante enlace personalizado.",
    ],
  },
  {
    slug: "tunel-infinito",
    name: "Túnel Infinito LED",
    category: "fotografia",
    shortDescription:
      "Profundidad, movimiento y velocidad visual para un contenido que impacta.",
    description:
      "Una experiencia visual futurista que transforma cada fotografía y video en un recuerdo espectacular. Sus luces LED dinámicas generan una sensación de profundidad y velocidad que convierte el túnel en un escenario moderno, elegante y altamente llamativo.",
    tagline:
      "Profundidad, movimiento y velocidad visual para un contenido que impacta.",
    priceFrom: 29995,
    plans: [{ name: "Oferta · evento completo", price: 29995 }],
    includes: [
      "Operador especializado.",
      "Cámara e iluminación profesional.",
      "Impresora fotográfica de alta velocidad con impresiones en aproximadamente 8 segundos.",
      "Fotografías, videos, boomerangs y mensajes personalizados.",
      "Marco personalizado.",
      "Entrega digital de todo el contenido mediante enlace.",
      "Accesorios divertidos según la temática.",
      "Efectos especiales: humo, burbujas, confeti y pistola de dinero.",
    ],
    installationRequirements: [
      "Dimensiones aproximadas del túnel: 4 pies x 4 pies de base y 7 pies de altura.",
      "Mesa auxiliar de 72 pulgadas para accesorios, impresora y elementos de apoyo.",
      "Se recomienda área adicional para circulación de invitados y operación del personal.",
      "Punto de energía cercano y superficie nivelada.",
    ],
    featured: true,
  },
  {
    slug: "tunel-espejado-led",
    name: "Túnel Espejado LED",
    category: "fotografia",
    shortDescription:
      "Elegancia, glamour y tecnología para fotografías y videos de alto impacto.",
    description:
      "Una experiencia visual de acabado espejado que multiplica la luz y realza la presencia de cada invitado. Es una opción especialmente atractiva para actividades de gala, bodas y eventos corporativos donde se busca un montaje sofisticado y memorable.",
    tagline:
      "Elegancia, glamour y tecnología para fotografías y videos de alto impacto.",
    priceFrom: 29995,
    plans: [{ name: "Evento completo", price: 29995 }],
    includes: [
      "Operador especializado.",
      "Cámara e iluminación profesional.",
      "Impresora fotográfica de alta velocidad con impresiones en aproximadamente 8 segundos.",
      "Fotografías, videos, boomerangs y mensajes personalizados.",
      "Marco personalizado.",
      "Entrega digital mediante enlace.",
      "Accesorios divertidos según la temática.",
      "Efectos especiales: humo, burbujas, confeti y pistola de dinero.",
    ],
    installationRequirements: [
      "Dimensiones aproximadas: 4 pies x 4 pies de base y 7 pies de altura.",
      "Mesa auxiliar de 72 pulgadas para accesorios e impresora.",
      "Área libre adicional para circulación y operación.",
      "Punto de energía cercano y superficie nivelada.",
    ],
  },
  {
    slug: "cabina-espejada-navidena",
    name: "Cabina Espejada Navideña",
    category: "navidad",
    shortDescription:
      "Una experiencia fotográfica elegante, grupal y completamente ambientada para Navidad.",
    description:
      "Cabina de gran formato, completamente espejada y con iluminación LED, diseñada para convertirse en uno de los puntos más llamativos de la celebración. Su tamaño permite la participación simultánea de grupos grandes y crea un espacio ideal para fotografías memorables de empleados, familias e invitados.",
    tagline:
      "Una experiencia fotográfica elegante, grupal y completamente ambientada para Navidad.",
    priceFrom: 34995,
    seasonal: true,
    idealFor:
      "Fiestas de empleados, celebraciones corporativas, bodas de temporada, reuniones familiares y eventos navideños con alta asistencia.",
    plans: [{ name: "Evento completo", price: 34995 }],
    notes: [
      "Servicio exclusivo de temporada navideña y disponible únicamente en modalidad de evento completo.",
    ],
    includes: [
      "Cabina espejada con iluminación LED.",
      "Capacidad aproximada para grupos de 10 a 15 personas.",
      "Cámara e iluminación profesional.",
      "Impresora fotográfica de alta velocidad con impresiones en aproximadamente 8 segundos.",
      "Fotografías ilimitadas durante el servicio.",
      "Marco personalizado con temática navideña o imagen corporativa.",
      "Props y accesorios navideños.",
      "Personal especializado para operación y atención.",
      "Entrega digital del contenido mediante enlace.",
    ],
    installationRequirements: [
      "8 pies de ancho x 4 pies de profundidad x 8 pies de altura.",
      "Punto de energía cercano.",
      "Superficie nivelada y espacio de acceso suficiente para el montaje.",
    ],
  },
  {
    slug: "visita-santa-claus-duende",
    name: "Visita de Santa Claus y Duende",
    category: "navidad",
    shortDescription:
      "Haz que la magia de la Navidad llegue directamente a tu hogar, oficina o empresa.",
    description:
      "Santa Claus, caracterizado con vestuario profesional y presencia cuidada, llega acompañado de un duende para crear un momento de ilusión, alegría e interacción con niños, colaboradores e invitados.",
    tagline:
      "Haz que la magia de la Navidad llegue directamente a tu hogar, oficina o empresa.",
    priceFrom: 6495,
    seasonal: true,
    idealFor:
      "Hogares, oficinas, empresas, colegios, centros comerciales y actividades familiares o corporativas.",
    plans: [{ name: "Duración · 1 hora", price: 6495 }],
    extras: [
      "Personaje Grinch adicional: RD$3,495.",
      "Fuera de la zona metropolitana aplica cargo de traslado según distancia.",
    ],
    includes: [
      "Santa Claus con caracterización y vestuario profesional.",
      "Un duende acompañante.",
      "Interacción con los invitados y fotografías.",
      "Participación en entrega de regalos, si el cliente lo coordina previamente.",
      "Formato adaptable a visita puntual o recorrido dentro de la empresa.",
      "Traslado incluido dentro del polígono central o zona metropolitana.",
    ],
  },
  {
    slug: "conjunto-tipico-navideno",
    name: "Conjunto Típico Navideño",
    category: "navidad",
    shortDescription:
      "Tradición dominicana, alegría y espíritu navideño en vivo.",
    description:
      "Un conjunto típico preparado para recorrer la empresa o amenizar un punto fijo durante una hora. La combinación de tambora, güira y acordeón, junto con la caracterización navideña de los músicos, crea una experiencia cercana, festiva y auténtica.",
    tagline: "Tradición dominicana, alegría y espíritu navideño en vivo.",
    priceFrom: 12995,
    seasonal: true,
    plans: [{ name: "Duración · 1 hora", price: 12995 }],
    extras: [
      "Fuera de la zona metropolitana aplica cargo de traslado según distancia.",
    ],
    notes: [
      "No incluye equipo de sonido. Si el cliente requiere sonido, se cotiza con costo adicional.",
    ],
    includes: [
      "Tres músicos en vivo: tambora, güira y acordeón.",
      "Los tres músicos vestidos de duende.",
      "Presentación o recorrido de una hora.",
      "Traslado incluido dentro del polígono central o zona metropolitana.",
    ],
  },
  {
    slug: "santa-claus-conjunto-tipico",
    name: "Santa Claus + Conjunto Típico Navideño",
    category: "navidad",
    shortDescription:
      "Una combinación completa de música, personajes y tradición para llevar la Navidad por toda la empresa.",
    description:
      "Esta experiencia integra la presencia de Santa Claus y un duende con el conjunto típico de tambora, güira y acordeón. Puede realizarse como recorrido o como presentación fija, combinando música, fotografías e interacción con los invitados.",
    tagline:
      "Una combinación completa de música, personajes y tradición para llevar la Navidad por toda la empresa.",
    priceFrom: 16495,
    seasonal: true,
    plans: [{ name: "Oferta · 1 hora", price: 16495 }],
    extras: [
      "Agregar personaje Grinch: RD$3,495.",
      "Fuera de la zona metropolitana aplica cargo de traslado según distancia.",
    ],
    notes: [
      "No incluye equipo de sonido. Puede cotizarse de forma adicional si la actividad lo requiere.",
    ],
    includes: [
      "Santa Claus con vestuario profesional.",
      "Un duende acompañante.",
      "Conjunto típico de tambora, güira y acordeón.",
      "Músicos caracterizados de acuerdo con la temporada navideña.",
      "Interacción, animación y fotografías.",
      "Duración total aproximada de una hora.",
      "Traslado incluido dentro del polígono central o zona metropolitana.",
    ],
  },
  {
    slug: "hora-loca-navidena",
    name: "Hora Loca Navideña",
    category: "navidad",
    shortDescription:
      "¡A gozar todo el mundo! Una explosión de alegría, música, baile y personajes navideños.",
    description:
      "Durante 45 minutos, un elenco temático entra en escena para encender la pista y convertir la celebración en uno de los momentos más divertidos de la noche. La propuesta combina animación, personajes, músicos y dinámicas participativas.",
    tagline:
      "¡A gozar todo el mundo! Una explosión de alegría, música, baile y personajes navideños.",
    priceFrom: 18995,
    seasonal: true,
    plans: [{ name: "Show · 45 minutos", price: 18995 }],
    extras: [
      "Fuera de la zona metropolitana aplica cargo de traslado según distancia.",
    ],
    notes: [
      "No incluye equipo de sonido. Si el cliente lo necesita, puede contratarlo por separado.",
    ],
    includes: [
      "Santa Claus animador.",
      "Dos duendecitas bailarinas.",
      "Dos duendes músicos con redoblantes y drum.",
      "Grinch en zancos.",
      "Coreografías, bailes, dinámicas y animación participativa.",
      "Vestuario y caracterización temática navideña.",
      "Traslado incluido dentro del polígono central o zona metropolitana.",
    ],
  },
  {
    slug: "sonido-iluminacion-navidena",
    name: "Sonido e Iluminación Navideña",
    category: "navidad",
    shortDescription:
      "Todo lo necesario para que una celebración navideña suene, se vea y se sienta profesional.",
    description:
      "Un paquete de sonido pensado para celebraciones de hasta aproximadamente 80 personas en espacios cerrados. Al contratar el plan de cinco horas, Mister Fiestas incorpora iluminación LED y máquina de humo sin costo adicional dentro del paquete.",
    tagline:
      "Todo lo necesario para que una celebración navideña suene, se vea y se sienta profesional.",
    priceFrom: 12495,
    seasonal: true,
    plans: [
      { name: "Plan · 5 horas", price: 12495 },
      { name: "Hora adicional", price: 2500 },
    ],
    extras: [
      "Karaoke: RD$3,495 adicionales. Incluye un micrófono adicional y monitor/TV de 32 pulgadas para visualizar las letras.",
      "Luz LED adicional: RD$500 cada una.",
      "VideoBooth 360 Sencillo como complemento del plan: tarifa preferencial de RD$7,000.",
      "Photo Booth por 2 horas como complemento del plan: tarifa preferencial de RD$11,000.",
      "Fuera de la zona metropolitana aplica cargo de traslado según distancia.",
    ],
    includes: [
      "Dos bocinas profesionales.",
      "Un micrófono inalámbrico.",
      "DJ durante el tiempo contratado.",
      "Computadora y software para reproducción musical.",
      "Consola o máster de audio.",
      "Stand de iluminación.",
      "Cinco luces LED.",
      "Máquina de humo incluida sin costo adicional en el plan de 5 horas.",
      "Montaje profesional para eventos cerrados de hasta aproximadamente 80 personas.",
      "Traslado incluido dentro del polígono central o zona metropolitana.",
    ],
    installationRequirements: [
      "Recomendado para interiores y grupos de 0 a aproximadamente 80 personas.",
      "Los espacios abiertos o eventos de mayor cobertura requieren una cotización de sonido distinta según las condiciones del lugar.",
      "Se requiere acceso a energía eléctrica y un área segura para consola, DJ y equipos.",
    ],
  },

  // Servicios anteriores fuera de catálogo temporalmente
  {
    slug: "dj",
    name: "DJ",
    category: "musica",
    shortDescription:
      "Selección musical personalizada con sonido de alta fidelidad.",
    description:
      "Mezcla versátil para mantener la energía de tu celebración. Contenido por confirmar.",
    priceFrom: 450,
    outOfCatalog: true,
    includes: [
      "Equipo de sonido",
      "Repertorio adaptable",
      "Iluminación básica",
    ],
  },
  {
    slug: "animacion",
    name: "Animación",
    category: "experiencias",
    shortDescription:
      "Conducción y dinámica para que la fiesta fluya de principio a fin.",
    description: "Contenido por confirmar.",
    priceFrom: 200,
    outOfCatalog: true,
  },
  {
    slug: "hora-loca",
    name: "Hora loca",
    category: "experiencias",
    shortDescription: "El pico de energía de la noche con show, props y ritmo.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "decoracion",
    name: "Decoración",
    category: "ambientacion",
    shortDescription:
      "Ambientación editorial cálida alineada a tu tipo de evento.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "photobooth",
    name: "Photobooth",
    category: "experiencias",
    shortDescription: "Fotos ilimitadas con props y diseño a medida.",
    description: "Contenido por confirmar.",
    priceFrom: 350,
    outOfCatalog: true,
  },
  {
    slug: "inflables",
    name: "Inflables",
    category: "experiencias",
    shortDescription: "Diversión segura para invitados de todas las edades.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "sonido-iluminacion",
    name: "Sonido e iluminación",
    category: "ambientacion",
    shortDescription:
      "Refuerzo técnico para atmósfera, escenario y pista de baile.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "catering",
    name: "Catering",
    category: "gastronomia",
    shortDescription:
      "Propuesta gastronómica presentada con precisión y calidez.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "pirotecnia",
    name: "Pirotecnia",
    category: "efectos",
    shortDescription: "Cierre espectacular sujeto a permisos y espacio.",
    description: "Contenido y condiciones de seguridad por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "maquina-de-humo",
    name: "Máquina de humo",
    category: "efectos",
    shortDescription: "Efecto atmosférico para pista e iluminación.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
  {
    slug: "maquina-de-confeti",
    name: "Máquina de confeti",
    category: "efectos",
    shortDescription: "Explosión de color para el momento clave de la fiesta.",
    description: "Contenido por confirmar.",
    outOfCatalog: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter(
    (service) => service.featured && !service.outOfCatalog,
  );
}
