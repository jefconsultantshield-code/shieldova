"use client";

export default function CTA() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-700 to-blue-800 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Protege tu empresa hoy
        </h2>
        <p className="mb-8 text-blue-100 text-lg">
          Solicita una demo gratuita y descubre cómo ShieldOva puede asegurar tu negocio en minutos.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Solicita una Demo
        </a>
      </div>

      {/* Fondo decorativo (círculo animado tipo planeta) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-indigo-500 rounded-full opacity-20 animate-pulse"></div>
      </div>
    </section>
  );
}
