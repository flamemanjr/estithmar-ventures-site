import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { LazyImage } from "@/components/ui/lazy-image";
import { cn } from "@/lib/utils";

const destinations = [
  { name: "Al Maha Island", path: "/destinations/al-maha-island" },
  { name: "Katara Hills LXR", path: "/destinations/katara-hills-lxr" },
  { name: "Maysan Doha LXR", path: "/destinations/maysan-doha-lxr" },
  { name: "Rosewood Maldives", path: "/destinations/rosewood-maldives" },
  { name: "Rixos Baghdad", path: "/destinations/rixos-baghdad" },
];

const mediaItems = [
  { name: "News & Events", path: "/news" },
  { name: "Social Media / Gallery", path: "/gallery" },
];

const aboutItems = [
  { name: "Executive Team", path: "/team" },
];

export const Navigation = () => {
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 absolute left-0 pl-4 sm:pl-6 lg:pl-8">
            <LazyImage
              src="/lovable-uploads/eaf0d3be-5c3e-463b-82ab-abc84fac666c.png"
              alt="Estithmar Ventures"
              className="h-32 w-auto"
              loading="eager"
              containerClassName="h-32"
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
                Destination
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isDestinationsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border shadow-lg z-50">
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

            {/* Media Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsMediaOpen(true)}
              onMouseLeave={() => setIsMediaOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-gotham-medium corporate-transition hover:text-primary",
                  (location.pathname === "/news" || location.pathname === "/gallery") ? "text-primary" : "text-foreground"
                )}
              >
                Media
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isMediaOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border shadow-lg z-50">
                  {mediaItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-sm font-gotham corporate-transition hover:bg-muted hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button
                className={cn(
                  "flex items-center text-sm font-gotham-medium corporate-transition hover:text-primary",
                  (location.pathname === "/about" || location.pathname === "/team") ? "text-primary" : "text-foreground"
                )}
              >
                About Us
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              
              {isAboutOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border shadow-lg z-50">
                  <Link
                    to="/about"
                    className="block px-4 py-3 text-sm font-gotham corporate-transition hover:bg-muted hover:text-primary"
                  >
                    Our Company
                  </Link>
                  {aboutItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-3 text-sm font-gotham corporate-transition hover:bg-muted hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

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