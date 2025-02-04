// app/layout.tsx
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export const metadata = {
  title: 'Builtflat - Free Website Analysis',
  description: 'free basic website analysis valued at over $250 that checks your websites health and performance. Get in quick, limited time!'
}

export default function Layout({ children }: LayoutProps) {
  return children
}