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
import SuccessStory from "@/components/SuccessStory"; // Importación del caso de éxito
import FAQ from "@/components/FAQ";                   // Importación de preguntas frecuentes
import Newsletter from "@/components/Newsletter";     // Importación del newsletter
import PopupCTA from "@/components/PopupCTA";         // Importación del pop-up
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Barra de navegación */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            ShieldOps: Ciberseguridad para PYMEs
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Protege tu negocio con soluciones simples, efectivas y accesibles.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="#solutions"
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Ver Soluciones
            </a>
            <a
              href="#contact"
              className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <Solutions />

      {/* Testimonios */}
      <Testimonials />

      {/* Partners (tecnológicos + aliados) */}
      <Partners />

      {/* Clientes (PYMEs ficticias) */}
      <Clients />

      {/* Estadísticas de impacto */}
      <Stats />

      {/* Llamado a la acción con animación */}
      <CTA />

      {/* Recursos dinámicos */}
      <Resources />

      {/* Contacto */}
      <Contact />

      {/* Recursos prácticos para PYMEs */}
      <ResourcesHighlight />

      {/* Equipo de expertos */}
      <Team />

      {/* Caso de éxito */}
      <SuccessStory />   {/* 👈 Caso de éxito */}

      {/* Preguntas frecuentes */}
      <FAQ />            {/* 👈 Preguntas frecuentes */}

      {/* Newsletter */}
      <Newsletter />      {/* 👈 Newsletter */}

      {/* Footer */}
      <Footer />

      {/* Pop-up aparece sobre todo */}
      <PopupCTA />        {/* 👈 Pop-up */}
    </div>
  );
}