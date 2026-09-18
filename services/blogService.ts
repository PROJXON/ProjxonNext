import { WPBlogPost } from '@/types/interfaces';

export const fetchBlogs = async (slug?: string) => {
  const endpoint = slug ? `/posts?_embed&slug=${slug}` : `/posts?_embed`;
  const url = `${process.env.WORDPRESS_API_URL}${endpoint}`;

  const username = process.env.WORDPRESS_API_USERNAME;
  const password = process.env.WORDPRESS_API_PASSWORD;

  const headers: Record<string, string> = {};

  if (username && password) {
    headers.Authorization =
      'Basic ' +
      Buffer.from(`${username}:${password}`).toString('base64');
  }

  try {
    const res = await fetch(url, {
      headers,
      next: { revalidate: 300 },
    });

    if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.statusText}`);

    const data: WPBlogPost[] = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return slug ? null : [];
  }
};

export const fetchBlog = async (slug: string) => {
  const data = await fetchBlogs(slug);
  return data ? data[0] : null;
};
