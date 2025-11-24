import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="lens-effect" />
      </div>
      <div className="relative z-10 grid md:grid-cols-1 gap-8 md:gap-12 items-center">
        <div className="md:col-span-1 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">Meet the Artist</h2>
          
          <div className="space-y-6 text-lg text-foreground/80 max-w-3xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-foreground font-headline mb-2">Creative Philosophy</h3>
              <p>
                I believe that photography is the art of observation. It's about finding something interesting in an ordinary place. I've found it has little to do with the things you see and everything to do with the way you see them.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground font-headline mb-2">Why I Shoot</h3>
              <p>
                For me, capturing a moment is preserving a feeling. It's the joy in a candid laugh, the strength in a quiet gaze, the story in a landscape. I shoot to bottle these fleeting emotions, creating timeless art that speaks without words.
              </p>
            </div>
            <div className="pt-4">
              <Button asChild size="lg" variant="outline">
                <a href="mailto:contact@visionaryvault.com">Work With Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
