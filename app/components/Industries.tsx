type IconProps = { className?: string; style?: React.CSSProperties };

const Coffee = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="2" x2="6" y2="4" /><line x1="10" y1="2" x2="10" y2="4" /><line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);
const Utensils = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><line x1="7" y1="2" x2="7" y2="22" />
    <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
  </svg>
);
const Dumbbell = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="10" width="3" height="4" rx="1" /><rect x="5" y="8" width="3" height="8" rx="1" />
    <rect x="16" y="8" width="3" height="8" rx="1" /><rect x="19" y="10" width="3" height="4" rx="1" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
const Scissors = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
    <line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
);
const ShoppingBag = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const UtensilsCrossed = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
    <path d="m15 15 3.35-3.65a2 2 0 0 1 2.9 2.75L15 21" /><path d="m2 2 20 20" />
    <path d="m9 3-6 17" /><path d="m3 3 6 17" />
  </svg>
);
const Heart = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);
const BookOpen = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);
const Car = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19 17H5a2 2 0 0 1-2-2v-4l2.7-6.7A2 2 0 0 1 7.56 3h8.88a2 2 0 0 1 1.86 1.3L21 11v4a2 2 0 0 1-2 2z" />
    <circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" />
  </svg>
);
const Sparkle = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3c-1 4-4 7-9 9 5 2 8 5 9 9 1-4 4-7 9-9-5-2-8-5-9-9z" />
  </svg>
);
const Paw = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="4.5" cy="9.5" r="2" /><circle cx="9" cy="5" r="2" />
    <circle cx="15" cy="5" r="2" /><circle cx="19.5" cy="9.5" r="2" />
    <path d="M12 17.5c-4 0-7 1.3-7 3s3 3 7 3 7-1.3 7-3-3-3-7-3z" />
  </svg>
);
const Pill = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
    <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
  </svg>
);
const Wine = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M8 22h8" /><path d="M12 11v11" />
    <path d="M7 2h10l-1.5 8a4 4 0 0 1-7 0L7 2z" />
  </svg>
);
const Diamond = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.58a2.41 2.41 0 0 0 3.41 0l7.58-7.58a2.41 2.41 0 0 0 0-3.41l-7.58-7.58a2.41 2.41 0 0 0-3.41 0Z" />
  </svg>
);

type Industry = {
  name: string;
  Icon: (p: IconProps) => React.ReactElement;
  color: string;
  bg: string;
};

const row1: Industry[] = [
  { name: "Cafeterías",        Icon: Coffee,          color: "#92400E", bg: "#FEF3C7" },
  { name: "Restaurantes",      Icon: Utensils,        color: "#991B1B", bg: "#FEE2E2" },
  { name: "Gyms & Studios",    Icon: Dumbbell,        color: "#1D4ED8", bg: "#DBEAFE" },
  { name: "Spas & Salones",    Icon: Scissors,        color: "#7C3AED", bg: "#EDE9FE" },
  { name: "Moda & Retail",     Icon: ShoppingBag,     color: "#BE185D", bg: "#FCE7F3" },
  { name: "Bares & Antros",    Icon: Wine,            color: "#B45309", bg: "#FEF3C7" },
  { name: "Clínicas & Salud",  Icon: Heart,           color: "#0F766E", bg: "#CCFBF1" },
];

const row2: Industry[] = [
  { name: "Joyerías",          Icon: Diamond,         color: "#0E7490", bg: "#CFFAFE" },
  { name: "Escuelas",          Icon: BookOpen,        color: "#1E40AF", bg: "#DBEAFE" },
  { name: "Autolavados",       Icon: Car,             color: "#0369A1", bg: "#E0F2FE" },
  { name: "Estética & Belleza",Icon: Sparkle,         color: "#9D174D", bg: "#FCE7F3" },
  { name: "Veterinarias",      Icon: Paw,             color: "#166534", bg: "#DCFCE7" },
  { name: "Farmacias",         Icon: Pill,            color: "#065F46", bg: "#D1FAE5" },
  { name: "Marisquerías",      Icon: UtensilsCrossed, color: "#7C2D12", bg: "#FFEDD5" },
];

function IndustryCard({ name, Icon, color, bg }: Industry) {
  return (
    <div
      className="flex flex-shrink-0 select-none items-center gap-3 rounded-2xl px-5 py-4"
      style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.10)",
        minWidth: "196px",
      }}
    >
      <div
        className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: bg }}
      >
        <Icon className="h-5 w-5" style={{ color }} />
      </div>
      <span className="text-sm font-semibold text-white">{name}</span>
    </div>
  );
}

export default function Industries() {
  /*
   * 2 copias exactas → el 50 % del track es idéntico al otro 50 %.
   * ticker-left:  0 → -50%  (los items salen por la izquierda, loop sin salto)
   * ticker-right: -50% → 0  (los items salen por la derecha, loop sin salto)
   * En ambos casos al resetear, el contenido en el punto de inicio ≡ el del final.
   */
  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  return (
    <section className="bg-navy-900 overflow-hidden py-20 md:py-24">
      <style>{`
        @keyframes ticker-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes ticker-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .ticker-left  { animation: ticker-left  28s linear infinite; }
        .ticker-right { animation: ticker-right 32s linear infinite; }
        .ticker-left:hover,
        .ticker-right:hover { animation-play-state: paused; }
      `}</style>

      {/* Header */}
      <div className="mx-auto mb-14 max-w-[1200px] px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Cualquier giro
        </div>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
          Hecho para tu tipo de negocio
        </h2>
        <p className="mt-3 text-lg text-white/55">
          Sin importar tu industria, Lasso se adapta en minutos.
        </p>
      </div>

      {/* Cinta 1 — izquierda */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-navy-900 to-transparent" />
        <div className="ticker-left flex gap-4">
          {track1.map((ind, i) => (
            <IndustryCard key={`r1-${i}`} {...ind} />
          ))}
        </div>
      </div>

      {/* Cinta 2 — derecha */}
      <div className="relative mt-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-navy-900 to-transparent" />
        <div className="ticker-right flex gap-4">
          {track2.map((ind, i) => (
            <IndustryCard key={`r2-${i}`} {...ind} />
          ))}
        </div>
      </div>

      {/* Micro CTA */}
      <p className="mt-12 text-center text-sm text-white/35">
        ¿No ves tu industria?{" "}
        <a
          href="https://lassomkt.app.n8n.cloud/form/8dea02b9-5556-4481-aa20-07e39f72a257"
          className="font-semibold text-brand-500 underline underline-offset-2 hover:text-brand-400"
        >
          Agenda una demo
        </a>{" "}
        y te mostramos cómo funciona para tu negocio.
      </p>
    </section>
  );
}
