"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

const FALLBACK_SRC = "/courses/coming-soon.png";

type CourseImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export default function CourseImage({
  src,
  alt,
  ...props
}: CourseImageProps) {
  const [resolvedSrc, setResolvedSrc] = useState(src);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    setResolvedSrc(src);
    setUsingFallback(false);
  }, [src]);

  useEffect(() => {
    if (!usingFallback) return;

    const intervalId = window.setInterval(() => {
      const probe = new window.Image();
      probe.onload = () => {
        setResolvedSrc(src);
        setUsingFallback(false);
      };
      probe.src = `${src}${src.includes("?") ? "&" : "?"}retry=${Date.now()}`;
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [src, usingFallback]);

  return (
    <Image
      {...props}
      src={resolvedSrc}
      alt={alt}
      onError={() => {
        if (resolvedSrc !== FALLBACK_SRC) {
          setResolvedSrc(FALLBACK_SRC);
          setUsingFallback(true);
        }
      }}
    />
  );
}
