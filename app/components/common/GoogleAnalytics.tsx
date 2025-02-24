// components/GoogleAnalytics.js
import Script from 'next/script';

const GoogleAnalytics = () => (
  <>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QG5F5FN0L1"></Script>
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-QG5F5FN0L1');
      `}
    </Script>
  </>
);

export default GoogleAnalytics;