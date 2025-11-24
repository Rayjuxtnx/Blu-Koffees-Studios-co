import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/sections/hero';
import ShowcaseSection from '@/components/sections/showcase';
import ServicesSection from '@/components/sections/services';
import AboutSection from '@/components/sections/about';
import BookingSection from '@/components/sections/booking';
import SocialSection from '@/components/sections/social';
import InquirySection from '@/components/sections/inquiry';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        <section id="showcase" className="py-20 lg:py-32">
          <ShowcaseSection />
        </section>
        
        <section id="services" className="py-20 lg:py-32 bg-accent/50">
          <ServicesSection />
        </section>
        
        <section id="about" className="py-20 lg:py-32">
          <AboutSection />
        </section>

        <section id="social" className="py-20 lg:py-32 bg-accent/50">
          <SocialSection />
        </section>
        
        <section id="inquiry" className="py-20 lg:py-32">
          <InquirySection />
        </section>

        <section id="booking" className="py-20 lg:py-32 bg-accent/50">
           <BookingSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
