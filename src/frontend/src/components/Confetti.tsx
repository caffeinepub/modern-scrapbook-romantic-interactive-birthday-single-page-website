import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  delay: number;
  size: number;
}

interface ConfettiProps {
  intensity?: 'low' | 'medium' | 'high';
}

export default function Confetti({ intensity = 'medium' }: ConfettiProps) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#f43f5e', '#ec4899', '#a855f7', '#f59e0b', '#10b981', '#3b82f6'];
    const newPieces: ConfettiPiece[] = [];

    const pieceCount = intensity === 'high' ? 150 : intensity === 'medium' ? 50 : 25;

    for (let i = 0; i < pieceCount; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        size: intensity === 'high' ? 8 + Math.random() * 8 : 3 + Math.random() * 3,
      });
    }

    setPieces(newPieces);
  }, [intensity]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0',
          }}
        />
      ))}
    </div>
  );
}
