import { Link } from "react-router-dom";
import { CorporateButton } from "@/components/ui/corporate-button";
import { Building2, Settings, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import alMahaImage from "@/assets/al-maha-island.jpg";
const kataraHillsImage = "/lovable-uploads/2279181b-8e3e-4789-a205-88d461bcde4f.png";
const maysanDohaImage = "/lovable-uploads/4bda99b4-4bdc-402f-bd4c-8d87a987ace2.png";
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-gotham-bold text-white mb-6 leading-tight">
            Where Vision Meets Luxury
          </h1>
          
          <p className="text-xl md:text-2xl font-gotham text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Estithmar Ventures creates destinations that are more than places — they are experiences designed to inspire, connect, and endure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <CorporateButton asChild size="lg">
              <Link to="/destinations">Explore Our Destinations</Link>
            </CorporateButton>
            <CorporateButton variant="outline" size="lg" asChild>
              <Link to="/about" className="text-white border-white hover:bg-white hover:text-black">
                About Estithmar Ventures
              </Link>
            </CorporateButton>
          </div>

          {/* Key Figures */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">What We Do</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border p-8 text-center group hover:shadow-lg corporate-transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Develop</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                From concept to launch, we deliver destinations that set new standards for luxury and reliability.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 text-center group hover:shadow-lg corporate-transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Operate</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                We partner with leading brands to ensure excellence in guest experience and performance.
              </p>
            </div>
            
            <div className="bg-card border border-border p-8 text-center group hover:shadow-lg corporate-transition relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition"></div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
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
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={alMahaImage} 
                    alt="Al Maha Island"
                    className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                    <span className="text-sm font-gotham-medium">Explore →</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Al Maha Island</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Qatar's premier leisure hub—dining, entertainment, and signature events at scale.
                  </p>
                  <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                </div>
              </div>
            </Link>

            <Link to="/destinations/katara-hills-lxr" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={kataraHillsImage} 
                    alt="Katara Hills LXR"
                    className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                    <span className="text-sm font-gotham-medium">Explore →</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Katara Hills LXR</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Elevated villa living overlooking Doha's cultural heart.
                  </p>
                  <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                </div>
              </div>
            </Link>

            <Link to="/destinations/maysan-doha-lxr" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={maysanDohaImage} 
                    alt="Maysan Doha LXR"
                    className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                    <span className="text-sm font-gotham-medium">Explore →</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Maysan Doha LXR</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    A private sanctuary where Arabian heritage meets modern well-being.
                  </p>
                  <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                </div>
              </div>
            </Link>

            <Link to="/destinations/rosewood-maldives" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={rosewoodMaldivesImage} 
                    alt="Rosewood Maldives"
                    className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                    <span className="text-sm font-gotham-medium">Explore →</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Rosewood Maldives</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Ultra-luxury island living, reimagined.
                  </p>
                  <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
                </div>
              </div>
            </Link>

            <Link to="/destinations/rixos-baghdad" className="group">
              <div className="bg-card border border-border overflow-hidden corporate-transition group-hover:shadow-xl group-hover:-translate-y-1 relative">
                <div className="relative overflow-hidden">
                  <img 
                    src={rixosBaghdadImage} 
                    alt="Rixos Baghdad"
                    className="w-full h-64 object-cover group-hover:scale-105 corporate-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 corporate-transition"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 corporate-transition">
                    <span className="text-sm font-gotham-medium">Explore →</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">Rixos Baghdad</h3>
                  <p className="font-gotham text-muted-foreground text-sm leading-relaxed">
                    Contemporary hospitality anchored in a storied capital.
                  </p>
                  <div className="mt-4 w-12 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 corporate-transition origin-left"></div>
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
          <p className="text-lg font-gotham text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            We collaborate with global leaders—including tourism authorities, hospitality brands, and event innovators—to bring ambitious projects to life.
          </p>
          
          {/* Logo Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-16 items-center">
              {/* First set of partner logos */}
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2317e58c-3b32-4aa0-a42e-29ee723632a5.png" 
                  alt="Rixos Hotels" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e5c48a09-5d0b-4737-a622-121e8ac87c28.png" 
                  alt="LXR Hotels & Resorts" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/13076e8c-b2b1-4033-9936-795f6cdd8eee.png" 
                  alt="Qatar Tourism" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/6b9cc736-1983-4b57-bcb2-80c5e1467cb1.png" 
                  alt="Qatari Diar" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              
              {/* Second set for seamless loop */}
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/2317e58c-3b32-4aa0-a42e-29ee723632a5.png" 
                  alt="Rixos Hotels" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/e5c48a09-5d0b-4737-a622-121e8ac87c28.png" 
                  alt="LXR Hotels & Resorts" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/13076e8c-b2b1-4033-9936-795f6cdd8eee.png" 
                  alt="Qatar Tourism" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
                />
              </div>
              <div className="flex-shrink-0 w-40 h-20 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/6b9cc736-1983-4b57-bcb2-80c5e1467cb1.png" 
                  alt="Qatari Diar" 
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 corporate-transition"
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
