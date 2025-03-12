import React from "react";
import { Carousel, Card } from "react-bootstrap";
import {
  FaCogs,
  FaProjectDiagram,
  FaShoppingCart,
  FaLaptopCode,
  FaChartLine,
  FaChalkboardTeacher,
  FaLightbulb,
  FaLeaf,
  FaSmile,
  FaGlobe,
  FaMoneyCheckAlt,
  FaDigitalTachograph,
} from "react-icons/fa";
import Image from "next/image"; // Import Next.js Image component

// Static image paths in the public folder
const carouselServices = [
  {
    image: "/assets/servicepage/business.webp", // Use the public directory path
    title: "Business Process Optimization",
    icon: <FaCogs />,
    content: [
      {
        heading: "Workflow Analysis",
        description:
          "Conduct a thorough analysis of current workflows to identify bottlenecks, redundancies, and inefficiencies.",
      },
      {
        heading: "Process Re-engineering",
        description:
          "Re-engineer core business processes with a focus on optimizing resources and minimizing waste.",
      },
      {
        heading: "Performance Metrics and KPIs",
        description:
          "Develop customized performance metrics that align with business goals and objectives, supported by real-time dashboards.",
      },
    ],
  },
  {
    image: "/assets/servicepage/ITConsulting.webp", // Use the public directory path
    title: "Project Management",
    icon: <FaProjectDiagram />,
    content: [
      {
        heading: "Project Planning and Execution",
        description:
          "Develop detailed project plans outlining scope, timelines, resources, and budgets, ensuring efficient execution.",
      },
      {
        heading: "Agile Transformation",
        description:
          "Assist businesses in adopting Agile methodologies for improved project delivery and adaptability.",
      },
      {
        heading: "Risk Management",
        description:
          "Identify, assess, and mitigate project risks to ensure successful outcomes.",
      },
    ],
  },
  // Add more services as needed
];

const ServiceCarousel = () => {
  return (
    <Carousel
      interval={3000}
      controls={true}
      indicators={true}
      pause={false}
      data-aos="fade-up"
    >
      {carouselServices.map((service, index) => (
        <Carousel.Item key={index} className="service-carousel">
          {/* Using the Next.js Image component for optimized image loading */}
          <Image
            className="d-block w-100"
            src={service.image}
            alt={service.title}
            width={800} // Set the width of the image
            height={500} // Set the height of the image
            layout="intrinsic" // Ensures image is responsive
          />
          <Carousel.Caption>
            <Card className="service-card">
              <div className="card-icon text-yellow">{service.icon}</div>
              <div className="card-content">
                <h3 className="text-white">{service.title}</h3>
                {service.content.map((item, idx) => (
                  <p key={idx} className="text-gray gray-opacity">
                    <strong>{item.heading}:</strong> {item.description}
                  </p>
                ))}
              </div>
            </Card>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ServiceCarousel;
