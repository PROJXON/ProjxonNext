import jwt from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { getProjxonBackendSecrets } from '@/lib/serverSecrets';

export async function authenticateUser(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) throw new Error('Unauthorized');

  const token = authHeader.split(' ')[1];
  const { JWT_SECRET } = await getProjxonBackendSecrets();

  return jwt.verify(token, JWT_SECRET);
}
