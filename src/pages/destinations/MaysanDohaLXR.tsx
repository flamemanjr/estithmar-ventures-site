import { CorporateButton } from "@/components/ui/corporate-button";
import maysanDohaImage from "@/assets/maysan-doha.jpg";

const MaysanDohaLXR = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${maysanDohaImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-gotham-bold text-white mb-4">Maysan Doha LXR</h1>
            <p className="text-xl font-gotham text-white/90">
              A private sanctuary of wellness and heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-16">
              Maysan Doha LXR is designed as a calm, private world—where Arabian architecture, 
              contemporary craft, and thoughtful service create space to reset and reconnect.
            </p>

            {/* Fact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Wellness</h3>
                <p className="font-gotham text-muted-foreground">& Retreat</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Contemporary</h3>
                <p className="font-gotham text-muted-foreground">Arabian Design</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-lg font-gotham-bold text-primary mb-2">Spa</h3>
                <p className="font-gotham text-muted-foreground">Private Club</p>
              </div>
            </div>

            {/* Experiences */}
            <div>
              <h2 className="text-3xl font-gotham-bold text-foreground mb-8">Experiences</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Holistic spa and thermal suites
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Garden courtyards and quiet lounges
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Chef-led, ingredient-driven dining
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

export default MaysanDohaLXR;