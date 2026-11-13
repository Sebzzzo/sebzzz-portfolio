"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyEmailProps {
  email: string;
}

export default function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="relative shrink-0 flex items-center">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Correo copiado al portapapeles" : "Copiar dirección de correo"}
        title={copied ? "¡Copiado!" : "Copiar correo"}
        className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--text)] hover:bg-white/5 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        {copied ? (
          <Check size={16} className="text-[#FF4B55] transition-transform duration-200" aria-hidden="true" />
        ) : (
          <Copy size={16} className="transition-transform duration-200" aria-hidden="true" />
        )}
      </button>

      {/* Screen reader announcement */}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Copiado" : ""}
      </span>
    </div>
  );
}

