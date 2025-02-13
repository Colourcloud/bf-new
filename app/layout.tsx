import './globals.scss';
import type { Metadata } from 'next';
import CookiePolicyPrompt from './components/common/CookiePolicy';
import ContactForm from './components/common/ContactForm';
import ToggleContactListener from './components/common/ToggleContact';
import Footer from './components/common/Footer';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script';  // Import Script from next/script
import GoogleAnalytics from './components/common/GoogleAnalytics';
import MetaPixel from './components/common/MetaPixel';
import Hotjar from './components/common/Hotjar';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.builtflat.co.nz'),
  title: 'Builtflat - Digital Agency, New Zealand',
  description: 'Builtflat is a digital agency in New Zealand. We help build digital destinations for businesses, to help them connect and grow with their customers.',
  keywords: 'Digital, Agency, Builtflat, New Zealand, Design, Development, Auckland, Graphics, Website, templates, seo, ecommerce, api, prototyping, cms, business',
  openGraph: {
    title: 'Builtflat - Digital Agency, New Zealand',
    description: 'We build digital destinations for businesses to connect and grow with their customers.',
    url: 'https://www.builtflat.co.nz',
    siteName: 'Builtflat',
    images: [
      {
        url: '/social-banner.jpg',
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
    images: ['/social-banner.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-W4BL8W2F');
        `}
      </Script>
      </head>
      <body className="_next" >
        {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W4BL8W2F"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

        <GoogleAnalytics />
        <MetaPixel />
        <Hotjar />
        <SpeedInsights />
        <Analytics/>
        <NextTopLoader showSpinner={false} color='#7a4aff'/>
        {/* <CookiePolicyPrompt /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
