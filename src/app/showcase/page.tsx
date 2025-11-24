
import Footer from '@/components/footer';
import Header from '@/components/header';
import ShowcaseSection from '@/components/sections/showcase';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography Showcase & Stories | Blu Koffees Studios',
  description: 'Explore the showcase of Blu Koffees Studios. Each collection is a visual narrative, a story told through urban echoes, coastal whispers, and monochrome moments.',
  keywords: [
    'photography showcase',
    'photo stories',
    'visual narrative',
    'photography projects',
    'urban photography',
    'coastal photography',
    'monochrome photography',
    'golden hour portraits',
    'themed photoshoot',
    'narrative photography'
  ]
};

export default function ShowcasePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <ShowcaseSection />
      </main>
      <Footer />
    </div>
  );
}
