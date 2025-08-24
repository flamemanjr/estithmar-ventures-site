import { CorporateButton } from "@/components/ui/corporate-button";
import kataraHillsImage from "@/assets/katara-hills.jpg";

const KataraHillsLXR = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${kataraHillsImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-gotham-bold text-white mb-4">Katara Hills LXR</h1>
            <p className="text-xl font-gotham text-white/90">
              Elevated villa living above Doha's cultural heart.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-16">
              Katara Hills LXR blends Scandinavian simplicity with Qatari landscape and light. 
              Private villas overlook the Katara district, pairing privacy with immediate access 
              to culture, cuisine, and the waterfront.
            </p>

            {/* Fact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Private</h3>
                <p className="font-gotham text-muted-foreground">Low-density Villas</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Panoramic</h3>
                <p className="font-gotham text-muted-foreground">City and Sea Views</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Cultural</h3>
                <p className="font-gotham text-muted-foreground">Proximity to Culture</p>
              </div>
            </div>

            {/* Experiences */}
            <div>
              <h2 className="text-3xl font-gotham-bold text-foreground mb-8">Experiences</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Discreet service and curated dining
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Wellness-forward amenities
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Direct connection to Katara's cultural venues
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <CorporateButton>
                Visit Official Website
              </CorporateButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KataraHillsLXR;