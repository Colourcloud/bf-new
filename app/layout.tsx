import './globals.scss';
import type { Metadata } from 'next';
import CookiePolicyPrompt from './components/common/CookiePolicy';
import ContactForm from './components/common/ContactForm';
import ToggleContactListener from './components/common/ToggleContact';

export const metadata: Metadata = {
  title: 'Builtflat - Digital Agency, New Zealand',
  description: 'Builtflat is a digital agency in New Zealand. We help build digital destinations for businesses, to help them connect and grow with their customers.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="_next" >
        <ToggleContactListener />
        <ContactForm />
        <CookiePolicyPrompt />
        {children}
      </body>
    </html>
  );
}
