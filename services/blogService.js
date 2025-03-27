'use client'

export const fetchBlogs = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog`); // Full URL

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return []; // Return empty array if error occurs
  }
};

export const fetchBlog = async (id) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog?slug=${id}`); // Full URL

    if (!response.ok) {
      throw new Error(`Failed to fetch blog with id: ${id}`);
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("❌ Error fetching blog:", error);
    return null;
  }
};
