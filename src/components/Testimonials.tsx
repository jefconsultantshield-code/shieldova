import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Empresas y profesionales que confiaron en nuestras soluciones de ciberseguridad.
        </p>
      </div>

      {/* Grid de testimonios */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Testimonio 1 */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <div className="relative w-20 h-20 mb-4">
            <Image
              src="/images/caballero.png"
              alt="Carlos Ramírez"
              fill
              sizes="80px"
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Carlos Ramírez</h3>
          <p className="text-sm text-gray-500 mb-3">CTO en TechCol SAS</p>
          <p className="text-gray-600">
            "Gracias al enfoque Zero Trust, logramos reducir en un 70% los accesos no autorizados. 
            Hoy tenemos control total sobre quién entra a nuestros sistemas."
          </p>
        </div>

        {/* Testimonio 2 */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <div className="relative w-20 h-20 mb-4">
            <Image
              src="/images/caballero2.png"
              alt="Francisco Geins"
              fill
              sizes="80px"
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Francisco Geins</h3>
          <p className="text-sm text-gray-500 mb-3">Gerente de Operaciones en FinanciaYA</p>
          <p className="text-gray-600">
            "La seguridad en la nube nos dio confianza para migrar nuestras aplicaciones críticas. 
            Sabemos que nuestros datos cumplen con normativas internacionales."
          </p>
        </div>

        {/* Testimonio 3 */}
        <div className="bg-gray-50 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition">
          <div className="relative w-20 h-20 mb-4">
            <Image
              src="/images/dama2.png"
              alt="Andrea López"
              fill
              sizes="80px"
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Andrea López</h3>
          <p className="text-sm text-gray-500 mb-3">CEO en RetailExpress</p>
          <p className="text-gray-600">
            "La detección de amenazas en tiempo real fue clave para frenar intentos de ransomware. 
            Ahora dormimos tranquilos sabiendo que tenemos monitoreo constante."
          </p>
        </div>

      </div>
    </section>
  );
}
