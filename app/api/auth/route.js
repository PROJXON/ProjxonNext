export async function POST(req) {
  const { username, password } = await req.json();

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_JWT_URL}/jwt-auth/v1/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      }
    );

    if (!res.ok)
      return new Response(JSON.stringify({ message: "Invalid credentials" }), {
        status: 401,
      });

    return Response.json(await res.json());
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Authentication failed",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
