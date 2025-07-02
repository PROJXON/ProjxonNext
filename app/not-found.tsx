import Link from "next/link";
import Hero from "@/components/Hero";

const NotFound = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero 
        title="404 - Page Not Found" 
        subtitle="Oops! This page doesn't exist"
        paragraph="The page you're looking for might have been moved, deleted, or never existed."
        backgroundClass="not-found-hero"
      />

      <section className="sections-container">
        <h1 className="text-center">
          Return back to{" "}
          <Link href="/" className="link-secondary">
            home
          </Link>
        </h1>
      </section>
    </div>
  );
};

export default NotFound;