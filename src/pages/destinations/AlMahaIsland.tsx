import { useEffect, useState, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, MapPin, Calendar, Users } from "lucide-react";
import { CorporateButton } from "@/components/ui/corporate-button";
import { RestaurantLogos } from "@/components/ui/restaurant-logos";
import { ProgressiveLoader } from "@/components/ui/progressive-loader";
import { ImageSkeleton } from "@/components/ui/image-skeleton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import alMahaImage from "@/assets/al-maha-island.jpg";
import pepsiLogo from "/lovable-uploads/e05dd73e-db8a-437f-b0be-40808a3db812.png";
import qatarAirwaysLogo from "@/assets/partners/qatar-airways-logo.png";
import qatariDiarLogo from "@/assets/partners/qatari-diar-logo.png";
import rafeeqLogo from "@/assets/partners/rafeeq-logo.png";
import visitQatarLogo from "@/assets/partners/visit-qatar-logo.png";
import alRayanLogo from "@/assets/partners/al-rayan-logo.png";
import dohaBankLogo from "@/assets/partners/doha-bank-logo.png";
import karwaLogo from "@/assets/partners/karwa-logo.png";
import qnbLogo from "@/assets/partners/qnb-logo.png";
import ooredooLogo from "@/assets/partners/ooredoo-logo.png";

// Lazy load heavy components
const AlMahaMap = lazy(() => import("@/components/AlMahaMap"));

// Counter animation component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", useCommas = true }: { end: number; duration?: number; suffix?: string; useCommas?: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <>{useCommas ? count.toLocaleString() : count}{suffix}</>;
};

const AlMahaIsland = () => {
  useEffect(() => {
    document.title = "Al Maha Island | Estithmar Ventures";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Al Maha Island is Qatar\'s premier leisure and entertainment destination—dining, seasonal programs, and signature events at scale.');
    }
  }, []);

  const scrollToExperiences = () => {
    const element = document.getElementById('experiences');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background overflow-x-hidden">
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
            <span className="text-foreground font-gotham-medium">Al Maha Island</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/eed4c83a-46f0-40c1-a910-21a558f97ea9.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-gotham-bold text-white mb-6">Al Maha Island</h1>
            <p className="text-xl md:text-2xl font-gotham text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Qatar's premier leisure and entertainment destination.
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
                onClick={scrollToExperiences}
                className="text-white border-white/80 hover:bg-white hover:text-black px-8 py-4 rounded-2xl backdrop-blur-sm bg-white/10 hover:bg-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-gotham-medium"
              >
                Explore Experiences
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
                Al Maha Island brings world-class dining, entertainment, and seasonal programs together 
                on Doha's doorstep. Designed for scale and seamless operations, the island welcomes 
                residents and visitors to a curated mix of signature restaurants, family experiences, 
                and headline events.
              </p>
            </div>
            
            {/* Fact Cards */}
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg hover:from-primary/10 corporate-transition">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-gotham-bold text-primary">
                      <AnimatedCounter end={1.5} suffix="M+" />
                    </div>
                    <div className="text-base font-gotham text-muted-foreground">Visitors Annually</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg hover:from-primary/10 corporate-transition">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-gotham-bold text-primary">
                      <AnimatedCounter end={2022} useCommas={false} />
                    </div>
                    <div className="text-base font-gotham text-muted-foreground">Launch Year</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/5 to-transparent p-8 rounded-lg hover:from-primary/10 corporate-transition">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-gotham-bold text-primary">
                      <AnimatedCounter end={12} />
                    </div>
                    <div className="text-base font-gotham text-muted-foreground">Global Signature Partners</div>
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
        <section id="experiences" className="py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Signature Experiences</h2>
            </div>
            
            <div className="space-y-16">
              <div className="space-y-12">
                <div className="bg-gradient-to-r from-background to-muted/30 p-12 rounded-2xl">
                  <h3 className="text-3xl font-gotham-bold text-foreground mb-6">Dining & Lounges</h3>
                  <p className="text-lg font-gotham text-muted-foreground leading-relaxed max-w-3xl">
                    International operators with flagship concepts bringing world-class culinary experiences to the island.
                  </p>
                </div>
                <RestaurantLogos />
              </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-r from-background to-muted/30 p-12 rounded-2xl">
                  <h3 className="text-3xl font-gotham-bold text-foreground mb-6">Seasonal Programs</h3>
                  <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
                    Family and headline entertainment throughout the year, curated for all ages and interests.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="flex justify-center">
                  <div className="group hover:scale-105 corporate-transition">
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md corporate-transition flex items-center justify-center h-40 w-64">
                      <img 
                        src="/lovable-uploads/2699f67a-0f95-46e6-8e10-716ba89ff67c.png" 
                        alt="Lusail Winter Wonderland" 
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
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
              <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Gallery</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div 
                  key={index} 
                  className={`bg-muted border border-border aspect-square ${
                    index === 0 || index === 7 ? 'md:col-span-2 md:row-span-2' : ''
                  } group cursor-pointer overflow-hidden`}
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
                <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-6">
                  Strategically positioned in Lusail, Al Maha Island offers unparalleled access to Doha's 
                  business district while providing a distinct island experience.
                </p>
                <div className="flex items-center text-sm font-gotham text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  Lusail, Qatar
                </div>
              </div>
              
              <Suspense fallback={<ImageSkeleton aspectRatio="video" className="animate-pulse" />}>
                <AlMahaMap />
              </Suspense>
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Partners & Accolades */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-gotham-bold text-foreground mb-8">Partners & Recognition</h2>
          
          {/* Logo Scroll */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right space-x-16 items-center">
              {/* First set of partner logos */}
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={pepsiLogo} alt="Pepsi" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={qatarAirwaysLogo} alt="Qatar Airways" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={qatariDiarLogo} alt="Qatari Diar" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={rafeeqLogo} alt="Rafeeq" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={visitQatarLogo} alt="Visit Qatar" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={alRayanLogo} alt="Al Rayan Bank" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={dohaBankLogo} alt="Doha Bank" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition brightness-0" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={karwaLogo} alt="Karwa" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={qnbLogo} alt="QNB" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={ooredooLogo} alt="Ooredoo" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              
              {/* Second set for seamless loop */}
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={pepsiLogo} alt="Pepsi" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={qatarAirwaysLogo} alt="Qatar Airways" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={qatariDiarLogo} alt="Qatari Diar" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={rafeeqLogo} alt="Rafeeq" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={visitQatarLogo} alt="Visit Qatar" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={alRayanLogo} alt="Al Rayan Bank" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={dohaBankLogo} alt="Doha Bank" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition brightness-0" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={karwaLogo} alt="Karwa" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={qnbLogo} alt="QNB" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
              <div className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
                <img src={ooredooLogo} alt="Ooredoo" className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 corporate-transition" />
              </div>
            </div>
          </div>
          <p className="text-sm font-gotham text-muted-foreground">
            Recognized for excellence in hospitality and entertainment design.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-gotham-bold text-background mb-6">
            Discover More About Al Maha Island
          </h2>
          <CorporateButton asChild size="lg" variant="outline">
            <a 
              href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white border-white hover:bg-white hover:text-black"
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

export default AlMahaIsland;