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
              Leading Qatar's Hospitality Investment Evolution
            </h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              As a subsidiary of Estithmar Holding, Estithmar Ventures spearheads luxury hospitality development across Qatar and the wider region. We transform innovative concepts into world-class destinations that strengthen Qatar's tourism ecosystem and deliver exceptional returns for stakeholders. Our portfolio spans from Doha's cultural districts to international markets, combining strategic investment expertise with operational excellence to create lasting value in the hospitality sector.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Ethos */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-gotham-bold text-foreground mb-6">
              Our Investment Philosophy: Qatar's Tourism Vision
            </h2>
            <p className="text-lg font-gotham text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              Aligned with Qatar National Vision 2030, we develop hospitality assets that diversify the economy, enhance the nation's tourism appeal, and create sustainable value through strategic partnerships with global hospitality leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Strategic Investment</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                Every hospitality investment decision supports Qatar's economic diversification goals while delivering measurable returns and operational excellence.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Global Standards</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                We partner with internationally recognized hospitality brands to establish Qatar as a premier luxury travel destination in the Middle East.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Market Leadership</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                As part of Estithmar Holding's diversified portfolio, we lead hospitality development projects that position Qatar competitively in global tourism markets.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-gotham-bold text-foreground mb-4">Operational Excellence</h3>
              <p className="font-gotham text-muted-foreground leading-relaxed">
                Through proven partnerships and rigorous operational oversight, we ensure each destination delivers exceptional guest experiences and sustainable financial performance.
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
              Competitive Advantages in Qatar's Hospitality Market
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  <strong>Estithmar Holding backing:</strong> Robust financial foundation for large-scale hospitality investments across Qatar and the region
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  <strong>International brand partnerships:</strong> Strategic alliances with LXR Hotels & Resorts, Rixos, and other premium hospitality operators
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  <strong>Qatar tourism alignment:</strong> Development projects that enhance the nation's hospitality infrastructure and visitor appeal
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary mr-4 flex-shrink-0"></div>
                <p className="font-gotham text-foreground">
                  <strong>Proven track record:</strong> Successful delivery of complex hospitality projects from concept through operational excellence
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