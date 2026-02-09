import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeartsProps {
  tapPosition: { x: number; y: number } | null;
}

interface HeartParticle {
  id: number;
  x: number;
  y: number;
}

export default function FloatingHearts({ tapPosition }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    if (tapPosition) {
      const newHeart: HeartParticle = {
        id: Date.now(),
        x: tapPosition.x,
        y: tapPosition.y,
      };
      
      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 2000);
    }
  }, [tapPosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: heart.x - 12,
            top: heart.y - 12,
          }}
        >
          <Heart
            className="h-6 w-6 text-rose-500 animate-pulse"
            fill="currentColor"
            style={{ filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))' }}
          />
        </div>
      ))}
    </div>
  );
}
