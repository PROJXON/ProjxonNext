"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return null;
};

export default ScrollToTop;
