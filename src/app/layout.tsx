import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShieldOva | Ciberseguridad de confianza",
  description:
    "Protege tus sistemas y datos con soluciones avanzadas de ciberseguridad Zero Trust, monitoreo en tiempo real y cumplimiento normativo.",
  keywords: [
    "ciberseguridad",
    "seguridad informática",
    "Zero Trust",
    "protección de datos",
    "ShieldOva",
  ],
  authors: [{ name: "ShieldOva" }],
  openGraph: {
    title: "ShieldOva | Ciberseguridad de confianza",
    description:
      "Protege tus sistemas y datos con soluciones avanzadas de ciberseguridad.",
    url: "https://shieldova.vercel.app", // cámbialo cuando tengas tu dominio real
    siteName: "ShieldOva",
    images: [
      {
        url: "/images/logo.png", // asegúrate de poner esta imagen en /public/images
        width: 1200,
        height: 630,
        alt: "ShieldOva - Ciberseguridad",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
