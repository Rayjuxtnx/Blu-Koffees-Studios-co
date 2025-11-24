import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { showcaseStories } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';

const ShowcaseSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Our Stories</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Every collection is a narrative, a visual poem. Explore the stories we've told.
        </p>
      </div>

      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
        {showcaseStories.map((story) => {
          const image = placeholderData.placeholderImages.find(p => p.id === story.imageId);
          return (
            <Card key={story.id} className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                {image && (
                  <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={800}
                      height={600}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <CardTitle className="pt-4 font-headline text-2xl">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{story.narrative}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ShowcaseSection;
