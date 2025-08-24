import { Link } from "react-router-dom";
import { CorporateButton } from "@/components/ui/corporate-button";
import heroImage from "@/assets/hero-image.jpg";
import alMahaImage from "@/assets/al-maha-island.jpg";
import kataraHillsImage from "@/assets/katara-hills.jpg";
import maysanDohaImage from "@/assets/maysan-doha.jpg";
import rosewoodMaldivesImage from "@/assets/rosewood-maldives.jpg";
import rixosBaghdadImage from "@/assets/rixos-baghdad.jpg";

const Index = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/cb3c982f-e343-40f2-9a7a-15e13adf68d0.png)` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Key Figures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <div className="text-3xl font-gotham-bold text-white mb-1">105+</div>
              <div className="text-sm font-gotham text-white/80">Companies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <div className="text-3xl font-gotham-bold text-white mb-1">8</div>
              <div className="text-sm font-gotham text-white/80">Countries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <div className="text-3xl font-gotham-bold text-white mb-1">28,000+</div>
              <div className="text-sm font-gotham text-white/80">Team Members</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6">
              <div className="text-3xl font-gotham-bold text-white mb-1">1.5M+</div>
              <div className="text-sm font-gotham text-white/80">Visitors Served Annually</div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-gotham-bold text-white mb-6 leading-tight">
            Where Vision Meets Luxury
          </h1>
          
          <p className="text-xl md:text-2xl font-gotham text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Estithmar Ventures shapes world-class hospitality and entertainment experiences across Qatar and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CorporateButton asChild size="lg">
              <Link to="/destinations">Explore Our Destinations</Link>
            </CorporateButton>
            <CorporateButton variant="outline" size="lg" asChild>
              <Link to="/about" className="text-white border-white hover:bg-white hover:text-black">
                About Estithmar Ventures
              </Link>
            </CorporateButton>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">What We Do</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Develop</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                From concept to launch, we deliver destinations that set new standards for luxury and reliability.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Operate</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                We partner with leading brands to ensure excellence in guest experience and performance.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Scale</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                With the backing of Estithmar Holding, we execute at speed and at global scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Featured Destinations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/destinations/al-maha-island" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                <img 
                  src={alMahaImage} 
                  alt="Al Maha Island"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-2">Al Maha Island</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Qatar's premier leisure hub—dining, entertainment, and signature events at scale.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/destinations/katara-hills-lxr" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                <img 
                  src={kataraHillsImage} 
                  alt="Katara Hills LXR"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-2">Katara Hills LXR</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Elevated villa living overlooking Doha's cultural heart.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/destinations/maysan-doha-lxr" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                <img 
                  src={maysanDohaImage} 
                  alt="Maysan Doha LXR"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-2">Maysan Doha LXR</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    A private sanctuary where Arabian heritage meets modern well-being.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/destinations/rosewood-maldives" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                <img 
                  src={rosewoodMaldivesImage} 
                  alt="Rosewood Maldives"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-2">Rosewood Maldives</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Ultra-luxury island living, reimagined.
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/destinations/rixos-baghdad" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                <img 
                  src={rixosBaghdadImage} 
                  alt="Rixos Baghdad"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-2">Rixos Baghdad</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Contemporary hospitality anchored in a storied capital.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Partnerships</h2>
          <p className="text-lg font-gotham text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We collaborate with global leaders—including tourism authorities, hospitality brands, and event innovators—to bring ambitious projects to life.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
