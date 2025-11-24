
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const InquirySection = () => {
  return (
    <div className="max-w-3xl mx-auto">
        <Card className="shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="text-4xl md:text-5xl font-headline font-bold">Have a Custom Project in Mind?</CardTitle>
                <CardDescription className="text-lg mt-2">
                If your project doesn't fit into one of the categories, don't worry. I'm always excited to hear about new creative ideas.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">Use the booking form to tell me as much as you can about your project, and I'll get back to you with a custom quote and plan.</p>
                 <Button asChild size="lg">
                    <Link href="/contact#booking">
                    Describe Your Project <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </CardContent>
        </Card>
    </div>
  );
};

export default InquirySection;
