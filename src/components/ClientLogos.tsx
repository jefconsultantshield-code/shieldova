"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: "/logos/cyber1.png", alt: "Cyber Shield 1" },
  { src: "/logos/cyber2.png", alt: "Cyber Shield 2" },
  { src: "/logos/cyber3.png", alt: "Cyber Shield 3" },
  { src: "/logos/cyber4.png", alt: "Cyber Shield 4" },
  { src: "/logos/cyber5.png", alt: "Cyber Shield 5" },
  { src: "/logos/cyber6.png", alt: "Cyber Shield 6" },
];

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold font-sans mb-8">
          Con la confianza de líderes en ciberseguridad
        </h2>

        {/* Carrusel fila 1 */}
        <div className="relative w-full overflow-hidden mb-8">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-32 h-16 relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Carrusel fila 2 (dirección opuesta) */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12"
            animate={{ x: ["-100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {logos.concat(logos).map((logo, i) => (
              <div key={`row2-${i}`} className="flex-shrink-0 w-32 h-16 relative">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
