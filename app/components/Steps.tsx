const steps = [
  { n: "1", title: "Configura tu cuenta", desc: "Elige tu plan y opera de inmediato." },
  { n: "2", title: "Crea tu recompensa", desc: "Personaliza tu tarjeta digital. Tú pones las reglas." },
  { n: "3", title: "Activa tu local", desc: "Tus clientes se registran solos con un QR." },
  { n: "4", title: "Haz que vuelvan", desc: "Notificaciones directo al celular en automático." },
];

export default function Steps() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            Lanza tu programa <span className="text-brand-500">en 4 pasos</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-brand-100 bg-white p-6 transition hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 font-bold text-white">
                {s.n}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-900/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="https://lassomkt.app.n8n.cloud/form/8dea02b9-5556-4481-aa20-07e39f72a257"
            className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
          >
            Agendar demo
          </a>
        </div>
      </div>
    </section>
  );
}
