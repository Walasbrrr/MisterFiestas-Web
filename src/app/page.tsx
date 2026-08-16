import { services } from "@/content/services";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-5xl px-6 py-20">
      <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-pink-600">
        Mister Fiestas
      </p>
      <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-7xl">
        Creamos eventos que se convierten en buenos recuerdos.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-700">
        Estructura inicial del sitio. El contenido, la identidad visual y los datos
        de contacto deben confirmarse con el negocio antes de publicar.
      </p>

      <section className="mt-16" aria-labelledby="services-title">
        <h2 id="services-title" className="text-3xl font-semibold">
          Servicios
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{service.name}</h3>
              <p className="mt-2 text-zinc-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

