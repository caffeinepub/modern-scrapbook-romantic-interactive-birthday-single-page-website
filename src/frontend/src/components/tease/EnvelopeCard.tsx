import { useState } from 'react';

interface EnvelopeCardProps {
  message: string;
}

export default function EnvelopeCard({ message }: EnvelopeCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="scrapbook-card bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-primary/20 min-h-[200px] flex items-center justify-center transition-all duration-300 hover:shadow-xl">
        {!isOpen ? (
          <div className="text-center space-y-4">
            <img
              src="/assets/generated/envelope-closed.dim_1024x1024.png"
              alt="Closed envelope"
              className="w-24 h-24 mx-auto opacity-80"
            />
            <p className="text-lg font-medium text-primary">Open Me</p>
          </div>
        ) : (
          <div className="text-center space-y-4 animate-in fade-in zoom-in duration-300">
            <img
              src="/assets/generated/envelope-open.dim_1024x1024.png"
              alt="Open envelope"
              className="w-24 h-24 mx-auto opacity-80"
            />
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed px-2">
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
