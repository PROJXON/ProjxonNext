export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");

  try {
    const endpoint = slug ? `/posts?_embed&slug=${slug}` : `/posts?_embed`;

    const res = await fetch(`${process.env.WORDPRESS_API_URL}${endpoint}`, {
      headers: {
        Authorization:
          "Basic " +
          btoa(
            `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`
          ),
      },
    });

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error fetching blogs", error: error.message }),
      { status: 500 }
    );
  }
}
