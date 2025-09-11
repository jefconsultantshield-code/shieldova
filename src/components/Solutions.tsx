export default function Solutions() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Nuestras Soluciones
        </h2>
        <p className="text-gray-600 mt-4">
          Herramientas clave para proteger tu organización en el mundo digital.
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Firewall */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Firewall</h3>
          <p className="text-gray-600 mb-4">
            (Filtra el tráfico de red y bloquea accesos no autorizados). 
            Es la primera línea de defensa entre tu red y el exterior.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Más info →</a>
        </div>

        {/* Seguridad en la Nube */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Seguridad en la Nube</h3>
          <p className="text-gray-600 mb-4">
            (Protege datos y apps alojadas en plataformas cloud). 
            Garantiza acceso seguro y cumplimiento de normativas.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Más info →</a>
        </div>

        {/* Zero Trust */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Zero Trust</h3>
          <p className="text-gray-600 mb-4">
            (Nunca confíes, siempre verifica). 
            Requiere autenticación constante y evita movimientos laterales en la red.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Más info →</a>
        </div>

        {/* Detección de Amenazas */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Detección de Amenazas</h3>
          <p className="text-gray-600 mb-4">
            (Monitorea tráfico y actividad sospechosa). 
            Identifica malware y ataques antes de que afecten el negocio.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Más info →</a>
        </div>

        {/* Seguridad de Endpoints */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Seguridad de Endpoints</h3>
          <p className="text-gray-600 mb-4">
            (Protege dispositivos finales como laptops y móviles). 
            Asegura que las amenazas sean detectadas y neutralizadas.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Más info →</a>
        </div>

        {/* Automatización */}
        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Automatización</h3>
          <p className="text-gray-600 mb-4">
            (Responde automáticamente a incidentes). 
            Reduce los tiempos de reacción y minimiza el impacto de los ataques.
          </p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">Más info →</a>
        </div>

      </div>
    </section>
  );
}
