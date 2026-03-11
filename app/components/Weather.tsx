'use client';

import { useEffect, useState } from 'react';
import { CloudSun, MapPin, Thermometer } from 'lucide-react';

export default function Weather() {
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    // Coordenadas da Praia, Cabo Verde
    const url = "https://api.open-meteo.com/v1/forecast?latitude=14.9177&longitude=-23.5092&current_weather=true";
    
    fetch(url)
      .then(res => res.json())
      .then(data => setTemp(data.current_weather.temperature))
      .catch(err => console.error("Erro ao buscar clima", err));
  }, []);

  return (
    <div className="flex items-center gap-3 bg-blue-50/50 px-4 py-2 rounded-full border border-blue-100 text-gray-600">
      <div className="flex items-center gap-1.5">
        <MapPin size={14} className="text-blue-500" />
        <span className="font-medium">Praia, CV</span>
      </div>
      
      <div className="h-4 w-[1px] bg-blue-200" />

      <div className="flex items-center gap-1.5">
        <Thermometer size={14} className="text-orange-500" />
        <span className="font-bold">{temp ? `${temp}°C` : '--°C'}</span>
        <CloudSun size={18} className="text-yellow-500" />
      </div>
    </div>
  );
}