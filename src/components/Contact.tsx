export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contáctanos
        </h2>
        <p className="text-gray-600 mt-4">
          Nuestro equipo está listo para ayudarte a fortalecer tu estrategia de ciberseguridad.
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Formulario */}
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Tu mensaje"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>

        {/* Información de contacto */}
        <div className="flex flex-col justify-center space-y-4 text-left">
          <p><strong>Email:</strong> jefconsultantshield@gmail.com</p>
          <p><strong>Teléfono:</strong> +57 317 483 132</p>
          <p><strong>Ubicación:</strong> Bogotá, Colombia</p>
          <p className="text-gray-600 text-sm">
            También puedes agendar una demo con uno de nuestros especialistas.
          </p>
        </div>
      </div>
    </section>
  );
}
