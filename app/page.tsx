import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090909] text-[#F2F0ED] font-sans selection:bg-[#C81020] selection:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090909]/80 border-b border-zinc-800/80">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#F2F0ED] hover:text-[#C81020] transition-colors">
            Sebzzz<span className="text-[#C81020]">.</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-[#777777]">
            <a href="#proyectos" className="hover:text-[#F2F0ED] transition-colors">Proyectos</a>
            <a href="#habilidades" className="hover:text-[#F2F0ED] transition-colors">Habilidades</a>
            <a href="#contacto" className="hover:text-[#F2F0ED] transition-colors">Contacto</a>
            <a
              href="#contacto"
              className="px-4 py-2 rounded-lg bg-[#C81020] text-[#F2F0ED] font-semibold hover:bg-[#a50d1a] transition-colors"
            >
              Contacto
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-28">
        {/* Hero Section */}
        <section className="pt-8 pb-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-zinc-800 text-xs text-[#F2F0ED]">
            <span className="w-2 h-2 rounded-full bg-[#C81020] animate-pulse"></span>
            En desarrollo de identidad y proyectos
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F2F0ED] leading-tight">
            Hola, soy Sebastián 👋 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C81020] via-[#F2F0ED] to-[#777777]">
              Desarrollador de Software
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-[#777777] leading-relaxed">
            Especializado en la creación de interfaces web modernas y escalables con Next.js, TypeScript y Tailwind CSS. Enfocado en código estructurado, diseño limpio y aprendizaje continuo.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#proyectos"
              className="px-6 py-3 rounded-xl bg-[#C81020] text-[#F2F0ED] font-semibold hover:bg-[#a50d1a] transition-colors"
            >
              Explorar proyectos
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 rounded-xl bg-[#141414] border border-zinc-800 text-[#F2F0ED] font-medium hover:bg-zinc-800 transition-colors"
            >
              Contactar
            </a>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="proyectos" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F0ED]">Proyectos Conceptuales</h2>
            <p className="text-[#777777]">Prototipos y exploraciones visuales en desarrollo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Proyecto 1: SaaS */}
            <div className="group rounded-2xl bg-[#141414] border border-zinc-800/80 p-6 space-y-4 hover:border-zinc-700 transition-all">
              <div className="h-44 rounded-xl bg-[#090909] border border-zinc-800 flex items-center justify-center text-[#777777] font-mono text-sm">
                Prototipo visual en desarrollo
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#F2F0ED] group-hover:text-[#C81020] transition-colors">
                    Dashboard SaaS
                  </h3>
                  <span className="text-xs text-[#C81020] border border-[#C81020]/40 px-2.5 py-0.5 rounded-full font-medium">
                    Concept Demo
                  </span>
                </div>
                <p className="text-sm text-[#777777] leading-relaxed">
                  Exploración de diseño y maquetación para un panel de administración, enfocada en la distribución modular de componentes, organización de datos y navegación de usuario.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-[#090909] text-[#F2F0ED] px-2.5 py-1 rounded-md border border-zinc-800">Next.js 16</span>
                <span className="text-xs bg-[#090909] text-[#F2F0ED] px-2.5 py-1 rounded-md border border-zinc-800">TypeScript</span>
                <span className="text-xs bg-[#090909] text-[#F2F0ED] px-2.5 py-1 rounded-md border border-zinc-800">Tailwind CSS</span>
              </div>
            </div>

            {/* Proyecto 2: E-Commerce */}
            <div className="group rounded-2xl bg-[#141414] border border-zinc-800/80 p-6 space-y-4 hover:border-zinc-700 transition-all">
              <div className="h-44 rounded-xl bg-[#090909] border border-zinc-800 flex items-center justify-center text-[#777777] font-mono text-sm">
                Prototipo visual en desarrollo
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-[#F2F0ED] group-hover:text-[#C81020] transition-colors">
                    E-Commerce Storefront
                  </h3>
                  <span className="text-xs text-[#C81020] border border-[#C81020]/40 px-2.5 py-0.5 rounded-full font-medium">
                    Concept Demo
                  </span>
                </div>
                <p className="text-sm text-[#777777] leading-relaxed">
                  Prototipo visual para una tienda digital, centrado en el diseño responsivo de catálogos, jerarquía de productos y estructura de interfaz orientada a la experiencia de compra.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-xs bg-[#090909] text-[#F2F0ED] px-2.5 py-1 rounded-md border border-zinc-800">React 19</span>
                <span className="text-xs bg-[#090909] text-[#F2F0ED] px-2.5 py-1 rounded-md border border-zinc-800">Turbopack</span>
                <span className="text-xs bg-[#090909] text-[#F2F0ED] px-2.5 py-1 rounded-md border border-zinc-800">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills / Tech Stack */}
        <section id="habilidades" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F0ED]">Habilidades & Tecnologías</h2>
            <p className="text-[#777777]">Herramientas y tecnologías con las que trabajo en desarrollo web.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { name: "Next.js", category: "Framework" },
              { name: "React 19", category: "UI Library" },
              { name: "TypeScript", category: "Lenguaje" },
              { name: "Tailwind CSS v4", category: "Styling" },
              { name: "Node.js", category: "Backend" },
              { name: "PostgreSQL", category: "Base de Datos" },
              { name: "Git & GitHub", category: "Control de versiones" },
              { name: "REST / APIs", category: "Arquitectura" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-[#141414] border border-zinc-800/80 hover:border-[#C81020]/40 transition-colors space-y-1"
              >
                <p className="text-sm font-semibold text-[#F2F0ED]">{skill.name}</p>
                <p className="text-xs text-[#777777]">{skill.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contacto" className="rounded-3xl bg-[#141414] border border-zinc-800 p-8 sm:p-12 text-center space-y-6 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F2F0ED]">Contacto</h2>
          <p className="max-w-xl mx-auto text-[#777777] text-base leading-relaxed">
            Esta sección se encuentra en preparación para enlazar los canales de comunicación y perfiles profesionales definitivos.
          </p>
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#090909] border border-zinc-800 text-sm text-[#777777]">
              <span className="w-2 h-2 rounded-full bg-[#C81020]"></span>
              Canales de contacto disponibles próximamente
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/80 py-8 text-center text-xs text-[#777777]">
        <p>© 2026 Sebastián. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
