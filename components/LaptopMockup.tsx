"use client";

import { useState } from "react";
import Image from "next/image";

export default function LaptopMockup() {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[620px] ml-auto aspect-[16/11] mt-4 lg:mt-0 select-none pointer-events-none"
      style={{
        WebkitMaskImage:
          "radial-gradient(ellipse at center, #000 55%, transparent 100%)",
        maskImage:
          "radial-gradient(ellipse at center, #000 55%, transparent 100%)",
      }}
    >
      {/* FLOATING CONTAINER */}
      <div className="w-full h-full animate-laptop-float [perspective:1600px]">
        {/* 3D ROTATED LAPTOP */}
        <div className="relative w-full h-[88%] mx-auto transition-transform duration-700 ease-out [transform-style:preserve-3d] shadow-[0_40px_100px_rgba(214,20,30,0.3)] [transform:rotateY(-6deg)] lg:[transform:rotateX(8deg)_rotateY(-14deg)_rotateZ(1deg)]">
          {/* SCREEN LID */}
          <div className="relative w-full h-full rounded-[12px] p-2 bg-[#0d0d0d] border border-white/[0.12] flex flex-col overflow-hidden">
            {/* Top bezel camera dot */}
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#1e1e1e] border border-white/10 z-20" />

            {/* SCREEN CONTENT */}
            <div className="relative w-full h-full rounded-md overflow-hidden bg-[#111111]">
              {/* Fallback placeholder background (dark panel + red gradient + .label text) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 30%, rgba(214,20,30,0.35), transparent 70%), linear-gradient(135deg, #181818 0%, #0a0a0a 100%)",
                }}
              >
                <div className="space-y-2 max-w-[240px]">
                  <span className="font-[family-name:var(--font-display)] uppercase text-xl text-[var(--text)] tracking-wider block">
                    CONTROL CORE · EXPERIENCIAS DIGITALES
                  </span>
                  <div className="w-12 h-1 bg-[var(--accent)] mx-auto rounded-full" />
                  <span className="label text-[var(--muted)] text-[9px] tracking-widest block pt-2">
                    contact-screen.jpg
                  </span>
                </div>
              </div>

              {/* Dynamic Image attempt */}
              {!hasError && (
                <Image
                  src="/contact-screen.jpg"
                  alt="Vista previa de pantalla de contacto"
                  fill
                  sizes="40vw"
                  className="object-cover"
                  onError={() => setHasError(true)}
                />
              )}

              {/* SCREEN GLARE OVERLAY */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%)",
                }}
              />
            </div>
          </div>

          {/* BASE */}
          <div
            className="absolute -bottom-[12px] left-1/2 -translate-x-1/2 w-[112%] h-[14px] rounded-b-2xl shadow-2xl z-20 flex justify-center items-start border-t border-white/10"
            style={{
              background: "linear-gradient(to bottom, #2a2a2a, #0e0e0e)",
            }}
          >
            {/* Center thumb notch */}
            <div className="w-14 h-1.5 bg-[#161616] rounded-b-sm border-x border-b border-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}

