import { useState, useEffect } from "react";
import { LazyImage } from "./lazy-image";
import { LogoSkeleton } from "./image-skeleton";

interface RestaurantLogo {
  src: string;
  alt: string;
}

const logos: RestaurantLogo[] = [
  { src: "/lovable-uploads/173cc01c-61cb-4799-836d-6e5fcb0beb4c.png", alt: "Bagatelle Beach Club Doha" },
  { src: "/lovable-uploads/dd0dd801-b029-4786-97b2-84b027de2a40.png", alt: "Zuma" },
  { src: "/lovable-uploads/ef5b536e-65db-44e7-8342-4fd46ebf9f18.png", alt: "Beefbar" },
  { src: "/lovable-uploads/c00388f1-e330-44cd-8f4d-c0373b69c5b4.png", alt: "LPM Restaurant & Bar" },
  { src: "/lovable-uploads/3374b7f9-da96-4f50-903f-ea99e2251856.png", alt: "Carbone" },
  { src: "/lovable-uploads/56ff954d-6bec-46a1-b7af-dba96c05fe80.png", alt: "Em Sherif Restaurant" },
  { src: "/lovable-uploads/e42bd7a3-7a5f-4be6-99db-e2eda2171a36.png", alt: "Moka Caffe" },
  { src: "/lovable-uploads/3b297576-a589-4167-a085-5dadca1174c5.png", alt: "Berentak Doha" },
  { src: "/lovable-uploads/e82814a1-ca39-44b4-a0c3-68b6e7570d22.png", alt: "Viva La Vida" },
  { src: "/lovable-uploads/31084831-a788-4d5e-982e-68da4aaa84c1.png", alt: "Karaki Lounge" },
];

const INITIAL_LOAD = 4;
const LOAD_BATCH_SIZE = 3;

export function RestaurantLogos() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_LOAD);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    if (visibleCount < logos.length) {
      const timer = setTimeout(() => {
        setIsLoadingMore(true);
        // Simulate loading time for better UX
        setTimeout(() => {
          setVisibleCount(prev => Math.min(prev + LOAD_BATCH_SIZE, logos.length));
          setIsLoadingMore(false);
        }, 200);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
      {logos.slice(0, visibleCount).map((logo, index) => (
        <div key={index} className="group hover:scale-105 corporate-transition">
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md corporate-transition h-24">
            <LazyImage
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain p-6"
              containerClassName="h-24 flex items-center justify-center"
              loading={index < INITIAL_LOAD ? "eager" : "lazy"}
            />
          </div>
        </div>
      ))}
      
      {/* Loading skeletons for remaining items */}
      {isLoadingMore && Array.from({ length: Math.min(LOAD_BATCH_SIZE, logos.length - visibleCount) }).map((_, index) => (
        <div key={`skeleton-${index}`} className="group hover:scale-105 corporate-transition">
          <LogoSkeleton className="animate-pulse" />
        </div>
      ))}
    </div>
  );
}