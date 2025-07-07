import DOMPurify from 'isomorphic-dompurify';
import { Container } from 'react-bootstrap';
import { CiCalendar } from 'react-icons/ci';
import { fetchBlogs, fetchBlog } from '@/services/blogService';
import Image from 'next/image';
import defaultImg from '@/public/assets/internships/default-blog-img.webp';
import { WPBlogPost, IdParams, RouteParams } from '@/types/interfaces';
import './BlogPage.css';
import formatDate from '@/lib/formatDate';

export const revalidate = 300;

export async function generateStaticParams() {
  const blogs = await fetchBlogs() as WPBlogPost[];

  return blogs.map((blog): IdParams => ({
    id: blog.slug,
  }));
}

export async function generateMetadata({ params }: RouteParams) {
  const { id } = await params;
  const blog = await fetchBlog(id);

  if (!blog) {
    return {
      title: 'Blog not found',
      description: 'The blog could not be found.',
    };
  }

  return {
    title: blog?.title?.rendered || 'Blog',
    description: blog?.excerpt?.rendered?.replace(/<[^>]+>/g, '') || '',
  };
}

export default async function BlogPage({ params }: RouteParams) {
  const { id } = await params;
  const blog = await fetchBlog(id) as WPBlogPost;
  const content = blog.content?.rendered || '';
  const sanitizedHtml = DOMPurify.sanitize(content);

  const featuredMedia = blog._embedded?.['wp:featuredmedia'];
  const imageUrl = featuredMedia?.[0]?.source_url ?? defaultImg.src;

  return (
    <Container className='w-50 blog-container px-3'>
      <article className='my-5 py-2'>
        <header>
          <h1 className='fw-bold'>{blog.title.rendered}</h1>

          <div className='d-flex items-center justify-content-between mb-3 blogpage-date mt-3'>
            <p className='fw-semibold fs-6'>
              {blog._embedded?.author?.[0]?.name}
            </p>
            <div className='d-flex items-center text-muted gap-1'>
              <CiCalendar size={20} />
              <time dateTime={blog.date.toString()} className='text-muted'>
                {formatDate(blog.date, 'long')}
              </time>
            </div>
          </div>
        </header>

        <Image
          className='w-100 blogpage-img'
          src={imageUrl}
          alt={blog.title?.rendered || 'Blog featured image'}
          width={1080}
          height={566}
        />

        <div
          className='mt-5'
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </article>
    </Container>
  );
}