import { useState, useEffect, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveLoaderProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}

export function ProgressiveLoader({
  children,
  delay = 0,
  className,
  threshold = 0.1
}: ProgressiveLoaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(delay === 0);

  useEffect(() => {
    if (delay > 0) {
      const timer = setTimeout(() => {
        setShouldRender(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay]);

  useEffect(() => {
    if (!shouldRender) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const element = document.querySelector(`[data-progressive-loader]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [shouldRender, threshold]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      data-progressive-loader
      className={cn(
        "transition-all duration-500 ease-out",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}