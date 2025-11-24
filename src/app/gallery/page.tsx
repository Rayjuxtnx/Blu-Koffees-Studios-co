import Footer from '@/components/footer';
import Header from '@/components/header';
import { Card, CardContent } from '@/components/ui/card';
import { socialPosts } from '@/lib/data';
import placeholderData from '@/lib/placeholder-images.json';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography Gallery | Blu Koffees Studios',
  description: 'Explore the creative photography gallery of Blu Koffees Studios. A collection of recent work, creative explorations, and moments captured in time.',
  keywords: [
    'photography gallery',
    'photo gallery',
    'creative photography',
    'portrait gallery',
    'landscape photos',
    'wedding photo gallery',
    'best photography work',
    'visual portfolio',
    'photographer portfolio Kenya',
    'artistic photos'
  ]
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Gallery</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Explore a collection of my recent work and creative explorations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {socialPosts.map((post) => {
              const image = placeholderData.placeholderImages.find(p => p.id === post.imageId);
              return (
                <div key={post.id} className="p-1">
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
                        <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{post.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
