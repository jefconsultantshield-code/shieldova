"use client";
import { motion } from "framer-motion";

const stats = [
  { id: 1, number: "500+", label: "Empresas protegidas" },
  { id: 2, number: "99.9%", label: "Disponibilidad garantizada" },
  { id: 3, number: "24/7", label: "Soporte especializado" },
  { id: 4, number: "50+", label: "Países con cobertura" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center"
          >
            <span className="text-4xl md:text-5xl font-bold">{item.number}</span>
            <p className="mt-2 text-sm md:text-base">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
