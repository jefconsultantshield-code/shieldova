"use client";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Next-Gen Firewall",
    desc: "Protección avanzada contra amenazas en la red.",
    icon: "🛡️",
  },
  {
    title: "Zero Trust Security",
    desc: "Acceso seguro basado en identidad y contexto.",
    icon: "🔒",
  },
  {
    title: "Cloud Security",
    desc: "Visibilidad y control en entornos multi-nube.",
    icon: "☁️",
  },
  {
    title: "Threat Intelligence",
    desc: "Detección proactiva de amenazas y vulnerabilidades.",
    icon: "⚡",
  },
  {
    title: "Endpoint Protection",
    desc: "Seguridad integral para dispositivos y usuarios.",
    icon: "💻",
  },
  {
    title: "SOC Automation",
    desc: "Automatización inteligente para centros de operaciones.",
    icon: "🤖",
  },
];

export default function Solutions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Nuestras Soluciones
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
