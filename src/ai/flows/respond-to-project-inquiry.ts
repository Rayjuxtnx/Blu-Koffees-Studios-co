'use server';
/**
 * @fileOverview Responds to custom project inquiries using an LLM, including a potential timeline and project plan.
 *
 * - respondToProjectInquiry - A function that handles the project inquiry response process.
 * - ProjectInquiryInput - The input type for the respondToProjectInquiry function.
 * - ProjectInquiryOutput - The return type for the respondToProjectInquiry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProjectInquiryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the custom project inquiry.'),
  desiredTimeline: z
    .string()
    .describe('The desired timeline for the project completion.'),
  budget: z.string().describe('The budget allocated for the project.'),
  contactInformation: z.string().describe('Contact information of the user.'),
});
export type ProjectInquiryInput = z.infer<typeof ProjectInquiryInputSchema>;

const ProjectInquiryOutputSchema = z.object({
  response: z.string().describe('The LLM-generated response to the project inquiry, including a potential timeline and project plan.'),
});
export type ProjectInquiryOutput = z.infer<typeof ProjectInquiryOutputSchema>;

export async function respondToProjectInquiry(input: ProjectInquiryInput): Promise<ProjectInquiryOutput> {
  return respondToProjectInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'respondToProjectInquiryPrompt',
  input: {schema: ProjectInquiryInputSchema},
  output: {schema: ProjectInquiryOutputSchema},
  prompt: `You are a professional photography artist responding to a custom project inquiry.

  Based on the following information provided by the user, generate a comprehensive response that includes a potential timeline and a project plan.

  Project Description: {{{projectDescription}}}
  Desired Timeline: {{{desiredTimeline}}}
  Budget: {{{budget}}}
  Contact Information: {{{contactInformation}}}

  Ensure the response is professional, helpful, and provides clear next steps for the user.
  `,
});

const respondToProjectInquiryFlow = ai.defineFlow(
  {
    name: 'respondToProjectInquiryFlow',
    inputSchema: ProjectInquiryInputSchema,
    outputSchema: ProjectInquiryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
