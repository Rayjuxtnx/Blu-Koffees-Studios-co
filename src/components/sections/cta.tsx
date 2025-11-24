
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-lg text-muted-foreground mt-4">
          Whether it's a personal portrait, a special event, or a creative project, I'm here to help bring your vision to life. Let's start the conversation.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
