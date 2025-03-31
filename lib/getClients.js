export default async function getClients(id = null) {
    try {
        const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`);
        const data = await res.json();

        if (id) {
            const client = data.find(c => c.id === id);

            return client
                ? Response.json(client)
                : new Response(JSON.stringify({ message: "Client not found" }), {
                    status: 404,
                });
        } else return Response.json(data)
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: "Error fetching client",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}