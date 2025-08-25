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
    <Skeleton className={cn("w-full h-full", aspectClasses[aspectRatio], className)} />
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