import { Link } from "react-router-dom";
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
    description: "Qatar's premier leisure hub—dining, entertainment, and signature events at scale."
  },
  {
    name: "Katara Hills LXR",
    path: "/destinations/katara-hills-lxr",
    image: kataraHillsImage,
    description: "Elevated villa living overlooking Doha's cultural heart."
  },
  {
    name: "Maysan Doha LXR",
    path: "/destinations/maysan-doha-lxr",
    image: maysanDohaImage,
    description: "A private sanctuary where Arabian heritage meets modern well-being."
  },
  {
    name: "Rosewood Maldives",
    path: "/destinations/rosewood-maldives",
    image: rosewoodMaldivesImage,
    description: "Ultra-luxury island living, reimagined."
  },
  {
    name: "Rixos Baghdad",
    path: "/destinations/rixos-baghdad",
    image: rixosBaghdadImage,
    description: "Contemporary hospitality anchored in a storied capital."
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
              Destinations with a Point of View
            </h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              Each property in our portfolio is crafted to evoke a clear feeling—energy, serenity, 
              renewal, pride, or escape—while meeting the highest standards of performance and design.
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
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-64 object-cover"
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