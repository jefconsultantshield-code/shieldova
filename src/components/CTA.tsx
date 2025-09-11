"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-indigo-700 to-blue-800 text-white overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Protege tu empresa hoy
        </h2>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          El futuro de la ciberseguridad empieza con una decisión: 
          implementar soluciones modernas y escalables.
        </p>
        <a
          href="/contacto"
          className="inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Solicita una Demo
        </a>
      </div>

      {/* Planeta animado en el fondo */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center opacity-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="400"
          viewBox="0 0 512 512"
          fill="none"
        >
          <circle cx="256" cy="256" r="200" stroke="white" strokeWidth="2" />
          <path
            d="M100 256c0-86 70-156 156-156s156 70 156 156-70 156-156 156S100 342 100 256z"
            stroke="white"
            strokeWidth="2"
          />
          <path
            d="M256 100c86 0 156 70 156 156s-70 156-156 156S100 342 100 256 170 100 256 100z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </section>
  );
}
