import { Service } from '@/types/interfaces';
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaCogs,
  FaProjectDiagram,
  FaShoppingCart,
  FaLaptopCode,
  FaChartLine,
  FaChalkboardTeacher,
  FaLightbulb,
  FaLeaf,
  FaStar,
  FaDigitalTachograph,
} from 'react-icons/fa';

const ServiceGrid = () => {
  // Services data array
  const services: Service[] = [
    {
      dataAOS: '100',
      title: 'Business Process Optimization',
      icon: FaCogs,
      content: [
        {
          heading: 'Workflow Analysis',
          description:
            'Conduct a thorough analysis of current workflows to identify bottlenecks, redundancies, and inefficiencies.',
        },
        {
          heading: 'Process Re-engineering',
          description:
            'Re-engineer core business processes with a focus on optimizing resources and minimizing waste.',
        },
        {
          heading: 'Performance Metrics and KPIs',
          description:
            'Develop customized performance metrics that align with business goals and objectives, supported by real-time dashboards.',
        },
      ],
    },
    {
      dataAOS: '200',
      title: 'Project Management',
      icon: FaProjectDiagram,
      content: [
        {
          heading: 'Project Planning and Execution',
          description:
            'Develop detailed project plans outlining scope, timelines, resources, and budgets, ensuring efficient execution.',
        },
        {
          heading: 'Agile Transformation',
          description:
            'Assist businesses in adopting Agile methodologies for improved project delivery and adaptability.',
        },
        {
          heading: 'Risk Management',
          description:
            'Identify, assess, and mitigate project risks to ensure successful outcomes.',
        },
      ],
    },

    {
      dataAOS: '300',
      title: 'E-commerce Solutions',
      icon: FaShoppingCart,
      content: [
        {
          heading: 'Platform Selection and Implementation',
          description:
            'Help clients choose the right e-commerce platform and oversee its implementation.',
        },
        {
          heading: 'Digital Marketing Strategies',
          description:
            'Develop and execute digital marketing campaigns to drive online sales and improve brand visibility.',
        },
        {
          heading: 'User Experience Optimization',
          description:
            'Enhance the online shopping experience through UI/UX design improvements and personalized customer journeys.',
        },
      ],
    },
    {
      dataAOS: '400',
      title: 'IT Tech Stack Design',
      icon: FaLaptopCode,
      content: [
        {
          heading: 'IT Strategy and Planning',
          description:
            'Develop IT strategies aligned with business goals to drive digital transformation.',
        },
        {
          heading: 'System Integration',
          description:
            'Integrate various IT systems to ensure seamless data flow and process automation.',
        },
        {
          heading: 'Cybersecurity',
          description:
            'Implement robust cybersecurity measures to protect client data and IT infrastructure.',
        },
      ],
    },
    {
      dataAOS: '700',
      title: 'Innovation and R&D',
      icon: FaLightbulb,
      content: [
        {
          heading: 'Innovation Workshops',
          description:
            'Conduct workshops to foster a culture of innovation and generate new ideas.',
        },
        {
          heading: 'R&D Strategy',
          description:
            'Assist clients in developing and executing R&D strategies to stay ahead of market trends.',
        },
      ],
    },
    {
      dataAOS: '900',
      title: 'Customer Experience Enhancement',
      icon: FaStar,
      content: [
        {
          heading: 'CX Strategy',
          description:
            'Develop strategies to improve overall customer experience across all touchpoints.',
        },
        {
          heading: 'Customer Feedback Systems',
          description:
            'Implement systems to capture and analyze customer feedback for continuous improvement.',
        },
      ],
    },
    {
      dataAOS: '600',
      title: 'Customized Training Program',
      icon: FaChalkboardTeacher,
      content: [
        {
          heading: 'Employee Training',
          description:
            'Develop and deliver training programs tailored to client needs, including process improvement, project management, and technology adoption.',
        },
        {
          heading: 'Leadership Development',
          description:
            'Offer leadership training to help executives and managers lead change effectively within their organizations.',
        },
      ],
    },
    {
      dataAOS: '1200',
      title: 'Digital Transformation',
      icon: FaDigitalTachograph,
      content: [
        {
          heading: 'Digital Strategy Development',
          description:
            'Create digital transformation roadmaps to modernize business operations.',
        },
        {
          heading: 'Technology Adoption',
          description:
            'Guide clients in adopting emerging technologies such as blockchain, IoT, and cloud computing.',
        },
      ],
    },
    {
      dataAOS: '500',
      title: 'Data-Driven Decision Making',
      icon: FaChartLine,
      content: [
        {
          heading: 'Advanced Analytics',
          description:
            'Use data analytics to provide actionable insights for decision-making.',
        },
        {
          heading: 'AI and Machine Learning Solutions',
          description:
            'Implement AI and ML solutions to automate processes and predict business trends.',
        },
      ],
    },
    {
      dataAOS: '800',
      title: 'Sustainability and CSR',
      icon: FaLeaf,
      content: [
        {
          heading: 'Sustainability Audits',
          description:
            'Evaluate and greatly improve the sustainability of client operations.',
        },
        {
          heading: 'CSR Initiatives',
          description:
            'Develop and implement CSR programs that align with client values and enhance brand reputation.',
        },
      ],
    },
    /*
    {
      dataAOS: "1000",
      title: "Global Expansion Support",
      icon: FaGlobe,
      content: [
        {
          heading: "Market Entry Strategies",
          description:
            "Assist clients in entering new markets with comprehensive market research and entry strategies.",
        },
        {
          heading: "Localization Services",
          description:
            "Provide localization services to adapt products and marketing materials for different regions.",
        },
      ],
    },
    {
      dataAOS: "1100",
      title: "Financial Consulting",
      icon: FaMoneyCheckAlt,
      content: [
        {
          heading: "Financial Planning and Analysis",
          description:
            "Offer financial planning, budgeting, and analysis services to help clients manage their finances effectively.",
        },
        {
          heading: "Funding and Investment Advisory",
          description:
            "Assist clients in securing funding and making sound investment decisions.",
        },
      ],
    },
    */
  ];

  return (
    <Container className="mt-5">
      <Row className="py-4">
        {services.map((service, index) => (
          <Col md={6} key={index}>
            <Card
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={service.dataAOS}
            >
              <div className="card-icon text-yellow">
                <service.icon />
              </div>
              <div className="card-content">
                <h3 className="text-white">{service.title}</h3>
                {service.content.map((item, idx) => (
                  <p key={idx} className="text-gray gray-opacity">
                    <strong>{item.heading}:</strong> {item.description}
                  </p>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ServiceGrid;