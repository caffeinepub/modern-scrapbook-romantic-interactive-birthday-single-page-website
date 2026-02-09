import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { scrapbookConfig } from '@/config/scrapbookConfig';
import { Lock, Unlock } from 'lucide-react';
import { toast } from 'sonner';

interface PasswordGateProps {
  children: React.ReactNode;
}

export default function PasswordGate({ children }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === scrapbookConfig.surprise.password) {
      setIsUnlocked(true);
      toast.success('Unlocked! 🎉');
    } else {
      toast.error('Wrong password. Try again! 💕');
      setPassword('');
    }
  };

  if (isUnlocked) {
    return <div className="animate-in fade-in zoom-in duration-700">{children}</div>;
  }

  return (
    <Card className="scrapbook-card bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Lock className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl">One Final Surprise</CardTitle>
        <CardDescription>Enter the secret code to unlock</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password..."
            className="text-center text-lg"
          />
          <Button type="submit" className="w-full" size="lg">
            <Unlock className="mr-2 h-5 w-5" />
            Unlock
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
