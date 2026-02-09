import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { scrapbookConfig } from '@/config/scrapbookConfig';
import Confetti from '@/components/Confetti';
import PasswordGate from '@/components/surprise/PasswordGate';
import VideoMessagePanel from '@/components/surprise/VideoMessagePanel';
import { Gift, Sparkles } from 'lucide-react';

interface GrandFinaleSectionProps {
  id: string;
}

export default function GrandFinaleSection({ id }: GrandFinaleSectionProps) {
  const [revealed, setRevealed] = useState(false);
  const { buttonText, birthdayMessage, coupon } = scrapbookConfig.finale;

  const handleReveal = () => {
    setRevealed(true);
  };

  return (
    <section id={id} className="min-h-screen py-20 px-4 md:px-8 flex items-center justify-center relative">
      {revealed && <Confetti intensity="high" />}

      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
        {!revealed ? (
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground scrapbook-title">
              One More Thing...
            </h2>
            <Button
              onClick={handleReveal}
              size="lg"
              variant="destructive"
              className="text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 animate-pulse"
            >
              <Sparkles className="mr-2 h-6 w-6" />
              {buttonText}
            </Button>
          </div>
        ) : (
          <div className="space-y-12 animate-in fade-in zoom-in duration-700">
            <h1 className="text-5xl md:text-7xl font-bold text-primary scrapbook-title animate-bounce">
              {birthdayMessage}
            </h1>

            <Card className="scrapbook-card bg-card/90 backdrop-blur-sm border-4 border-primary/30 shadow-2xl max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Gift className="h-16 w-16 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-primary">
                  {coupon.title}
                </CardTitle>
                <CardDescription className="text-lg mt-4">
                  {coupon.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground italic">
                  {coupon.finePrint}
                </p>
                <p className="text-base font-medium text-foreground">
                  {coupon.redemptionNote}
                </p>
              </CardContent>
            </Card>

            {scrapbookConfig.surprise.enabled && (
              <div className="mt-16">
                <PasswordGate>
                  <VideoMessagePanel />
                </PasswordGate>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
