import { Mail, Globe, Phone, MapPin, ArrowRight } from "lucide-react";
import { contact } from "@/data/contact";
import CopyEmail from "./CopyEmail";
import LaptopMockup from "./LaptopMockup";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-[var(--bg)] py-16 md:py-24 border-b border-[var(--line)] scroll-mt-[64px] md:scroll-mt-[72px]"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 85% 60%, rgba(214,20,30,0.14), transparent 55%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_4fr_4fr] gap-12 lg:gap-16 items-stretch">
          {/* ========================================================
              LEFT COLUMN: TITLE, BIO & "AVAILABLE FOR FREELANCE" LINK
             ======================================================== */}
          <div className="flex flex-col justify-between">
            <Reveal delay={0}>
              <div className="space-y-5">
                <h2
                  id="contact-title"
                  className="font-[family-name:var(--font-display)] uppercase text-[clamp(2.5rem,4.5vw,4rem)] leading-[1] text-[var(--text)] tracking-tight"
                >
                  TRABAJEMOS
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    className="inline-block align-top ml-2 -translate-y-1 text-[var(--accent)] shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M7 0C7 3.866 3.866 7 0 7C3.866 7 7 10.134 7 14C7 10.134 10.134 7 14 7C10.134 7 7 3.866 7 0Z" />
                  </svg>
                  <br />
                  JUNTOS
                </h2>

                <p className="text-[14px] leading-[1.7] text-[var(--muted)] max-w-[320px]">
                  Abierto a posiciones junior remotas, nuevos proyectos y
                  colaboraciones. Creemos productos web modernos con React,
                  TypeScript e inteligencia artificial.
                </p>
              </div>
            </Reveal>

            {/* Bottom block: "DISPONIBLE PARA TRABAJAR" (moves right after paragraph on mobile via mt-8 lg:mt-auto) */}
            <Reveal delay={150}>
              <div className="mt-8 lg:mt-auto pt-0 lg:pt-12">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-4 text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-4 rounded-full"
                >
                  <div className="w-12 h-12 rounded-full border border-[var(--accent)] flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] transition-all duration-250">
                    <ArrowRight
                      size={20}
                      className="text-[var(--accent)] group-hover:text-[var(--text)] group-hover:translate-x-0.5 transition-all duration-250"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="label tracking-[0.18em]">
                    DISPONIBLE PARA TRABAJAR
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* ========================================================
              CENTER COLUMN: CONTACT ROWS (EMAIL, WEB, PHONE, LOCATION)
             ======================================================== */}
          <div className="flex flex-col justify-center">
            <ul role="list" className="border-t border-[var(--line)] w-full">
              {/* ROW 1: EMAIL (WITH COPY BUTTON) */}
              <li className="py-[18px] border-b border-[var(--line)]">
                <Reveal delay={80}>
                  <div className="flex items-center justify-between gap-4 group">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex-1 grid grid-cols-[40px_1fr] gap-5 items-center min-w-0"
                    >
                      <div className="w-10 h-10 rounded-full border border-[var(--accent)] flex items-center justify-center shrink-0 text-[var(--text)] group-hover:bg-[rgba(214,20,30,0.15)] group-hover:shadow-[0_0_20px_rgba(214,20,30,0.35)] transition-all duration-200">
                        <Mail size={18} aria-hidden="true" />
                      </div>
                      <span className="text-[14px] text-[var(--text)] group-hover:text-[var(--accent)] font-medium break-all transition-colors duration-200">
                        {contact.email}
                      </span>
                    </a>
                    <CopyEmail email={contact.email} />
                  </div>
                </Reveal>
              </li>

              {/* ROW 2: WEBSITE */}
              <li className="py-[18px] border-b border-[var(--line)]">
                <Reveal delay={160}>
                  <a
                    href={contact.websiteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid grid-cols-[40px_1fr] gap-5 items-center group min-w-0"
                  >
                    <div className="w-10 h-10 rounded-full border border-[var(--accent)] flex items-center justify-center shrink-0 text-[var(--text)] group-hover:bg-[rgba(214,20,30,0.15)] group-hover:shadow-[0_0_20px_rgba(214,20,30,0.35)] transition-all duration-200">
                      <Globe size={18} aria-hidden="true" />
                    </div>
                    <span className="text-[14px] text-[var(--text)] group-hover:text-[var(--accent)] font-medium break-all transition-colors duration-200">
                      {contact.website}
                    </span>
                  </a>
                </Reveal>
              </li>

              {/* ROW 3: PHONE */}
              <li className="py-[18px] border-b border-[var(--line)]">
                <Reveal delay={240}>
                  <a
                    href={contact.phoneHref}
                    className="grid grid-cols-[40px_1fr] gap-5 items-center group min-w-0"
                  >
                    <div className="w-10 h-10 rounded-full border border-[var(--accent)] flex items-center justify-center shrink-0 text-[var(--text)] group-hover:bg-[rgba(214,20,30,0.15)] group-hover:shadow-[0_0_20px_rgba(214,20,30,0.35)] transition-all duration-200">
                      <Phone size={18} aria-hidden="true" />
                    </div>
                    <span className="text-[14px] text-[var(--text)] group-hover:text-[var(--accent)] font-medium break-all transition-colors duration-200">
                      {contact.phone}
                    </span>
                  </a>
                </Reveal>
              </li>

              {/* ROW 4: LOCATION (NON-LINK) */}
              <li className="py-[18px] border-b border-[var(--line)]">
                <Reveal delay={320}>
                  <div className="grid grid-cols-[40px_1fr] gap-5 items-center min-w-0">
                    <div className="w-10 h-10 rounded-full border border-[var(--accent)] flex items-center justify-center shrink-0 text-[var(--text)]">
                      <MapPin size={18} aria-hidden="true" />
                    </div>
                    <span className="text-[14px] text-[var(--text)] font-medium break-all">
                      {contact.location}
                    </span>
                  </div>
                </Reveal>
              </li>
            </ul>
          </div>

          {/* ========================================================
              RIGHT COLUMN: LAPTOP MOCKUP
             ======================================================== */}
          <div className="flex items-center justify-center lg:justify-end">
            <Reveal delay={400} className="w-full">
              <LaptopMockup />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

