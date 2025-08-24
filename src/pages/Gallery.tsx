const galleryImages = [
  { id: 1, category: "Al Maha Island", alt: "Al Maha Island dining area at sunset" },
  { id: 2, category: "Katara Hills LXR", alt: "Katara Hills villa with city views" },
  { id: 3, category: "Maysan Doha LXR", alt: "Maysan spa courtyard garden" },
  { id: 4, category: "Rosewood Maldives", alt: "Overwater villa at Rosewood Maldives" },
  { id: 5, category: "Rixos Baghdad", alt: "Rixos Baghdad grand lobby" },
  { id: 6, category: "Al Maha Island", alt: "Al Maha Island family entertainment area" },
  { id: 7, category: "Katara Hills LXR", alt: "Scandinavian-inspired villa interior" },
  { id: 8, category: "Maysan Doha LXR", alt: "Arabian architecture detail" },
  { id: 9, category: "Rosewood Maldives", alt: "Private beach dining setup" },
  { id: 10, category: "Rixos Baghdad", alt: "Executive lounge with city views" },
  { id: 11, category: "Events", alt: "Corporate event at destination" },
  { id: 12, category: "Events", alt: "Cultural celebration at Al Maha Island" }
];

const Gallery = () => {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-gotham-bold text-foreground mb-8">On the Ground</h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              A visual snapshot of our destinations, partnerships, and programs.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-muted border border-border overflow-hidden corporate-transition group-hover:shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs font-gotham-medium text-muted-foreground mb-2">
                        {image.category}
                      </div>
                      <div className="text-xs font-gotham text-muted-foreground">
                        {image.alt}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-gotham-bold text-foreground mb-6">Follow Our Journey</h2>
          <p className="font-gotham text-muted-foreground mb-8">
            Connect with us on social media for the latest updates and behind-the-scenes content.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary corporate-transition font-gotham-medium"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary corporate-transition font-gotham-medium"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary corporate-transition font-gotham-medium"
            >
              Twitter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;