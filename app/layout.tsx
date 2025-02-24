import './globals.scss';
import type { Metadata } from 'next';
import CookiePolicyPrompt from './components/common/CookiePolicy';
import ContactForm from './components/common/ContactForm';
import ToggleContactListener from './components/common/ToggleContact';
import Footer from './components/common/Footer';
import NextTopLoader from 'nextjs-toploader';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from 'next/script';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'
import MetaPixel from './components/common/MetaPixel';

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
        <Script id="hotjar-script" strategy="afterInteractive">
          {`
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:5302963,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className="_next">
        <GoogleTagManager gtmId="GTM-W4BL8W2F" />
        <GoogleAnalytics gaId="G-QG5F5FN0L1" />
        <MetaPixel />
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
