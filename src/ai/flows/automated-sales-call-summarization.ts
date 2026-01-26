'use server';
/**
 * @fileOverview Agente AI per la sumarizzazione delle chiamate di vendita.
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
  summary: z.string().describe('Un riassunto della chiamata di vendita.'),
  actionItems: z.string().describe('Una lista di azioni da intraprendere per il rappresentante di vendita.'),
});
export type SummarizeSalesCallOutput = z.infer<typeof SummarizeSalesCallOutputSchema>;

export async function summarizeSalesCall(input: SummarizeSalesCallInput): Promise<SummarizeSalesCallOutput> {
  return summarizeSalesCallFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSalesCallPrompt',
  input: {schema: SummarizeSalesCallInputSchema},
  output: {schema: SummarizeSalesCallOutputSchema},
  prompt: `Sei un assistente AI che aiuta i rappresentanti di vendita a riassumere le loro chiamate.

  Data la seguente trascrizione della chiamata, fornisci un riassunto della chiamata e una lista di azioni da intraprendere per il rappresentante.

  Trascrizione Chiamata:
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
