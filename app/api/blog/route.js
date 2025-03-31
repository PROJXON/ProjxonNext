// app/api/blog/route.js
import { fetchBlogs } from "@/services/blogService";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  try {
    const data = await fetchBlogs(slug);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching blogs", error: error.message }),
      { status: 500 }
    );
  }
}
