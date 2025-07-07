import '@/styles/index.css';
import '@/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import ScrollToTop from '@/components/ScrollToTop';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSWrapper from '@/components/AOSWrapper';
import { ReactNode } from 'react';
import { Geologica, Roboto } from 'next/font/google';
import Script from 'next/script';

export const metadata = {
  title: 'PROJXON | Strategic Business Consulting for Scalable Growth',
  description: 'PROJXON empowers businesses with data-driven strategies, operational clarity, and innovative insights. Turning chaos into opportunity with every move.',
  metadataBase: new URL('https://www.projxon.com/'),
  openGraph: {
    title: 'PROJXON',
    description: 'PROJXON empowers businesses with data-driven strategies, operational clarity, and innovative insights. Turning chaos into opportunity with every move.',
    url: 'https://www.projxon.com/',
    siteName: 'PROJXON',
    images: [
      {
        url: '/PROJXON.png',
        width: 1200,
        height: 630,
        alt: 'PROJXON logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROJXON',
    description: 'PROJXON empowers businesses with data-driven strategies, operational clarity, and innovative insights. Turning chaos into opportunity with every move.',
    images: ['/PROJXON.png'],
  },
};

const geologica = Geologica({ subsets: ['latin'], variable: '--font-geologica' });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], variable: '--font-roboto' });

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <html lang='en' className={`${geologica.variable} ${roboto.variable}`}>
      <head>
        {/* Google Tag Manager Script */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJBNSBPQ');
          `}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-MJBNSBPQ'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <div className='content'>
          <AOSWrapper />
          <NavBar />
          <ScrollToTop />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}