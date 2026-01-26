'use server';
/**
 * @fileOverview A sales call summarization AI agent.
 *
 * - summarizeSalesCall - A function that handles the sales call summarization process.
 * - SummarizeSalesCallInput - The input type for the summarizeSalesCall function.
 * - SummarizeSalesCallOutput - The return type for the summarizeSalesCall function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSalesCallInputSchema = z.object({
  callTranscript: z
    .string()
    .describe('The transcript of the sales call.'),
});
export type SummarizeSalesCallInput = z.infer<typeof SummarizeSalesCallInputSchema>;

const SummarizeSalesCallOutputSchema = z.object({
  summary: z.string().describe('A summary of the sales call.'),
  actionItems: z.string().describe('A list of action items for the sales representative.'),
});
export type SummarizeSalesCallOutput = z.infer<typeof SummarizeSalesCallOutputSchema>;

export async function summarizeSalesCall(input: SummarizeSalesCallInput): Promise<SummarizeSalesCallOutput> {
  return summarizeSalesCallFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSalesCallPrompt',
  input: {schema: SummarizeSalesCallInputSchema},
  output: {schema: SummarizeSalesCallOutputSchema},
  prompt: `You are an AI assistant helping sales representatives summarize their sales calls.

  Given the following call transcript, provide a summary of the call and a list of action items for the sales representative.

  Call Transcript:
  {{callTranscript}}`,
});

const summarizeSalesCallFlow = ai.defineFlow(
  {
    name: 'summarizeSalesCallFlow',
    inputSchema: SummarizeSalesCallInputSchema,
    outputSchema: SummarizeSalesCallOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
