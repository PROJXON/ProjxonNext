import { authenticateUser } from "@/lib/authenticateUser"

export async function DELETE(req, { params }) {
    try {
        authenticateUser(req);

        const { id } = await params

        const res = await fetch(
            `${process.env.WORDPRESS_CUSTOM_API_URL}/clients/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: req.headers.get("authorization"),
                },
            }
        );

        return Response.json(await res.json());
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: "Error deleting client",
                error: error.message,
            }),
            { status: 500 }
        );
    }
}