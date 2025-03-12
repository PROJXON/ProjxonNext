import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import BlogClientList from "@/components/BlogClientList";
import { fetchBlogs } from "@/services/blogService";

import "bootstrap/dist/css/bootstrap.min.css";
import "./ResearchPage.css";

export default async function ResearchPage() {
  const blogs = await fetchBlogs();

  return (
    <>
      <Hero
        title="Blog & Research"
        subtitle="Stay Updated with the Latest News, Events, and Insight"
        backgroundClass="research-hero"
      />

      <BlogClientList initialBlogs={blogs} />

      <CallToAction />
    </>
  );
}
