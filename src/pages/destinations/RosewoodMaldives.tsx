import { CorporateButton } from "@/components/ui/corporate-button";
import rosewoodMaldivesImage from "@/assets/rosewood-maldives.jpg";

const RosewoodMaldives = () => {
  return (
    <div className="bg-background">
      {/* Hero Section - Expansive ocean with left-aligned content */}
      <section className="relative h-[85vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${rosewoodMaldivesImage})` }}
        >
          <div className="absolute inset-0 bg-black/[0.12]"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-[560px]">
              <p className="rosewood-small font-gotham text-[hsl(var(--muted))] mb-3 tracking-[0.4px]">Atoll, Maldives</p>
              <h1 className="rosewood-h1 font-gotham-bold text-white mb-6">Rosewood Maldives</h1>
              <p className="rosewood-body font-gotham text-white/90 mb-4 leading-relaxed max-w-[70ch]">
                Ultra-luxury island living, refined to its essence.
              </p>
              <p className="rosewood-small font-gotham text-white/70 mb-8 tracking-[0.4px]">
                3°12'N, 73°22'E • 25 min seaplane transfer
              </p>
              <div className="flex gap-4">
                <CorporateButton variant="primary" className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/99 rosewood-transition focus:ring-2 focus:ring-[hsl(var(--brand-orange))] focus:ring-offset-2">
                  Explore Resort
                </CorporateButton>
                <CorporateButton variant="outline" className="border-black text-black hover:bg-black hover:text-white rosewood-transition focus:ring-2 focus:ring-black focus:ring-offset-2">
                  View Gallery
                </CorporateButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview - Two column layout */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left Column - Narrative */}
            <div className="lg:col-span-3">
              <p className="rosewood-body font-gotham text-[hsl(var(--ink))] leading-relaxed">
                In the Maldives, simplicity becomes sophistication. Rosewood Maldives pairs 
                architecture attuned to the ocean with service that feels natural, intuitive, 
                and deeply personal. Every detail reflects our commitment to privacy, precision, 
                and the endless rhythm of the Indian Ocean.
              </p>
            </div>
            
            {/* Right Column - Fact Cards on Mist Panel */}
            <div className="lg:col-span-2">
              <div className="bg-[hsl(var(--mist))] p-8 rounded-sm">
                <div className="space-y-6">
                  <div className="bg-white border border-[hsl(var(--line))] p-6 text-center h-24 flex flex-col justify-center rosewood-transition hover:shadow-sm">
                    <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-1">24</h3>
                    <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))]">Overwater & Beach Villas</p>
                  </div>
                  
                  <div className="bg-white border border-[hsl(var(--line))] p-6 text-center h-24 flex flex-col justify-center rosewood-transition hover:shadow-sm">
                    <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-1">Private</h3>
                    <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))]">Island Sanctuary</p>
                  </div>
                  
                  <div className="bg-white border border-[hsl(var(--line))] p-6 text-center h-24 flex flex-col justify-center rosewood-transition hover:shadow-sm">
                    <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-1">Ocean-first</h3>
                    <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))]">Design Philosophy</p>
                  </div>
                </div>
                
                {/* Horizon Rule */}
                <div className="mt-8 h-px bg-gradient-to-r from-[hsl(var(--horizon-start))] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Rhythm Strip */}
      <section className="py-16 bg-[hsl(var(--mist))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="rosewood-fade-in">
              <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-3">Arrive</h3>
              <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))]">Seaplane journey to your private island</p>
            </div>
            <div className="rosewood-fade-in">
              <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-3">Explore</h3>
              <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))]">Reef discoveries and marine adventures</p>
            </div>
            <div className="rosewood-fade-in">
              <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-3">Unwind</h3>
              <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))]">Ocean botanicals and horizon meditation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="rosewood-h2 font-gotham-bold text-[hsl(var(--ink))] mb-12 text-center">Signature Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="rosewood-h3 font-gotham-bold text-white mb-2">Marine Excursions</h3>
                <p className="rosewood-body font-gotham text-white/90">Private yacht discoveries through pristine reefs</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-gradient-to-br from-teal-400 to-emerald-500"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="rosewood-h3 font-gotham-bold text-white mb-2">Ocean Botanicals Spa</h3>
                <p className="rosewood-body font-gotham text-white/90">Healing rituals inspired by marine botanicals</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-gradient-to-br from-amber-400 to-orange-500"></div>
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="rosewood-h3 font-gotham-bold text-white mb-2">Destination Dining</h3>
                <p className="rosewood-body font-gotham text-white/90">Chef's table experiences on private sandbanks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[hsl(var(--mist))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="rosewood-h2 font-gotham-bold text-[hsl(var(--ink))] mb-12 text-center">Gallery</h2>
          
          {/* Triptych Lead Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-2">
              <div className="aspect-[3/2] bg-gradient-to-r from-blue-500 to-teal-500 rounded-sm overflow-hidden">
                <img 
                  src={rosewoodMaldivesImage} 
                  alt="Overwater villa at dusk with uninterrupted horizon view"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="533"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-gradient-to-b from-emerald-400 to-blue-500 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-emerald-400 to-blue-500"></div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-b from-teal-400 to-blue-600 rounded-sm overflow-hidden">
                <div className="w-full h-full bg-gradient-to-b from-teal-400 to-blue-600"></div>
              </div>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-teal-500 rounded-sm"></div>
            <div className="aspect-[3/4] bg-gradient-to-br from-emerald-400 to-blue-500 rounded-sm"></div>
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-400 to-blue-600 rounded-sm"></div>
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-500 to-emerald-400 rounded-sm"></div>
            <div className="aspect-[4/3] bg-gradient-to-br from-teal-500 to-blue-400 rounded-sm"></div>
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-600 to-teal-400 rounded-sm"></div>
          </div>
        </div>
      </section>

      {/* Map / Proximity */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[hsl(var(--line))] p-8 rounded-sm max-w-2xl mx-auto text-center">
            <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-4">Location & Access</h3>
            <p className="rosewood-body font-gotham text-[hsl(var(--muted-foreground))] mb-6 max-w-[60ch] mx-auto leading-relaxed">
              Private island sanctuary in the pristine waters of the South Ari Atoll, accessible by scenic seaplane transfer.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))]">Reef access</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))]">•</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))]">Sandbank dining</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))]">•</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))]">25 min seaplane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Accolades */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-12 opacity-60 mb-4">
            <div className="h-9 w-24 bg-gray-200 rounded"></div>
            <div className="h-9 w-32 bg-gray-200 rounded"></div>
            <div className="h-9 w-28 bg-gray-200 rounded"></div>
            <div className="h-9 w-30 bg-gray-200 rounded"></div>
          </div>
          <p className="rosewood-small font-gotham text-[hsl(var(--muted))]">
            Trusted by leading luxury hospitality partners
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${rosewoodMaldivesImage})` }}
        >
          <div className="absolute inset-0 bg-black/[0.12]"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="rosewood-h2 font-gotham-bold text-white mb-8">Experience Rosewood Maldives</h2>
            <CorporateButton className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/99 text-white rosewood-transition focus:ring-2 focus:ring-[hsl(var(--brand-orange))] focus:ring-offset-2">
              Visit Official Website
            </CorporateButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RosewoodMaldives;