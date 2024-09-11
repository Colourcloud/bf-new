import './globals.scss';
import type { Metadata } from 'next';
import CookiePolicyPrompt from './components/common/CookiePolicy';
import ContactForm from './components/common/ContactForm';
import ToggleContactListener from './components/common/ToggleContact';
import Footer from './components/common/Footer';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Builtflat - Digital Agency, New Zealand',
  description: 'Builtflat is a digital agency in New Zealand. We help build digital destinations for businesses, to help them connect and grow with their customers.',
  keywords: 'Digital, Agency, Builtflat, New Zealand, Design, Development, Auckland, Graphics, Website, templates, seo, ecommerce, api, prototyping, cms, business',
  openGraph: {
    title: 'Builtflat - Digital Agency, New Zealand',
    description: 'We build digital destinations for businesses to connect and grow with their customers.',
    url: 'https://www.builtflat.com', // Replace with your actual URL
    siteName: 'Builtflat',
    images: [
      {
        url: 'https://www.builtflat.com/social-banner.jpg.jpg', // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: 'Builtflat - Digital Agency',
      },
    ],
    locale: 'en_NZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Builtflat - Digital Agency, New Zealand',
    description: 'We build digital destinations for businesses to connect and grow with their customers.',
    images: ['https://www.builtflat.com/social-banner.jpg.jpg'], // Replace with your actual image URL
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="_next" >
        <SpeedInsights />
        <Analytics/>
        <NextTopLoader showSpinner={false} color='#7a4aff'/>
        <ToggleContactListener />
        <ContactForm />
        {/* <CookiePolicyPrompt /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
