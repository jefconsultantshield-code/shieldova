"use client";

import React from "react";

function log(...args: any[]) {
  console.log("[Navbar]", ...args);
  // almacena en ventana para inspección manual
  // @ts-ignore
  window._shieldopsLogs = window._shieldopsLogs || [];
  // @ts-ignore
  window._shieldopsLogs.push({ time: new Date().toISOString(), args });
}

function scrollToId(id: string) {
  const normalized = id.replace("#", "");
  log("Intentando scroll hacia:", normalized);

  // lista todos los IDs que existen actualmente en la página
  const allIds = Array.from(document.querySelectorAll("[id]")).map(
    (el) => (el as HTMLElement).id
  );
  log("IDs detectados en el DOM:", allIds);

  const el = document.getElementById(normalized);
  if (!el) {
    log("ERROR: no existe elemento con id:", normalized);
    return;
  }

  // scroll con scrollIntoView
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  log("OK: encontrado y scrolleando a:", normalized);

  // actualiza hash
  history.replaceState(null, "", `#${normalized}`);
}

export default function Navbar() {
  const handleClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault();
    log("Click en link:", hash);
    scrollToId(hash);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#inicio"
          onClick={(e) => handleClick(e, "inicio")}
          className="text-xl font-bold text-indigo-600"
        >
          ShieldOva
        </a>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#inicio" onClick={(e) => handleClick(e, "inicio")}>
            Inicio
          </a>
          <a href="#soluciones" onClick={(e) => handleClick(e, "soluciones")}>
            Soluciones
          </a>
          <a
            href="#testimonios"
            onClick={(e) => handleClick(e, "testimonios")}
          >
            Testimonios
          </a>
          <a href="#partners" onClick={(e) => handleClick(e, "partners")}>
            Partners
          </a>
          <a href="#planes" onClick={(e) => handleClick(e, "planes")}>
            Planes
          </a>
          <a href="#recursos" onClick={(e) => handleClick(e, "recursos")}>
            Recursos
          </a>
          <a href="#contacto" onClick={(e) => handleClick(e, "contacto")}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
