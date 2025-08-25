import React from 'react';
import { MapPin } from 'lucide-react';

const AlMahaMap = () => {
  const latitude = 25.397785483167258;
  const longitude = 51.52923520580979;
  
  // Using Google Maps Static API for a static map
  const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=800x400&maptype=satellite&markers=color:blue%7Clabel:A%7C${latitude},${longitude}&key=YOUR_GOOGLE_MAPS_API_KEY`;
  
  // Fallback to OpenStreetMap tile if no Google Maps API key
  const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.01},${latitude-0.01},${longitude+0.01},${latitude+0.01}&layer=mapnik&marker=${latitude},${longitude}`;

  return (
    <div className="aspect-video bg-card border border-border overflow-hidden rounded-lg relative">
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
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-sm">
        <div className="flex items-center text-sm font-gotham text-foreground">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          Al Maha Island, Lusail
        </div>
      </div>
    </div>
  );
};

export default AlMahaMap;