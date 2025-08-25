import { useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ChevronRight, MapPin, Home, Eye, Sparkles } from "lucide-react";
import { CorporateButton } from "@/components/ui/corporate-button";
import { ImageSkeleton } from "@/components/ui/image-skeleton";
import { ProgressiveLoader } from "@/components/ui/progressive-loader";
import kataraHillsImage from "/lovable-uploads/2279181b-8e3e-4789-a205-88d461bcde4f.png";
const KataraHillsLXR = () => {
  useEffect(() => {
    document.title = "Katara Hills LXR | Estithmar Ventures";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Private, low-density villas with panoramic views above Doha\'s cultural district.');
    }
  }, []);
  const scrollToVillas = () => {
    const element = document.getElementById('villas-amenities');
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <div className="bg-background">
      {/* Breadcrumbs */}
      <section className="py-4 bg-paper border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 katara-small font-gotham">
            <Link to="/" className="text-katara-muted hover:text-ink katara-transition">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-katara-muted" />
            <Link to="/destinations" className="text-katara-muted hover:text-ink katara-transition">
              Destinations
            </Link>
            <ChevronRight className="w-4 h-4 text-katara-muted" />
            <span className="text-ink font-gotham-medium">Katara Hills LXR</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[75vh] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${kataraHillsImage})`
      }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="katara-h1 font-gotham-medium text-white mb-8">Katara Hills LXR</h1>
              <p className="katara-body font-gotham text-white/90 mb-12 max-w-lg leading-relaxed">
                Elevated villa living above Doha's cultural heart.
              </p>
              
              <div className="flex flex-row gap-4">
                <CorporateButton asChild size="lg">
                  <a href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded-2xl katara-transition font-gotham-medium">
                    Visit Official Website
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </CorporateButton>
                <CorporateButton variant="outline" size="lg" onClick={scrollToVillas} className="text-white border-white/60 hover:bg-white hover:text-ink px-6 py-3 rounded-2xl backdrop-blur-sm bg-white/5 katara-transition font-gotham-medium">
                  View Villas & Amenities
                </CorporateButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <ProgressiveLoader delay={100}>
        <section className="py-20 bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-7">
                <div className="katara-eyebrow mb-6">Overview</div>
                <h2 className="katara-h2 font-gotham-medium text-ink mb-8">Architecture meets tranquility</h2>
                <div className="max-w-lg">
                  <p className="katara-body font-gotham text-ink leading-relaxed">An intimate, low-density villa enclave above Katara, LXR at Katara Hills blends Scandinavian discipline with Qatari context to deliver privacy, proximity, and performance. Guests gain immediate access to cultural venues, dining, and the waterfront while enjoying panoramic outlooks and wellness-forward amenities. Architecture and operations are purposefully restrained—elevating experience, protecting quiet, and sustaining value.</p>
                </div>
              </div>
              
              {/* Fact Cards */}
              <div className="lg:col-span-5">
                <div className="bg-stone p-8 rounded space-y-6">
                  <div className="border border-line bg-paper p-6 rounded katara-transition hover:shadow-md hover:border-brand-orange/30 cursor-pointer group">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-ink/5 group-hover:bg-brand-orange/10 rounded flex items-center justify-center mr-4 katara-transition">
                        <Home className="w-6 h-6 text-ink group-hover:text-brand-orange katara-transition" />
                      </div>
                      <div>
                        <div className="katara-h3 font-gotham-medium text-ink group-hover:text-brand-orange katara-transition">Villas</div>
                        <div className="katara-small font-gotham text-katara-muted">Low-density private villas</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-line bg-paper p-6 rounded katara-transition hover:shadow-md hover:border-brand-orange/30 cursor-pointer group">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-ink/5 group-hover:bg-brand-orange/10 rounded flex items-center justify-center mr-4 katara-transition">
                        <Eye className="w-6 h-6 text-ink group-hover:text-brand-orange katara-transition" />
                      </div>
                      <div>
                        <div className="katara-h3 font-gotham-medium text-ink group-hover:text-brand-orange katara-transition">Outlook</div>
                        <div className="katara-small font-gotham text-katara-muted">Panoramic city & sea views</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border border-line bg-paper p-6 rounded katara-transition hover:shadow-md hover:border-brand-orange/30 cursor-pointer group">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-ink/5 group-hover:bg-brand-orange/10 rounded flex items-center justify-center mr-4 katara-transition">
                        <Sparkles className="w-6 h-6 text-ink group-hover:text-brand-orange katara-transition" />
                      </div>
                      <div>
                        <div className="katara-h3 font-gotham-medium text-ink group-hover:text-brand-orange katara-transition">Focus</div>
                        <div className="katara-small font-gotham text-katara-muted">Quiet luxury, proximity to culture</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Signature Experiences */}
      <ProgressiveLoader delay={300}>
        <section id="villas-amenities" className="py-20 bg-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="katara-eyebrow mb-6">Signature Experiences</div>
              <h2 className="katara-h2 font-gotham-medium text-ink">Curated for tranquility</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="border border-line bg-paper p-8 rounded katara-transition hover:shadow-sm hover:translate-y-0.5">
                <div className="aspect-[3/2] rounded mb-6 overflow-hidden">
                  <img 
                    src="/lovable-uploads/1dfa42a0-1539-4f15-a027-7730182a0ee6.png" 
                    alt="Luxury dining terrace with panoramic city views" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="katara-h3 font-gotham-medium text-ink mb-3">Discreet Service & Dining</h3>
                <p className="katara-body font-gotham text-katara-muted leading-relaxed">
                  Tailored in-villa and on-property options.
                </p>
              </div>
              
              <div className="border border-line bg-paper p-8 rounded katara-transition hover:shadow-sm hover:translate-y-0.5">
                <div className="aspect-[3/2] rounded mb-6 overflow-hidden">
                  <img 
                    src="/lovable-uploads/5220b77d-ee1e-407a-9b0f-1c7d00a5ae83.png" 
                    alt="Modern villa terrace with infinity pool and panoramic views" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="katara-h3 font-gotham-medium text-ink mb-3">Wellness-forward Amenities</h3>
                <p className="katara-body font-gotham text-katara-muted leading-relaxed">
                  Spa, fitness, and nature-led spaces.
                </p>
              </div>
              
              <div className="border border-line bg-paper p-8 rounded katara-transition hover:shadow-sm hover:translate-y-0.5">
                <div className="aspect-[3/2] rounded mb-6 overflow-hidden">
                  <img 
                    src="/lovable-uploads/e0cf8caf-cd5c-45b7-b146-a8901553930a.png" 
                    alt="Traditional Islamic architecture at Katara Cultural Village" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="katara-h3 font-gotham-medium text-ink mb-3">Cultural Access</h3>
                <p className="katara-body font-gotham text-katara-muted leading-relaxed">
                  Direct connection to Katara's venues.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Visual Gallery */}
      <ProgressiveLoader delay={500}>
        <section className="py-20 bg-stone">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="katara-eyebrow mb-6">Visual Gallery</div>
              <h2 className="katara-h2 font-gotham-medium text-ink mb-4">Villas, interiors, terraces, and dusk scenes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from({
              length: 8
            }).map((_, index) => <div key={index} className={`bg-paper border border-line aspect-[4/3] ${index === 0 || index === 7 ? 'md:aspect-[3/2]' : ''} group cursor-pointer overflow-hidden rounded katara-transition hover:shadow-sm`}>
                  {index === 0 ? (
                    <img 
                      src="https://strapi.katara.net/uploads/katara_Dron4_ad47d97ea2.png" 
                      alt="Katara Cultural Center" 
                      className="w-full h-full object-cover group-hover:scale-105 katara-transition"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-ink/5 to-ink/10 flex items-center justify-center group-hover:from-ink/10 group-hover:to-ink/15 katara-transition">
                      <ImageSkeleton className="w-full h-full" />
                    </div>
                  )}
                </div>)}
            </div>
          </div>
        </section>
      </ProgressiveLoader>

      {/* Location & Map */}
      <ProgressiveLoader delay={700}>
        <section className="py-20 bg-paper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="katara-eyebrow mb-6">Location</div>
                <h2 className="katara-h2 font-gotham-medium text-ink mb-8">Above Doha's cultural heart</h2>
                <div className="max-w-lg space-y-4 mb-8">
                  <p className="katara-body font-gotham text-ink leading-relaxed">
                    Positioned above the vibrant Katara Cultural Village, offering elevated views and direct access to Doha's premier cultural district.
                  </p>
                  <p className="katara-body font-gotham text-katara-muted leading-relaxed">
                    Minutes from the waterfront, galleries, theaters, and world-class dining.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="katara-small font-gotham-medium text-ink mb-3">Proximity</div>
                  <div className="space-y-2 katara-small">
                    <div className="flex items-center text-katara-muted">
                      <div className="w-1 h-1 bg-katara-muted rounded-full mr-3"></div>
                      Katara Cultural Village — 3 min
                    </div>
                    <div className="flex items-center text-katara-muted">
                      <div className="w-1 h-1 bg-katara-muted rounded-full mr-3"></div>
                      Doha waterfront — 5 min
                    </div>
                    <div className="flex items-center text-katara-muted">
                      <div className="w-1 h-1 bg-katara-muted rounded-full mr-3"></div>
                      Theaters & galleries — 2–6 min
                    </div>
                  </div>
                </div>

                <div className="flex items-center katara-small font-gotham text-katara-muted mt-8">
                  <MapPin className="w-4 h-4 mr-2 text-brand-orange" />
                  Katara Cultural Village, Doha
                </div>
              </div>
              
              <div className="border border-line bg-gradient-to-br from-ink/5 to-ink/10 h-80 rounded flex items-center justify-center">
                <ImageSkeleton className="w-full h-full rounded" />
              </div>
            </div>
          </div>
        </section>
      </ProgressiveLoader>


      {/* CTA Banner */}
      <section className="py-24 relative overflow-hidden" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${kataraHillsImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="katara-h2 font-gotham-medium text-white mb-8">
            Discover Katara Hills LXR
          </h2>
          <CorporateButton asChild size="lg">
            <a href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-3 rounded katara-transition font-gotham-medium">
              Visit Official Website
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </CorporateButton>
        </div>
      </section>
    </div>;
};
export default KataraHillsLXR;