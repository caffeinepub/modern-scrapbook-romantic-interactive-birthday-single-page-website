interface MusicSectionProps {
  id: string;
}

export default function MusicSection({ id }: MusicSectionProps) {
  return (
    <section id={id} className="py-20 px-4 md:px-8 bg-accent/20">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground scrapbook-title">
          Our Song 🎵
        </h2>
        <p className="text-lg text-muted-foreground">
          Use the floating music player in the top right to add our special song and set the mood ✨
        </p>
        <div className="flex justify-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-primary/20 scrapbook-card">
            <p className="text-foreground/80 italic">
              "Every love story is beautiful, but ours is my favorite."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
