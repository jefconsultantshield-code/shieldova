export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo / Descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShieldOva</h2>
          <p className="text-sm">
            Soluciones modernas de ciberseguridad para proteger tu empresa en un mundo digital en constante evolución.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Navegación</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="/soluciones" className="hover:text-white">Soluciones</a></li>
            <li><a href="/recursos" className="hover:text-white">Recursos</a></li>
            <li><a href="/contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:jefconsultantshield@gmail.com" className="hover:text-white">info@shieldova.com</a></li>
            <li>Tel: +57 317 483 2132</li>
            <li>Bogotá, Colombia</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Síguenos</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">💼</a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} ShieldOva. Todos los derechos reservados.
      </div>
    </footer>
  );
}
