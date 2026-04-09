"use client";
import { useEffect, useState } from "react";

const useWindowWidth = (onResize?: (width: number) => void) => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (typeof onResize === "function") onResize(width);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onResize]);

  return windowWidth;
};

export default useWindowWidth;
