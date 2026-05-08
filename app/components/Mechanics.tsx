const mechanics = [
  { title: "Estampas", desc: "'Compra 9 y recibe el décimo gratis'.", icon: "🎟️" },
  { title: "Cashbacks", desc: "Reembolsos para incentivar la próxima compra.", icon: "💸" },
  { title: "Membresías", desc: "Club VIP con pagos por adelantado.", icon: "👑" },
  { title: "Cupones", desc: "Aumenta tu conversión hasta 2x.", icon: "🎫" },
];

export default function Mechanics() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            Mecánicas que <span className="text-brand-500">venden solas</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {mechanics.map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5"
            >
              <div className="text-3xl">{m.icon}</div>
              <h3 className="mt-3 text-lg font-semibold text-navy-900">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
          >
            Agendar demo
          </a>
        </div>
      </div>
    </section>
  );
}
