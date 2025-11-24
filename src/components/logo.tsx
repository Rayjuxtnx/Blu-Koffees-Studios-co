import { Aperture } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={cn('flex items-center gap-2 text-xl font-bold tracking-wider', className)}>
      <Aperture className="text-primary h-6 w-6" />
      <span className="font-headline">Visionary Vault</span>
    </div>
  );
};

export default Logo;
