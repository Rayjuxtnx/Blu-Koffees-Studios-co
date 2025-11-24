
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { services } from "@/lib/data";
import placeholderData from '@/lib/placeholder-images.json';
import Image from "next/image";

const bookingSchema = z.object({
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.date({
    required_error: "A date is required.",
  }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Please enter a message of at least 10 characters." }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

const BookingSection = () => {
  const bgImage = placeholderData.placeholderImages.find(p => p.id === 'booking-bg');
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="relative py-16 md:py-24">
       {bgImage && (
        <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover"
            data-ai-hint={bgImage.imageHint}
        />
       )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg bg-background/50 dark:bg-card/30 backdrop-blur-lg border-white/20 text-foreground">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-5xl font-headline font-bold text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_0.3)]">Book Your Experience</CardTitle>
              <CardDescription className="text-base md:text-lg mt-2 text-white/90">
                Select your desired experience and date to begin.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  action="https://formspree.io/f/meowgrro"
                  method="POST"
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90">Select an Experience</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                          <FormControl>
                            <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/70">
                              <SelectValue placeholder="Choose a service..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.name} value={service.name}>
                                {service.name}
                              </SelectItem>
                            ))}
                            <SelectItem value="Custom Project">Custom Project</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-white/90">Choose a Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white",
                                  !field.value && "text-white/70"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                         <input type="hidden" name="date" value={field.value ? format(field.value, 'yyyy-MM-dd') : ''} />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/90">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white/90">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="youremail@gmail.com" type="email" {...field} className="bg-white/10 border-white/20 text-white placeholder:text-white/70" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white/90">Additional Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us a bit about what you're looking for..."
                            className="resize-none bg-white/10 border-white/20 text-white placeholder:text-white/70"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormDescription className="text-white/80">
                          Any specific ideas or questions you have for the session?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    Submit Booking Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
