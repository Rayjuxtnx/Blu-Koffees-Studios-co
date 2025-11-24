import Link from 'next/link';
import Logo from './logo';
import placeholderData from '@/lib/placeholder-images.json';
import Image from 'next/image';

const Footer = () => {
  const signatureText = "Created by Philip Onyango";
  const bgImage = placeholderData.placeholderImages.find(p => p.id === 'booking-bg');

  return (
    <footer className="relative bg-accent/50 text-white">
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo textClassName="text-white" />
          <div className="flex flex-col items-center md:items-end gap-2">
            <Link href="https://portifolio-nu-nine-95.vercel.app/" target="_blank" rel="noopener noreferrer" className="signature-container">
              {signatureText.split('').map((char, index) => (
                <span
                  key={index}
                  className="signature-char"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </Link>
            <p className="text-sm text-white/80 text-center md:text-left">
              &copy; {new Date().getFullYear()} Blu Koffees Studios. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
