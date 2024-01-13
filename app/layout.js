import { Salsa } from 'next/font/google'
import './globals.css'

const salsa = Salsa({ subsets: ['latin'] , weight :['400']})

export const metadata = {
  title: 'Photo Store',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={salsa.className}>{children}</body>
    </html>
  )
}