import getAuth from '@/lib/getAuth';
import { fetchClients } from '@/services/clientService';
import type { NextRequest } from 'next/server';

export async function GET() {
  try {
    const data = await fetchClients({ useNoStore: true });
    return Response.json(data);
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({
        message: 'Error fetching clients',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 },
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const authHeader = getAuth(req);

    if (!authHeader) {
      return new Response(
        JSON.stringify({ message: 'Missing Authorization header' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } },
      );
    }

    const body = await req.json();
    console.log('Received client data:', body);
    const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`, {
      method: 'POST',
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const errorResponse = await res.json();
      console.error('Error from WordPress API:', errorResponse); // Log error response from WordPress
      throw new Error(`Failed to add client. Status code: ${res.status}`);
    }

    const responseData = await res.json();
    return Response.json(responseData, { status: 201 });
  } catch (error: unknown) {
    return new Response(
      JSON.stringify({
        message: 'Error adding client',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 },
    );
  }
}