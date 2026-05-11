const items = [
  { bold: "Alcance Total", rest: " — Sin costo, máxima apertura." },
  { bold: "Segmentación", rest: " — VIP, recurrentes o recuperación." },
  { bold: "Geocerca", rest: " — Atrae clientes cuando pasen cerca." },
  { bold: "Auto-Piloto", rest: " — Cumpleaños y 'te extrañamos' automáticos." },
  { bold: "Sin Límites", rest: " — Envíos ilimitados, siempre gratis." },
];

export default function Push() {
  return (
    <section
      style={{ backgroundColor: "#0F172A" }}
      className="overflow-hidden py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div className="order-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white"
              style={{ backgroundColor: "#10B981" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Gratis
            </div>

            <h2
              className="mt-4 font-extrabold tracking-tight"
              style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1.1 }}
            >
              Notificaciones{" "}
              <span className="text-brand-500">PUSH</span>
            </h2>

            <p className="mt-4 text-lg text-slate-300">
              Llega a la pantalla de bloqueo de tus clientes y vende en tiempo real.
            </p>

            <ul className="mt-8 space-y-4">
              {items.map(({ bold, rest }) => (
                <li key={bold} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(16,185,129,0.2)" }}
                  >
                    <svg
                      className="h-3 w-3"
                      style={{ color: "#10B981" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-base leading-relaxed text-slate-300">
                    <strong className="text-white">{bold}</strong>
                    {rest}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <a
                href="https://lassomkt.app.n8n.cloud/form-test/8dea02b9-5556-4481-aa20-07e39f72a257"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Agendar demo
              </a>
            </div>
          </div>

          {/* Right: phone + floating notifications */}
          <div className="order-2 flex justify-center">
            <PushMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PushMockup() {
  const notifications = [
    {
      brand: "Aroma Café",
      body: "¡Hola! Te faltan solo 2 sellos para tu bebida gratis.",
      time: "now",
      top: 72,
      left: 18,
    },
    {
      brand: "IRON GYM",
      body: "¡5 visitas esta semana! Estás más cerca de tu premio VIP.",
      time: "1m",
      top: 208,
      left: 148,
    },
    {
      brand: "LASSO APP",
      body: "¡Estás cerca! Entra y reclama tu beneficio del día.",
      time: "3m",
      top: 338,
      left: 28,
    },
    {
      brand: "BELLA SPA",
      body: "¡Feliz cumpleaños! Pasa por tu tratamiento de cortesía.",
      time: "5m",
      top: 462,
      left: 142,
    },
  ];

  return (
    /* Container wider than phone so notifications can bleed outside frame */
    <div className="relative" style={{ width: "400px", height: "660px" }}>
      {/* Phone frame — centered inside the container */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "40px",
          transform: "translateX(-50%)",
          width: "258px",
          height: "548px",
        }}
      >
        <div className="relative h-full w-full rounded-[3rem] border-[10px] border-slate-700 bg-slate-800 shadow-2xl">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
          {/* Screen wallpaper */}
          <div className="h-full w-full overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
            <div className="flex h-full flex-col items-center pt-12 text-white">
              <div className="text-xs opacity-60">Saturday, May 10</div>
              <div
                className="mt-2 text-6xl font-thin tracking-tight"
                style={{ fontFamily: "system-ui" }}
              >
                9:41
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphism notifications floating over / outside the phone */}
      {notifications.map((n, i) => (
        <div
          key={i}
          className="absolute z-20 rounded-2xl p-3"
          style={{
            width: "218px",
            top: `${n.top}px`,
            left: `${n.left}px`,
            background: "rgba(0, 0, 0, 0.45)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div
                className="h-4 w-4 rounded"
                style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
              />
              <span className="text-[11px] font-semibold text-white">{n.brand}</span>
            </div>
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.45)" }}>
              {n.time}
            </span>
          </div>
          <p
            className="mt-1.5 text-[11px] leading-snug"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            {n.body}
          </p>
        </div>
      ))}
    </div>
  );
}
