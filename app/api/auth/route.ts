import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { username, password }: { username: string; password: string } =
    await req.json();

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_JWT_URL}/jwt-auth/v1/token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      },
    );

    if (!res.ok)
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 },
      );

    return Response.json(await res.json());
  } catch (error: unknown) {
    return new NextResponse(
      JSON.stringify({
        message: 'Authentication failed',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 },
    );
  }
}
