import { Helmet } from "react-helmet-async";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LazyImage } from "@/components/ui/lazy-image";
import rixosBaghdadImage from "@/assets/rixos-baghdad.jpg";
import { useState } from "react";
import { ExternalLink, MapPin, Calendar, Users, Utensils, Wifi, Dumbbell, Car } from "lucide-react";

const RixosBaghdad = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Gallery images - using placeholders as specified
  const galleryImages = [
    { url: "GALLERY_IMAGE_URL_01", alt: "Rixos Baghdad — Grand lobby" },
    { url: "GALLERY_IMAGE_URL_02", alt: "Rixos Baghdad — Executive suite" },
    { url: "GALLERY_IMAGE_URL_03", alt: "Rixos Baghdad — Business center" },
    { url: "GALLERY_IMAGE_URL_04", alt: "Rixos Baghdad — Event ballroom" },
    { url: "GALLERY_IMAGE_URL_05", alt: "Rixos Baghdad — Restaurant dining" },
    { url: "GALLERY_IMAGE_URL_06", alt: "Rixos Baghdad — Spa facilities" },
    { url: "GALLERY_IMAGE_URL_07", alt: "Rixos Baghdad — Fitness center" },
    { url: "GALLERY_IMAGE_URL_08", alt: "Rixos Baghdad — Rooftop terrace" },
  ];

  // Partner logos - using placeholders
  const partnerLogos = [
    { url: "PARTNER_LOGO_URL_01", alt: "Partner 1" },
    { url: "PARTNER_LOGO_URL_02", alt: "Partner 2" },
    { url: "PARTNER_LOGO_URL_03", alt: "Partner 3" },
    { url: "PARTNER_LOGO_URL_04", alt: "Partner 4" },
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://YOUR_DOMAIN/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Destinations",
            "item": "https://YOUR_DOMAIN/destinations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Rixos Baghdad",
            "item": "https://YOUR_DOMAIN/destinations/rixos-baghdad"
          }
        ]
      },
      {
        "@type": "LodgingBusiness",
        "name": "Rixos Baghdad",
        "description": "Contemporary hospitality in a storied capital offering business, events, and premium leisure with international standards.",
        "url": "OFFICIAL_WEBSITE_URL_PLACEHOLDER",
        "image": galleryImages.map(img => img.url),
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Baghdad",
          "addressCountry": "Iraq"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "GEO_LAT_PLACEHOLDER",
          "longitude": "GEO_LNG_PLACEHOLDER"
        },
        "containedInPlace": {
          "@type": "City",
          "name": "Baghdad, Iraq"
        },
        "amenityFeature": [
          {
            "@type": "LocationFeatureSpecification",
            "name": "Business Center",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Event Facilities",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Spa & Fitness",
            "value": true
          },
          {
            "@type": "LocationFeatureSpecification",
            "name": "Multiple Restaurants",
            "value": true
          }
        ]
      }
    ]
  };

  const scrollToExperiences = () => {
    document.getElementById('signature-experiences')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <Helmet>
        <title>Rixos Baghdad | Estithmar Venture</title>
        <meta 
          name="description" 
          content="A contemporary landmark in Baghdad offering business, events, and premium leisure with international standards." 
        />
        <link rel="canonical" href="https://YOUR_DOMAIN/destinations/rixos-baghdad" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Rixos Baghdad | Estithmar Venture" />
        <meta property="og:description" content="A contemporary landmark in Baghdad offering business, events, and premium leisure with international standards." />
        <meta property="og:image" content={rixosBaghdadImage} />
        <meta property="og:url" content="https://YOUR_DOMAIN/destinations/rixos-baghdad" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rixos Baghdad | Estithmar Venture" />
        <meta name="twitter:description" content="A contemporary landmark in Baghdad offering business, events, and premium leisure with international standards." />
        <meta name="twitter:image" content={rixosBaghdadImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="bg-[hsl(var(--rixos-white))]">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[hsl(var(--rixos-orange))] text-white px-4 py-2 rounded-md z-50">
          Skip to main content
        </a>

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="border-b border-[hsl(var(--border))]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="interactive-link font-gotham text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--rixos-orange))]">
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/destinations" className="interactive-link font-gotham text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--rixos-orange))]">
                    Destinations
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-gotham text-sm text-[hsl(var(--rixos-black))]">
                    Rixos Baghdad
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>

        {/* Hero Section */}
        <section 
          className="relative min-h-[60vh] flex items-center bg-[hsl(var(--rixos-black))] text-[hsl(var(--rixos-white))]"
          role="banner"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${rixosBaghdadImage})` }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="rixos-h1 font-gotham-bold text-[hsl(var(--rixos-white))] mb-6">
                Rixos Baghdad
              </h1>
              <p className="rixos-body font-gotham text-[hsl(var(--rixos-white))]/90 mb-8 max-w-2xl mx-auto">
                Contemporary hospitality in a storied capital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-[hsl(var(--rixos-orange))] text-[hsl(var(--rixos-white))] hover:bg-[hsl(var(--rixos-orange))]/90 rixos-transition font-gotham-medium px-8 py-3 h-auto"
                >
                  <a 
                    href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit Rixos Baghdad official website (opens in new tab)"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Official Website
                  </a>
                </Button>
                
                <Button 
                  variant="ghost-dark"
                  onClick={scrollToExperiences}
                  className="font-gotham-medium px-8 py-3 h-auto"
                >
                  Explore Business & Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Overview Section */}
          <section className="py-24 bg-[hsl(var(--rixos-white))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="rixos-h2 font-gotham-bold text-[hsl(var(--rixos-black))] mb-6">
                    Heritage Meets Modernity
                  </h2>
                  <p className="rixos-body font-gotham text-[hsl(var(--muted-foreground))] leading-relaxed">
                    Rixos Baghdad stands at the intersection of heritage and modernity. Designed for 
                    comfort, ceremony, and connection, it brings international standards to an iconic setting.
                  </p>
                </div>

                {/* Fact Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))]">
                    <CardContent className="p-6 text-center">
                      <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-orange))] mb-2">
                        Positioning
                      </h3>
                      <p className="font-gotham text-[hsl(var(--muted-foreground))]">City landmark</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))]">
                    <CardContent className="p-6 text-center">
                      <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-orange))] mb-2">
                        Focus
                      </h3>
                      <p className="font-gotham text-[hsl(var(--muted-foreground))]">Business, events, premium leisure</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))]">
                    <CardContent className="p-6 text-center">
                      <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-orange))] mb-2">
                        Signature
                      </h3>
                      <p className="font-gotham text-[hsl(var(--muted-foreground))]">Grand lobby, event venues</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))]">
                    <CardContent className="p-6 text-center">
                      <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-orange))] mb-2">
                        Operator
                      </h3>
                      <p className="font-gotham text-[hsl(var(--muted-foreground))]">Rixos</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Signature Experiences */}
          <section id="signature-experiences" className="py-24 bg-[hsl(var(--muted))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="rixos-h2 font-gotham-bold text-[hsl(var(--rixos-black))] mb-4">
                  Signature Experiences
                </h2>
                <p className="rixos-body font-gotham text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
                  Exceptional facilities designed for business excellence and premium leisure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))] hover:shadow-md rixos-transition">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[hsl(var(--rixos-orange))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Wifi className="w-8 h-8 text-[hsl(var(--rixos-orange))]" />
                    </div>
                    <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-black))] mb-4">
                      Executive Lounges & Business Amenities
                    </h3>
                    <p className="font-gotham text-[hsl(var(--muted-foreground))]">
                      Quiet capability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))] hover:shadow-md rixos-transition">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[hsl(var(--rixos-orange))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-[hsl(var(--rixos-orange))]" />
                    </div>
                    <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-black))] mb-4">
                      Events & Ballrooms
                    </h3>
                    <p className="font-gotham text-[hsl(var(--muted-foreground))]">
                      Scale with refinement.
                    </p>
                  </CardContent>
                </Card>

                <Card className="rounded-md border border-[hsl(var(--border))] shadow-sm bg-[hsl(var(--rixos-white))] hover:shadow-md rixos-transition">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-[hsl(var(--rixos-orange))]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Utensils className="w-8 h-8 text-[hsl(var(--rixos-orange))]" />
                    </div>
                    <h3 className="rixos-h3 font-gotham-bold text-[hsl(var(--rixos-black))] mb-4">
                      Culinary Variety
                    </h3>
                    <p className="font-gotham text-[hsl(var(--muted-foreground))]">
                      Regional depth, international breadth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Visual Gallery */}
          <section className="py-24 bg-[hsl(var(--rixos-white))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="rixos-h2 font-gotham-bold text-[hsl(var(--rixos-black))] mb-4">
                  Visual Gallery
                </h2>
                <p className="rixos-body font-gotham text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
                  Explore the spaces that define contemporary Baghdad hospitality.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                     key={index}
                    className="aspect-[4/3] cursor-pointer group transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                    onClick={() => setLightboxImage(image.url)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setLightboxImage(image.url);
                      }
                    }}
                    aria-label={`View larger image: ${image.alt}`}
                  >
                    <div className="w-full h-full bg-[hsl(var(--muted))] rounded-md overflow-hidden group-hover:opacity-90 group-hover:shadow-md group-active:scale-[0.99] transition-all duration-200 ease-out">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[hsl(var(--muted-foreground))] font-gotham text-sm">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Location / Map */}
          <section className="py-24 bg-[hsl(var(--muted))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="rixos-h2 font-gotham-bold text-[hsl(var(--rixos-black))] mb-6">
                    <MapPin className="w-8 h-8 text-[hsl(var(--rixos-orange))] inline-block mr-3" />
                    Prime Location
                  </h2>
                  <p className="rixos-body font-gotham text-[hsl(var(--muted-foreground))] mb-6">
                    Located in central Baghdad with direct access to civic and commercial districts.
                  </p>
                  <p className="rixos-body font-gotham text-[hsl(var(--muted-foreground))]">
                    ADDRESS_PLACEHOLDER
                  </p>
                </div>

                <div className="aspect-video bg-[hsl(var(--border))] rounded-md overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-[hsl(var(--muted-foreground))] font-gotham">
                      MAP_EMBED_URL_PLACEHOLDER
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partners & Accolades */}
          <section className="py-24 bg-[hsl(var(--rixos-white))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="rixos-h2 font-gotham-bold text-[hsl(var(--rixos-black))] mb-4">
                  Partners & Recognition
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {partnerLogos.map((logo, index) => (
                  <div 
                    key={index}
                    className="bg-[hsl(var(--rixos-white))] p-6 rounded-md border border-[hsl(var(--border))] shadow-sm h-24 flex items-center justify-center"
                  >
                    <span 
                      className="text-[hsl(var(--muted-foreground))] font-gotham text-sm"
                      aria-label={logo.alt}
                    >
                      {logo.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="py-24 bg-[hsl(var(--rixos-black))] text-[hsl(var(--rixos-white))]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="rixos-h2 font-gotham-bold text-[hsl(var(--rixos-white))] mb-6">
                Discover Rixos Baghdad
              </h2>
              <p className="rixos-body font-gotham text-[hsl(var(--rixos-white))]/90 mb-8 max-w-2xl mx-auto">
                Experience where heritage meets contemporary hospitality in Baghdad's premier business destination.
              </p>
              <Button 
                asChild
                className="bg-[hsl(var(--rixos-orange))] text-[hsl(var(--rixos-white))] hover:bg-[hsl(var(--rixos-orange))]/90 rixos-transition font-gotham-medium px-8 py-3 h-auto"
              >
                <a 
                  href="OFFICIAL_WEBSITE_URL_PLACEHOLDER" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit Rixos Baghdad official website (opens in new tab)"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Official Website
                </a>
              </Button>
            </div>
          </section>
        </main>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <div 
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-[hsl(var(--rixos-orange))] rixos-transition"
                aria-label="Close lightbox"
              >
                <span className="text-2xl">&times;</span>
              </button>
              <div className="bg-[hsl(var(--muted))] rounded-md p-8 flex items-center justify-center min-h-[400px]">
                <span className="text-[hsl(var(--muted-foreground))] font-gotham">
                  {lightboxImage}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RixosBaghdad;