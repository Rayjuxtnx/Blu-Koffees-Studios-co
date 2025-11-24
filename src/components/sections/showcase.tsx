import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { showcaseStories } from '@/lib/data';

const ShowcaseSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Stories</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Every collection is a narrative, a visual poem. Explore the stories we've told.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {showcaseStories.map((story) => {
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
    </div>
  );
};

export default ShowcaseSection;
