"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Ramírez",
    role: "Director de TI",
    image: "/testimonials/carlos.png",
    quote:
      "Con esta solución logramos blindar la seguridad de nuestra infraestructura crítica.",
  },
  {
    name: "Laura Torres",
    role: "CISO",
    image: "/testimonials/laura.png",
    quote:
      "El enfoque Zero Trust nos permitió tener confianza en cada acceso y reducir riesgos.",
  },
  {
    name: "Andrea López",
    role: "Gerente de Seguridad",
    image: "/testimonials/andrea.png",
    quote:
      "La protección en la nube fue clave para acelerar nuestra transformación digital.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-md rounded-2xl p-6"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 relative rounded-full overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
