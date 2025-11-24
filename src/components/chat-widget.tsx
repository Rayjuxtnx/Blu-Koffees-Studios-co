
"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { respondToProjectInquiry } from "@/ai/flows/respond-to-project-inquiry";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Aperture } from "lucide-react";

const chatSchema = z.object({
  message: z.string().min(1, "Message cannot be empty."),
});

type ChatFormValues = z.infer<typeof chatSchema>;

type Message = {
  role: "user" | "model";
  content: { text: string }[];
};

const ChatWidget = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [conversation, setConversation] = useState<Message[]>([]);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const form = useForm<ChatFormValues>({
    resolver: zodResolver(chatSchema),
    defaultValues: {
      message: "",
    },
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
    }
  }, [conversation]);


  async function onSubmit(data: ChatFormValues) {
    setIsLoading(true);
    
    const userMessage: Message = {
      role: "user",
      content: [{ text: data.message }],
    };

    const newConversation = [...conversation, userMessage];
    setConversation(newConversation);
    form.reset();

    try {
      const result = await respondToProjectInquiry({ history: newConversation });
      const modelMessage: Message = {
        role: "model",
        content: [{ text: result.response }],
      };
      setConversation([...newConversation, modelMessage]);
    } catch (error) {
      console.error("Error responding to inquiry:", error);
      const errorMessage: Message = {
          role: "model",
          content: [{ text: "Sorry, I'm having a little trouble connecting right now. Please try again in a moment." }],
      };
      setConversation([...newConversation, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4">
       <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold">
          Have a Quick Question?
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          Chat with our AI assistant to get instant answers about our services.
        </p>
      </div>
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              <Aperture />
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="font-headline text-xl md:text-2xl">AI Assistant</CardTitle>
            <CardDescription>Ask me anything about your project!</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-72 w-full pr-4 mb-4" ref={scrollAreaRef}>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                          <Aperture />
                      </AvatarFallback>
                  </Avatar>
                  <div className="bg-accent rounded-lg p-3 text-sm max-w-[80%]">
                      <p>Hello! I'm the AI assistant for Blu Koffees Studios. How can I help you with your photography project today?</p>
                  </div>
              </div>
              {conversation.map((msg, index) => (
                <div
                  key={index}
                  className={cn("flex items-start gap-3", {
                    "justify-end": msg.role === "user",
                  })}
                >
                  {msg.role === "model" && (
                     <Avatar className="h-8 w-8">
                       <AvatarFallback className="bg-primary text-primary-foreground">
                         <Aperture />
                       </AvatarFallback>
                     </Avatar>
                  )}
                   <div
                    className={cn("rounded-lg p-3 text-sm max-w-[80%]", {
                      "bg-primary text-primary-foreground": msg.role === "user",
                      "bg-accent": msg.role === "model",
                    })}
                  >
                    <p>{msg.content[0].text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-start gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                            <Aperture />
                        </AvatarFallback>
                    </Avatar>
                    <div className="bg-accent rounded-lg p-3 text-sm">
                        <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                </div>
              )}
            </div>
          </ScrollArea>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex-grow">
                    <FormControl>
                      <Input placeholder="Type your message..." {...field} disabled={isLoading} className="h-11 text-base"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} size="icon" className="h-11 w-11">
                {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatWidget;
