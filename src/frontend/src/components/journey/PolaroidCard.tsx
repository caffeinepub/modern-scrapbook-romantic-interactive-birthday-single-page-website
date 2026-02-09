import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Upload, X } from 'lucide-react';

interface PolaroidCardProps {
  polaroid: {
    id: number;
    defaultCaption: string;
  };
}

export default function PolaroidCard({ polaroid }: PolaroidCardProps) {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState(polaroid.defaultCaption);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="flex justify-center">
      <div className="polaroid-card relative">
        {/* Washi tape decoration */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 opacity-60 z-10">
          <img
            src="/assets/generated/washi-tape-set.dim_1600x1000.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 max-w-md w-full">
          {/* Image area */}
          <div className="relative aspect-square bg-muted/30 rounded-sm overflow-hidden mb-4">
            {image ? (
              <>
                <img
                  src={image}
                  alt="Uploaded memory"
                  className="w-full h-full object-cover"
                />
                <Button
                  onClick={handleRemoveImage}
                  size="icon"
                  variant="destructive"
                  className="absolute top-2 right-2 rounded-full h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-full flex flex-col items-center justify-center gap-4 hover:bg-muted/50 transition-colors cursor-pointer"
              >
                <Upload className="h-12 w-12 text-muted-foreground" />
                <span className="text-sm text-muted-foreground font-medium">
                  Click to upload photo
                </span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>

          {/* Caption */}
          <Input
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="text-center font-handwriting text-lg border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Add a caption..."
          />
        </div>
      </div>
    </div>
  );
}
