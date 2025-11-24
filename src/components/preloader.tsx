
'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import Logo from './logo';
import { Moon, Sun } from 'lucide-react';

const Preloader = () => {
  const { setTheme } = useTheme();
  const [isReady, setIsReady] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showPreloader, setShowPreloader] = useState(false);

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
      <div className="text-center animate-fade-in-up">
        <Logo className="text-3xl md:text-4xl justify-center" />
        <p className="mt-4 text-lg text-muted-foreground">Choose your preferred theme to begin.</p>
      </div>

      <div className="flex gap-4 mt-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleThemeSelection('light')}
        >
          <Sun className="mr-2" /> Light
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => handleThemeSelection('dark')}
        >
          <Moon className="mr-2" /> Dark
        </Button>
      </div>
    </div>
  );
};

export default Preloader;

