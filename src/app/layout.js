// src/app/layout.js
import './globals.css'
import { Ubuntu, EB_Garamond } from 'next/font/google'

// ✅ Ini harus di luar komponen
const ubuntu = Ubuntu({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ubuntu',
  display: 'swap',
})

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ebgaramond',
  display: 'swap',
})

export const metadata = {
  title: 'RA RAIHAN PERSIS 27',
  description: 'RA RAIHAN PERSIS 27',
  icons: {
    icon: '/logo.svg', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${ebGaramond.variable}`}>
      <body>{children}</body>
    </html>
  )
}
