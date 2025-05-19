// services/blogService.js

export const fetchBlogs = async (slug) => {
  const endpoint = slug ? `/posts?_embed&slug=${slug}` : `/posts?_embed`;
  const url = `${process.env.WORDPRESS_API_URL}${endpoint}`

  try {
    const res = await fetch(url, {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`
          ).toString("base64"),
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch blogs: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return slug ? null : [];
  }
};

export const fetchBlog = async (slug) => {
  const data = await fetchBlogs(slug);
  return data ? data[0] : null;
};
