"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { respondToProjectInquiry } from "@/ai/flows/respond-to-project-inquiry";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

const inquirySchema = z.object({
  projectDescription: z.string().min(10, "Please provide a detailed description."),
  desiredTimeline: z.string().min(3, "Please specify your desired timeline."),
  budget: z.string().min(2, "Please provide a budget estimate."),
  contactInformation: z.string().min(5, "Please provide your contact information."),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

const InquirySection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      projectDescription: "",
      desiredTimeline: "",
      budget: "",
      contactInformation: "",
    },
  });

  async function onSubmit(data: InquiryFormValues) {
    setIsLoading(true);
    setAiResponse("");
    try {
      const result = await respondToProjectInquiry(data);
      setAiResponse(result.response);
      toast({
        title: "Response Generated",
        description: "The AI has generated a response to your inquiry below.",
      });
    } catch (error) {
      console.error("Error responding to inquiry:", error);
      toast({
        variant: "destructive",
        title: "An Error Occurred",
        description: "Could not generate a response. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Have a Custom Project?</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Let's build something unique together. Use our AI assistant for a quick consultation or see our FAQs.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">AI-Powered Inquiry</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="projectDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell me about your vision..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="desiredTimeline"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Desired Timeline</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., 3-4 weeks" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Budget</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., $1500" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                   <FormField
                    control={form.control}
                    name="contactInformation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Contact Info (Email or Phone)</FormLabel>
                        <FormControl>
                          <Input placeholder="name@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                    Get AI Response
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {(isLoading || aiResponse) && (
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-headline">Generated Response</CardTitle>
              </CardHeader>
              <CardContent>
                {isLoading && (
                  <div className="flex items-center justify-center p-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="ml-4 text-muted-foreground">Generating your project plan...</p>
                  </div>
                )}
                {aiResponse && (
                  <div className="prose prose-sm max-w-none whitespace-pre-wrap font-body">
                    {aiResponse}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-8">
           <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Direct Contact</h3>
            <div className="space-y-3 text-lg">
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary"/>
                    <a href="mailto:blukoffee1@gmail.com" className="hover:text-primary transition-colors">blukoffee1@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary"/>
                    <span>(555) 123-4567</span>
                </div>
            </div>
           </div>
           <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
           </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySection;
