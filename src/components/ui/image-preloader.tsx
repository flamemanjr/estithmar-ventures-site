import { useEffect } from "react";

interface ImagePreloaderProps {
  images: string[];
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return null;
}

// Critical images that should be preloaded on page load
export const criticalImages = [
  "/lovable-uploads/cb3c982f-e343-40f2-9a7a-15e13adf68d0.png", // Hero image
  "/lovable-uploads/eaf0d3be-5c3e-463b-82ab-abc84fac666c.png", // Logo
];