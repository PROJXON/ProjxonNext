import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import BlogClientList from "@/components/BlogClientList"
import AOSWrapper from "@/components/AOSWrapper";
import { fetchBlogs } from "@/services/blogService"
import "./InternshipsPage.css"

export const metadata = {
  title: "PROJXON Blog | Insights on Business Strategy & Innovation",
  description: "Stay ahead with expert insights from PROJXON. Explore articles on business strategy, market trends, digital transformation, and innovation.",
  metadataBase: new URL("https://www.projxon.com/"),
  openGraph: {
    title: "PROJXON Blog | Insights on Business Strategy & Innovation",
    description: "Stay ahead with expert insights from PROJXON. Explore articles on business strategy, market trends, digital transformation, and innovation.",
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
      title="Blog & Internships"
      subtitle="Stay Updated with the Latest News, Events, and Insight"
      backgroundClass="internships-hero"
    />
    <BlogClientList initialBlogs={blogs} />
    <CallToAction />
  </div>)
}
