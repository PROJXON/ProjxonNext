import './HomePage.css';
import { Container } from 'react-bootstrap';
import HomeHero from '@/components/HomeHero';
import CustomButton from '@/components/CustomButton';
import CallToAction from '@/components/CallToAction';
import ChooseUs from '@/components/ChooseUs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PROJXON Services | Expert Business Consulting & Strategy',
  description: "Explore PROJXON's consulting services in strategy, market research, and digital transformation. We provide data-driven solutions for business growth.",
  metadataBase: new URL('https://www.projxon.com/services'),
  openGraph: {
    title: 'PROJXON Services | Expert Business Consulting & Strategy',
    description: "Explore PROJXON's consulting services in strategy, market research, and digital transformation. We provide data-driven solutions for business growth.",
    url: 'https://www.projxon.com/services',
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
    title: 'PROJXON Services | Expert Business Consulting & Strategy',
    description: "Explore PROJXON's consulting services in strategy, market research, and digital transformation. We provide data-driven solutions for business growth.",
    images: ['/PROJXON.png'],
  },
};

export default async function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="text-center introduction bg-yellow">
        <Container>
          <h2 className="mb-5 fw-bold fs-3 text-black mx-auto text-uppercase">
            Our purpose
          </h2>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="fs-4 text-black"
          >
            We are a Business Optimization Consulting Company helping Veteran-Owned and Operated Businesses and Veteran-Founded Non-Profits Launch, Grow, and Scale through High-Impact Strategic Partnerships. We specialize in guiding small and medium-sized organizations across the Tech, E-commerce, Health & Wellness, and Non-Profit industries to combat chaos head-on by empowering our clients through creating sustainable solutions that scale with their business, turning points of failure into opportunities for growth.
          </p>
          <hr className="divider" />
          <CustomButton
            buttonText="More About Us"
            link="/about"
            buttonStyle="black-button"
            delayTime={0.3}
            isAnimated={true}
          />
        </Container>
      </section>

      <ChooseUs />
      <CallToAction />
    </>
  );
}