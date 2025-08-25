import { CorporateButton } from "@/components/ui/corporate-button";
import maysanDohaImage from "@/assets/maysan-doha.jpg";

const MaysanDohaLXR = () => {
  return (
    <div className="bg-background">
      {/* Hero Section - Centered, serene */}
      <section className="relative h-[24rem] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${maysanDohaImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="maysan-h1 font-gotham-bold text-white mb-6">Maysan Doha LXR</h1>
            <p className="maysan-body font-gotham text-white/90 max-w-lg mx-auto">
              A private sanctuary of wellness and heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section - Two Column Layout */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="maysan-eyebrow font-gotham-medium text-katara-muted mb-12 text-center">
            Overview
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - 58% */}
            <div className="lg:col-span-3">
              <p className="maysan-body font-gotham text-ink leading-relaxed">
                Maysan Doha LXR is designed as a calm, private world—where Arabian architecture, 
                contemporary craft, and thoughtful service create space to reset and reconnect. 
                This sanctuary balances heritage with innovation, offering an intimate escape 
                from the energy of the city.
              </p>
            </div>
            
            {/* Right Column - Fact Cards in Sand Panel */}
            <div className="lg:col-span-2">
              <div className="bg-sand p-8 border border-line">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Wellness</h3>
                    <p className="maysan-small font-gotham text-katara-muted">& Retreat</p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Contemporary</h3>
                    <p className="maysan-small font-gotham text-katara-muted">Arabian Design</p>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Spa</h3>
                    <p className="maysan-small font-gotham text-katara-muted">Private Club</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rituals Section - NEW */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="flex-1">
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Arrive</h3>
              <p className="maysan-small font-gotham text-katara-muted">Enter a world of calm</p>
            </div>
            
            <div className="w-2 h-2 bg-brand-orange rounded-full hidden md:block"></div>
            
            <div className="flex-1">
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Restore</h3>
              <p className="maysan-small font-gotham text-katara-muted">Renew mind and body</p>
            </div>
            
            <div className="w-2 h-2 bg-brand-orange rounded-full hidden md:block"></div>
            
            <div className="flex-1">
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-2">Reconnect</h3>
              <p className="maysan-small font-gotham text-katara-muted">Return refreshed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-4">Signature Experiences</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="maysan-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-sand border border-line mb-6"></div>
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-3">Holistic Spa & Thermal Suites</h3>
              <p className="maysan-small font-gotham text-katara-muted">Reset at your pace.</p>
            </div>
            
            <div className="maysan-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-sand border border-line mb-6"></div>
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-3">Garden Courtyards & Quiet Lounges</h3>
              <p className="maysan-small font-gotham text-katara-muted">Architectural calm.</p>
            </div>
            
            <div className="maysan-transition hover:shadow-sm hover:-translate-y-0.5">
              <div className="aspect-[3/2] bg-sand border border-line mb-6"></div>
              <h3 className="maysan-h3 font-gotham-bold text-ink mb-3">Chef-Led, Ingredient-Driven Dining</h3>
              <p className="maysan-small font-gotham text-katara-muted">Refined, seasonal menus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-paper border border-line p-8 text-center">
            <h2 className="maysan-h2 font-gotham-bold text-ink mb-8">Location</h2>
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="maysan-small font-gotham text-katara-muted">Doha waterfront</span>
                <span className="maysan-small font-gotham text-ink">10 min</span>
              </div>
              <div className="flex justify-between">
                <span className="maysan-small font-gotham text-katara-muted">Cultural venues</span>
                <span className="maysan-small font-gotham text-ink">8–12 min</span>
              </div>
              <div className="flex justify-between">
                <span className="maysan-small font-gotham text-katara-muted">Airport</span>
                <span className="maysan-small font-gotham text-ink">25 min</span>
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

      {/* CTA Banner */}
      <section className="relative py-20 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${maysanDohaImage})` }}
        >
          <div className="absolute inset-0 bg-black/75"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <CorporateButton className="bg-brand-orange text-white hover:bg-brand-orange/90 border-0">
              Visit Official Website
            </CorporateButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaysanDohaLXR;