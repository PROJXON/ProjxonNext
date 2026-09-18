import { authenticateUser } from '@/lib/authenticateUser';
import type { NextRequest } from 'next/server';

export default async function getAuth(req: NextRequest) {
  await authenticateUser(req);

  const auth = req.headers.get('authorization');
  if (!auth) throw new Error('Missing Authorization header');
  return auth;
}
