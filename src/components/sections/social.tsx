import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { socialPosts } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';

const SocialSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">From the Feed</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A glimpse into my recent work and creative process. Follow along @visionaryvault.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {socialPosts.map((post) => {
            const image = placeholderData.placeholderImages.find(p => p.id === post.imageId);
            return (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                      {image && (
                         <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={500}
                          height={500}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <p className="text-white text-sm">{post.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default SocialSection;
