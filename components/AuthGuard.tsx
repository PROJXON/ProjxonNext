"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";
import { isAuthenticated } from "../services/loginService";

export default function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) router.push("/login");
    else setAuthorized(true);
  }, []);

  return authorized ? children : null;
}