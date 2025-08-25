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
            <div className="max-w-lg">
              <h1 className="rosewood-h1 font-gotham-bold text-white mb-6">Rosewood Maldives</h1>
              <p className="rosewood-body font-gotham text-white/90 mb-8 leading-relaxed">
                Ultra-luxury island living, refined to its essence.
              </p>
              <div className="flex gap-4">
                <CorporateButton variant="primary" className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 rosewood-transition">
                  Explore Resort
                </CorporateButton>
                <CorporateButton variant="outline" className="border-white text-white hover:bg-white hover:text-black rosewood-transition">
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
            <div className="bg-white border border-[hsl(var(--line))] overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-gradient-to-br from-blue-50 to-blue-100"></div>
              <div className="p-6">
                <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-2">Marine Excursions</h3>
                <p className="rosewood-body font-gotham text-[hsl(var(--muted-foreground))]">Private yacht discoveries through pristine reefs and secluded atolls</p>
              </div>
            </div>
            
            <div className="bg-white border border-[hsl(var(--line))] overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-gradient-to-br from-teal-50 to-teal-100"></div>
              <div className="p-6">
                <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-2">Ocean Botanicals Spa</h3>
                <p className="rosewood-body font-gotham text-[hsl(var(--muted-foreground))]">Healing rituals inspired by marine botanicals and tidal rhythms</p>
              </div>
            </div>
            
            <div className="bg-white border border-[hsl(var(--line))] overflow-hidden rosewood-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-gradient-to-br from-amber-50 to-amber-100"></div>
              <div className="p-6">
                <h3 className="rosewood-h3 font-gotham-bold text-[hsl(var(--ink))] mb-2">Destination Dining</h3>
                <p className="rosewood-body font-gotham text-[hsl(var(--muted-foreground))]">Chef's table experiences on private sandbanks at sunset</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${rosewoodMaldivesImage})` }}
        >
          <div className="absolute inset-0 bg-black/[0.1]"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="rosewood-h2 font-gotham-bold text-white mb-8">Experience Rosewood Maldives</h2>
            <CorporateButton className="bg-[hsl(var(--brand-orange))] hover:bg-[hsl(var(--brand-orange))]/90 text-white rosewood-transition focus:ring-2 focus:ring-[hsl(var(--brand-orange))] focus:ring-offset-2">
              Visit Official Website
            </CorporateButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RosewoodMaldives;