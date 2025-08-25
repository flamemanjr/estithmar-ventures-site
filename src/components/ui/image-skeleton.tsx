import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait";
}

export function ImageSkeleton({ 
  className, 
  aspectRatio = "square" 
}: ImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video", 
    portrait: "aspect-[3/4]"
  };

  return (
    <div className={cn("relative overflow-hidden", aspectClasses[aspectRatio], className)}>
      <img 
        src="/lovable-uploads/ab4d4a94-5c56-4339-9e89-b0b55a1b5878.png" 
        alt="Modern architectural building with classical structure in background" 
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

interface LogoSkeletonProps {
  className?: string;
}

export function LogoSkeleton({ className }: LogoSkeletonProps) {
  return (
    <div className={cn("bg-white p-6 rounded-xl shadow-sm h-24 flex items-center justify-center", className)}>
      <Skeleton className="h-8 w-20 bg-muted/50" />
    </div>
  );
}