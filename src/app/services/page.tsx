
import Footer from '@/components/footer';
import Header from '@/components/header';
import ServicesSection from '@/components/sections/services';

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
