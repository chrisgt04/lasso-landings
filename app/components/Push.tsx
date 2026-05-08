const items = [
  { title: "Alcance total", desc: "Sin costo, máxima apertura." },
  { title: "Segmentación", desc: "VIP, recurrentes o recuperación." },
  { title: "Geocerca", desc: "Atrae clientes cuando pasen cerca." },
  { title: "Auto-piloto", desc: "Cumpleaños y 'te extrañamos' automáticos." },
];

export default function Push() {
  return (
    <section className="bg-navy-900 py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative mx-auto h-[460px] w-[260px] rounded-[3rem] border-8 border-navy-800 bg-navy-800 shadow-2xl">
              <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-full bg-navy-900" />
              <div className="h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-4 pt-12">
                <div className="space-y-3">
                  {[
                    { title: "Lasso", body: "🎉 ¡Te extrañamos! Vuelve hoy y obtén 20% off", time: "ahora" },
                    { title: "Lasso", body: "🎂 Feliz cumpleaños — tu regalo te espera", time: "9:00 AM" },
                    { title: "Lasso", body: "📍 Estás cerca: pasa por tu café gratis", time: "1:24 PM" },
                  ].map((n, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white/10 p-3 backdrop-blur-md ring-1 ring-white/20"
                      style={{ animation: `fade-up 0.6s ease-out ${i * 0.15}s both` }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded bg-brand-500" />
                          <span className="text-[11px] font-semibold">{n.title}</span>
                        </div>
                        <span className="text-[10px] text-white/60">{n.time}</span>
                      </div>
                      <p className="mt-2 text-xs text-white/90">{n.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-500">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Gratis e ilimitado
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Notificaciones <span className="text-brand-500">PUSH</span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Llega a la pantalla de bloqueo de tus clientes y vende en tiempo real.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-4">
              {items.map((it) => (
                <li key={it.title} className="flex gap-2">
                  <div className="mt-1 h-4 w-4 flex-shrink-0 rounded-full bg-brand-500" />
                  <div>
                    <span className="block text-sm font-semibold">{it.title}</span>
                    <span className="block text-xs text-white/60">{it.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Agendar demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
