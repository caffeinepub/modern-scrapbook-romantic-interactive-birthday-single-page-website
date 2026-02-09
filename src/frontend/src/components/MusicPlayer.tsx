import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX, Music, Upload } from 'lucide-react';

interface MusicPlayerProps {
  onMusicStart?: () => void;
}

export default function MusicPlayer({ onMusicStart }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioFile, setAudioFile] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (audioFile && audioRef.current) {
      audioRef.current.src = audioFile;
      audioRef.current.loop = true;
      
      // Fade in volume
      audioRef.current.volume = 0;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        onMusicStart?.();
        
        // Smooth fade in
        let volume = 0;
        const fadeIn = setInterval(() => {
          if (volume < 0.5) {
            volume += 0.05;
            if (audioRef.current) {
              audioRef.current.volume = Math.min(volume, 0.5);
            }
          } else {
            clearInterval(fadeIn);
          }
        }, 100);
      }).catch(err => {
        console.error('Audio playback failed:', err);
      });
    }
  }, [audioFile, onMusicStart]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setAudioFile(url);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Fade in
        let volume = 0;
        const fadeIn = setInterval(() => {
          if (volume < 0.5) {
            volume += 0.05;
            if (audioRef.current) {
              audioRef.current.volume = Math.min(volume, 0.5);
            }
          } else {
            clearInterval(fadeIn);
          }
        }, 50);
      } else {
        // Fade out
        let volume = audioRef.current.volume;
        const fadeOut = setInterval(() => {
          if (volume > 0) {
            volume -= 0.05;
            if (audioRef.current) {
              audioRef.current.volume = Math.max(volume, 0);
            }
          } else {
            clearInterval(fadeOut);
          }
        }, 50);
      }
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        onMusicStart?.();
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} />
      <input
        ref={fileInputRef}
        type="file"
        accept="audio/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      <div className="fixed top-6 right-6 z-50 flex gap-2 animate-in fade-in slide-in-from-top duration-700">
        {!audioFile ? (
          <Button
            onClick={() => fileInputRef.current?.click()}
            size="icon"
            className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <Upload className="h-6 w-6" />
          </Button>
        ) : (
          <>
            <Button
              onClick={togglePlayPause}
              size="icon"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <Music className="h-6 w-6 animate-pulse" />
              ) : (
                <Music className="h-6 w-6" />
              )}
            </Button>
            <Button
              onClick={toggleMute}
              size="icon"
              className="h-14 w-14 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            >
              {isMuted ? (
                <VolumeX className="h-6 w-6" />
              ) : (
                <Volume2 className="h-6 w-6" />
              )}
            </Button>
          </>
        )}
      </div>
    </>
  );
}
