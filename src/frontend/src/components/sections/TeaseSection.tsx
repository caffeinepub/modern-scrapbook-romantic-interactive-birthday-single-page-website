import { scrapbookConfig } from '@/config/scrapbookConfig';
import EnvelopeCard from '@/components/tease/EnvelopeCard';

interface TeaseSectionProps {
  id: string;
}

export default function TeaseSection({ id }: TeaseSectionProps) {
  const { envelopes } = scrapbookConfig.tease;

  return (
    <section id={id} className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground scrapbook-title mb-16">
          Little Secrets 💌
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {envelopes.map((message, index) => (
            <EnvelopeCard key={index} message={message} />
          ))}
        </div>
      </div>
    </section>
  );
}
