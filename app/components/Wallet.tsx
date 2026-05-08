const features = [
  { title: "Apple Wallet & Google Wallet", desc: "Tus tarjetas siempre a un clic." },
  { title: "Segmentación inteligente", desc: "Ofertas según los hábitos de cada cliente." },
  { title: "Ventas en piloto automático", desc: "Cumpleaños, te extrañamos y geocercas." },
];

export default function Wallet() {
  return (
    <section className="bg-brand-50/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Tus clientes <span className="text-brand-500">siempre contigo</span>
            </h2>
            <p className="mt-4 text-lg text-navy-900/70">
              Sincroniza tus tarjetas con Apple Wallet y Google Wallet sin que tu cliente descargue nada.
            </p>

            <div className="mt-8 space-y-5">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-500">
                    <svg className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">{f.title}</h3>
                    <p className="mt-1 text-sm text-navy-900/70">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
              >
                Agendar demo
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative h-[500px] w-[280px] rounded-[3rem] border-8 border-navy-900 bg-navy-900 shadow-2xl">
              <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-900" />
              <div className="h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-100 via-white to-brand-50 p-4">
                <div className="mt-8 space-y-3">
                  <div className="rotate-[-4deg] rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 p-4 text-white shadow-xl">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Lasso Card</div>
                    <div className="mt-1 text-sm font-bold">Café Recurrente</div>
                    <div className="mt-3 flex gap-1">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className={`h-3 w-3 rounded-full ${i < 6 ? "bg-white" : "bg-white/30"}`} />
                      ))}
                    </div>
                  </div>
                  <div className="rotate-[2deg] rounded-2xl bg-white p-3 shadow-lg ring-1 ring-brand-100">
                    <div className="text-[10px] uppercase tracking-wider text-navy-900/60">Cashback</div>
                    <div className="text-base font-bold text-navy-900">$120 MXN disponibles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
