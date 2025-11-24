'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './logo';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const navItems = [
  { href: '#showcase', label: 'Showcase' },
  { href: '#services', label: 'Experiences' },
  { href: '#about', label: 'About' },
  { href: '#social', label: 'Social' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    navItems.map((item) => (
      <Button key={item.label} variant="ghost" asChild>
        <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
          {item.label}
        </Link>
      </Button>
    ))
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavLinks />
            <Button asChild className="ml-4">
              <Link href="mailto:contact@visionaryvault.com">Contact Me</Link>
            </Button>
          </nav>
          <div className="md:hidden">
             <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                         <Logo />
                         <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetTrigger>
                    </div>
                    <nav className="flex flex-col gap-4">
                        <NavLinks />
                        <Button asChild className="mt-4">
                          <Link href="mailto:contact@visionaryvault.com" onClick={() => setIsMobileMenuOpen(false)}>Contact Me</Link>
                        </Button>
                    </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
