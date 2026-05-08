"use client";

import { useState } from "react";

type Plan = {
  name: string;
  tag: string;
  monthly: number;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tag: "Ideal para empezar",
    monthly: 999,
    features: ["1 Tipo de tarjeta", "1 Manager", "Hasta 1,000 clientes", "Soporte por chat"],
  },
  {
    name: "Growth",
    tag: "Automatización que vende sola",
    monthly: 1499,
    badge: "Más Popular",
    highlight: true,
    features: ["3 Tipos de tarjetas", "10 Managers", "Hasta 5,000 clientes", "Automatizaciones", "Soporte WhatsApp"],
  },
  {
    name: "Pro",
    tag: "Tu propia franquicia digital",
    monthly: 3999,
    features: ["10 Tipos de tarjetas", "50 Managers", "Clientes ilimitados", "Diseño 100% a medida", "Gerente dedicado"],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (m: number) => (annual ? Math.round(m * 0.8) : m);

  return (
    <section id="precios" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
            Planes que <span className="text-brand-500">crecen contigo</span>
          </h2>
          <p className="mt-3 text-base text-navy-900/70">
            Sin contratos. Cancela cuando quieras.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-brand-50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !annual ? "bg-white text-navy-900 shadow-sm" : "text-navy-900/60"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                annual ? "bg-white text-navy-900 shadow-sm" : "text-navy-900/60"
              }`}
            >
              Anual
              <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] font-bold text-white">-20%</span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-8 transition ${
                p.highlight
                  ? "bg-navy-900 text-white shadow-2xl shadow-brand-500/20"
                  : "border border-brand-100 bg-white"
              }`}
            >
              {p.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  {p.badge}
                </div>
              )}

              <h3 className={`text-xl font-bold ${p.highlight ? "text-white" : "text-navy-900"}`}>
                {p.name}
              </h3>
              <p className={`mt-1 text-sm ${p.highlight ? "text-white/70" : "text-navy-900/60"}`}>
                {p.tag}
              </p>

              <div className="mt-6">
                <span className={`text-4xl font-bold ${p.highlight ? "text-white" : "text-navy-900"}`}>
                  ${price(p.monthly).toLocaleString()}
                </span>
                <span className={`ml-1 text-sm ${p.highlight ? "text-white/60" : "text-navy-900/60"}`}>
                  MXN / mes
                </span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.highlight ? "text-brand-500" : "text-brand-500"}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={p.highlight ? "text-white/90" : "text-navy-900/80"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-bold transition ${
                  p.highlight
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                Agendar demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
