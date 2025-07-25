import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import type { Metadata } from 'next';
import './ContactPage.css';
import Hero from '@/components/Hero';
import InfoForm from '@/components/InfoForm';

export const metadata: Metadata = {
  title: 'Contact PROJXON | Get in Touch with Our Experts',
  description: 'Have questions or need expert consulting? Contact PROJXON for business strategy, market insights, and growth solutions. Let’s connect and collaborate.',
  metadataBase: new URL('https://www.projxon.com/contact'),
  openGraph: {
    title: 'Contact PROJXON | Get in Touch with Our Experts',
    description: 'Have questions or need expert consulting? Contact PROJXON for business strategy, market insights, and growth solutions. Let’s connect and collaborate.',
    url: 'https://www.projxon.com/contact',
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
    title: 'Contact PROJXON | Get in Touch with Our Experts',
    description: 'Have questions or need expert consulting? Contact PROJXON for business strategy, market insights, and growth solutions. Let’s connect and collaborate.',
    images: ['/PROJXON.png'],
  },
};

const ContactPage = () => {
  return (
    <div className='contact-page'>
      <Hero
        title='Contact Us'
        subtitle='Connect with Clarity. Start with Purpose.'
        paragraph={'Whether you\'re ready to solve challenges, explore opportunities, or simply have a conversation, our team is here to help. Reach out and let\'s start building something meaningful together.\''}
        backgroundClass='contact-hero'
      />
      <Container id='contact-form' className='my-5'>
        <Row className='justify-content-center'>
          <Col md={6} lg={4}>
            <Card className='contact-link'>
              <CardBody className='d-flex align-items-center'>
                <div className='fs-3 px-2 lh-1'>
                  <FaEnvelopeOpenText className='text-yellow' />
                </div>
                <a className='contact-link-content ms-4' href='mailto:info@projxon.com'>
                  Questions?
                </a>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} lg={6}>
            <InfoForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;