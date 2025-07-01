import DOMPurify from "isomorphic-dompurify";
import { Container } from "react-bootstrap";
import { CiCalendar } from "react-icons/ci";
import { fetchBlogs, fetchBlog } from "@/services/blogService";
import Image from "next/image";
import defaultImg from "@/public/assets/internships/default-blog-img.webp";
import { WPBlogPost, BlogIdParams } from "@/types/interfaces";
import "./BlogPage.css";

export const revalidate = 300;

export async function generateStaticParams() {
  const blogs = await fetchBlogs() as WPBlogPost[];

  return blogs.map((blog): BlogIdParams => ({
    blogId: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: BlogIdParams }) {
  const { blogId } = params;
  const blog = await fetchBlog(blogId);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The blog could not be found.",
    };
  }

  return {
    title: blog?.title?.rendered || "Blog",
    description: blog?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || "",
  };
}

export default async function BlogPage({ params }: { params: BlogIdParams }) {
  const { blogId } = params;
  const blog = await fetchBlog(blogId) as WPBlogPost;
  const content = blog.content?.rendered || "";
  const sanitizedHtml = DOMPurify.sanitize(content);

  const featuredMedia = blog._embedded?.["wp:featuredmedia"];
  const imageUrl = featuredMedia?.[0]?.source_url ?? defaultImg.src;

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Container className="w-50 blog-container px-3">
      <article className="my-5 py-2">
        <header>
          <h1 className="fw-bold">{blog.title.rendered}</h1>

          <div className="d-flex items-center justify-content-between mb-3 blogpage-date mt-3">
            <p className="fw-semibold fs-6">
              {blog._embedded?.author?.[0]?.name}
            </p>
            <div className="d-flex items-center text-muted gap-1">
              <CiCalendar size={20} />
              <time dateTime={blog.date.toString()} className="text-muted">
                {formatDate(blog.date)}
              </time>
            </div>
          </div>
        </header>

        <Image
          className="w-100 blogpage-img"
          src={imageUrl}
          alt={blog.title?.rendered || "Blog featured image"}
          width={1080}
          height={566}
        />

        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </article>
    </Container>
  );
}
