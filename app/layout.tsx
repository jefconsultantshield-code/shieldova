import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shieldova',
  description: 'Sitio optimizado con Next.js y Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='es'>
      <body>{children}</body>
    </html>
  )
}
