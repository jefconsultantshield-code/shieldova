"use client";
import { useState, useEffect } from "react";

export default function PopupCTA() {
  const [show, setShow] = useState(false);

  // Mostrar pop-up 5 segundos después de cargar la página
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Fondo oscuro */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setShow(false)}
      ></div>

      {/* Caja del pop-up */}
      <div className="bg-white rounded-xl shadow-lg p-8 relative max-w-md w-full text-center">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Agenda tu demo gratuita
        </h3>
        <p className="text-gray-600 mb-6">
          Descubre cómo ShieldOps puede proteger tu negocio en menos de 30 minutos.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Solicitar demo
        </a>
      </div>
    </div>
  );
}
