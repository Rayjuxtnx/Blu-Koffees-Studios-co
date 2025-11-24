
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import SocialSection from '@/components/sections/social';
import Preloader from '@/components/preloader';

export default function Home() {
  return (
    <>
      <Preloader />
      <div id="main-content" className="flex flex-col min-h-screen bg-background text-foreground opacity-0">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          
          <section id="social" className="py-20 lg:py-32 bg-accent/50">
            <SocialSection />
          </section>
          
        </main>
        <Footer />
      </div>
    </>
  );
}
