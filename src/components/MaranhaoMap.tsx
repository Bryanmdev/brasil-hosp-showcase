import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const MaranhaoMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-45.2744, -4.9609], // Centro do Maranhão
        zoom: 6.5,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      map.current.on('load', () => {
        if (!map.current) return;

        // Adicionar camada de fronteiras do Maranhão
        map.current.addSource('maranhao-boundaries', {
          type: 'vector',
          url: 'mapbox://mapbox.boundaries-adm2-v3'
        });

        // Adicionar layer para mostrar as divisões municipais
        map.current.addLayer({
          id: 'maranhao-fills',
          type: 'fill',
          source: 'maranhao-boundaries',
          'source-layer': 'boundaries_admin_2',
          filter: ['==', 'iso_3166_1', 'BR'],
          paint: {
            'fill-color': 'hsl(var(--primary))',
            'fill-opacity': 0.1
          }
        });

        map.current.addLayer({
          id: 'maranhao-borders',
          type: 'line',
          source: 'maranhao-boundaries',
          'source-layer': 'boundaries_admin_2',
          filter: ['==', 'iso_3166_1', 'BR'],
          paint: {
            'line-color': 'hsl(var(--primary))',
            'line-width': 1
          }
        });

        // Adicionar marcadores nas principais cidades
        const cities = [
          { name: 'São Luís', coords: [-44.3028, -2.5387] },
          { name: 'Imperatriz', coords: [-47.4914, -5.5264] },
          { name: 'Caxias', coords: [-43.3558, -4.8586] },
          { name: 'Timon', coords: [-42.8366, -5.0944] },
          { name: 'Açailândia', coords: [-47.5006, -4.9475] }
        ];

        cities.forEach(city => {
          const el = document.createElement('div');
          el.className = 'w-3 h-3 bg-secondary rounded-full animate-pulse border-2 border-background shadow-lg';
          
          new mapboxgl.Marker(el)
            .setLngLat(city.coords as [number, number])
            .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(city.name))
            .addTo(map.current!);
        });

        setIsMapLoaded(true);
        toast.success('Mapa do Maranhão carregado!');
      });

    } catch (error) {
      toast.error('Erro ao carregar o mapa. Verifique seu token do Mapbox.');
      console.error(error);
    }
  };

  const handleLoadMap = () => {
    if (!mapboxToken.trim()) {
      toast.error('Por favor, insira um token do Mapbox válido');
      return;
    }
    initializeMap(mapboxToken);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full">
      {!isMapLoaded && (
        <div className="mb-4 p-4 bg-card rounded-lg border">
          <p className="text-sm text-muted-foreground mb-3">
            Para visualizar o mapa real do Maranhão, insira seu token público do Mapbox.
            <br />
            Obtenha em: <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Cole seu token do Mapbox aqui..."
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleLoadMap}>Carregar Mapa</Button>
          </div>
        </div>
      )}
      <div 
        ref={mapContainer} 
        className="w-full h-[500px] rounded-xl shadow-lg"
        style={{ display: isMapLoaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default MaranhaoMap;
