import { scrapbookConfig } from '@/config/scrapbookConfig';
import PolaroidCard from '@/components/journey/PolaroidCard';

interface JourneySectionProps {
  id: string;
}

export default function JourneySection({ id }: JourneySectionProps) {
  const { paragraphs, polaroids } = scrapbookConfig.journey;

  return (
    <section id={id} className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground scrapbook-title mb-16">
          Our Journey Together 💕
        </h2>

        {/* Alternating layout: paragraph, polaroid, paragraph, polaroid, etc. */}
        <div className="space-y-20">
          {/* First paragraph */}
          <div className="prose prose-lg md:prose-xl max-w-none">
            <p className="text-foreground/90 leading-relaxed scrapbook-text">
              {paragraphs[0].text}
            </p>
          </div>

          {/* First polaroid */}
          <PolaroidCard polaroid={polaroids[0]} />

          {/* Second paragraph */}
          <div className="prose prose-lg md:prose-xl max-w-none">
            <p className="text-foreground/90 leading-relaxed scrapbook-text">
              {paragraphs[1].text}
            </p>
          </div>

          {/* Second polaroid */}
          <PolaroidCard polaroid={polaroids[1]} />

          {/* Third paragraph */}
          <div className="prose prose-lg md:prose-xl max-w-none">
            <p className="text-foreground/90 leading-relaxed scrapbook-text">
              {paragraphs[2].text}
            </p>
          </div>

          {/* Third polaroid */}
          <PolaroidCard polaroid={polaroids[2]} />

          {/* Fourth paragraph */}
          <div className="prose prose-lg md:prose-xl max-w-none">
            <p className="text-foreground/90 leading-relaxed scrapbook-text">
              {paragraphs[3].text}
            </p>
          </div>

          {/* Fourth polaroid */}
          <PolaroidCard polaroid={polaroids[3]} />
        </div>
      </div>
    </section>
  );
}
