import { CorporateButton } from "@/components/ui/corporate-button";
import rosewoodMaldivesImage from "@/assets/rosewood-maldives.jpg";

const RosewoodMaldives = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${rosewoodMaldivesImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-gotham-bold text-white mb-4">Rosewood Maldives</h1>
            <p className="text-xl font-gotham text-white/90">
              Ultra-luxury island living, refined to its essence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-16">
              In the Maldives, simplicity becomes sophistication. Rosewood Maldives pairs 
              architecture attuned to the ocean with service that feels natural, intuitive, 
              and deeply personal.
            </p>

            {/* Fact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Overwater</h3>
                <p className="font-gotham text-muted-foreground">& Beachfront</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Privacy</h3>
                <p className="font-gotham text-muted-foreground">Calm, Precision</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Ocean-first</h3>
                <p className="font-gotham text-muted-foreground">Design</p>
              </div>
            </div>

            {/* Experiences */}
            <div>
              <h2 className="text-3xl font-gotham-bold text-foreground mb-8">Experiences</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Private marine excursions
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Spa rituals with ocean botanicals
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Chef's table and destination dining
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

export default RosewoodMaldives;