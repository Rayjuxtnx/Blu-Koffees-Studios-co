import { Aperture } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

type LogoProps = {
  className?: string;
  textClassName?: string;
};

const Logo = ({ className, textClassName }: LogoProps) => {
  const logoImage = placeholderData.placeholderImages.find(p => p.id === 'logo');

  return (
    <div className={cn('flex items-center gap-2 text-xl font-bold tracking-wider', className)}>
      {logoImage ? (
        <Image
          src={logoImage.imageUrl}
          alt={logoImage.description}
          width={24}
          height={24}
          className="h-6 w-6"
          data-ai-hint={logoImage.imageHint}
        />
      ) : (
        <Aperture className="text-primary h-6 w-6" />
      )}
      <span className={cn("font-headline", textClassName)}>Blu Koffees Studios</span>
    </div>
  );
};

export default Logo;
