const features = [
  { title: "Apple Wallet & Google Wallet", desc: "Tus tarjetas siempre a un clic, sin descargar nada." },
  { title: "Segmentación inteligente",     desc: "Ofertas según los hábitos de cada cliente." },
  { title: "Ventas en piloto automático",  desc: "Cumpleaños, 'te extrañamos' y geocercas." },
];

/* ─── Loyalty card component ─── */
type CardProps = {
  gradient: [string, string];
  brand: string;
  cardType: string;
  body: React.ReactNode;
  customer: string;
  tx: string;   // CSS translateX for fan position
  ty: string;   // CSS translateY for fan position
  rot: string;  // rotation for fan position
  delay: string;
  zIndex: number;
};

function LoyaltyCard({ gradient, brand, cardType, body, customer, tx, ty, rot, delay, zIndex }: CardProps) {
  return (
    <div
      className="absolute rounded-[1.4rem] shadow-2xl overflow-hidden"
      style={{
        width: "300px",
        height: "178px",
        /* fan base position — also the keyframe anchor */
        "--tx": tx,
        "--ty": ty,
        "--rot": rot,
        transform: `translateX(${tx}) translateY(${ty}) rotate(${rot})`,
        animation: `wallet-float 4.5s ease-in-out infinite`,
        animationDelay: delay,
        zIndex,
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
      } as React.CSSProperties}
    >
      {/* subtle inner glow */}
      <div className="absolute inset-0 rounded-[1.4rem]" style={{ background: "rgba(255,255,255,0.06)" }} />
      {/* top-right circle decoration */}
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }} />

      <div className="relative flex h-full flex-col justify-between p-5">
        {/* header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-white/60">{cardType}</div>
            <div className="mt-0.5 text-base font-bold text-white">{brand}</div>
          </div>
          {/* logo placeholder */}
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
            <div className="h-3 w-3 rounded-sm bg-white/80" />
          </div>
        </div>

        {/* main content (stamps / cashback / badge) */}
        <div>{body}</div>

        {/* footer */}
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-white/70">{customer}</span>
          <div className="flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1">
            <svg className="h-3 w-3 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-[10px] font-semibold text-white/80">Wallet</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Stamp dots ─── */
function Stamps({ filled, total }: { filled: number; total: number }) {
  return (
    <div>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-4 w-4 rounded-full border border-white/40"
            style={{ background: i < filled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.15)" }}
          />
        ))}
      </div>
      <div className="mt-1 text-[11px] text-white/65">{filled} de {total} · bebida gratis</div>
    </div>
  );
}

export default function Wallet() {
  return (
    <section className="bg-white py-20 md:py-28">
      <style>{`
        @keyframes wallet-float {
          0%,100% { transform: translateX(var(--tx)) translateY(var(--ty)) rotate(var(--rot)); }
          50%      { transform: translateX(var(--tx)) translateY(calc(var(--ty) - 12px)) rotate(var(--rot)); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* ── Left: text ── */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Tus clientes{" "}
              <span className="text-brand-500">siempre contigo</span>
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
                href="https://lassomkt.app.n8n.cloud/form/8dea02b9-5556-4481-aa20-07e39f72a257"
                className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
              >
                Agendar demo
              </a>
            </div>
          </div>

          {/* ── Right: animated card fan ── */}
          <div className="flex justify-center">
            <div className="relative" style={{ width: "360px", height: "380px" }}>
              {/* Card 1 — BELLA SPA cashback, back-left */}
              <LoyaltyCard
                gradient={["#5B21B6", "#9333EA"]}
                brand="BELLA SPA"
                cardType="Tarjeta Cashback"
                body={
                  <div>
                    <div className="text-2xl font-bold text-white">$245.00</div>
                    <div className="text-[11px] text-white/60">saldo disponible</div>
                  </div>
                }
                customer="Ana Martínez"
                tx="-40px" ty="30px" rot="-10deg"
                delay="0.8s" zIndex={1}
              />

              {/* Card 2 — IRON GYM membership, back-right */}
              <LoyaltyCard
                gradient={["#064E3B", "#059669"]}
                brand="IRON GYM"
                cardType="Membresía Anual"
                body={
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1">
                    <svg className="h-3 w-3 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                    </svg>
                    <span className="text-[11px] font-bold text-white">MIEMBRO VIP</span>
                  </div>
                }
                customer="Carlos López"
                tx="50px" ty="10px" rot="9deg"
                delay="1.6s" zIndex={2}
              />

              {/* Card 3 — Aroma Café stamps, front-center */}
              <LoyaltyCard
                gradient={["#1E3A5F", "#2563EB"]}
                brand="Aroma Café"
                cardType="Tarjeta de Sellos"
                body={<Stamps filled={7} total={10} />}
                customer="María García"
                tx="5px" ty="90px" rot="-2deg"
                delay="0s" zIndex={3}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
