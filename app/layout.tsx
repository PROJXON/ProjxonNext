import '@/styles/index.css';
import '@/styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import ScrollToTop from '@/components/ScrollToTop';
import NavBar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AOSWrapper from '@/components/AOSWrapper';
import { ReactNode } from 'react';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link href='https://fonts.googleapis.com/css2?family=Geologica:wght@100..900&display=swap' rel='stylesheet' />
        <link href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' rel='stylesheet' />
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJBNSBPQ');`,
          }}
        />
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
