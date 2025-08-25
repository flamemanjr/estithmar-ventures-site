import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { CorporateButton } from '@/components/ui/corporate-button';

const AlMahaMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapInitialized, setMapInitialized] = useState(false);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken.trim()) return;

    try {
      mapboxgl.accessToken = mapboxToken.trim();
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/satellite-streets-v12',
        center: [51.4969, 25.4284], // Al Maha Island coordinates
        zoom: 15,
        pitch: 45,
        bearing: 0
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker for Al Maha Island
      new mapboxgl.Marker({
        color: '#1a365d'
      })
        .setLngLat([51.4969, 25.4284])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML('<div style="padding: 8px;"><strong>Al Maha Island</strong><br/>Lusail, Qatar</div>')
        )
        .addTo(map.current);

      setMapInitialized(true);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (!mapInitialized) {
    return (
      <div className="aspect-video bg-card border border-border flex flex-col items-center justify-center p-8 space-y-4">
        <div className="text-center space-y-4 max-w-md">
          <h3 className="text-lg font-gotham-medium text-foreground">Interactive Map</h3>
          <p className="text-sm font-gotham text-muted-foreground">
            Enter your Mapbox public token to view Al Maha Island location
          </p>
          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Mapbox Public Token (pk.eyJ1...)"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="font-gotham"
            />
            <CorporateButton 
              onClick={initializeMap}
              disabled={!mapboxToken.trim()}
              size="sm"
            >
              Load Map
            </CorporateButton>
          </div>
          <p className="text-xs font-gotham text-muted-foreground">
            Get your token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video bg-card border border-border overflow-hidden rounded-lg">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default AlMahaMap;