
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-accent/50 p-12 rounded-lg text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Let's bring your vision to life. Get in touch to discuss your project and get a custom quote.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact#booking">
              Start Your Project <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
