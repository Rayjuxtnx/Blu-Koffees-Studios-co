"use client";

import Image from 'next/image';
import { socialPosts } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const SocialSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">From the Feed</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A glimpse into my recent work and creative process.
        </p>
      </div>

      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {socialPosts.map((post) => {
            const image = placeholderData.placeholderImages.find(p => p.id === post.imageId);
            return (
              <CarouselItem key={post.id} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div className="p-1">
                  <Card className="overflow-hidden group">
                    <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                      {image && (
                          <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{post.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>


      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/gallery">Explore Full Gallery</Link>
        </Button>
      </div>
    </div>
  );
};

export default SocialSection;
