import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import Link from 'next/link';

const HeroSection = () => {
  const heroImage = placeholderData.placeholderImages.find(p => p.id === 'hero');

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter mb-4">
          Blu Koffees Studios
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-primary-foreground/80">
          Where moments become masterpieces and stories are told in light and shadow.
        </p>
      </div>
      <Link href="#showcase" aria-label="Scroll to next section" className="absolute bottom-10 z-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </Link>
    </section>
  );
};

export default HeroSection;
