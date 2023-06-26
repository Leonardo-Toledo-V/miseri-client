import './globals.css'
import { lato, playfair } from './fonts.js'

export const metadata = {
  title: 'Miseri',
  description: 'lolo el peludo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${lato.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}
