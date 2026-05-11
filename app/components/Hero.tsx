"use client";

import { useState } from "react";

const VIDEO_ID = "Zd89JuBEB2E";

export default function Hero() {
  const [playing, setPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* Radial gradient sutil en los bordes laterales hacia navy-800 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 0% 30%, rgba(10,50,81,0.6), transparent 60%), radial-gradient(ellipse 60% 80% at 100% 30%, rgba(10,50,81,0.6), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-12 pb-0 md:pt-20">
        {/* 2 columnas en desktop: texto izq, video der */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          {/* COLUMNA TEXTO */}
          <div className="text-center lg:text-left">
            <h1
              className="font-bold tracking-tight text-white"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 800,
              }}
            >
              La plataforma de <span className="text-orange-500">lealtad</span> que convierte tus clientes en ingresos recurrentes.
            </h1>

            <p
              className="mx-auto mt-6 text-slate-300 lg:mx-0"
              style={{
                fontSize: "clamp(1rem, 1.25vw, 1.25rem)",
                lineHeight: 1.5,
                maxWidth: "640px",
              }}
            >
              Crea programas de fidelización, automatiza campañas y mide tu crecimiento.
              Directo al celular de tus clientes, sin descargar apps.
            </p>

            {/* Claim — agregado según spec, en azul brand */}
            <p className="mt-8 text-2xl font-semibold text-brand-500">
              Conecta. Retén. Crece.
            </p>

            {/* CTAs duales */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#cta"
                className="w-full rounded-full bg-brand-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-500/30 transition hover:bg-brand-600 sm:w-auto"
              >
                Comienza Gratis
              </a>
              <a
                href="https://calendly.com/mkt-lasso/lasso"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-600 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5 sm:w-auto"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Agenda una demo
              </a>
            </div>

            {/* Trust signals con check verde */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8 lg:justify-start">
              {["Prueba gratis de 14 días", "Líderes en retención digital"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
                  <svg className="h-5 w-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* COLUMNA VIDEO — Short de YouTube en 9:16 */}
          <div className="mx-auto w-full max-w-[340px] lg:max-w-[380px]">
            <div className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-navy-800 shadow-2xl shadow-brand-500/20 ring-1 ring-white/10">
              {playing ? (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 h-full w-full"
                  title="Demo de Lasso"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500 via-brand-600 to-navy-900 transition"
                  aria-label="Reproducir video"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white/95 shadow-xl transition group-hover:scale-110">
                    <svg className="ml-1 h-8 w-8 text-brand-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/40 px-4 py-1.5 text-xs font-medium text-white backdrop-blur">
                    Mira cómo funciona
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* MOCKUPS — fila de 3 phones, sangra hacia la siguiente sección */}
        {/* TODO: reemplazar los placeholders con <img src="/mockups/card-bakery.png" /> etc.
            cuando estén los PNGs con fondo transparente en public/mockups/ */}
        <div className="mt-16 -mb-32 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:justify-center md:overflow-visible">
          {/* Card 1 — Panadería marrón */}
          <PhoneMockup>
            <div className="flex h-full flex-col bg-white p-3 text-[10px]">
              <div className="rounded-xl bg-[#6F4E37] p-3 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[8px] opacity-70">Panadería</div>
                    <div className="font-bold italic">Hornéalo</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[8px] opacity-70">Puntos</div>
                    <div className="font-bold">1000</div>
                  </div>
                </div>
                <div className="mt-3 flex justify-around text-2xl">🥐 🍞 🥖</div>
                <div className="mt-3 text-[8px]">
                  <div className="opacity-70">PORCENTAJE ACTUAL</div>
                  <div className="flex justify-between font-bold">
                    <span>10%</span>
                    <span>Oro</span>
                  </div>
                </div>
                <div className="mt-3 flex h-6 items-center justify-center rounded bg-white">
                  <div className="text-[8px] text-black">||||| ||| | || |||||</div>
                </div>
                <div className="mt-1 text-center text-[7px]">Powered by Lasso</div>
              </div>
            </div>
          </PhoneMockup>

          {/* Card 2 — Padel verde */}
          <PhoneMockup>
            <div className="flex h-full flex-col bg-white p-3 text-[10px]">
              <div className="rounded-xl bg-[#4CAF50] p-3 text-white">
                <div className="text-[8px] font-bold">🎾 PADEL</div>
                <div className="mt-3 grid grid-cols-3 gap-1 place-items-center">
                  {[..."111110"].map((v, i) => (
                    <div
                      key={i}
                      className={`h-5 w-5 rounded-full border border-white/40 ${v === "1" ? "bg-white/30" : "bg-white/5"}`}
                    />
                  ))}
                </div>
                <div className="mt-4 text-[8px]">
                  <div className="opacity-80">CONTEO TOTAL DE VISITAS</div>
                  <div className="text-xl font-bold">2</div>
                </div>
                <div className="mt-2 flex h-12 items-center justify-center rounded bg-white">
                  <div className="grid grid-cols-6 gap-px">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className={`h-1.5 w-1.5 ${Math.random() > 0.4 ? "bg-black" : ""}`} />
                    ))}
                  </div>
                </div>
                <div className="mt-1 text-center text-[7px]">Powered by Lasso</div>
              </div>
            </div>
          </PhoneMockup>

          {/* Card 3 — Gym rojo */}
          <PhoneMockup>
            <div className="flex h-full flex-col bg-white p-3 text-[10px]">
              <div className="rounded-xl bg-[#E74C3C] p-3 text-white">
                <div className="text-[8px] font-bold italic">GYM</div>
                <div className="mt-2 flex items-end justify-between">
                  <div>
                    <div className="text-[7px] opacity-80">NOMBRE DEL MIEMBRO</div>
                    <div className="font-bold">Contacto</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/30" />
                </div>
                <div className="mt-3 flex justify-between text-[8px]">
                  <div>
                    <div className="opacity-80">NIVEL</div>
                    <div className="font-bold">Oro</div>
                  </div>
                  <div className="text-right">
                    <div className="opacity-80">LÍMITES</div>
                    <div className="font-bold">8 Visitas</div>
                  </div>
                </div>
                <div className="mt-3 flex h-12 items-center justify-center rounded bg-white">
                  <div className="grid grid-cols-6 gap-px">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div key={i} className={`h-1.5 w-1.5 ${Math.random() > 0.4 ? "bg-black" : ""}`} />
                    ))}
                  </div>
                </div>
                <div className="mt-1 text-center text-[7px]">Powered by Lasso</div>
              </div>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
}

/**
 * Marco genérico de iPhone (placeholder).
 * Cuando lleguen los PNGs reales con fondo transparente,
 * reemplaza esto por <img src="/mockups/xxx.png" alt="..." className="..." />
 */
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[420px] w-[210px] flex-shrink-0 snap-center rounded-[2.5rem] border-[6px] border-navy-800 bg-navy-800 shadow-2xl ring-1 ring-white/5">
      <div className="absolute left-1/2 top-1.5 h-4 w-20 -translate-x-1/2 rounded-full bg-navy-900" />
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-white pt-7">
        {children}
      </div>
    </div>
  );
}
