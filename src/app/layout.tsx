import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cypso POS - Advanced Point of Sale System',
  description: 'State-of-the-art POS system offering seamless operations, enhanced efficiency, and cutting-edge features for modern businesses.',
  keywords: 'POS, Point of Sale, Business Management, Retail Solutions',
  openGraph: {
    title: 'Cypso POS - Advanced Point of Sale System',
    description: 'State-of-the-art POS system for modern businesses',
    type: 'website',
    locale: 'en_US',
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4052ff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

