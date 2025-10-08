"use client";

export default function SuccessStory() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Caso de éxito
        </h2>
        <p className="text-gray-600 mt-4">
          Cómo ayudamos a una pequeña empresa a protegerse contra ciberataques y ganar tranquilidad.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg p-8 md:flex md:items-center gap-8">
        <img
          src="https://dummyimage.com/400x250/cccccc/000000&text=PYME+Segura"
          alt="Caso de éxito PYME"
          className="rounded-lg w-full md:w-1/2 object-cover"
        />
        <div className="mt-6 md:mt-0 md:w-1/2 text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            “La seguridad que necesitábamos”
          </h3>
          <p className="text-gray-600 mb-4">
            La empresa <strong>Panadería La Estrella</strong>, con 25 empleados en Bogotá,
            sufría intentos de fraude por correos falsos. Con la ayuda de ShieldOva,
            implementaron filtros básicos de ciberseguridad y capacitación a su personal.
          </p>
          <p className="text-gray-600 mb-4">
            En menos de 3 meses redujeron en un <strong>80%</strong> los incidentes
            y pudieron concentrarse en lo más importante: su negocio.
          </p>
          <p className="text-sm text-gray-500 italic">
            — Laura Martínez, Gerente de Panadería La Estrella
          </p>
        </div>
      </div>
    </section>
  );
}
