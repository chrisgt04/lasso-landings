"use client";

import { useState } from "react";

type Plan = {
  name: string;
  subtitle: string;
  claim: string;
  monthly: number;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const plans: Plan[] = [
  {
    name: "Starter",
    subtitle: "Ideal para empezar",
    claim: "Sin límite de usuarios",
    monthly: 999,
    features: ["1 Tipo de tarjeta", "1 Manager", "Hasta 1,000 clientes", "Soporte por chat"],
  },
  {
    name: "Growth",
    subtitle: "Para negocios en crecimiento",
    claim: "Automatización que vende sola",
    monthly: 1499,
    badge: "Más Popular",
    highlight: true,
    features: ["3 Tipos de tarjetas", "10 Managers", "Hasta 5,000 clientes", "Automatizaciones", "Soporte WhatsApp"],
  },
  {
    name: "Pro",
    subtitle: "Para escalar tu mercado",
    claim: "Tu propia franquicia digital",
    monthly: 3999,
    features: ["10 Tipos de tarjetas", "50 Managers", "Clientes ilimitados", "Diseño 100% a medida", "Gerente dedicado"],
  },
];

function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
        highlight ? "bg-white/25" : "bg-brand-500/15"
      }`}
    >
      <svg
        className={`h-3 w-3 ${highlight ? "text-white" : "text-brand-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const price = (m: number) => (annual ? Math.round(m * 0.8) : m);

  return (
    <section id="precios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-5xl">
            Planes que <span className="text-brand-500">crecen contigo</span>
          </h2>
          <p className="mt-3 text-base text-navy-900/60">
            Sin contratos. Cancela cuando quieras.
          </p>
        </div>

        {/* Toggle Mensual / Anual */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-navy-900/10 bg-slate-100 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition ${
                !annual ? "bg-brand-500 text-white" : "text-navy-900/60 hover:text-navy-900"
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-6 py-2 text-sm font-semibold transition ${
                annual ? "bg-brand-500 text-white" : "text-navy-900/60 hover:text-navy-900"
              }`}
            >
              Anual
              <span className="rounded-full bg-emerald-500 px-2 py-0.5 text-[11px] font-semibold text-white">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Grid de cards */}
        <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
          {plans.map((p) => {
            const isHi = p.highlight;
            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl p-10 ${
                  isHi
                    ? "bg-brand-500 shadow-2xl shadow-brand-500/30 md:-mt-4"
                    : "border border-navy-900/10 bg-white shadow-sm"
                }`}
              >
                {p.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-5 py-1.5 text-sm font-semibold text-white shadow-lg">
                    {p.badge}
                  </div>
                )}

                <h3 className={`text-3xl font-bold ${isHi ? "text-white" : "text-navy-900"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-base ${isHi ? "text-blue-100" : "text-navy-900/60"}`}>
                  {p.subtitle}
                </p>

                <div
                  className={`mt-8 w-full rounded-full px-6 py-3 text-center text-[15px] ${
                    isHi
                      ? "bg-white/20 text-white"
                      : "border-l-2 border-brand-500 bg-slate-50 text-navy-900"
                  }`}
                >
                  {p.claim}
                </div>

                <div className="mt-8">
                  <span
                    className={`block font-extrabold tracking-tight ${isHi ? "text-white" : "text-navy-900"}`}
                    style={{ fontSize: "64px", lineHeight: 1 }}
                  >
                    ${price(p.monthly).toLocaleString()}
                  </span>
                  <span className={`mt-1 block text-sm ${isHi ? "text-blue-100" : "text-navy-900/60"}`}>
                    MXN / mes
                  </span>
                </div>

                <ul className="mt-10 flex-1 space-y-0">
                  {p.features.map((f, idx, arr) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 py-4 text-base ${
                        idx < arr.length - 1
                          ? isHi
                            ? "border-b border-white/15"
                            : "border-b border-navy-900/10"
                          : ""
                      }`}
                    >
                      <CheckIcon highlight={isHi} />
                      <span className={isHi ? "text-white" : "text-navy-900"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://lassomkt.app.n8n.cloud/form-test/8dea02b9-5556-4481-aa20-07e39f72a257"
                  className={`mt-8 block rounded-full px-6 py-4 text-center text-base font-semibold transition ${
                    isHi
                      ? "bg-white text-brand-500 hover:bg-slate-100"
                      : "bg-navy-900 text-white hover:bg-navy-800"
                  }`}
                >
                  Agendar demo
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
