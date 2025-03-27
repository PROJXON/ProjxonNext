import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import BlogClientList from "@/components/BlogClientList";
import "./ResearchPage.css";
import AOSWrapper from "@/components/AOSWrapper";
import { fetchBlogs } from "@/services/blogService";

export default async function ResearchPage() {
  const blogs = await fetchBlogs();

  return (
    <div>
      <AOSWrapper />
      <Hero
        title="Blog & Research"
        subtitle="Stay Updated with the Latest News, Events, and Insight"
        backgroundClass="research-hero"
      />
      <BlogClientList initialBlogs={blogs} />
      <CallToAction />
    </div>
  );
}
