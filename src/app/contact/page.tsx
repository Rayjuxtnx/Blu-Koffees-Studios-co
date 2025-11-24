
import Footer from '@/components/footer';
import Header from '@/components/header';
import BookingSection from '@/components/sections/booking';
import InquirySection from '@/components/sections/inquiry';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-12 space-y-24">
        <section id="booking">
            <BookingSection />
        </section>
        <section id="inquiry">
            <InquirySection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
