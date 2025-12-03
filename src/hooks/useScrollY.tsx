"use client";

import { useEffect, useState } from "react";

export default function useScrollY(initalValue: number = 0) {
  const [scrollY, setScrollY] = useState(initalValue);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollY };
}
