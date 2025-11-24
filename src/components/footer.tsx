import Logo from './logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-accent/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Blu Koffees Studios. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
