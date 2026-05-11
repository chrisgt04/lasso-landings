export default function FinalCta() {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(51,121,241,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-5xl">
          Empieza a vender más con tus{" "}
          <span className="text-brand-500">clientes actuales</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-navy-900/70">
          Agenda una demo de 15 minutos y descubre cómo Lasso puede crecer tu negocio.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="https://lassomkt.app.n8n.cloud/form-test/8dea02b9-5556-4481-aa20-07e39f72a257"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-brand-500/40 transition hover:bg-brand-600 hover:scale-105"
          >
            Agendar demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <p className="mt-4 text-sm text-navy-900/50">
          15 minutos · Sin tarjeta de crédito · Sin compromiso
        </p>
      </div>
    </section>
  );
}
