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
          <div className="absolute inset-0 bg-black/[0.14]"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8 w-full">
            <div className="max-w-[560px] rosewood-fade-in">
              <p className="rosewood-small font-gotham text-white/80 mb-4 tracking-[0.4px] uppercase">Atoll, Maldives</p>
              <h1 className="rosewood-h1 font-gotham-bold text-white mb-6 leading-[54px]">Rosewood Maldives</h1>
              <p className="rosewood-body font-gotham text-white/90 mb-6 leading-[26px] max-w-[70ch]">
                Ultra-luxury island living, refined to its essence.
              </p>
              <p className="rosewood-small font-gotham text-white/70 mb-8 tracking-[0.4px]">
                3°12'N, 73°22'E • 25 min seaplane transfer
              </p>
              <div className="flex gap-4">
                <CorporateButton 
                  variant="primary" 
                  className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/[0.99] text-white rosewood-transition focus:ring-2 focus:ring-[hsl(var(--brand-orange))] focus:ring-offset-2 focus:ring-offset-black px-8 py-3"
                >
                  Explore Resort
                </CorporateButton>
                <CorporateButton 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rosewood-transition focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black px-8 py-3"
                >
                  View Gallery
                </CorporateButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview - Two column layout */}
      <section className="py-20 bg-background">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Left Column - Narrative */}
            <div className="lg:col-span-3 rosewood-fade-in">
              <p className="rosewood-body font-gotham text-[hsl(var(--ink))] leading-[26px] max-w-[70ch]">
                In the Maldives, simplicity becomes sophistication. Rosewood Maldives pairs 
                architecture attuned to the ocean with service that feels natural, intuitive, 
                and deeply personal. Every detail reflects our commitment to privacy, precision, 
                and the endless rhythm of the Indian Ocean.
              </p>
            </div>
            
            {/* Right Column - Fact Cards on Mist Panel */}
            <div className="lg:col-span-2 rosewood-fade-in">
              <div className="bg-[hsl(var(--mist))] p-8 rounded-[4px]">
                <div className="space-y-6">
                  <div className="bg-white border border-[hsl(var(--line))] p-6 text-center h-24 flex flex-col justify-center rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
                    <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-1 leading-[30px]">24</h3>
                    <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))] leading-[22px]">Overwater & Beach Villas</p>
                  </div>
                  
                  <div className="bg-white border border-[hsl(var(--line))] p-6 text-center h-24 flex flex-col justify-center rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
                    <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-1 leading-[30px]">Private</h3>
                    <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))] leading-[22px]">Island Sanctuary</p>
                  </div>
                  
                  <div className="bg-white border border-[hsl(var(--line))] p-6 text-center h-24 flex flex-col justify-center rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
                    <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-1 leading-[30px]">Ocean-first</h3>
                    <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))] leading-[22px]">Design Philosophy</p>
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
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <div className="rosewood-fade-in">
              <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-3 leading-[30px]">Arrive</h3>
              <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))] leading-[22px]">Seaplane journey to your private island</p>
            </div>
            <div className="rosewood-fade-in">
              <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-3 leading-[30px]">Explore</h3>
              <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))] leading-[22px]">Reef discoveries and marine adventures</p>
            </div>
            <div className="rosewood-fade-in">
              <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-3 leading-[30px]">Unwind</h3>
              <p className="rosewood-small font-gotham text-[hsl(var(--muted-foreground))] leading-[22px]">Ocean botanicals and horizon meditation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-20 bg-background">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="rosewood-h2 font-gotham-bold text-[hsl(var(--ink))] mb-12 text-center leading-[38px]">Signature Experiences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-1 rounded-[4px] group">
              <div className="aspect-[3/2] bg-gradient-to-br from-slate-100 to-slate-200"></div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 rosewood-transition"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-black/30 to-transparent">
                <h3 className="rosewood-h3 font-gotham-bold text-white mb-2 leading-[30px]">Marine Excursions</h3>
                <p className="rosewood-body font-gotham text-white/90 leading-[26px]">Private yacht discoveries through pristine reefs</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-1 rounded-[4px] group">
              <div className="aspect-[3/2] bg-gradient-to-br from-gray-100 to-gray-200"></div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 rosewood-transition"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-black/30 to-transparent">
                <h3 className="rosewood-h3 font-gotham-bold text-white mb-2 leading-[30px]">Ocean Botanicals Spa</h3>
                <p className="rosewood-body font-gotham text-white/90 leading-[26px]">Healing rituals inspired by marine botanicals</p>
              </div>
            </div>
            
            <div className="relative overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-1 rounded-[4px] group">
              <div className="aspect-[3/2] bg-gradient-to-br from-stone-100 to-stone-200"></div>
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 rosewood-transition"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 via-black/30 to-transparent">
                <h3 className="rosewood-h3 font-gotham-bold text-white mb-2 leading-[30px]">Destination Dining</h3>
                <p className="rosewood-body font-gotham text-white/90 leading-[26px]">Chef's table experiences on private sandbanks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-[hsl(var(--mist))]">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <h2 className="rosewood-h2 font-gotham-bold text-[hsl(var(--ink))] mb-12 text-center leading-[38px]">Gallery</h2>
          
          {/* Triptych Lead Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2 rosewood-fade-in">
              <div className="aspect-[3/2] bg-gradient-to-r from-gray-200 to-gray-300 rounded-[4px] overflow-hidden group rosewood-transition hover:shadow-sm">
                <img 
                  src={rosewoodMaldivesImage} 
                  alt="Overwater villa at dusk with uninterrupted horizon view"
                  className="w-full h-full object-cover group-hover:scale-105 rosewood-transition"
                  loading="lazy"
                  width="800"
                  height="533"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[3/4] bg-gradient-to-b from-slate-200 to-slate-300 rounded-[4px] overflow-hidden group rosewood-transition hover:shadow-sm rosewood-fade-in">
                <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-300 group-hover:scale-105 rosewood-transition"></div>
              </div>
              <div className="aspect-[3/4] bg-gradient-to-b from-stone-200 to-stone-300 rounded-[4px] overflow-hidden group rosewood-transition hover:shadow-sm rosewood-fade-in">
                <div className="w-full h-full bg-gradient-to-b from-stone-200 to-stone-300 group-hover:scale-105 rosewood-transition"></div>
              </div>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-[4px] group rosewood-transition hover:shadow-sm overflow-hidden rosewood-fade-in">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 rosewood-transition"></div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-[4px] group rosewood-transition hover:shadow-sm overflow-hidden rosewood-fade-in">
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 group-hover:scale-105 rosewood-transition"></div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-stone-100 to-stone-200 rounded-[4px] group rosewood-transition hover:shadow-sm overflow-hidden rosewood-fade-in">
              <div className="w-full h-full bg-gradient-to-br from-stone-100 to-stone-200 group-hover:scale-105 rosewood-transition"></div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-[4px] group rosewood-transition hover:shadow-sm overflow-hidden rosewood-fade-in">
              <div className="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 group-hover:scale-105 rosewood-transition"></div>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-[4px] group rosewood-transition hover:shadow-sm overflow-hidden rosewood-fade-in">
              <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 group-hover:scale-105 rosewood-transition"></div>
            </div>
            <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-150 rounded-[4px] group rosewood-transition hover:shadow-sm overflow-hidden rosewood-fade-in">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-150 group-hover:scale-105 rosewood-transition"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Proximity */}
      <section className="py-20 bg-background">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="bg-white border border-[hsl(var(--line))] p-8 rounded-[4px] max-w-2xl mx-auto text-center rosewood-fade-in">
            <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-4 leading-[30px]">Location & Access</h3>
            <p className="rosewood-body font-gotham text-[hsl(var(--muted-foreground))] mb-6 max-w-[60ch] mx-auto leading-[26px]">
              Private island sanctuary in the pristine waters of the South Ari Atoll, accessible by scenic seaplane transfer.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))] leading-[22px]">Reef access</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))] leading-[22px]">•</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))] leading-[22px]">Sandbank dining</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))] leading-[22px]">•</span>
              <span className="rosewood-small font-gotham text-[hsl(var(--muted))] leading-[22px]">25 min seaplane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Accolades */}
      <section className="py-16 bg-background">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-8 text-center rosewood-fade-in">
          <div className="flex justify-center items-center gap-12 opacity-60 mb-4">
            <div className="h-9 w-24 bg-gray-200 rounded-[4px]"></div>
            <div className="h-9 w-32 bg-gray-200 rounded-[4px]"></div>
            <div className="h-9 w-28 bg-gray-200 rounded-[4px]"></div>
            <div className="h-9 w-30 bg-gray-200 rounded-[4px]"></div>
          </div>
          <p className="rosewood-small font-gotham text-[hsl(var(--muted))] leading-[22px]">
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
        
        <div className="relative z-10 text-center rosewood-fade-in">
          <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
            <h2 className="rosewood-h2 font-gotham-bold text-white mb-8 leading-[38px]">Experience Rosewood Maldives</h2>
            <CorporateButton className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/[0.99] text-white rosewood-transition focus:ring-2 focus:ring-[hsl(var(--brand-orange))] focus:ring-offset-2 focus:ring-offset-black px-8 py-3">
              Visit Official Website
            </CorporateButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RosewoodMaldives;