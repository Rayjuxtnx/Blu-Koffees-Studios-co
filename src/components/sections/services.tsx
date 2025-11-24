import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { services } from '@/lib/data';
import { Check } from 'lucide-react';

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">The Experiences</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          More than just a photoshoot—it's a creative collaboration. Find the experience that tells your story.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {services.map((service) => (
          <Card key={service.name} className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
              <CardDescription>{service.time}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {service.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4 mt-4">
              <Button asChild className="w-full" size="lg">
                <Link href="#booking">Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
