"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Proyectos", href: "#projects" },
  { name: "Proceso", href: "#process" },
  { name: "Sobre mí", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Toggle frosted glass background after 20px
          setIsScrolled(currentScrollY > 20);

          // Hide on scroll down, reveal on scroll up
          if (currentScrollY > lastScrollY.current && currentScrollY > 72) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY <= 0 ? 0 : currentScrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const shouldShow = isVisible || isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b border-[var(--line-accent)] ${
          shouldShow ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[rgba(10,10,10,0.7)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="max-w-[1440px] mx-auto h-[64px] md:h-[72px] px-6 md:px-12 flex items-center justify-between"
        >
          {/* Left: Stacked Role Labels */}
          <div className="flex flex-col select-none">
            <span className="label text-[var(--accent)] leading-tight">
              DESARROLLADOR WEB
            </span>
            <span className="label text-[var(--muted)] leading-tight">
              REACT · TYPESCRIPT · IA
            </span>
          </div>

          {/* Center: Desktop Navigation Links (≥ md) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="label text-[var(--muted)] hover:text-[var(--text)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Available status (Desktop ≥ md) */}
          <div className="hidden md:flex items-center gap-2 select-none">
            <span className="label text-[var(--text)]">
              DISPONIBLE PARA TRABAJAR
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[var(--accent)] animate-pulse-slow shrink-0"
              aria-hidden="true"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>
          </div>

          {/* Mobile Hamburger Toggle (< md) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden p-2 text-[var(--text)] hover:text-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[64px] bg-[var(--bg)] z-40 flex flex-col justify-between px-6 py-12 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navegación móvil"
        >
          <div className="flex flex-col gap-6 pt-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-[family-name:var(--font-display)] uppercase text-5xl text-[var(--muted)] hover:text-[var(--text)] transition-colors tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-8 border-t border-[var(--line)]">
            <span className="label text-[var(--text)]">
              DISPONIBLE PARA TRABAJAR
            </span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-[var(--accent)] animate-pulse-slow shrink-0"
              aria-hidden="true"
            >
              <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

