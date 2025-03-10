import { authenticateUser } from "@/lib/authenticateUser";

export async function GET() {
  try {
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`);
    const data = await res.json();
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
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`, {
      method: "POST",
      headers: {
        Authorization: req.headers.get("authorization"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return Response.json(await res.json(), { status: res.status });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error adding client", error: error.message }),
      { status: 500 }
    );
  }
}
