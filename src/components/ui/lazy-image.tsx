import { useState, useRef, useEffect } from "react";
import { ImageSkeleton } from "./image-skeleton";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  onLoad?: () => void;
  onError?: () => void;
  fallback?: string;
}

export function LazyImage({
  src,
  alt,
  className,
  containerClassName,
  loading = "lazy",
  onLoad,
  onError,
  fallback = "/placeholder.svg"
}: LazyImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(loading === "eager");
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === "eager") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px"
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [loading]);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", containerClassName)}>
      {!imageLoaded && !imageError && (
        <ImageSkeleton className="absolute inset-0" />
      )}
      
      {isIntersecting && (
        <img
          ref={imgRef}
          src={imageError ? fallback : src}
          alt={alt}
          className={cn(
            "transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
        />
      )}
    </div>
  );
}