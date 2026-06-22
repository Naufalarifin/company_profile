import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Fraunces } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'PT. Bukit Kencana Mas — Produsen Tepung Tapioka Premium Lampung',
  description:
    'PT. Bukit Kencana Mas adalah produsen tepung tapioka (pati singkong) berkualitas tinggi di Bandar Lampung. Mengolah singkong menjadi pati premium dengan teknologi mesin Eropa modern.',
  keywords: [
    'PT Bukit Kencana Mas',
    'tepung tapioka',
    'pati singkong',
    'tapioca starch',
    'Lampung',
    'cassava starch',
    'produsen tapioka',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'PT. Bukit Kencana Mas — Produsen Tepung Tapioka Premium',
    description:
      'Mengolah singkong Lampung menjadi tepung tapioka berkualitas tinggi dengan teknologi modern.',
    type: 'website',
    locale: 'id_ID',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4f1e6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
