
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import SocialSection from '@/components/sections/social';
import Preloader from '@/components/preloader';
import ShowcasePreview from '@/components/sections/showcase-preview';
import ServicesPreview from '@/components/sections/services-preview';
import AboutPreview from '@/components/sections/about-preview';
import ChatWidget from '@/components/chat-widget';

export default function Home() {
  return (
    <>
      <Preloader />
      <div id="main-content" className="flex flex-col min-h-screen bg-background text-foreground opacity-0">
        <Header />
        <main className="flex-grow">
          <HeroSection />

          <section id="showcase-preview" className="py-20 lg:py-32">
            <ShowcasePreview />
          </section>

          <section id="services-preview" className="py-20 lg:py-32 bg-accent/50">
            <ServicesPreview />
          </section>

          <section id="about-preview" className="py-20 lg:py-32">
            <AboutPreview />
          </section>
          
          <section id="social" className="py-20 lg:py-32 bg-accent/50">
            <SocialSection />
          </section>

          <section id="chat" className="py-20 lg:py-32">
            <ChatWidget />
          </section>
          
        </main>
        <Footer />
      </div>
    </>
  );
}
