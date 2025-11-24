import { Aperture } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  textClassName?: string;
};

const Logo = ({ className, textClassName }: LogoProps) => {
  return (
    <div className={cn('flex items-center gap-2 text-xl font-bold tracking-wider', className)}>
      <Aperture className="text-primary h-6 w-6" />
      <span className={cn("font-headline", textClassName)}>Blu Koffees Studios</span>
    </div>
  );
};

export default Logo;
