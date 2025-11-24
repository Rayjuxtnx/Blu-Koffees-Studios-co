import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Blu Koffees Studios',
  description: 'Creative Photography by Blu Koffees Studios. Specializing in portraits, weddings, events, and family photos in Kenya. Book your timeless experience today.',
  keywords: [
    'Blu Koffees Studios',
    'photography',
    'photographer',
    'Kenya photography',
    'portrait photography',
    'wedding photography',
    'event photography',
    'family photos',
    'professional photographer',
    'creative photography',
    'studio portraits',
    'lifestyle photography',
    'Nairobi photographer',
    'fine art photography',
    'booking photography session',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
