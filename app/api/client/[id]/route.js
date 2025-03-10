import { authenticateUser } from "@/lib/authenticateUser";

export async function GET(req, { params }) {
  try {
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`);
    const data = await res.json();
    const client = data.find((c) => c.id === params.id);

    return client
      ? Response.json(client)
      : new Response(JSON.stringify({ message: "Client not found" }), {
          status: 404,
        });
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

export async function DELETE(req, { params }) {
  try {
    authenticateUser(req);

    const res = await fetch(
      `${process.env.WORDPRESS_CUSTOM_API_URL}/clients/${params.id}`,
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
