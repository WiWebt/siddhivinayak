import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { getImagePath } from '@/utils/path';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Siddhivinayak Advanced ENT Care Centre',
  description: 'Expert ENT care with state-of-the-art facilities and experienced specialists',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: [
      { url: getImagePath('/favicon.ico'), sizes: 'any' },
      { url: getImagePath('/icon.png'), sizes: '32x32', type: 'image/png' },
      { url: getImagePath('/icon-192.png'), sizes: '192x192', type: 'image/png' },
      { url: getImagePath('/icon-512.png'), sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: getImagePath('/apple-icon.png'), sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
