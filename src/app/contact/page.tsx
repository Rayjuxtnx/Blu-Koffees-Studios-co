
import Footer from '@/components/footer';
import Header from '@/components/header';
import BookingSection from '@/components/sections/booking';
import { faqs } from '@/lib/data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';
import InquirySection from '@/components/sections/inquiry';

export const metadata: Metadata = {
  title: 'Contact & Booking | Blu Koffees Studios',
  description: 'Book your photography session with Blu Koffees Studios. Contact us for weddings, portraits, events, and custom projects. Direct contact info and FAQ available.',
  keywords: [
    'contact photographer',
    'book photography session',
    'photography booking Kenya',
    'wedding photographer contact',
    'portrait session booking',
    'event photographer inquiry',
    'custom photography quote',
    'FAQ photography',
    'photography prices',
    'book a photoshoot'
  ]
};


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-12 space-y-16 md:space-y-24">
        <section id="booking">
            <BookingSection />
        </section>

        <section id="direct-contact" className="container mx-auto px-4 max-w-3xl">
            <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-headline font-bold">Direct Contact</h2>
                <p className="text-lg text-muted-foreground mt-2">
                    For a more direct approach, feel free to reach out.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                        <Phone className="h-5 w-5 text-primary" />
                        <a href="tel:+254795107535" className="hover:underline">+254 795 107 535</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:blukoffee1@gmail.com" className="hover:underline">blukoffee1@gmail.com</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="inquiry" className="container mx-auto px-4">
            <InquirySection />
        </section>


        <section id="faq" className="container mx-auto px-4 max-w-3xl">
           <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </main>
      <Footer />
    </div>
  );
}
