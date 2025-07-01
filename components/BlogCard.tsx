"use client";
import DOMPurify from "isomorphic-dompurify";
import { Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import blogDefaultImg from "@/public/assets/internships/default-blog-img.webp";
import "./BlogCard.css";
import { WPBlogPost } from "@/types/interfaces";
import formatDate from "@/lib/formatDate";

const BlogCard = ({ blog, blogStyle }: { blog: WPBlogPost, blogStyle?: string }) => {
  const cleanExcerpt = (excerpt: string) => DOMPurify.sanitize(excerpt);
  console.log(blog.slug);

  const sanitizedExcerpt = cleanExcerpt(blog.excerpt.rendered);
  const featuredMedia = blog._embedded?.["wp:featuredmedia"];
  const sourceUrl = featuredMedia?.[0]?.source_url || blogDefaultImg.src;

  return (
    <li key={blog.id} className="col mb-4" data-aos="fade-up">
      <Card
        className={`overflow-hidden blog-card h-100 ${blogStyle === "dark" ? "bg-black" : "bg-light"}`}
      >
        <Link href={`/internships/${blog.slug}`}>
          <Image
            className="blog-img w-100 object-fit-cover"
            src={sourceUrl}
            alt={blog.title.rendered}
            width={600}
            height={350}
          />
        </Link>

        <Card.Body
          className={`d-flex flex-column ${blogStyle === "dark" && "px-0"}`}
        >
          <Link
            href={`/internships/${blog.slug}`}
            className={`blog-card-title ${blogStyle === "dark" ? "text-white" : "text-black"}`}
          >
            <Card.Title className="mb-0">{blog.title.rendered}</Card.Title>
          </Link>

          <div className="d-flex align-items-center gap-2 mt-1">
            <span className={blogStyle === "dark" ? "text-gray" : "text-muted"}>
              {blog._embedded?.author?.[0]?.name}
            </span>
            <span
              className={`${blogStyle === "dark" ? "text-gray" : "text-muted"} dot-seperator fs-6`}>
              •
            </span>
            <span className={blogStyle === "dark" ? "text-gray" : "text-muted"}>
              {formatDate(blog.date, "short")}
            </span>
          </div>

          <div className="clamped-container py-4 flex-grow-1">
            <div
              dangerouslySetInnerHTML={{ __html: sanitizedExcerpt }}
              className={`card-excerpt ${blogStyle === "dark" ? "text-gray" : "text-muted"}`}
            />
          </div>

          <Link href={`/internships/${blog.slug}`} className="mt-auto">
            <Button variant="primary blog-button">Read More</Button>
          </Link>
        </Card.Body>
      </Card>
    </li>
  );
};

export default BlogCard;