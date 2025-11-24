
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/data';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import placeholderData from '@/lib/placeholder-images.json';

const ServicesPreview = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Find Your Experience</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A glimpse into the creative collaborations we can embark on together.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {services.slice(0, 3).map((service) => {
          const image = placeholderData.placeholderImages.find(p => p.id === service.imageId);
          return (
            <Card key={service.name} className="flex flex-col h-full overflow-hidden group relative text-primary-foreground">
              {image && (
                <Image 
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-sm"
                  data-ai-hint={image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-black/60"/>
              <div className="relative flex flex-col h-full p-6">
                <CardHeader className="p-0">
                  <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow pt-4">
                   <p className="text-primary-foreground/80">{service.description[0]}</p>
                </CardContent>
              </div>
            </Card>
          )
        })}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/services">
            View All Experiences <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ServicesPreview;
