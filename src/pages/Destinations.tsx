import { Link } from "react-router-dom";
import { LazyImage } from "@/components/ui/lazy-image";
import alMahaImage from "@/assets/al-maha-island.jpg";
const kataraHillsImage = "/lovable-uploads/e42bd7a3-7a5f-4be6-99db-e2eda2171a36.png";
import maysanDohaImage from "@/assets/maysan-doha.jpg";
import rosewoodMaldivesImage from "@/assets/rosewood-maldives.jpg";
import rixosBaghdadImage from "@/assets/rixos-baghdad.jpg";

const destinations = [
  {
    name: "Al Maha Island",
    path: "/destinations/al-maha-island",
    image: alMahaImage,
    description: "Qatar's premier leisure destination featuring world-class dining, entertainment venues, and signature cultural events enhancing the nation's tourism offering."
  },
  {
    name: "Katara Hills LXR",
    path: "/destinations/katara-hills-lxr",
    image: kataraHillsImage,
    description: "Luxury villa accommodations with panoramic views of Doha's prestigious Katara Cultural Village, offering elevated hospitality in Qatar's cultural district."
  },
  {
    name: "Maysan Doha LXR",
    path: "/destinations/maysan-doha-lxr",
    image: maysanDohaImage,
    description: "An exclusive wellness retreat harmoniously blending traditional Arabian hospitality with contemporary luxury amenities in the heart of Doha."
  },
  {
    name: "Rosewood Maldives",
    path: "/destinations/rosewood-maldives",
    image: rosewoodMaldivesImage,
    description: "An ultra-luxury resort development in the Maldives, showcasing Estithmar Ventures' commitment to creating exceptional hospitality experiences beyond Qatar's borders."
  },
  {
    name: "Rixos Baghdad",
    path: "/destinations/rixos-baghdad",
    image: rixosBaghdadImage,
    description: "A flagship hospitality destination in Baghdad, demonstrating our regional expansion strategy and commitment to developing luxury accommodations across key Middle Eastern markets."
  }
];

const Destinations = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-gotham-bold text-foreground mb-8">
              Premier Luxury Hospitality Destinations in Qatar
            </h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              Discover Estithmar Ventures' award-winning portfolio of luxury hospitality destinations across Qatar and the region. Each property delivers exceptional guest experiences while supporting Qatar's strategic tourism development goals and economic diversification initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Link key={destination.path} to={destination.path} className="group">
                <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                  <LazyImage 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="p-8">
                    <h3 className="text-xl font-gotham-bold text-foreground mb-4">
                      {destination.name}
                    </h3>
                    <p className="font-gotham text-muted-foreground leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;