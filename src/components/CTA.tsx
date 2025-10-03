"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para llevar tu seguridad al siguiente nivel?
        </h2>
        <p className="mb-8 text-lg text-blue-100">
          Protege tu empresa con soluciones de ciberseguridad de última
          generación. Habla con uno de nuestros expertos hoy mismo.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 transition"
          >
            Habla con un experto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
