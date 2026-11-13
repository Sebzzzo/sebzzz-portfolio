import type { Metadata } from "next";
import { Anton, Allura, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const allura = Allura({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Sebastián García | Desarrollador Web & IA Aplicada",
  description:
    "Portafolio de Juan Sebastián García Triviño — Desarrollador Web Junior especializado en React, TypeScript e Inteligencia Artificial aplicada. Fundador de Control Core. Bogotá, Colombia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${anton.variable} ${allura.variable} ${inter.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
