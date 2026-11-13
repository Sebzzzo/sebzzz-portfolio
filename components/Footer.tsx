import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* LEFT: COPYRIGHT */}
        <p className="label text-[var(--muted)] text-center md:text-left select-none">
          © 2026 JUAN SEBASTIÁN GARCÍA TRIVIÑO. TODOS LOS DERECHOS RESERVADOS.
        </p>

        {/* RIGHT: BACK TO TOP */}
        <a
          href="#home"
          className="label text-[var(--muted)] hover:text-[var(--text)] inline-flex items-center gap-2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-sm"
          aria-label="Volver arriba"
        >
          <span>VOLVER ARRIBA</span>
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

