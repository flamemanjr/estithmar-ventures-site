import { Link } from "react-router-dom";
import { CorporateButton } from "@/components/ui/corporate-button";

const About = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-gotham-bold text-foreground mb-8">
              A Clear Standard for Excellence
            </h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              Estithmar Ventures is a leader in luxury hospitality and entertainment development. 
              From Doha to the Indian Ocean, we turn vision into destinations that people remember. 
              Backed by Estithmar Holding, we combine the strength of a diversified group with the 
              precision of boutique execution. The result: projects delivered on time, with rigor, 
              and with care.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Ethos */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">
              Built on Trust. Driven by Outcomes.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Integrity</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                Partnerships that last begin with clarity, transparency, and accountability.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Innovation</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                We anticipate tomorrow's needs and design for them today.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Consistency</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                Excellence is a habit—reflected in every detail, every market.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Experience</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                True luxury is lived. We engineer the conditions for memorable moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-12 text-center">
              What Sets Us Apart
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  Proven delivery in complex markets
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  Operational partnerships with elite brands
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  Stakeholder-first governance and reporting
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  Calm, precise design and execution standards
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <CorporateButton asChild>
                <Link to="/destinations">Explore Our Destinations</Link>
              </CorporateButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;