export default async function getBlogs(slug = null) {
    try {
        const endpoint = slug ? `/posts?_embed&slug=${slug}` : `/posts?_embed`;

        console.log(`Fetching from: ${process.env.WORDPRESS_API_URL}${endpoint}`);

        const res = await fetch(`${process.env.WORDPRESS_API_URL}${endpoint}`, {
            headers: {
                Authorization:
                    "Basic " +
                    btoa(
                        `${process.env.WORDPRESS_API_USERNAME}:${process.env.WORDPRESS_API_PASSWORD}`
                    ),
            },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
        }

        const data = await res.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return new Response(
            JSON.stringify({ message: "Error fetching blogs", error: error.message }),
            { status: 500 }
        );
    }
}