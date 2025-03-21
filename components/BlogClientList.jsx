"use client";

import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import BlogCard from "./BlogCard";
import LoadingSpinner from "./LoadingSpinner"; // Import LoadingSpinner

const BlogClientList = ({ initialBlogs }) => {
  const [blogs, setBlogs] = useState(initialBlogs || []);
  const [isLoading, setIsLoading] = useState(false);  // Use isLoading for managing loading state
  const [visibleBlogs, setVisibleBlogs] = useState(6);

  const handleLoadMore = () => setVisibleBlogs((prev) => prev + 6);

  // Optional: To fetch blogs dynamically if needed (for client-side fetching)
  useEffect(() => {
    if (!initialBlogs || initialBlogs.length === 0) {
      setIsLoading(true);
      // Fetch blogs from an API or service if the initialBlogs prop is empty
      const fetchBlogs = async () => {
        try {
          const response = await fetchBlogs();  // Fetching data from the service
          setBlogs(response);
        } catch (error) {
          console.log("Error fetching blogs:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchBlogs();
    }
  }, [initialBlogs]);

  return (
    <section className="sections-container blog-section">
      <Container>
        <h2 className="mb-5">
          Recent Posts <span className="blog-heading-border mt-2"></span>
        </h2>

        {isLoading ? (
          <div className="text-center my-5">
            <LoadingSpinner /> {/* Show loading spinner while fetching data */}
          </div>
        ) : blogs.length > 0 ? (
          <>
            <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {blogs.slice(0, visibleBlogs).map((blog, index) => (
                <BlogCard blog={blog} key={index} />
              ))}
            </ul>
            {visibleBlogs < blogs.length && (
              <div className="text-center mt-4">
                <Button onClick={handleLoadMore} className="fs-5 px-4 black-button">
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
  );
};

export default BlogClientList;
