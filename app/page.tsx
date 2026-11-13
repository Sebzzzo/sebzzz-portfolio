import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import AboutBand from "@/components/AboutBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <Hero />

        {/* Selected Projects Section */}
        <Projects />

        {/* 3-Column Band: Education & Skills, Work Process, Quote */}
        <AboutBand />

        {/* Contact Section: Let's Work Together */}
        <Contact />
      </main>

      {/* Global Minimal Footer */}
      <Footer />
    </>
  );
}
