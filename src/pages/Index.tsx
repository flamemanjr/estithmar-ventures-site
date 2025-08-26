import { Link } from "react-router-dom";
import { CorporateButton } from "@/components/ui/corporate-button";
import { LazyImage } from "@/components/ui/lazy-image";
import { ImagePreloader, criticalImages } from "@/components/ui/image-preloader";
import { Building2, Settings, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-image.jpg";
import alMahaImage from "@/assets/al-maha-island.jpg";
const kataraHillsImage = "/lovable-uploads/2279181b-8e3e-4789-a205-88d461bcde4f.png";
const maysanDohaImage = "/lovable-uploads/4bda99b4-4bdc-402f-bd4c-8d87a987ace2.png";
import rosewoodMaldivesImage from "@/assets/rosewood-maldives.jpg";
import rixosBaghdadImage from "@/assets/rixos-baghdad.jpg";

const AnimatedCounter = ({ end, duration = 2000, suffix = "", useCommas = true }: { end: number; duration?: number; suffix?: string; useCommas?: boolean }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`[data-counter="${end}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (end - startValue) * easeOutCubic;
      
      setCount(Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  const formatNumber = (num: number) => {
    if (!useCommas) return num.toString();
    return num.toLocaleString();
  };

  return (
    <span data-counter={end}>
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Index = () => {
  return (
    <div className="bg-background">
      <ImagePreloader images={criticalImages} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/lovable-uploads/cb3c982f-e343-40f2-9a7a-15e13adf68d0.png)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-gotham-bold text-white mb-6 leading-tight">
            Redefining Luxury Hospitality
          </h1>
          
          <p className="text-xl md:text-2xl font-gotham text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            As a subsidiary of Estithmar Holding, Estithmar Ventures develops and operates world-class destinations across Qatar and beyond, setting new standards for luxury hospitality and creating experiences that inspire and endure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <CorporateButton asChild size="rounded-lg">
              <Link to="/destinations">Explore Our Destinations</Link>
            </CorporateButton>
            <CorporateButton variant="outline" size="rounded-lg" asChild>
              <Link to="/about" className="text-white border-white hover:bg-white hover:text-black">
                About Estithmar Ventures
              </Link>
            </CorporateButton>
          </div>

          {/* Key Figures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="text-3xl font-gotham-bold text-white mb-1">
                <AnimatedCounter end={1} duration={1500} useCommas={false} />
              </div>
              <div className="text-sm font-gotham text-white/80">Theme Park</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="text-3xl font-gotham-bold text-white mb-1">
                <AnimatedCounter end={40} suffix="+" duration={2000} useCommas={false} />
              </div>
              <div className="text-sm font-gotham text-white/80">Restaurants</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="text-3xl font-gotham-bold text-white mb-1">
                <AnimatedCounter end={4} duration={1500} useCommas={false} />
              </div>
              <div className="text-sm font-gotham text-white/80">Hotels and Resorts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="text-3xl font-gotham-bold text-white mb-1">
                <AnimatedCounter end={1500000} suffix="+" duration={3500} />
              </div>
              <div className="text-sm font-gotham text-white/80">Visitors Served Annually</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Hospitality Excellence Through Strategic Investment</h2>
            <p className="text-lg font-gotham text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Backed by Estithmar Holding's global expertise and vision for diversified economic growth, we deliver transformative hospitality destinations worldwide that drive tourism and create lasting value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 text-center group hover:shadow-lg corporate-transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Strategic Development</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                From innovative concept to successful launch, we develop luxury hospitality destinations that enhance global tourism landscapes and deliver exceptional guest experiences worldwide.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 text-center group hover:shadow-lg corporate-transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Operational Excellence</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                Through partnerships with world-renowned hospitality brands, we ensure operational excellence and deliver consistently superior guest experiences across all international properties.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 text-center group hover:shadow-lg corporate-transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Investment Scale</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                Leveraging Estithmar Holding's robust investment platform, we execute large-scale hospitality projects with proven financial strength and strategic vision for global tourism development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Premier Hospitality Destinations</h2>
            <p className="text-lg font-gotham text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our portfolio of luxury destinations, each thoughtfully developed to elevate global hospitality landscapes and provide unforgettable experiences for discerning travelers worldwide.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Top row - 2 cards */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                <Link to="/destinations/al-maha-island" className="group">
                  <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={alMahaImage} 
                        alt="Al Maha Island"
                        className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                        <span className="text-sm font-gotham-medium">Explore →</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Al Maha Island</h3>
                      <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                        Qatar's premier leisure destination featuring world-class dining, entertainment venues, and signature cultural events that enhance the nation's tourism offering.
                      </p>
                      <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                    </div>
                  </div>
                </Link>

                <Link to="/destinations/rixos-baghdad" className="group">
                  <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={rixosBaghdadImage} 
                        alt="Rixos Baghdad"
                        className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                        <span className="text-sm font-gotham-medium">Explore →</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Rixos Baghdad</h3>
                      <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                        A flagship hospitality destination in Baghdad, demonstrating our regional expansion strategy and commitment to developing luxury accommodations across key Middle Eastern markets.
                      </p>
                      <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Bottom row - 3 cards */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                <Link to="/destinations/rosewood-maldives" className="group">
                  <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={rosewoodMaldivesImage} 
                        alt="Rosewood Maldives"
                        className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                        <span className="text-sm font-gotham-medium">Explore →</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Rosewood Maldives</h3>
                      <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                        An ultra-luxury resort development in the Maldives, showcasing Estithmar Ventures' commitment to creating exceptional hospitality experiences beyond Qatar's borders.
                      </p>
                      <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                    </div>
                  </div>
                </Link>

                <Link to="/destinations/katara-hills-lxr" className="group">
                  <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={kataraHillsImage} 
                        alt="Katara Hills LXR"
                        className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                        <span className="text-sm font-gotham-medium">Explore →</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Katara Hills LXR</h3>
                      <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                        Luxury villa accommodations with panoramic views of Doha's prestigious Katara Cultural Village, offering an elevated hospitality experience in Qatar's cultural district.
                      </p>
                      <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                    </div>
                  </div>
                </Link>

                <Link to="/destinations/maysan-doha-lxr" className="group">
                  <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                    <div className="relative overflow-hidden">
                      <LazyImage 
                        src={maysanDohaImage} 
                        alt="Maysan Doha LXR"
                        className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                        <span className="text-sm font-gotham-medium">Explore →</span>
                      </div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Maysan Doha LXR</h3>
                      <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                        An exclusive wellness retreat that harmoniously blends traditional Arabian hospitality with contemporary luxury amenities in the heart of Doha.
                      </p>
                      <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-gotham-bold text-foreground mb-6">Strategic Partnerships</h2>
          <p className="text-lg font-gotham text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Through strategic alliances with internationally acclaimed hospitality brands, government tourism entities, and industry leaders, we deliver world-class destinations that strengthen Qatar's position as a premier travel destination.
          </p>
          
          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-16 items-center will-change-transform">
              <style>{`
                @keyframes scroll-left-smooth {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll-left {
                  animation: scroll-left-smooth 30s linear infinite;
                }
              `}</style>
              {/* First set of partner logos */}
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center pt-2">
                <LazyImage 
                  src="/lovable-uploads/2317e58c-3b32-4aa0-a42e-29ee723632a5.png" 
                  alt="Rixos Hotels" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full flex items-center justify-center"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <LazyImage 
                  src="/lovable-uploads/e5c48a09-5d0b-4737-a622-121e8ac87c28.png" 
                  alt="LXR Hotels & Resorts" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full flex items-center justify-center"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <LazyImage 
                  src="/lovable-uploads/13076e8c-b2b1-4033-9936-795f6cdd8eee.png" 
                  alt="Qatar Tourism" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <LazyImage 
                  src="/lovable-uploads/6b9cc736-1983-4b57-bcb2-80c5e1467cb1.png" 
                  alt="Qatari Diar" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full flex items-center justify-center"
                />
              </div>
              
              {/* Second set for seamless loop */}
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center pt-2">
                <LazyImage 
                  src="/lovable-uploads/2317e58c-3b32-4aa0-a42e-29ee723632a5.png" 
                  alt="Rixos Hotels" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full flex items-center justify-center"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <LazyImage 
                  src="/lovable-uploads/e5c48a09-5d0b-4737-a622-121e8ac87c28.png" 
                  alt="LXR Hotels & Resorts" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full flex items-center justify-center"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <LazyImage 
                  src="/lovable-uploads/13076e8c-b2b1-4033-9936-795f6cdd8eee.png" 
                  alt="Qatar Tourism" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <LazyImage 
                  src="/lovable-uploads/6b9cc736-1983-4b57-bcb2-80c5e1467cb1.png" 
                  alt="Qatari Diar" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                  containerClassName="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
