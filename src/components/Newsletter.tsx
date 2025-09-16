"use client";

export default function Newsletter() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">
          Suscríbete y recibe tips de ciberseguridad
        </h2>
        <p className="mt-4 text-blue-100">
          Consejos prácticos y recursos gratuitos para pequeñas y medianas empresas, directo en tu correo.
        </p>

        <form className="mt-8 flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="w-full md:flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
          >
            Suscribirme
          </button>
        </form>
      </div>
    </section>
  );
}
