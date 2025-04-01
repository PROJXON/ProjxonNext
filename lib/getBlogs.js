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
            next: { revalidate: 60 }
        });

        if (!res.ok) throw new Error(`Failed to fetch data: ${res.statusText}`)

        return await res.json();
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return slug ? null : []
    }
}