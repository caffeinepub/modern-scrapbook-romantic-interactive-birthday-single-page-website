import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { scrapbookConfig } from '@/config/scrapbookConfig';
import { Video, Heart } from 'lucide-react';

export default function VideoMessagePanel() {
  const { videoUrl, placeholderMessage } = scrapbookConfig.surprise;

  return (
    <Card className="scrapbook-card bg-card/90 backdrop-blur-sm border-2 border-primary/20 shadow-xl max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-primary">
          A Special Message For You
        </CardTitle>
      </CardHeader>
      <CardContent>
        {videoUrl ? (
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="aspect-video rounded-lg bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20 flex flex-col items-center justify-center gap-6 p-8">
            <Video className="h-20 w-20 text-primary/60" />
            <p className="text-xl text-center text-foreground/80 font-medium">
              {placeholderMessage}
            </p>
            <Heart className="h-12 w-12 text-rose-500 animate-pulse" fill="currentColor" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
