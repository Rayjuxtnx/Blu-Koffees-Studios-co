
import Footer from '@/components/footer';
import Header from '@/components/header';
import AboutSection from '@/components/sections/about';

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
