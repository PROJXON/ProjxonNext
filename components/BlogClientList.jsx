"use client";

import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import BlogCard from "./BlogCard";
import AOSWrapper from "./AOSWrapper";

const BlogClientList = ({ initialBlogs }) => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const handleLoadMore = () => setVisibleBlogs((prev) => prev + 6);

  return (
    <AOSWrapper>
      {" "}
      {/* Wrapping everything with AOSWrapper */}
      <section className="sections-container blog-section">
        <Container>
          <h2 className="mb-5">
            Recent Posts <span className="blog-heading-border mt-2"></span>
          </h2>

          {initialBlogs.length > 0 ? (
            <>
              <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {initialBlogs.slice(0, visibleBlogs).map((blog, index) => (
                  <BlogCard
                    blog={blog}
                    key={index}
                    data-aos="fade-up" // AOS animation on each blog
                  />
                ))}
              </ul>
              {visibleBlogs < initialBlogs.length && (
                <div className="text-center mt-4">
                  <Button
                    onClick={handleLoadMore}
                    className="fs-5 px-4 black-button"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center my-5">
              <p>No blog posts at the moment.</p>
            </div>
          )}
        </Container>
      </section>
    </AOSWrapper>
  );
};

export default BlogClientList;
