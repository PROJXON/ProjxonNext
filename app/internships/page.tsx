import Hero from '@/components/Hero';
import CallToAction from '@/components/CallToAction';
import BlogClientList from '@/components/BlogClientList';
import InternTestimonialsSection from '@/components/InternTestimonialsSection';
import { fetchBlogs } from '@/services/blogService';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import type { Metadata } from 'next';
import './InternshipsPage.css';
import { WPBlogPost } from '@/types/interfaces';

export const metadata: Metadata = {
  title: 'Launch Your Career with a Projxon Internship | PROJXON',
  description: 'Gain real‑world experience, mentorship, and growth opportunities. Discover how a Projxon internship can jump‑start your professional journey today.',
  metadataBase: new URL('https://www.projxon.com/'),
  openGraph: {
    title: 'Launch Your Career with a Projxon Internship | PROJXON',
    description: 'Gain real‑world experience, mentorship, and growth opportunities. Discover how a Projxon internship can jump‑start your professional journey today.',
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
    title: 'PROJXON Blog | Insights on Business Strategy & Innovation',
    description: 'Stay ahead with expert insights from PROJXON. Explore articles on business strategy, market trends, digital transformation, and innovation.',
    images: ['/PROJXON.png'],
  },
};

export default async function ResearchPage() {
  const blogs = await fetchBlogs() as WPBlogPost[];

  return (
    <div>
      <Hero
        title='Momentum Internship Program'
        subtitle='Designed for Learning. Structured for Success.'
        paragraph={'Empowering professionals with the tools, experience, and mentorship needed to thrive in fast-paced, real-world environments. This isn\'t busy work, it\'s a launchpad for high-performance careers.'}
        backgroundClass='internships-hero'
      />

      <Container id='mip' className='momentum-intern sections-container'>
        <Row className='align-items-center flex-row-reverse g-5'>
          <Col sm={12} md={6} data-aos='fade-up'>
            <Image
              src='/assets/careers/internship.webp'
              alt='Promotional'
              className='img-fluid rounded-3'
              width={600}
              height={400}
            />
          </Col>

          <Col sm={12} md={6} data-aos='fade-right' data-aos-delay='500'>
            <h2>Future-Proof Your Career</h2>
            <p className='my-3'>
              <strong>At PROJXON, we help young professionals realize their full potential </strong>{' '}
              while building their personal brand and understanding their value. Are you ready to launch your career in strategic consulting and digital marketing?
            </p>

            <p className='my-3'>
              <strong>Our 180-day Momentum Internship Program</strong>{' '}
              offers passionate and innovative individuals the opportunity to work on real consulting projects and collaborate with participants from across the US in various industries, including{' '}
              <strong>Tech, Health + Wellness, E-commerce, Non-Profit, and Professional Services.</strong>{' '}
              You&apos;ll gain invaluable hands-on experience while making a tangible impact.
            </p>

            <h3>What We Offer:</h3>
            <ul>
              <li>
                <strong>Professional Development:</strong> Work closely with professional coaches to develop skills in Project Management, AI innovation and implementation, and achieve your career goals with personalized 1:1 coaching. Autonomy and Impact: Enjoy the freedom to work on projects that deliver direct results, in a remote and autonomous role.
              </li>
              <li>
                <strong>Collaborative Environment:</strong> Engage with a dynamic team, working individually and collectively on diverse projects, ensuring you gain comprehensive experience.
              </li>
            </ul>

            <p className='my-3'>
              <strong>Discover</strong> the power of tailored strategies and make your mark with PROJXON. As part of our team, you&apos;ll contribute to strategies that drive sustainable growth for our clients. This is your opportunity to forge long-lasting partnerships and be part of a team that values growth, productivity, and commercialization.
            </p>
          </Col>
        </Row>
      </Container>

      <section id='testimonials' className='testimonials-wrapper'>
        <InternTestimonialsSection />
      </section>
      <section id='blogs' className='blogs-wrapper'>
        <BlogClientList initialBlogs={blogs} />
      </section>
      <CallToAction />
    </div>
  );
}