import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';

const AlMahaMap = () => {
  const latitude = 25.397785483167258;
  const longitude = 51.52923520580979;
  
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.008},${latitude-0.008},${longitude+0.008},${latitude+0.008}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-2xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
      
      {/* Map container with enhanced styling */}
      <div className="relative z-10 h-full bg-white rounded-xl overflow-hidden shadow-2xl border border-white/20">
        <iframe
          src={openStreetMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Al Maha Island Location"
          className="w-full h-full"
        />
        
        {/* Gradient overlay for better visual integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none"></div>
        
        {/* Enhanced location overlay */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/20">
          <div className="flex items-center text-sm font-gotham-medium text-foreground">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-gotham-bold text-foreground">Al Maha Island</div>
              <div className="text-xs text-muted-foreground">Lusail, Qatar</div>
            </div>
          </div>
        </div>
        
        {/* Coordinates overlay */}
        <div className="absolute top-4 right-4 bg-foreground/90 backdrop-blur-md px-3 py-2 rounded-lg shadow-lg">
          <div className="flex items-center text-xs font-gotham text-background">
            <Navigation className="w-3 h-3 mr-1.5" />
            {latitude.toFixed(4)}, {longitude.toFixed(4)}
          </div>
        </div>
        
        {/* View in Maps link */}
        <div className="absolute bottom-4 right-4">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-3 py-2 bg-primary text-primary-foreground text-xs font-gotham-medium rounded-lg shadow-lg hover:bg-primary/90 corporate-transition"
          >
            Open in Maps
            <ExternalLink className="w-3 h-3 ml-1.5" />
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/3 rounded-full blur-2xl"></div>
    </div>
  );
};

export default AlMahaMap;