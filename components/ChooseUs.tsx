"use client"
import { LuTrendingUp, LuUsers, LuLightbulb } from "react-icons/lu";
import { Container, Row } from "react-bootstrap";
import BlackCard from "@/components/BlackCard";
import { ChooseUsReasons } from "@/types/interfaces";

export default function ChooseUs() {
  const reasons: ChooseUsReasons[] = [
    {
      icon: LuUsers,
      title: "Expert Team",
      description:
        "Our team consists of industry experts with years of experience in their respective fields. With diverse backgrounds and deep knowledge, we bring unparalleled expertise to every projectOur tailored delivery teams consist of industry experts in their respective fields. With diverse backgrounds and deep knowledge, we bring relevant expertise to every project.",
      stat: "10",
      statSuffix: "+",
      statDescription: "years combined experience",
    },
    {
      icon: LuTrendingUp,
      title: "Proven Results",
      description: "We have a track record of delivering successful projects and measurable improvements for our clients. Our results speak for themselves, with consistent client satisfaction and tangible outcomes.",
      stat: "95",
      statSuffix: "%",
      statDescription: "customer satisfaction rate",
    },
    {
      icon: LuLightbulb,
      title: "Innovative Solutions",
      description:
        "Leveraging the latest methodologies and technologies, we create solutions that work and scale. A holistic, forward-thinking approach ensures that we keep your team ahead of the curve in your industry.",
      stat: "20",
      statSuffix: "+",
      statDescription: "innovative projects delivered",
    },
  ];

  return (
    <section className="bg-black choose-us">
      <Container className="text-center">
        <h2 className="fw-bold sections-heading text-white" data-aos="fade-up" data-aos-once="true">
          We Got Your Back
        </h2>
        <Row className="my-5 g-5">
          {reasons.map((reason, index) => (
            <BlackCard key={index} item={reason} iconSize={64} />
          ))}
        </Row>
      </Container>
    </section>
  )
}