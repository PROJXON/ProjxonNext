import getAuth from "@/lib/getAuth";
import type { NextRequest } from "next/server";
import { InternTestimonial, RouteParams } from "@/types/interfaces";

export async function GET(_req: NextRequest, { params }: RouteParams) {
  try {
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`);
    const data: InternTestimonial[] = await res.json();
    const client = data.find((c) => c.id === params.id);

    return client
      ? Response.json(client)
      : new Response(JSON.stringify({ message: "Client not found" }), {
        status: 404,
      });
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Error fetching client",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: RouteParams) {
  try {
    const authHeader = getAuth(req);

    const res = await fetch(
      `${process.env.WORDPRESS_CUSTOM_API_URL}/clients/${params.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: authHeader,
        },
      }
    );

    return Response.json(await res.json());
  } catch (error: any) {
    return new Response(
      JSON.stringify({
        message: "Error deleting client",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}