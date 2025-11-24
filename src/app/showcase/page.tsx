
import Footer from '@/components/footer';
import Header from '@/components/header';
import ShowcaseSection from '@/components/sections/showcase';

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
