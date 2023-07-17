import './globals.css'
import { lato, playfair } from './fonts.js'
import { NavbarContextProvider } from '@/hooks/NavbarProvider'

export const metadata = {
  title: 'Miseri',
  description: 'Miseri sense',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${lato.variable} ${playfair.variable}`}>
          <NavbarContextProvider>{children}</NavbarContextProvider>
      </body>
    </html>
  )
}
