import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-gotham-bold mb-4">Contact</h3>
            <div className="space-y-2 text-sm font-gotham">
              <p>Head Office: Doha, Qatar</p>
              <p>General Inquiries: info@estithmarventures.com</p>
              <p>Investor Relations: ir@estithmarventures.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-gotham-bold mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm font-gotham">
              <Link to="/about" className="block hover:text-primary corporate-transition">
                About Us
              </Link>
              <Link to="/destinations" className="block hover:text-primary corporate-transition">
                Destinations
              </Link>
              <Link to="/team" className="block hover:text-primary corporate-transition">
                Executive Team
              </Link>
              <Link to="/contact" className="block hover:text-primary corporate-transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-gotham-bold mb-4">Legal</h3>
            <div className="space-y-2 text-sm font-gotham">
              <a href="#" className="block hover:text-primary corporate-transition">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-primary corporate-transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-muted-foreground">
          <p className="text-sm font-gotham text-muted-foreground text-center">
            © 2024 Estithmar Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};