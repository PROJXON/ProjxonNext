import getBlogs from '@/lib/getBlogs'

export const fetchBlogs = async () => {
  try {
    return await getBlogs()
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return []; // Return empty array if error occurs
  }
};

export const fetchBlog = async id => {
  try {
    const data = await getBlogs(id)
    return data[0]
  } catch (error) {
    console.error("❌ Error fetching blog:", error);
    return null;
  }
};
