
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { showcaseStories } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

const ShowcasePreview = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Stories</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Every collection is a narrative, a visual poem. Explore the stories we've told.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {showcaseStories.slice(0, 2).map((story) => {
          return (
            <Card key={story.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-accent/50 text-center">
              <CardHeader>
                <CardTitle className="pt-4 font-headline text-2xl">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{story.narrative}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
       <div className="text-center mt-12">
        <Button asChild size="lg" variant="outline">
          <Link href="/showcase">
            Explore All Stories <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ShowcasePreview;
