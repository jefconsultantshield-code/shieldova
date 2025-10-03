import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ShieldOva.vercel.app"), // ✅ pon aquí tu dominio en Vercel
  title: "ShieldOva - Ciberseguridad para PYMEs",
  description:
    "Protege tu negocio con ShieldOva: soluciones de ciberseguridad simples, efectivas y accesibles para pequeñas y medianas empresas.",
  keywords: [
    "ciberseguridad",
    "seguridad informática",
    "protección de datos",
    "ShieldOva",
    "ciberseguridad para PYMEs",
  ],
  authors: [{ name: "ShieldOva", url: "https://ShieldOva.vercel.app" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "ShieldOva - Ciberseguridad para PYMEs",
    description:
      "Protege tu negocio con ShieldOva: soluciones de ciberseguridad simples, efectivas y accesibles para pequeñas y medianas empresas.",
    url: "https://ShieldOva.vercel.app",
    siteName: "ShieldOva",
    images: [
      {
        url: "/og-image.png", // ✅ crea esta imagen en public/
        width: 1200,
        height: 630,
        alt: "ShieldOva - Seguridad para PYMEs",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShieldOva - Ciberseguridad para PYMEs",
    description:
      "Protege tu negocio con ShieldOva: soluciones de ciberseguridad simples, efectivas y accesibles para pequeñas y medianas empresas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        {/* JSON-LD para IA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ShieldOva",
              url: "https://ShieldOva.vercel.app",
              logo: "https://ShieldOva.vercel.app/images/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/ShieldOva",
                "https://twitter.com/ShieldOva",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}