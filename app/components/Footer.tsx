export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-brand-500" />
            <span className="text-base font-bold tracking-tight text-navy-900">Lasso</span>
          </div>

          <div className="text-sm text-navy-900/70">
            <a href="mailto:contacto@lasso.com.mx" className="text-brand-500 hover:underline">
              contacto@lasso.com.mx
            </a>
            <span className="mx-2 text-navy-900/30">·</span>
            +52 56 5026 6681
          </div>

          <div className="text-xs text-navy-900/50">
            © 2026 Lasso. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
