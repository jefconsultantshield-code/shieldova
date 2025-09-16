"use client";
import { motion } from "framer-motion";

const resources = [
  {
    id: 1,
    title: "Guía básica de ciberseguridad para PYMEs",
    description: "Pasos simples para proteger tu negocio contra amenazas comunes.",
    link: "#",
    category: "Ebook gratuito"
  },
  {
    id: 2,
    title: "Checklist de protección de datos",
    description: "Lista práctica para cumplir con la normativa de seguridad.",
    link: "#",
    category: "Descargable"
  },
  {
    id: 3,
    title: "Tendencias 2025 en ciberseguridad",
    description: "Lo que tu empresa necesita saber para estar preparada este año.",
    link: "#",
    category: "Reporte"
  }
];

export default function ResourcesHighlight() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Recursos prácticos para tu empresa
        </h2>
        <p className="text-gray-600 mt-4">
          Material pensado para pequeñas y medianas empresas que buscan dar sus primeros pasos en ciberseguridad.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {resources.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <span className="inline-block text-xs uppercase font-semibold text-blue-600 mb-2">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            <a href={item.link} className="text-blue-600 font-medium hover:underline text-sm">
              Descargar →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
