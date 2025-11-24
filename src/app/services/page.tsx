
import Footer from '@/components/footer';
import Header from '@/components/header';
import ServicesSection from '@/components/sections/services';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography Experiences & Services | Blu Koffees Studios',
  description: 'Discover the photography experiences offered by Blu Koffees Studios. We offer studio portraits, wedding photography, family photos, maternity sessions, and more.',
  keywords: [
    'photography services',
    'photography experiences',
    'studio portraits',
    'wedding photography',
    'proposal photography',
    'birthday photoshoot',
    'family photos',
    'maternity photography',
    'baby bump photos',
    'graduation portraits',
    'creative collaboration'
  ]
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
