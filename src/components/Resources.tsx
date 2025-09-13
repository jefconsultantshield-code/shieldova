"use client";
import { motion } from "framer-motion";

const resources = [
  {
    id: 1,
    title: "Guía: Zero Trust explicado fácil",
    description: "Un vistazo práctico a cómo implementar el modelo Zero Trust en tu empresa.",
    link: "#",
    category: "Guía",
    date: "12 Sept 2025"
  },
  {
    id: 2,
    title: "Webinar: Seguridad en la nube 2025",
    description: "Conoce los principales retos y cómo prepararte para proteger datos en la nube.",
    link: "#",
    category: "Webinar",
    date: "01 Sept 2025"
  },
  {
    id: 3,
    title: "Artículo: Automatización en ciberseguridad",
    description: "Cómo los sistemas automatizados reducen tiempos de respuesta ante incidentes.",
    link: "#",
    category: "Artículo",
    date: "28 Ago 2025"
  }
];

export default function Resources() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Recursos y Actualidad
        </h2>
        <p className="text-gray-600 mt-4">
          Mantente al día con las últimas tendencias en ciberseguridad.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {resources.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition"
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
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{item.date}</span>
              <a href={item.link} className="text-blue-600 font-medium hover:underline">
                Leer más →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
