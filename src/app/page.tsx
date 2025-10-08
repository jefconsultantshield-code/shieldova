"use client";

import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Clients from "@/components/Clients";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import ResourcesHighlight from "@/components/ResourcesHighlight";
import Team from "@/components/Team";
import SuccessStory from "@/components/SuccessStory";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Pricing from "@/components/Pricing";
import PopupCTA from "@/components/PopupCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            ShieldOva: Ciberseguridad para PYMEs
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Protege tu negocio con soluciones simples, efectivas y accesibles.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#soluciones"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Ver Soluciones
            </a>
            <a
              href="#contacto"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Envolvemos cada sección con su id */}
      <section id="soluciones" className="scroll-mt-24">
        <Solutions />
      </section>

      <section id="testimonios" className="scroll-mt-24">
        <Testimonials />
      </section>

      <section id="partners" className="scroll-mt-24">
        <Partners />
      </section>

      <section id="clientes" className="scroll-mt-24">
        <Clients />
      </section>

      <section id="estadisticas" className="scroll-mt-24">
        <Stats />
      </section>

      <section id="cta" className="scroll-mt-24">
        <CTA />
      </section>

      <section id="recursos" className="scroll-mt-24">
        <Resources />
      </section>

      <section id="contacto" className="scroll-mt-24">
        <Contact />
      </section>

      <section id="resaltado" className="scroll-mt-24">
        <ResourcesHighlight />
      </section>

      <section id="equipo" className="scroll-mt-24">
        <Team />
      </section>

      <section id="caso-exito" className="scroll-mt-24">
        <SuccessStory />
      </section>

      <section id="faq" className="scroll-mt-24">
        <FAQ />
      </section>

      <section id="newsletter" className="scroll-mt-24">
        <Newsletter />
      </section>

      <section id="planes" className="scroll-mt-24">
        <Pricing />
      </section>

      <Footer />
      <PopupCTA />
    </div>
  );
}
