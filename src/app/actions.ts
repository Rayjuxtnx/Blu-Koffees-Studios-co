
"use server";

import { z } from "zod";

const bookingSchema = z.object({
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.string(), // Changed to string to handle form submission
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Please enter a message of at least 10 characters." }),
});

export type BookingFormState = {
  message: string;
  errors?: {
    service?: string[];
    date?: string[];
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success: boolean;
};

// This server action is no longer directly used by the form,
// but we'll keep it in case it's needed elsewhere.
export async function submitBooking(
  data: z.infer<typeof bookingSchema>
): Promise<BookingFormState> {
  const validatedFields = bookingSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Error: Please check your input and try again.",
    };
  }

  // In a real app, you would process the booking here:
  // - Check for availability
  // - Save to database
  // - Send confirmation email
  console.log("Booking submitted:", validatedFields.data);

  return {
    success: true,
    message: "Success! Your booking request has been sent. We will contact you shortly to confirm.",
  };
}
