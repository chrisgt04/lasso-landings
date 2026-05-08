export default function Hero() {
  return (
    <section className="gradient-bg relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 pt-10 pb-16 text-center md:pt-16 md:pb-24">
        <div className="fade-up mx-auto inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Líderes en retención digital
        </div>

        <h1 className="fade-up mt-6 text-4xl font-bold tracking-tight text-navy-900 md:text-6xl">
          Convierte tus clientes en{" "}
          <span className="text-brand-500">ingresos recurrentes</span>
        </h1>

        <p className="fade-up mx-auto mt-5 max-w-xl text-lg text-navy-900/70">
          Programas de lealtad directo al celular de tus clientes. Sin descargar apps.
        </p>

        <div className="fade-up mt-8 flex justify-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600"
          >
            Agendar demo
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <p className="fade-up mt-3 text-sm text-navy-900/60">
          Demo personalizada · 15 minutos · Sin compromiso
        </p>
      </div>
    </section>
  );
}
