"use client";
import { motion } from "framer-motion";
import clients from "@/data/clients.json";

export default function Clients() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Clientes que confían en nosotros
        </h2>
        <p className="text-gray-600 mt-4">
          Empresas de distintos sectores que aseguran sus operaciones con ShieldOva.
        </p>
      </div>

      {/* Carrusel horizontal de clientes */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-12"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear"
          }}
        >
          {[...clients, ...clients].map((client) => (
            <div
              key={client.id + "-c"}
              className="flex items-center justify-center w-40 h-16 bg-gray-50 rounded-lg shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
