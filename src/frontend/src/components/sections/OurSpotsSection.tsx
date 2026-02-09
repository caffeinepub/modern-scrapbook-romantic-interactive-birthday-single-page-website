import { useState } from 'react';
import { scrapbookConfig } from '@/config/scrapbookConfig';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { MapPin } from 'lucide-react';

interface OurSpotsSectionProps {
  id: string;
}

export default function OurSpotsSection({ id }: OurSpotsSectionProps) {
  const { pins } = scrapbookConfig.ourSpots;

  return (
    <section id={id} className="py-20 px-4 md:px-8 bg-accent/20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground scrapbook-title mb-16">
          Our Special Spots 📍
        </h2>

        <div className="relative w-full aspect-video bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-800">
          {/* Decorative map background */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Pins */}
          {pins.map((pin) => (
            <Popover key={pin.id}>
              <PopoverTrigger asChild>
                <button
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform duration-200 z-10"
                  style={{
                    left: `${pin.position.x}%`,
                    top: `${pin.position.y}%`,
                  }}
                >
                  <MapPin className="h-10 w-10 text-rose-500 drop-shadow-lg animate-bounce" fill="currentColor" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-80 scrapbook-card">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg text-primary">{pin.title}</h3>
                  <p className="text-sm text-foreground/80">{pin.note}</p>
                </div>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      </div>
    </section>
  );
}
