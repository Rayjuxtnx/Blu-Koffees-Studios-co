
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';

const AboutPreview = () => {
    const aboutImage = placeholderData.placeholderImages.find(p => p.id === 'serviceStudioPortrait');
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Meet the Artist</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I believe that photography is the art of observation. It's about finding something interesting in an ordinary place. I've found it has little to do with the things you see and everything to do with the way you see them.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="outline">
              <Link href="/about">
                More About Me <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square max-w-md mx-auto">
           {aboutImage && (
            <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                fill
                className="object-cover rounded-lg shadow-lg"
                data-ai-hint={aboutImage.imageHint}
            />
           )}
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
