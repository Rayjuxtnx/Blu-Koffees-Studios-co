
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import Logo from './logo';
import { Moon, Sun } from 'lucide-react';
import placeholderData from '@/lib/placeholder-images.json';
import Image from 'next/image';

const Preloader = () => {
  const { setTheme } = useTheme();
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);
  const preloaderImage = placeholderData.placeholderImages.find(p => p.id === 'preloader-bg');

  useEffect(() => {
    // Check if the user has visited before
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      // If they have, just show the content immediately
      const mainContent = document.getElementById('main-content');
      if(mainContent) mainContent.style.opacity = '1';
      setShowPreloader(false);
    } else {
      // If it's their first visit, show the preloader
      setShowPreloader(true);
      // We are ready to show the content after the preloader logic
      setIsReady(true);
    }
  }, []);

  const handleThemeSelection = (theme: 'light' | 'dark') => {
    setTheme(theme);
    setIsExiting(true);
    localStorage.setItem('hasVisited', 'true');

    // Wait for the fade-out animation to complete
    setTimeout(() => {
      setShowPreloader(false);
      const mainContent = document.getElementById('main-content');
      if(mainContent) mainContent.style.opacity = '1';
    }, 800); // Duration of the fade-out animation
  };
  
  // Don't render anything if the preloader isn't supposed to be shown
  if (!showPreloader) {
    return null;
  }

  return (
    <div
      id="preloader"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-700 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {preloaderImage && (
        <Image
          src={preloaderImage.imageUrl}
          alt={preloaderImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={preloaderImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
      <div className="relative text-center animate-fade-in-up">
        <Logo className="text-4xl md:text-5xl justify-center" textClassName="glowing-text" />
        <p className="mt-4 text-lg text-white/80">Choose your preferred theme to begin.</p>
      </div>

      <div className="relative flex gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleThemeSelection('light')}
          className="bg-white/10 text-white hover:bg-white/20 border-white/20"
        >
          <Sun className="mr-2" /> Light
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleThemeSelection('dark')}
          className="bg-white/10 text-white hover:bg-white/20 border-white/20"
        >
          <Moon className="mr-2" /> Dark
        </Button>
      </div>
    </div>
  );
};

export default Preloader;
