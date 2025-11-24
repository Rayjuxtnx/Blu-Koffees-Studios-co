
import Footer from '@/components/footer';
import Header from '@/components/header';
import AboutSection from '@/components/sections/about';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About the Artist | Blu Koffees Studios',
  description: 'Meet the artist behind Blu Koffees Studios. Discover the creative philosophy, passion for photography, and the artistic journey of Philip Onyango.',
  keywords: [
    'about photographer',
    'meet the artist',
    'photography philosophy',
    'creative process',
    'photographer story',
    'Blu Koffees Studios artist',
    'Philip Onyango',
    'fine art photographer',
    'portrait artist',
    'behind the lens'
  ]
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-12 flex items-center">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
