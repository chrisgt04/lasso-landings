const testimonials = [
  {
    quote: "En 3 meses aumentamos 40% los clientes recurrentes.",
    name: "María Rodríguez",
    role: "Cafetería La Esquina, CDMX",
    initials: "MR",
  },
  {
    quote: "Recuperamos la inversión en 2 semanas.",
    name: "Carlos García",
    role: "Restaurante El Fogón, MTY",
    initials: "CG",
  },
  {
    quote: "En 20 minutos teníamos todo listo.",
    name: "Laura Pérez",
    role: "Salón Glamour, GDL",
    initials: "LP",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-50/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            Lo que dicen <span className="text-brand-500">nuestros clientes</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-brand-100 bg-white p-8 shadow-sm"
            >
              <div className="flex gap-0.5 text-brand-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l2.4 7.2H22l-6 4.4 2.3 7.2L12 16.4 5.7 20.8 8 13.6 2 9.2h7.6L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base text-navy-900">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                  <div className="text-xs text-navy-900/60">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
