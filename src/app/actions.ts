"use server";

import { z } from "zod";

const bookingSchema = z.object({
  service: z.string().min(1, { message: "Please select a service." }),
  date: z.date({
    required_error: "A date is required.",
    invalid_type_error: "That's not a valid date!",
  }),
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().optional(),
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
