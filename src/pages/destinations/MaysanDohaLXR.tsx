import { useState, useEffect, useRef } from "react";
import { CorporateButton } from "@/components/ui/corporate-button";
import { Heart, Building, Sparkles, Waves, Trees, ChefHat, MapPin, Plane, Landmark } from "lucide-react";
const maysanDohaImage = "/lovable-uploads/4bda99b4-4bdc-402f-bd4c-8d87a987ace2.png";

const MaysanDohaLXR = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [ritualStep, setRitualStep] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            setIsVisible(prev => ({
              ...prev,
              [element.dataset.section || '']: true
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observerRef.current?.observe(section));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const getAnimationClass = (section: string) => {
    return isVisible[section] 
      ? `animate-fade-in opacity-100 transform translate-y-0` 
      : `opacity-0 transform translate-y-8`;
  };

  const getStaggerDelay = (index: number) => ({ animationDelay: `${index * 150}ms` });
  return (
    <div className="bg-background">
      {/* Hero Section - Enhanced with gradient overlay */}
      <section className="relative h-[32rem] bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${maysanDohaImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              <h1 className="maysan-h1 font-gotham-bold text-white mb-8 tracking-tight transform transition-all duration-700 hover:scale-105">
                Maysan Doha LXR
              </h1>
              <p 
                className="text-lg font-gotham text-white/95 max-w-2xl mx-auto leading-relaxed mb-12 transform transition-all duration-500"
                style={{ animationDelay: '600ms' }}
              >
                A private sanctuary of wellness and heritage where Arabian craft meets contemporary calm.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-500"
                style={{ animationDelay: '900ms' }}
              >
                <CorporateButton className="bg-brand-orange text-white hover:bg-brand-orange/90 border-0 px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Explore Experience
                </CorporateButton>
                <CorporateButton className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  View Gallery
                </CorporateButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Enhanced with gradient and better spacing */}
      <section 
        className="py-24 bg-gradient-to-b from-paper via-sand/20 to-paper" 
        data-section="overview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left Column - Enhanced with better typography */}
            <div className={`lg:col-span-3 transition-all duration-700 ${getAnimationClass('overview')}`} style={getStaggerDelay(0)}>
              <div className="space-y-8">
                <div 
                  className="maysan-eyebrow font-gotham-medium text-katara-muted mb-4 tracking-wide"
                  style={getStaggerDelay(0)}
                >
                  Overview
                </div>
                <h2 
                  className="maysan-h2 font-gotham-bold text-ink mb-6 transform transition-all duration-500 hover:text-brand-orange"
                  style={getStaggerDelay(1)}
                >
                  A Sanctuary of Modern Wellness
                </h2>
                <p className="text-xl font-gotham text-ink leading-relaxed">
                  Maysan Doha LXR is designed as a calm, private world—where Arabian architecture, 
                  contemporary craft, and thoughtful service create space to reset and reconnect.
                </p>
                <p className="maysan-body font-gotham text-katara-muted leading-relaxed">
                  This sanctuary balances heritage with innovation, offering an intimate escape 
                  from the energy of the city. Every detail speaks to a philosophy of mindful luxury, 
                  where time moves slowly and wellness takes precedence.
                </p>
              </div>
            </div>
            
            {/* Right Column - Enhanced fact cards with gradient */}
            <div className={`lg:col-span-2 transition-all duration-700 ${getAnimationClass('overview')}`} style={getStaggerDelay(3)}>
              <div className="bg-gradient-to-br from-sand to-sand/80 p-10 rounded-sm border border-line/50 shadow-sm transform transition-all duration-500 hover:shadow-lg hover:scale-105">
                <div className="space-y-8">
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Wellness</h3>
                    <p className="maysan-small font-gotham text-katara-muted">& Retreat</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Contemporary</h3>
                    <p className="maysan-small font-gotham text-katara-muted">Arabian Design</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-6 h-6 text-brand-orange" />
                    </div>
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Spa</h3>
                    <p className="maysan-small font-gotham text-katara-muted">Private Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rituals Section - Enhanced */}
      <section 
        className="py-20 bg-gradient-to-r from-sand via-sand/90 to-sand" 
        data-section="rituals"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${getAnimationClass('rituals')}`}>
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-4 transform transition-all duration-500 hover:scale-105">The Ritual of Renewal</h2>
            <p className="maysan-body font-gotham text-katara-muted max-w-2xl mx-auto">
              Every visit follows a carefully curated journey of restoration and reconnection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: 1, title: "Arrive", description: "Enter a world of calm, where the city's energy gives way to tranquil spaces designed for reflection." },
              { number: 2, title: "Restore", description: "Renew mind and body through holistic treatments and thermal experiences crafted for deep wellness." },
              { number: 3, title: "Reconnect", description: "Return refreshed, carrying a renewed sense of balance that extends beyond your visit." }
            ].map((step, index) => (
              <div 
                key={index}
                className={`text-center group transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
                  isVisible.rituals ? 'animate-fade-in' : 'opacity-0'
                } ${ritualStep === index ? 'scale-105 shadow-lg' : ''}`}
                style={getStaggerDelay(index)}
                onMouseEnter={() => setRitualStep(index)}
                onMouseLeave={() => setRitualStep(-1)}
              >
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${
                    ritualStep === index 
                      ? 'bg-gradient-to-br from-brand-orange to-brand-orange/70 scale-110' 
                      : 'bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 group-hover:from-brand-orange/30 group-hover:to-brand-orange/20'
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      ritualStep === index ? 'bg-white' : 'bg-brand-orange/30 group-hover:bg-brand-orange/40'
                    }`}>
                      <span className={`font-gotham-bold text-lg transition-all duration-300 ${
                        ritualStep === index ? 'text-brand-orange' : 'text-brand-orange'
                      }`}>{step.number}</span>
                    </div>
                  </div>
                  {index < 2 && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-brand-orange/30 to-transparent hidden md:block transition-all duration-500 group-hover:from-brand-orange/60"></div>
                  )}
                </div>
                <h3 className={`maysan-h3 font-gotham-bold mb-3 transition-all duration-300 ${
                  ritualStep === index ? 'text-brand-orange' : 'text-ink group-hover:text-brand-orange'
                }`}>{step.title}</h3>
                <p className="maysan-small font-gotham text-katara-muted leading-relaxed transition-all duration-300 group-hover:text-ink">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences - Enhanced with better visual hierarchy */}
      <section 
        className="py-24 bg-gradient-to-b from-paper to-sand/10" 
        data-section="experiences"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transition-all duration-700 ${getAnimationClass('experiences')}`}>
            <div className="maysan-eyebrow font-gotham-medium text-katara-muted mb-4 tracking-wide">
              Curated Experiences
            </div>
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-6 transform transition-all duration-500 hover:scale-105">Signature Moments</h2>
            <p className="maysan-body font-gotham text-katara-muted max-w-2xl mx-auto">
              Each experience is thoughtfully designed to honor both heritage and contemporary wellness.
            </p>
          </div>
          
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Holistic Spa & Thermal Suites", 
                description: "Reset at your pace. Discover thermal experiences that honor ancient wellness traditions while embracing modern comfort.",
                icon: Waves
              },
              { 
                title: "Garden Courtyards & Quiet Lounges", 
                description: "Architectural calm. Private spaces where light and shadow create natural rhythms for contemplation and rest.",
                icon: Trees
              },
              { 
                title: "Chef-Led, Ingredient-Driven Dining", 
                description: "Refined, seasonal menus. Culinary experiences that celebrate local heritage through contemporary techniques.",
                icon: ChefHat
              }
            ].map((experience, index) => (
              <div 
                key={index}
                className={`group transform transition-all duration-700 bg-white border border-line/50 rounded-sm overflow-hidden ${
                  isVisible.experiences ? 'animate-fade-in' : 'opacity-0'
                } ${hoveredCard === index ? 'scale-105 shadow-2xl -translate-y-4' : 'hover:shadow-lg hover:-translate-y-2'}`}
                style={getStaggerDelay(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`aspect-[4/3] bg-gradient-to-br from-sand to-sand/60 border-b border-line/30 relative overflow-hidden transition-all duration-500 ${
                  hoveredCard === index ? 'scale-110' : ''
                }`}>
                  {index === 0 ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(/lovable-uploads/904ac2a9-edd7-43c2-85d6-694d225075aa.png)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    </div>
                  ) : index === 1 ? (
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(/lovable-uploads/f2b59a6f-76b2-4025-b755-29b0066f829d.png)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  )}
                  <div className={`absolute bottom-4 left-4 transition-all duration-500 ${
                    hoveredCard === index ? 'scale-125' : ''
                  }`}>
                    <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <experience.icon className={`w-4 h-4 transition-all duration-300 ${
                        hoveredCard === index ? 'text-brand-orange' : 'text-brand-orange/60'
                      }`} />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className={`maysan-h3 font-gotham-bold mb-4 transition-all duration-300 ${
                    hoveredCard === index ? 'text-brand-orange' : 'text-ink group-hover:text-brand-orange'
                  }`}>
                    {experience.title}
                  </h3>
                  <p className="maysan-small font-gotham text-katara-muted leading-relaxed transition-all duration-300 group-hover:text-ink">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section - Enhanced */}
      <section 
        className="py-20 bg-sand/30" 
        data-section="location"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 ${getAnimationClass('location')}`} style={getStaggerDelay(0)}>
              <div className="maysan-eyebrow font-gotham-medium text-katara-muted mb-4 tracking-wide">
                Location
              </div>
              <h2 className="maysan-h2 font-gotham-bold text-ink mb-6 transform transition-all duration-500 hover:scale-105">
                Perfectly Positioned for Discovery
              </h2>
              <p className="maysan-body font-gotham text-katara-muted mb-8 leading-relaxed">
                Nestled in Doha's cultural heart, Maysan offers easy access to the city's finest experiences 
                while maintaining its sanctuary-like atmosphere.
              </p>
            </div>
            
            <div className={`bg-white border border-line/50 p-8 rounded-sm shadow-sm transform transition-all duration-700 hover:shadow-lg hover:scale-105 ${getAnimationClass('location')}`} style={getStaggerDelay(1)}>
              <div className="space-y-6">
                {[
                  { location: "Doha waterfront", time: "10 min", icon: Waves },
                  { location: "Cultural venues", time: "8–12 min", icon: Landmark },
                  { location: "Airport", time: "25 min", icon: Plane }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 bg-sand/40 rounded-sm transform transition-all duration-500 hover:bg-sand/60 hover:scale-105 ${
                      isVisible.location ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${600 + index * 200}ms` }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-brand-orange/30 hover:scale-110">
                        <item.icon className="w-4 h-4 text-brand-orange transition-all duration-300" />
                      </div>
                      <span className="maysan-small font-gotham text-ink font-medium transition-all duration-300 hover:text-brand-orange">{item.location}</span>
                    </div>
                    <span className="maysan-small font-gotham-bold text-brand-orange transition-all duration-300 hover:scale-110">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="maysan-small font-gotham text-katara-muted mb-8">
            Select partners and recognition for design excellence.
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            {/* Partner logos would go here - keeping monochrome, max height 36px */}
          </div>
        </div>
      </section>

      {/* CTA Banner - Enhanced */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${maysanDohaImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="animate-fade-in transform transition-all duration-700"
              style={{ animationDelay: '400ms' }}
            >
              <h2 className="maysan-h2 font-gotham-bold text-white mb-6 transform transition-all duration-500 hover:scale-105">
                Begin Your Journey of Renewal
              </h2>
              <p 
                className="text-lg font-gotham text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
                style={{ animationDelay: '600ms' }}
              >
                Discover a sanctuary where every moment is designed to restore balance and inspire well-being.
              </p>
              <div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                style={{ animationDelay: '800ms' }}
              >
                <CorporateButton className="bg-brand-orange text-white hover:bg-brand-orange/90 border-0 px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Visit Official Website
                </CorporateButton>
                <CorporateButton className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Contact Concierge
                </CorporateButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaysanDohaLXR;