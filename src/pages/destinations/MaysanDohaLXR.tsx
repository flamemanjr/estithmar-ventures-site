import { CorporateButton } from "@/components/ui/corporate-button";
import maysanDohaImage from "@/assets/maysan-doha.jpg";

const MaysanDohaLXR = () => {
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
            <div className="maysan-fade-in">
              <h1 className="maysan-h1 font-gotham-bold text-white mb-8 tracking-tight">
                Maysan Doha LXR
              </h1>
              <p className="text-lg font-gotham text-white/95 max-w-2xl mx-auto leading-relaxed mb-12">
                A private sanctuary of wellness and heritage where Arabian craft meets contemporary calm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CorporateButton className="bg-brand-orange text-white hover:bg-brand-orange/90 border-0 px-8 py-3">
                  Explore Experience
                </CorporateButton>
                <CorporateButton className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-3">
                  View Gallery
                </CorporateButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - Enhanced with gradient and better spacing */}
      <section className="py-24 bg-gradient-to-b from-paper via-sand/20 to-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="maysan-eyebrow font-gotham-medium text-katara-muted mb-4 tracking-wide">
              Overview
            </div>
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-6">
              A Sanctuary of Modern Wellness
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left Column - Enhanced with better typography */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
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
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-sand to-sand/80 p-10 rounded-sm border border-line/50 shadow-sm">
                <div className="space-y-8">
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-brand-orange/20 rounded-full"></div>
                    </div>
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Wellness</h3>
                    <p className="maysan-small font-gotham text-katara-muted">& Retreat</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-brand-orange/20 rounded-full"></div>
                    </div>
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Contemporary</h3>
                    <p className="maysan-small font-gotham text-katara-muted">Arabian Design</p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-brand-orange/20 rounded-full"></div>
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
      <section className="py-20 bg-gradient-to-r from-sand via-sand/90 to-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-4">The Ritual of Renewal</h2>
            <p className="maysan-body font-gotham text-katara-muted max-w-2xl mx-auto">
              Every visit follows a carefully curated journey of restoration and reconnection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group maysan-transition hover:-translate-y-1">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-brand-orange/30 rounded-full flex items-center justify-center">
                    <span className="text-brand-orange font-gotham-bold text-lg">1</span>
                  </div>
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-brand-orange/30 to-transparent hidden md:block"></div>
              </div>
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-3">Arrive</h3>
              <p className="maysan-small font-gotham text-katara-muted leading-relaxed">
                Enter a world of calm, where the city's energy gives way to tranquil spaces designed for reflection.
              </p>
            </div>
            
            <div className="text-center group maysan-transition hover:-translate-y-1">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-brand-orange/30 rounded-full flex items-center justify-center">
                    <span className="text-brand-orange font-gotham-bold text-lg">2</span>
                  </div>
                </div>
                <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-brand-orange/30 to-transparent hidden md:block"></div>
              </div>
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-3">Restore</h3>
              <p className="maysan-small font-gotham text-katara-muted leading-relaxed">
                Renew mind and body through holistic treatments and thermal experiences crafted for deep wellness.
              </p>
            </div>
            
            <div className="text-center group maysan-transition hover:-translate-y-1">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-brand-orange/30 rounded-full flex items-center justify-center">
                    <span className="text-brand-orange font-gotham-bold text-lg">3</span>
                  </div>
                </div>
              </div>
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-3">Reconnect</h3>
              <p className="maysan-small font-gotham text-katara-muted leading-relaxed">
                Return refreshed, carrying a renewed sense of balance that extends beyond your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experiences - Enhanced with better visual hierarchy */}
      <section className="py-24 bg-gradient-to-b from-paper to-sand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="maysan-eyebrow font-gotham-medium text-katara-muted mb-4 tracking-wide">
              Curated Experiences
            </div>
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-6">Signature Moments</h2>
            <p className="maysan-body font-gotham text-katara-muted max-w-2xl mx-auto">
              Each experience is thoughtfully designed to honor both heritage and contemporary wellness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="group maysan-transition hover:shadow-lg hover:-translate-y-2 bg-white border border-line/50 rounded-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-sand to-sand/60 border-b border-line/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand-orange/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="maysan-h3 font-gotham-bold text-ink mb-4 group-hover:text-brand-orange maysan-transition">
                  Holistic Spa & Thermal Suites
                </h3>
                <p className="maysan-small font-gotham text-katara-muted leading-relaxed">
                  Reset at your pace. Discover thermal experiences that honor ancient wellness traditions while embracing modern comfort.
                </p>
              </div>
            </div>
            
            <div className="group maysan-transition hover:shadow-lg hover:-translate-y-2 bg-white border border-line/50 rounded-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-sand to-sand/60 border-b border-line/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand-orange/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="maysan-h3 font-gotham-bold text-ink mb-4 group-hover:text-brand-orange maysan-transition">
                  Garden Courtyards & Quiet Lounges
                </h3>
                <p className="maysan-small font-gotham text-katara-muted leading-relaxed">
                  Architectural calm. Private spaces where light and shadow create natural rhythms for contemplation and rest.
                </p>
              </div>
            </div>
            
            <div className="group maysan-transition hover:shadow-lg hover:-translate-y-2 bg-white border border-line/50 rounded-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-sand to-sand/60 border-b border-line/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand-orange/40 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="maysan-h3 font-gotham-bold text-ink mb-4 group-hover:text-brand-orange maysan-transition">
                  Chef-Led, Ingredient-Driven Dining
                </h3>
                <p className="maysan-small font-gotham text-katara-muted leading-relaxed">
                  Refined, seasonal menus. Culinary experiences that celebrate local heritage through contemporary techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Enhanced */}
      <section className="py-20 bg-sand/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="maysan-eyebrow font-gotham-medium text-katara-muted mb-4 tracking-wide">
                Location
              </div>
              <h2 className="maysan-h2 font-gotham-bold text-ink mb-6">
                Perfectly Positioned for Discovery
              </h2>
              <p className="maysan-body font-gotham text-katara-muted mb-8 leading-relaxed">
                Nestled in Doha's cultural heart, Maysan offers easy access to the city's finest experiences 
                while maintaining its sanctuary-like atmosphere.
              </p>
            </div>
            
            <div className="bg-white border border-line/50 p-8 rounded-sm shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-sand/40 rounded-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-brand-orange/40 rounded-full"></div>
                    </div>
                    <span className="maysan-small font-gotham text-ink font-medium">Doha waterfront</span>
                  </div>
                  <span className="maysan-small font-gotham-bold text-brand-orange">10 min</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-sand/40 rounded-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-brand-orange/40 rounded-full"></div>
                    </div>
                    <span className="maysan-small font-gotham text-ink font-medium">Cultural venues</span>
                  </div>
                  <span className="maysan-small font-gotham-bold text-brand-orange">8–12 min</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-sand/40 rounded-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-brand-orange/40 rounded-full"></div>
                    </div>
                    <span className="maysan-small font-gotham text-ink font-medium">Airport</span>
                  </div>
                  <span className="maysan-small font-gotham-bold text-brand-orange">25 min</span>
                </div>
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
            <div className="maysan-fade-in">
              <h2 className="maysan-h2 font-gotham-bold text-white mb-6">
                Begin Your Journey of Renewal
              </h2>
              <p className="text-lg font-gotham text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Discover a sanctuary where every moment is designed to restore balance and inspire well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CorporateButton className="bg-brand-orange text-white hover:bg-brand-orange/90 border-0 px-8 py-4 text-lg">
                  Visit Official Website
                </CorporateButton>
                <CorporateButton className="bg-white/10 text-white border border-white/30 hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg">
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