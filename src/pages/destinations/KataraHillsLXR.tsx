import { useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, MapPin, Home, Eye, Sparkles } from "lucide-react";
import { CorporateButton } from "@/components/ui/corporate-button";
import { ImageSkeleton } from "@/components/ui/image-skeleton";
import { ProgressiveLoader } from "@/components/ui/progressive-loader";
import kataraHillsImage from "@/assets/katara-hills.jpg";

const KataraHillsLXR = () => {
  useEffect(() => {
    document.title = "Katara Hills LXR | Estithmar Ventures";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Private, low-density villas with panoramic views above Doha\'s cultural district.');
    }
  }, []);

  const scrollToVillas = () => {
    const element = document.getElementById('villas-amenities');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background">
      {/* Breadcrumbs */}
      <section className="py-4 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm font-gotham">
            <Link to="/" className="text-muted-foreground hover:text-primary corporate-transition">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/destinations" className="text-muted-foreground hover:text-primary corporate-transition">
              Destinations
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground font-gotham-medium">Katara Hills LXR</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kataraHillsImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-gotham-bold text-white mb-6">Katara Hills LXR</h1>
            <p className="text-xl md:text-2xl font-gotham text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elevated villa living above Doha's cultural heart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CorporateButton asChild size="lg">
                <a 
                  href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-gotham-medium"
                >
                  Visit Official Website
                  <ExternalLink className="ml-2 w-5 h-5" />
                </a>
              </CorporateButton>
              <CorporateButton 
                variant="outline" 
                size="lg" 
                onClick={scrollToVillas}
                className="text-white border-white/80 hover:bg-white hover:text-black px-8 py-4 rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-gotham-medium"
              >
                View Villas & Amenities
              </CorporateButton>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <ProgressiveLoader delay={100}>
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-gotham-bold text-foreground mb-8">Overview</h2>
                <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
                  Katara Hills LXR blends Scandinavian simplicity with Qatari landscape and light. 
                  Private villas overlook the Katara district, pairing privacy with immediate access 
                  to culture, cuisine, and the waterfront.
                </p>
              </div>
              
              {/* Fact Cards */}
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg hover:from-primary/10 corporate-transition">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                      <Home className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-gotham-bold text-primary">Villas</div>
                      <div className="text-base font-gotham text-muted-foreground">Low-density private villas</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg hover:from-primary/10 corporate-transition">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-gotham-bold text-primary">Outlook</div>
                      <div className="text-base font-gotham text-muted-foreground">Panoramic city & sea views</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg hover:from-primary/10 corporate-transition">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-gotham-bold text-primary">Focus</div>
                      <div className="text-base font-gotham text-muted-foreground">Quiet luxury, proximity to culture</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Signature Experiences */}
      <ProgressiveLoader delay={300}>
        <section id="villas-amenities" className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Signature Experiences</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="bg-background p-8 rounded-2xl hover:shadow-lg corporate-transition">
                <h3 className="text-2xl font-gotham-bold text-foreground mb-4">Discreet Service & Dining</h3>
                <p className="text-base font-gotham text-muted-foreground leading-relaxed">
                  Tailored in-villa and on-property options.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-2xl hover:shadow-lg corporate-transition">
                <h3 className="text-2xl font-gotham-bold text-foreground mb-4">Wellness-forward Amenities</h3>
                <p className="text-base font-gotham text-muted-foreground leading-relaxed">
                  Spa, fitness, and nature-led spaces.
                </p>
              </div>
              
              <div className="bg-background p-8 rounded-2xl hover:shadow-lg corporate-transition">
                <h3 className="text-2xl font-gotham-bold text-foreground mb-4">Cultural Access</h3>
                <p className="text-base font-gotham text-muted-foreground leading-relaxed">
                  Direct connection to Katara's venues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Visual Gallery */}
      <ProgressiveLoader delay={500}>
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Visual Gallery</h2>
              <p className="text-lg font-gotham text-muted-foreground">
                Villas, interiors, terraces, and dusk scenes
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`bg-muted border border-border aspect-square ${
                    index === 0 || index === 9 ? 'md:col-span-2 md:row-span-2' : ''
                  } group cursor-pointer overflow-hidden rounded-lg`}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 corporate-transition">
                    <ImageSkeleton className="w-full h-full animate-pulse" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Location & Map */}
      <ProgressiveLoader delay={700}>
        <section className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Location</h2>
                <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-4">
                  Positioned above the vibrant Katara Cultural Village, offering elevated views and direct access to Doha's premier cultural district.
                </p>
                <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-6">
                  Minutes from the waterfront, galleries, theaters, and world-class dining.
                </p>
                <div className="flex items-center text-sm font-gotham text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Katara Cultural Village, Doha
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 h-80 rounded-2xl flex items-center justify-center">
                <ImageSkeleton className="w-full h-full animate-pulse rounded-2xl" />
              </div>
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Partners & Accolades */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-gotham-bold text-foreground mb-8">Partners & Accolades</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-16 bg-muted border border-border rounded-lg flex items-center justify-center">
                <span className="text-xs font-gotham text-muted-foreground">Partner {index + 1}</span>
              </div>
            ))}
          </div>
          <p className="text-sm font-gotham text-muted-foreground">
            Recognized for exceptional villa design and cultural integration.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-gotham-bold text-background mb-6">
            Discover Katara Hills LXR
          </h2>
          <CorporateButton asChild size="lg" variant="outline">
            <a 
              href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-background border-background hover:bg-background hover:text-foreground rounded-2xl"
            >
              Visit Official Website
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </CorporateButton>
        </div>
      </section>
    </div>
  );
};

export default KataraHillsLXR;