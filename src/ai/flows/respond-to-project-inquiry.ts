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
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({
        text: z.string(),
    })),
  })),
});
export type ProjectInquiryInput = z.infer<typeof ProjectInquiryInputSchema>;

const ProjectInquiryOutputSchema = z.object({
  response: z.string().describe('The LLM-generated response to the project inquiry, continuing the conversation.'),
});
export type ProjectInquiryOutput = z.infer<typeof ProjectInquiryOutputSchema>;

export async function respondToProjectInquiry(input: ProjectInquiryInput): Promise<ProjectInquiryOutput> {
  return respondToProjectInquiryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'respondToProjectInquiryPrompt',
  input: {schema: ProjectInquiryInputSchema},
  output: {schema: ProjectInquiryOutputSchema},
  prompt: `You are a friendly and professional AI assistant for Blu Koffees Studios, a photography studio. Your goal is to help potential clients who are chatting with you.

  Converse with them about their needs. You can ask clarifying questions about the project description, desired timeline, budget, and contact information.

  Keep your responses concise and conversational. End your response with a question to keep the conversation going.

  Here is the conversation history:
  {{#each history}}
  {{#if (eq role 'user')}}
  User: {{content.[0].text}}
  {{else}}
  AI: {{content.[0].text}}
  {{/if}}
  {{/each}}

  AI:`,
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
