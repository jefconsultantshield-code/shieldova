"use client";
import { useState } from "react";

const faqs = [
  {
    question: "¿Necesito un área de TI para usar ShieldOva?",
    answer:
      "No. Nuestras soluciones están diseñadas para ser implementadas fácilmente en pequeñas y medianas empresas sin necesidad de un equipo técnico especializado."
  },
  {
    question: "¿Es muy costoso implementar ciberseguridad?",
    answer:
      "Ofrecemos planes flexibles y accesibles que se adaptan al presupuesto de las PYMEs. La idea es protegerte sin que represente una carga financiera."
  },
  {
    question: "¿Qué pasa si ya tuve un incidente?",
    answer:
      "Podemos ayudarte a mitigar el impacto, analizar las causas y reforzar tus sistemas para evitar que vuelva a ocurrir."
  },
  {
    question: "¿Dan soporte 24/7?",
    answer:
      "Sí. Nuestro equipo está disponible en todo momento para responder a incidentes críticos y consultas urgentes."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Preguntas frecuentes
        </h2>
        <p className="text-gray-600 mt-4">
          Resolvemos las dudas más comunes que tienen las pequeñas y medianas empresas sobre ciberseguridad.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 cursor-pointer border border-gray-200"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="flex justify-between items-center text-lg font-medium text-gray-800">
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
