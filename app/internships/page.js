import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import BlogClientList from "@/components/BlogClientList"
import AOSWrapper from "@/components/AOSWrapper"
import InternTestimonialsSection from "@/components/InternTestimonialsSection"
import { fetchBlogs } from "@/services/blogService"
import { Container, Row, Col } from "react-bootstrap"
import Image from "next/image"
import "./InternshipsPage.css"

export const metadata = {
  title: "Launch Your Career with a Projxon Internship | PROJXON",
  description: "Gain real‑world experience, mentorship, and growth opportunities. Discover how a Projxon internship can jump‑start your professional journey today.",
  metadataBase: new URL("https://www.projxon.com/"),
  openGraph: {
    title: "Launch Your Career with a Projxon Internship | PROJXON",
    description: "Gain real‑world experience, mentorship, and growth opportunities. Discover how a Projxon internship can jump‑start your professional journey today.",
    url: "https://www.projxon.com/",
    siteName: "PROJXON",
    images: [
      {
        url: "/PROJXON.png",
        width: 1200,
        height: 630,
        alt: "PROJXON logo",
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJXON Blog | Insights on Business Strategy & Innovation",
    description: "Stay ahead with expert insights from PROJXON. Explore articles on business strategy, market trends, digital transformation, and innovation.",
    images: ["/PROJXON.png"]
  }
};

export default async function ResearchPage() {
  const blogs = await fetchBlogs()

  return (<div>
    <AOSWrapper />
    <Hero
      title="Momentum Internship Program"
      backgroundClass="internships-hero"
    />
     <section className="internship-content-section">
    <Container id="mip" className="momentum-intern sections-container">
      <Row className="align-items-center flex-row-reverse g-5">
        <Col sm={12} md={6} data-aos="fade-up">
          <Image
            src="/assets/careers/internship.webp"
            alt="Promotional"
            className="img-fluid rounded-3"
            width={600}
            height={400}
          />
        </Col>

        <Col sm={12} md={6} data-aos="fade-right" data-aos-delay="500">
          <h2>Future-Proof Your Career</h2>
          
      <p>
        Welcome to PROJXON, where bold thinkers become high-impact professionals.
      </p>
      <p>
        Our Momentum Internship Program isn't just an internship; it's a career accelerator designed for ambitious students, professionals in transition, and early-career talent ready to thrive in real-world consulting environments.
      </p>

      <h4>Why Join the Momentum Internship Program?</h4>
      <p>
        At PROJXON, we’ve redefined internships from the ground up.
        <br />
        This Participant-First program centers on your vocational, professional, and career development, not busy work. You’ll collaborate on real projects, work with experienced leaders, and gain unmatched hands-on experience in a high-performance consulting environment.
      </p>

      <h4>Who This Is For</h4>
      <ul>
        <li>🎓 <strong>Career Kickoff</strong> – For undergrads ready to apply theory to real work.</li>
        <li>💼 <strong>Career Development</strong> – For graduate students expanding their portfolio and professional edge.</li>
        <li>🔄 <strong>Career Transition</strong> – For post-grads with 3–5+ years of experience looking to pivot or lead.</li>
      </ul>
    </Col>
  </Row>

  <Row className="mt-5">
    <Col md={12}>
      <h4>Program Snapshot</h4>
      <table className="table table-bordered">
        <tbody>
          <tr><td><strong>Duration</strong></td><td>24 weeks (Part-Time, 20 hrs/week)</td></tr>
          <tr><td><strong>Location</strong></td><td>Fully Remote (U.S.-based participants)</td></tr>
          <tr><td><strong>Time Zone</strong></td><td>Operates in Pacific Standard Time</td></tr>
          <tr><td><strong>Format</strong></td><td>Semi-Autonomous, Structured, Async-Friendly</td></tr>
          <tr><td><strong>Credit Eligibility</strong></td><td>Academic, CPT, OPT, and F-1 supported</td></tr>
        </tbody>
      </table>
    </Col>
  </Row>

  <Row className="mt-4">
    <Col md={6}>
      <h4>What You’ll Experience</h4>
      <ul>
        <li><strong>Project-Based Learning:</strong> Work on internal, team-based, and client-facing projects with real-world impact.</li>
        <li><strong>Support and Coaching:</strong> Weekly check-ins, monthly reviews, and career coaching from experienced mentors.</li>
        <li><strong>Professional Development:</strong> Get feedback on resumes, portfolios, and LinkedIn. Practice leadership. Attend workshops.</li>
        <li><strong>Clear Growth Pathways:</strong> From intern to Coach, Advisor, Consultant, or Partner — if you’re ready, we’ll help you rise.</li>
      </ul>
    </Col>
    <Col md={6}>
      <h4>Weekly Rhythm</h4>
      <table className="table table-sm">
        <tbody>
          <tr><td>Monday</td><td>Company Kickoff, Team Stand-Ups</td></tr>
          <tr><td>Tuesday</td><td>Project Syncs (AI, WebDev, Consulting, PM, Research)</td></tr>
          <tr><td>Wednesday</td><td>Training Workshops, 1:1 Coaching</td></tr>
          <tr><td>Thursday</td><td>Deep Work Day (no company-mandated meetings)</td></tr>
          <tr><td>Friday</td><td>Retrospectives & Team Project Showcases</td></tr>
          <tr><td>Weekends</td><td>No work expectations</td></tr>
        </tbody>
      </table>
    </Col>
  </Row>

  <Row className="mt-4">
    <Col md={6}>
      <h4>Your Commitment</h4>
      <ul>
        <li>🧠 Daily Communication</li>
        <li>📅 Attend Meetings</li>
        <li>💬 Contribute to Team Discussions</li>
        <li>📈 Weekly & Monthly Reviews</li>
        <li>🌱 Participate in Coaching & Career Planning</li>
        <li>🎯 Stay Accountable and Proactive</li>
      </ul>
    </Col>
    <Col md={6}>
      <h4>Your Pathway</h4>
      <ol>
        <li>Apply + Interview</li>
        <li>Onboard – Access, Familiarization, Training</li>
        <li>Develop – Vocational Training, Mentorship</li>
        <li>Execute – Team + Client Projects</li>
        <li>Grow – Leadership, Coaching, Alumni Pathways</li>
      </ol>
    </Col>
  </Row>

  <Row className="mt-4">
    <Col md={12}>
      <h4>Alumni Opportunities</h4>
      <p>
        <strong>Coach + Advisor + Partner + Consultant</strong><br />
        We invest in talent. Many program graduates become long-term collaborators within PROJXON’s network.
      </p>
    </Col>
  </Row>
  <Row className="mt-4">
    <Col md={12} className="text-center">
      <h4>Apply Today. Build Momentum. Excellerate Tomorrow</h4>
      <p>
        Monthly onboarding cycles mean there’s always an opportunity around the corner.<br />
        If you're ready to learn fast, contribute meaningfully, and grow your career, we want to meet you.
      </p>
<div className="apply-section">
  <a href="mailto:info@projxon.com" className="yellow-button btn btn-primary fs-5 px-4">
     Apply Now
  </a>
</div>
    </Col>
  </Row>
</Container>
</section>

    <section id="testimonials" className="testimonials-wrapper">
    <InternTestimonialsSection />
    </section>
    <section id="blogs" className="blogs-wrapper">
    <BlogClientList initialBlogs={blogs} />
    </section>
    <CallToAction />
  </div>)
}
