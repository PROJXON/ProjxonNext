import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import BlogClientList from "@/components/BlogClientList";
import "./ResearchPage.css";
import AOSWrapper from "@/components/AOSWrapper";

export default async function ResearchPage() {
  return (
    <div>
      <AOSWrapper />
      <Hero
        title="Blog & Research"
        subtitle="Stay Updated with the Latest News, Events, and Insight"
        backgroundClass="research-hero"
      />
      <BlogClientList />
      <CallToAction />
    </div>
  );
}
