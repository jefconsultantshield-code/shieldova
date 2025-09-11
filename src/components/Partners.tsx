export default function Partners() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Con la confianza de empresas líderes
        </h2>
        <p className="text-gray-600 mt-4">
          Aliados estratégicos y clientes que respaldan la efectividad de nuestras soluciones.
        </p>
      </div>

      {/* Logos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
        <img src="https://dummyimage.com/150x60/000/fff&text=Partner+1" alt="Partner 1" className="h-12 grayscale hover:grayscale-0 transition" />
        <img src="https://dummyimage.com/150x60/000/fff&text=Partner+2" alt="Partner 2" className="h-12 grayscale hover:grayscale-0 transition" />
        <img src="https://dummyimage.com/150x60/000/fff&text=Partner+3" alt="Partner 3" className="h-12 grayscale hover:grayscale-0 transition" />
        <img src="https://dummyimage.com/150x60/000/fff&text=Partner+4" alt="Partner 4" className="h-12 grayscale hover:grayscale-0 transition" />
        <img src="https://dummyimage.com/150x60/000/fff&text=Partner+5" alt="Partner 5" className="h-12 grayscale hover:grayscale-0 transition" />
        <img src="https://dummyimage.com/150x60/000/fff&text=Partner+6" alt="Partner 6" className="h-12 grayscale hover:grayscale-0 transition" />
      </div>
    </section>
  );
}
