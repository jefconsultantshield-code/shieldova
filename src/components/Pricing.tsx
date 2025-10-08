// src/components/Pricing.tsx

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 px-6">
      {/* Encabezado */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Planes de Seguridad para PYMEs
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Elige el plan que mejor se adapte a tu empresa y compara las
          características fácilmente.
        </p>
      </div>

      {/* Tarjetas */}
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-16">
        {/* Plan Básico */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl transition hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800">Básico</h3>
          <p className="mt-4 text-gray-600">
            Protección esencial para pequeñas empresas.
          </p>
          <p className="mt-6 text-4xl font-bold text-blue-600">
            $29<span className="text-lg">/mes</span>
          </p>
          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contratar
          </button>
        </div>

        {/* Plan Profesional */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-600 hover:shadow-xl transition hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800">Profesional</h3>
          <p className="mt-4 text-gray-600">
            La opción ideal para empresas en crecimiento.
          </p>
          <p className="mt-6 text-4xl font-bold text-blue-600">
            $79<span className="text-lg">/mes</span>
          </p>
          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contratar
          </button>
        </div>

        {/* Plan Empresarial */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-200 hover:shadow-xl transition hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800">Empresarial</h3>
          <p className="mt-4 text-gray-600">
            Seguridad completa para grandes equipos.
          </p>
          <p className="mt-6 text-4xl font-bold text-blue-600">
            $149<span className="text-lg">/mes</span>
          </p>
          <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contratar
          </button>
        </div>
      </div>

      {/* Tabla comparativa */}
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="w-full border-collapse bg-white rounded-2xl shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-800">
              <th className="p-4 text-left">Características</th>
              <th className="p-4 text-center">Básico</th>
              <th className="p-4 text-center">Profesional</th>
              <th className="p-4 text-center">Empresarial</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-4">Firewall</td>
              <td className="p-4 text-center">✔</td>
              <td className="p-4 text-center">✔</td>
              <td className="p-4 text-center">✔</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Monitoreo de amenazas</td>
              <td className="p-4 text-center">✔</td>
              <td className="p-4 text-center">✔</td>
              <td className="p-4 text-center">✔</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Soporte 24/7</td>
              <td className="p-4 text-center">–</td>
              <td className="p-4 text-center">✔</td>
              <td className="p-4 text-center">✔</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Análisis avanzado</td>
              <td className="p-4 text-center">–</td>
              <td className="p-4 text-center">✔</td>
              <td className="p-4 text-center">✔</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Auditorías de seguridad</td>
              <td className="p-4 text-center">–</td>
              <td className="p-4 text-center">–</td>
              <td className="p-4 text-center">✔</td>
            </tr>
            <tr className="border-t">
              <td className="p-4">Consultoría personalizada</td>
              <td className="p-4 text-center">–</td>
              <td className="p-4 text-center">–</td>
              <td className="p-4 text-center">✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
