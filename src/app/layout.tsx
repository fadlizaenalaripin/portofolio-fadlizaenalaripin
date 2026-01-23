import type { Metadata, Viewport } from 'next' // Tambahkan Viewport
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

// Setting Viewport agar tidak bisa di-zoom out sembarangan yang bikin layout hancur
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Fadli Zaenal Aripin - Data Intelligence Portfolio', // Sudah saya ganti namanya
  description: 'Specialized in Machine Learning and Business Analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      {/* PENTING: overflow-x-hidden di body mencegah 'kebocoran' lebar layar 
        min-h-screen memastikan background hitamnya full ke bawah
      */}
      <body 
        className={`${inter.className} bg-black text-white min-h-screen overflow-x-hidden antialiased`} 
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  )
}