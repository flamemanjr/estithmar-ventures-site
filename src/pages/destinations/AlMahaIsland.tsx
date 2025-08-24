import { CorporateButton } from "@/components/ui/corporate-button";
import alMahaImage from "@/assets/al-maha-island.jpg";

const AlMahaIsland = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${alMahaImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-gotham-bold text-white mb-4">Al Maha Island</h1>
            <p className="text-xl font-gotham text-white/90">
              Qatar's premier leisure and entertainment destination.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed mb-16">
              Al Maha Island brings world-class dining, entertainment, and seasonal programs together 
              on Doha's doorstep. Designed for scale and seamless operations, the island welcomes 
              residents and visitors to a curated mix of signature restaurants, family experiences, 
              and headline events.
            </p>

            {/* Fact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-2xl font-gotham-bold text-primary mb-2">1.5M+</h3>
                <p className="font-gotham text-muted-foreground">Visitors Annually</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-2xl font-gotham-bold text-primary mb-2">2022</h3>
                <p className="font-gotham text-muted-foreground">Launch Year</p>
              </div>
              
              <div className="bg-card border border-border p-6 text-center">
                <h3 className="text-2xl font-gotham-bold text-primary mb-2">Global</h3>
                <p className="font-gotham text-muted-foreground">Signature Partners</p>
              </div>
            </div>

            {/* Experiences */}
            <div>
              <h2 className="text-3xl font-gotham-bold text-foreground mb-8">Experiences</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Dining & lounges by international operators
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Seasonal entertainment and family programming
                  </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                  <p className="font-gotham text-foreground">
                    Event zones designed for flow and capacity
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

export default AlMahaIsland;