"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if window is available (ensures it's client-side)
    if (typeof window !== "undefined") {
      const handleRouteChange = () => {
        window.scrollTo(0, 0);
      };

      // Subscribe to route changes
      router.events.on("routeChangeComplete", handleRouteChange);

      // Cleanup subscription on unmount
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]); // No need for mounted state now

  return null;
};

export default ScrollToTop;
