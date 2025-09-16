"use client";
import { motion } from "framer-motion";
import partners from "@/data/partners.json";

export default function PartnersVertical() {
  return (
    <section className="py-20 px-6 bg-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Con la confianza de empresas líderes
        </h2>
        <p className="text-gray-600 mt-4">
          Alianzas estratégicas que validan la efectividad de nuestras soluciones.
        </p>
      </div>

      {/* Carrusel vertical */}
      <div className="relative h-64 overflow-hidden flex items-center justify-center">
        <motion.div
          className="flex flex-col space-y-8"
          initial={{ y: 0 }}
          animate={{ y: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {[...partners, ...partners].map((partner) => (
            <div
              key={partner.id + "-v"}
              className="flex items-center justify-center w-40 h-16 bg-white rounded-lg shadow-sm"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
