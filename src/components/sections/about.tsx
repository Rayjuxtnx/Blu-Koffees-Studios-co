import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutSection = () => {
  const artistImage = placeholderData.placeholderImages.find(p => p.id === 'artistPortrait');

  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2">
          {artistImage && (
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={artistImage.imageUrl}
                alt={artistImage.description}
                width={600}
                height={800}
                className="object-cover w-full h-full"
                data-ai-hint={artistImage.imageHint}
              />
            </div>
          )}
        </div>
        <div className="md:col-span-3">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Meet the Artist</h2>
          
          <div className="space-y-6 text-lg text-foreground/80">
            <div>
              <h3 className="text-xl font-bold text-foreground font-headline mb-2">Creative Philosophy</h3>
              <p>
                I believe that photography is the art of observation. It's about finding something interesting in an ordinary place. I've found it has little to do with the things you see and everything to do with the way you see them.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-headline mb-2">Why I Shoot</h3>
              <p>
                For me, capturing a moment is preserving a feeling. It's the joy in a candid laugh, the strength in a quiet gaze, the story in a landscape. I shoot to bottle these fleeting emotions, creating timeless art that speaks without words.
              </p>
            </div>
            <div className="pt-4">
              <Button asChild size="lg">
                <Link href="#inquiry">Work With Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
