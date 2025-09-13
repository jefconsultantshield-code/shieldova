// ✅ Importaciones completas
import Navbar from "@/components/Navbar";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <div>
      {/* Barra de navegación */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soluciones de Seguridad Digital Modernas
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Protege tu empresa con herramientas fáciles de usar, escalables y confiables. 
            Este sitio es un ejemplo educativo inspirado en Palo Alto Networks.
          </p>
          <a
            href="/soluciones"
            className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            Ver Soluciones
          </a>
        </div>
      </section>

      {/* Soluciones */}
      <Solutions />

      {/* Testimonios */}
      <Testimonials />

      {/* Partners */}
      <Partners />

      {/* CTA Final */}
      <CTA />

      {/* Recursos */}
      <Resources />

      {/* Footer */}
      <Footer />

      {/* Placeholder del contenido restante */}
      <main className="p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Contenido de la página</h2>
        <p>
          Aquí iremos agregando secciones como recursos, contacto y más.
        </p>
      </main>
    </div>
  );
}