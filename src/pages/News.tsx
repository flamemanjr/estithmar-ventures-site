import { useState } from "react";

const newsItems = [
  {
    id: 1,
    category: "Press Releases",
    title: "Estithmar Ventures Announces Strategic Partnership with Rosewood Hotels",
    date: "March 15, 2024",
    excerpt: "New collaboration will bring ultra-luxury hospitality standards to Maldives development..."
  },
  {
    id: 2,
    category: "Events",
    title: "Al Maha Island Hosts International Culinary Festival",
    date: "March 10, 2024",
    excerpt: "Three-day event showcases world-class dining experiences with Michelin-starred chefs..."
  },
  {
    id: 3,
    category: "Announcements",
    title: "Katara Hills LXR Wins Architecture Excellence Award",
    date: "February 28, 2024",
    excerpt: "Project recognized for innovative design blending Scandinavian and Qatari influences..."
  },
  {
    id: 4,
    category: "Press Releases",
    title: "Maysan Doha LXR Wellness Center Opens to Guests",
    date: "February 20, 2024",
    excerpt: "State-of-the-art facility features holistic spa treatments and thermal suites..."
  },
  {
    id: 5,
    category: "Events",
    title: "Leadership Summit on Middle East Hospitality Investment",
    date: "February 15, 2024",
    excerpt: "Industry leaders gather to discuss future of luxury hospitality development..."
  },
  {
    id: 6,
    category: "Announcements",
    title: "Rixos Baghdad Expansion Project Approved",
    date: "January 30, 2024",
    excerpt: "Development will add 150 additional rooms and expanded conference facilities..."
  }
];

const categories = ["All", "Press Releases", "Events", "Announcements"];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredNews = selectedCategory === "All" 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-gotham-bold text-foreground mb-8">News & Events</h1>
            <p className="text-lg font-gotham text-muted-foreground leading-relaxed">
              Updates on project milestones, partnerships, and market activity.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and News List */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 font-gotham-medium text-sm corporate-transition border ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div key={item.id} className="bg-card border border-border p-6 group cursor-pointer corporate-transition hover:shadow-lg">
                <div className="w-full h-32 bg-muted mb-4"></div>
                <div className="text-xs font-gotham-medium text-primary mb-2">
                  {item.category}
                </div>
                <h3 className="text-lg font-gotham-bold text-foreground mb-3 group-hover:text-primary corporate-transition">
                  {item.title}
                </h3>
                <p className="text-sm font-gotham text-muted-foreground mb-4 leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-gotham text-muted-foreground">{item.date}</span>
                  <span className="text-sm font-gotham-medium text-primary group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;