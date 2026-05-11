"use client";

import { useState } from "react";

type Props = {
  videoId?: string;
  videoUrl?: string;
  isShort?: boolean;
};

export default function VideoSection({ videoId, videoUrl, isShort }: Props) {
  const [playing, setPlaying] = useState(false);

  const embedUrl =
    videoUrl ??
    (videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
      : null);

  const aspectClass = isShort ? "aspect-[9/16]" : "aspect-video";
  const containerClass = isShort ? "max-w-[360px]" : "max-w-4xl";

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className={`mx-auto ${containerClass}`}>
          <div className={`relative ${aspectClass} overflow-hidden rounded-2xl bg-navy-900 shadow-2xl shadow-brand-500/20 ring-1 ring-black/10`}>
            {playing && embedUrl ? (
              <iframe
                src={embedUrl}
                className="absolute inset-0 h-full w-full"
                title="Demo de Lasso"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <button
                onClick={() => embedUrl && setPlaying(true)}
                className="group absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-500 via-brand-600 to-navy-900 transition"
                aria-label="Reproducir video"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
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

          <div className="mt-8 flex justify-center">
            <a
              href="https://calendly.com/mkt-lasso/lasso"
              className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              Agendar demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
