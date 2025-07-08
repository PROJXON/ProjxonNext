'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, ReactNode } from 'react';
import { isAuthenticated } from '../services/loginService';

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathName = usePathname();
  const [authorized, setAuthorized] = useState(false);
  
  useEffect(() => {
    if (!isAuthenticated()) router.push('/login'); 
    else setAuthorized(true);
  }, [router, pathName]); // router does not change but pathName does.  So every time path changes it can check for authentication - Brent

  return authorized ? children : null; 
}