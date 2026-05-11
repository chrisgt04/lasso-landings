"use client";

import { useEffect, useState } from "react";

export default function FloatingCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="https://calendly.com/mkt-lasso/lasso"
      aria-label="Agendar demo"
      className={`fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 text-sm font-bold text-white shadow-2xl shadow-brand-500/30 transition-all duration-300 hover:bg-brand-600 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Agendar demo
    </a>
  );
}
