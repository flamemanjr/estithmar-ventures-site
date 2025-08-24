import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const destinations = [
  { name: "Al Maha Island", path: "/destinations/al-maha-island" },
  { name: "Katara Hills LXR", path: "/destinations/katara-hills-lxr" },
  { name: "Maysan Doha LXR", path: "/destinations/maysan-doha-lxr" },
  { name: "Rosewood Maldives", path: "/destinations/rosewood-maldives" },
  { name: "Rixos Baghdad", path: "/destinations/rixos-baghdad" },
];

export const Navigation = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/lovable-uploads/eaf0d3be-5c3e-463b-82ab-abc84fac666c.png"
              alt="Estithmar Ventures"
              className="h-20 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={cn(
                "text-sm font-gotham-medium corporate-transition hover:text-primary",
                isActive("/") ? "text-primary" : "text-foreground"
              )}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={cn(
                "text-sm font-gotham-medium corporate-transition hover:text-primary",
                isActive("/about") ? "text-primary" : "text-foreground"
              )}
            >
              About Us
            </Link>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDestinationsOpen(true)}
              onMouseLeave={() => setIsDestinationsOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-gotham-medium corporate-transition hover:text-primary",
                  location.pathname.startsWith("/destinations") ? "text-primary" : "text-foreground"
                )}
              >
                Destinations
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isDestinationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border shadow-lg">
                  {destinations.map((destination) => (
                    <Link
                      key={destination.path}
                      to={destination.path}
                      className="block px-4 py-3 text-sm font-gotham corporate-transition hover:bg-muted hover:text-primary"
                    >
                      {destination.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/team"
              className={cn(
                "text-sm font-gotham-medium corporate-transition hover:text-primary",
                isActive("/team") ? "text-primary" : "text-foreground"
              )}
            >
              Executive Team
            </Link>

            <Link
              to="/news"
              className={cn(
                "text-sm font-gotham-medium corporate-transition hover:text-primary",
                isActive("/news") ? "text-primary" : "text-foreground"
              )}
            >
              News & Events
            </Link>

            <Link
              to="/gallery"
              className={cn(
                "text-sm font-gotham-medium corporate-transition hover:text-primary",
                isActive("/gallery") ? "text-primary" : "text-foreground"
              )}
            >
              Social Media / Gallery
            </Link>

            <Link
              to="/contact"
              className={cn(
                "text-sm font-gotham-medium corporate-transition hover:text-primary",
                isActive("/contact") ? "text-primary" : "text-foreground"
              )}
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button - placeholder for future implementation */}
          <div className="md:hidden">
            <button className="text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};