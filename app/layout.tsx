import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Builtflat - Digital Agency, New Zealand',
  description: 'Builtflat is a digital agency in New Zealand. We help build digital destinations for businesses, to help them connect and grow with their customers.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="_next">{children}</body>
    </html>
  )
}
