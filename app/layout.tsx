import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lasso | La plataforma de lealtad que convierte clientes en ingresos recurrentes",
  description:
    "Crea programas de fidelización, automatiza campañas y mide tu crecimiento. Directo al celular de tus clientes, sin descargar apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[--foreground]">
        {children}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2767094386981895');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2767094386981895&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Propaga fbclid, _fbp y UTMs a todos los CTAs del formulario */}
        <Script id="fbclid-propagator" strategy="afterInteractive">{`
          (function() {
            function getCookie(name) {
              const v = '; ' + document.cookie;
              const parts = v.split('; ' + name + '=');
              return parts.length === 2 ? parts.pop().split(';').shift() : null;
            }
            function getParam(name) {
              return new URLSearchParams(window.location.search).get(name);
            }
            setTimeout(function() {
              const fbclid     = getParam('fbclid');
              const fbp        = getCookie('_fbp');
              const utm_source   = getParam('utm_source')   || '';
              const utm_campaign = getParam('utm_campaign') || '';
              const utm_medium   = getParam('utm_medium')   || '';
              const utm_content  = getParam('utm_content')  || '';
              const utm_term     = getParam('utm_term')     || '';

              document.querySelectorAll('a[href*="lassomkt.app.n8n.cloud/form"]')
                .forEach(function(cta) {
                  const url = new URL(cta.href);
                  if (fbclid)       url.searchParams.set('fbclid',       fbclid);
                  if (fbp)          url.searchParams.set('fbp',          fbp);
                  if (utm_source)   url.searchParams.set('utm_source',   utm_source);
                  if (utm_campaign) url.searchParams.set('utm_campaign', utm_campaign);
                  if (utm_medium)   url.searchParams.set('utm_medium',   utm_medium);
                  if (utm_content)  url.searchParams.set('utm_content',  utm_content);
                  if (utm_term)     url.searchParams.set('utm_term',     utm_term);
                  cta.href = url.toString();
                });
            }, 500);
          })();
        `}</Script>
      </body>
    </html>
  );
}
