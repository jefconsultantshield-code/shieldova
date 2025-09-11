"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold text-blue-600">Mi Seguridad</h1>
      <ul className="flex gap-6">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/soluciones">Soluciones</Link></li>
        <li><Link href="/recursos">Recursos</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
