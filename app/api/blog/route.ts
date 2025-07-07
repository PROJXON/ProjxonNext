import { fetchBlogs } from '@/services/blogService';
import type { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');

  try {
    const data = await fetchBlogs(slug as string);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching blogs:', error);
    return new Response(
      JSON.stringify({
        message: 'Error fetching blogs',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500 },
    );
  }
}