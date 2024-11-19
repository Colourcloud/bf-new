// app/layout.tsx
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Builtflat - News & Updates',
  description: 'Keep up to date with latest news from Builtflat, and other design & development related content'
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}