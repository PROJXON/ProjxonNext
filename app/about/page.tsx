import './AboutPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CustomButton from '@/components/CustomButton';
import CallToAction from '@/components/CallToAction';
import OurValues from '@/components/OurValues';
import type { Metadata } from 'next';
import { ConsultingLeads } from '@/types/interfaces';

export const metadata: Metadata = {
  title: 'About PROJXON | The Story Behing Strategy & Innovation',
  description: 'Discover PROJXON’s mission, values, and expertise in business consulting. We help companies achieve growth through strategic insights and innovation.',
  metadataBase: new URL('https://www.projxon.com/about'),
  openGraph: {
    title: 'About PROJXON | The Story Behing Strategy & Innovation',
    description: 'Discover PROJXON’s mission, values, and expertise in business consulting. We help companies achieve growth through strategic insights and innovation.',
    url: 'https://www.projxon.com/about',
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
    title: 'About PROJXON | The Story Behing Strategy & Innovation',
    description: 'Discover PROJXON’s mission, values, and expertise in business consulting. We help companies achieve growth through strategic insights and innovation.',
    images: ['/PROJXON.png'],
  },
};

const AboutPage = () => {
  const consultingLeads: ConsultingLeads[] = [
    {
      image: '/assets/about/team/phelan.webp',
      name: 'Mark Phelan',
      title: 'Senior Consultant,',
      specialty: 'E-Commerce Solutions',
      socials: [
        {
          icon: FaLinkedin,
          href: new URL('https://www.linkedin.com/in/phelanmarkw'),
        },
        {
          icon: FaGlobe,
          href: new URL('https://www.thephelanfocus.com/'),
        },
      ],
    },
    {
      image: '/assets/about/team/kathy.webp',
      name: 'Kathy Seaton',
      title: 'Senior Consultant,',
      specialty: 'Non Profit Development',
      socials: [
        {
          icon: FaLinkedin,
          href: new URL('https://www.linkedin.com/in/klseaton'),
        },
        {
          icon: FaGlobe,
          href: new URL('https://www.klseatonconsulting.com/'),
        },
      ],
    },
    {
      image: '/assets/about/team/melissa.webp',
      name: 'Melissa Eboli',
      title: 'Senior Consultant,',
      specialty: 'Health + Wellness Solutions',
      socials: [
        {
          icon: FaLinkedin,
          href: new URL('https://www.linkedin.com/in/viamelissa'),
        },
        {
          icon: FaGlobe,
          href: new URL('https://www.viaskitchen.com/'),
        },
      ],
    },
    {
      image: '/assets/about/team/donavon.webp',
      name: 'Donavon Roberson',
      title: 'Senior Consultant,',
      specialty: 'Tech + Software Solutions',
      socials: [
        {
          icon: FaLinkedin,
          href: new URL('https://www.linkedin.com/in/donavonroberson'),
        },
        {
          icon: FaGlobe,
          href: new URL('https://medium.com/@thejourneyofthedreamer'),
        },
      ],
    },
  ];

  return (
    <div className='about-page'>
      {/* Hero Section */}
      <section className='hero-section'>
        <Hero
          title='About Us'
          subtitle='Where Purpose Meets Performance.'
          paragraph='We empower impact-driven businesses to scale with clarity, confidence, and strategic precision, unlocking their full potential every step of the way.'
          backgroundClass='about-hero'
        />
      </section>

      {/* Who We Are Section */}
      <section id='who-we-are' className='who-we-are sections-container'>
        <Container className='overflow-hidden'>
          <Row className='align-items-center g-5'>
            <Col md={12} lg={6} data-aos='fade-up' data-aos-once='true'>
              <Image
                src='/assets/about/whoarewe.webp'
                alt='who we are'
                width={800}
                height={400}
                className='overflow-hidden rounded-3 object-fit-cover w-100'
              // placeholder='blur'
              />
            </Col>

            <Col
              md={12}
              lg={6}
              data-aos='fade-left'
              data-aos-delay='500'
              data-aos-once='true'
            >
              <h1 className='text-uppercase fw-bolder mb-3'>Who We Are</h1>
              <h2 className='fw-bolder fs-4'>
                {' '}
                PROJXON is a business optimization firm built for impact-driven,
                medium-sized businesses ready to scale with purpose
              </h2>
              <div className='mt-3 who-we-are-description gray-opacity'>
                <p className='fs-5'>
                  We specialize in transforming operational chaos into clarity through
                  strategic planning, process improvement, and project execution. From streamlining systems
                  to guiding high-stakes growth, we deliver tailored solutions that empower our clients to
                  lead, innovate, and thrive.
                </p>
                <p className='fs-5 mb-4 pb-2'>
                  Our cross-functional team brings deep industry
                  expertise and a relentless focus on results,
                  because your mission deserves more than just advice.
                  It deserves momentum.
                </p>
              </div>
              <div className='about-button'>
                <CustomButton
                  buttonText={' Let\'s Get Started'}
                  link='/contact'
                  buttonStyle='yellow-button'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Mission & Vision Section */}
      <section className='mission-vision overflow-hidden sections-container'>
        <Container>
          <Row className='g-5'>
            <Col
              sm={12}
              md={6}
              className='mb-4 p-lg-5'
              data-aos='fade-up'
              data-aos-once='true'
            >
              <section className='w-100'>
                <h2 className='fs-1 mb-4 text-uppercase fw-bold'>
                  Mission
                </h2>
                <p className='fs-5'>
                  We believe impact-driven businesses deserve to grow with clarity and purpose.
                  That’s why PROJXON delivers the systems, strategy, and expertise they
                  need to scale smarter, lead stronger, and make their mission unstoppable.
                </p>
              </section>
            </Col>
            <Col
              sm={12}
              md={6}
              className='mb-4 p-lg-5'
              data-aos='fade-up'
              data-aos-once='true'
            >
              <section className='w-100'>
                <h2 className='fs-1 mb-4 text-uppercase fw-bold'>Vision</h2>
                <p className='fs-5'>
                  We envision a world where Impact-Driven Businesses scale with confidence,
                  backed by the right Tools, Techniques, and Talent.
                  We envision PROJXON as the trusted partner organizations turn to when
                  they’re ready to succeed with focus and scale with purpose.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section id='our-values'>
        <OurValues />
      </section>

      {/* Our Team Section */}
      <section id='meet-the-team' className='our-team sections-container'>
        <Container>
          <Row className='justify-content-center mb-4 mb-md-5'>
            <Col lg={6} xl={5} className='text-center'>
              <h2 className='sections-heading fw-bold mb-3'>Meet Our Team</h2>
              {/* <p className='our-team-sub-heading mb-3'> 
                Our talented team combines vision, skill, and innovation to
                create exceptional results for our clients.
              </p> */}
            </Col>
          </Row>

          {/* <h2 className='fw-bold sections-heading'>Consulting Leads</h2> */}
          <Row className='text-center'>
            {consultingLeads.map((member, i) => (
              <Col md={6} lg={3} key={i} className='mb-5 our-team-card-body'>
                <div className='our-team-card mt-4 d-flex flex-column h-100'>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className='img-fluid w-100'
                    loading='lazy'
                  // placeholder='blur'
                  />
                  <div className='px-3 py-4 px-xl-4 text-white d-flex flex-column flex-grow-1'>
                    <h4 className='mb-2 text-yellow'>{member.name}</h4>
                    <h6>{member.title}</h6>
                    <h6>{member.specialty}</h6>
                    <div className='mt-auto'>
                      {member.socials.map((link, index) => (
                        <a
                          href={link.href.toString()}
                          className='text-yellow social-icons mx-2'
                          key={index}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <link.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default AboutPage;