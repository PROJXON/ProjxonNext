import { authenticateUser } from "@/lib/authenticateUser";
import { fetchClients } from "@/services/clientService";

export async function GET() {
  try {
    const data = await fetchClients();
    return Response.json(data);
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error fetching clients",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    authenticateUser(req); // Protect this route

    const body = await req.json();
    console.log("Received client data:", body);
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`, {
      method: "POST",
      headers: {
        Authorization: req.headers.get("authorization"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      console.error("Error from WordPress API:", errorResponse); // Log error response from WordPress
      throw new Error(`Failed to add client. Status code: ${res.status}`);
    }

    const responseData = await res.json();
    return Response.json(responseData, { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error adding client", error: error.message }),
      { status: 500 }
    );
  }
}
