type IconProps = { className?: string; style?: React.CSSProperties };

/* Iconos estilo Lucide (outline, stroke 2). Inline para no añadir dependencia. */
const Star = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" />
  </svg>
);
const TrendingUp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const Gift = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);
const Users = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const Target = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const Zap = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

type Feature = {
  title: string;
  desc: string;
  Icon: (p: IconProps) => React.ReactElement;
  color: string;   // color principal del icono
  bg: string;      // background pastel del container del icono
};

const features: Feature[] = [
  {
    title: "Estampas",
    desc: "Genera ventas recurrentes con promociones como 'Compra 9 y recibe el décimo gratis'.",
    Icon: Star,
    color: "#3B82F6",
    bg: "#DBEAFE",
  },
  {
    title: "Cashbacks",
    desc: "Ofrece reembolsos a tus clientes como incentivo para su próxima compra.",
    Icon: TrendingUp,
    color: "#10B981",
    bg: "#D1FAE5",
  },
  {
    title: "Gift Card",
    desc: "Crea tus tarjetas de regalo con saldo precargado y atrae nuevos clientes.",
    Icon: Gift,
    color: "#F59E0B",
    bg: "#FEF3C7",
  },
  {
    title: "Membresías",
    desc: "Crea tu club de fidelización VIP y recibe pagos por adelantado.",
    Icon: Users,
    color: "#8B5CF6",
    bg: "#EDE9FE",
  },
  {
    title: "Descuentos",
    desc: "Realiza ventas al por mayor con descuentos inteligentes y duplica tus ventas.",
    Icon: Target,
    color: "#EC4899",
    bg: "#FCE7F3",
  },
  {
    title: "Cupones",
    desc: "Ideal para anuncios en línea: incrementa tu tasa de conversión hasta 2 veces.",
    Icon: Zap,
    color: "#06B6D4",
    bg: "#CFFAFE",
  },
];

export default function Mechanics() {
  return (
    <section className="bg-[#F8FAFC] py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="font-bold tracking-tight text-[#0F172A]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              fontWeight: 800,
            }}
          >
            Creación de Tu Tarjeta
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">
            Descubre las mecánicas más efectivas para potenciar tus campañas
          </p>
        </div>

        {/* Grid 3×2 desktop / 2 tablet / 1 mobile */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon, color, bg }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ backgroundColor: bg }}
              >
                <Icon className="h-7 w-7" style={{ color }} />
              </div>
              <h3 className="mt-6 text-[22px] font-bold text-[#0F172A]">{title}</h3>
              <p className="mt-3 max-w-[280px] text-base leading-relaxed text-[#64748B]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
