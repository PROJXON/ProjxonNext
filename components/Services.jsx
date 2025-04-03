"use client"

import {
    FaMobile,
    FaCogs,
    FaProjectDiagram,
    FaShoppingCart,
    FaLaptopCode,
} from "react-icons/fa";
import { Row } from "react-bootstrap";
import ServiceCards from "@/components/ServiceCards";

export default function Services() {
    const services = [
        {
            image: "/assets/homepage/services-img/market.webp",
            icon: FaMobile,
            title: "Marketing + Social Media",
            description:
                "Amplify your brand's impact with expert marketing and social media strategies. Engage your audience, accelerate growth, and redefine your digital presence.",
        },
        {
            image: "/assets/homepage/services-img/ecom.webp",
            icon: FaShoppingCart,
            title: "E-commerce Solutions",
            description:
                "Transform your online business with tailored e-commerce solutions. Optimize performance, boost sales, and enhance customer satisfaction.",
        },
        {
            image: "/assets/homepage/services-img/business.webp",
            icon: FaCogs,
            title: "Business Process Optimization",
            description: "Streamline your operations and enhance efficiency with our business optimization services. Achieve greater productivity and profitability.",
        },
        {
            image: "/assets/homepage/services-img/manage.webp",
            icon: FaProjectDiagram,
            title: "Project Management",
            description:
                "Ensure timely, budget-friendly project delivery with our expert management services. We focus on seamless project process management with an emphasis on continuity to improve efficiency and achieve your goals.",
        },
        {
            image: "/assets/homepage/services-img/it.webp",
            icon: FaLaptopCode,
            title: "IT + Tech Integrations",
            description: "Boost your business with our innovative IT solutions. We design custom IT and tech packages to increase efficiencies and maximize output.",
        },
    ];

    return (<Row>
        <ServiceCards services={services.slice(0, 3)} />
        <ServiceCards services={services.slice(3, 5)} divClasses="mt-md-5 pt-md-5" />
    </Row>)
}