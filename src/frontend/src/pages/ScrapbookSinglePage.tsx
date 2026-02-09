import { useState, useEffect } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import MusicSection from '@/components/sections/MusicSection';
import TeaseSection from '@/components/sections/TeaseSection';
import OurSpotsSection from '@/components/sections/OurSpotsSection';
import GrandFinaleSection from '@/components/sections/GrandFinaleSection';
import MusicPlayer from '@/components/MusicPlayer';
import FloatingHearts from '@/components/FloatingHearts';
import { scrapbookConfig } from '@/config/scrapbookConfig';

export default function ScrapbookSinglePage() {
  const [tapPosition, setTapPosition] = useState<{ x: number; y: number } | null>(null);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setTapPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };

    const handleClick = (e: MouseEvent) => {
      setTapPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-scrapbook overflow-x-hidden">
      <MusicPlayer onMusicStart={() => setMusicStarted(true)} />
      <FloatingHearts tapPosition={tapPosition} />

      <HeroSection onHintClick={() => scrollToSection('journey')} />
      
      <JourneySection id="journey" />
      
      <MusicSection id="music" />
      
      <TeaseSection id="tease" />
      
      {scrapbookConfig.ourSpots.enabled && <OurSpotsSection id="our-spots" />}
      
      <GrandFinaleSection id="finale" />

      <footer className="bg-background/80 backdrop-blur-sm py-6 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>
          © {new Date().getFullYear()} · Built with{' '}
          <span className="text-rose-500">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
