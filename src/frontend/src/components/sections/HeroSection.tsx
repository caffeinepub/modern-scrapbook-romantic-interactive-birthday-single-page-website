import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { scrapbookConfig } from '@/config/scrapbookConfig';
import { toast } from 'sonner';

interface HeroSectionProps {
  onHintClick: () => void;
}

export default function HeroSection({ onHintClick }: HeroSectionProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = scrapbookConfig.hero.countdownTarget.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleHintClick = () => {
    toast.success(scrapbookConfig.hero.hintText, {
      duration: 3000,
    });
    setTimeout(() => {
      onHintClick();
    }, 500);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <img
          src="/assets/generated/heart-doodle-pack.dim_1400x1400.png"
          alt=""
          className="absolute top-10 right-10 w-24 h-24 animate-pulse"
        />
        <img
          src="/assets/generated/heart-doodle-pack.dim_1400x1400.png"
          alt=""
          className="absolute bottom-20 left-10 w-32 h-32 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight scrapbook-title">
          {scrapbookConfig.hero.headline}
        </h1>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((unit) => (
            <div
              key={unit.label}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary/20 min-w-[100px] scrapbook-card"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
                {unit.label}
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={handleHintClick}
          size="lg"
          className="text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600"
        >
          <Heart className="mr-2 h-5 w-5" fill="currentColor" />
          Click for a hint
        </Button>
      </div>
    </section>
  );
}
