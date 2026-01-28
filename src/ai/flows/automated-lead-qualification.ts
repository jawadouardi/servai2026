// src/ai/flows/automated-lead-qualification.ts
'use server';

/**
 * @fileOverview Qualifica automaticamente i lead in base a budget e preferenze raccolte tramite chatbot.
 *
 * - automatedLeadQualification - A function that handles the lead qualification process.
 * - AutomatedLeadQualificationInput - The input type for the automatedLeadQualification function.
 * - AutomatedLeadQualificationOutput - The return type for the automatedLeadQualification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const AutomatedLeadQualificationInputSchema = z.object({
  budget: z.number().describe("Il budget del potenziale cliente."),
  preferences: z.string().describe("Le preferenze o i requisiti del potenziale cliente raccolti durante una conversazione."),
});
export type AutomatedLeadQualificationInput = z.infer<typeof AutomatedLeadQualificationInputSchema>;

export const AutomatedLeadQualificationOutputSchema = z.object({
  isQualified: z.boolean().describe("Indica se il lead è qualificato o meno."),
  qualificationReason: z.string().describe("La motivazione della qualificazione (es. budget adeguato, esigenze in linea con l'offerta)."),
  suggestedNextStep: z.string().describe("Il prossimo passo consigliato per questo lead (es. 'Pianifica una demo', 'Invia materiale informativo', 'Nessuna azione')."),
});
export type AutomatedLeadQualificationOutput = z.infer<typeof AutomatedLeadQualificationOutputSchema>;

export async function automatedLeadQualification(input: AutomatedLeadQualificationInput): Promise<AutomatedLeadQualificationOutput> {
  return automatedLeadQualificationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automatedLeadQualificationPrompt',
  input: {schema: AutomatedLeadQualificationInputSchema},
  output: {schema: AutomatedLeadQualificationOutputSchema},
  prompt: `Sei un esperto analista di vendita per SERV AI, un'azienda che fornisce soluzioni di intelligenza artificiale su misura per PMI.
  
  Il tuo compito è qualificare un potenziale cliente (lead) in base al suo budget e alle sue preferenze.

  - Un lead è considerato **qualificato** se il suo budget è di almeno 3.000€ E le sue preferenze sono in linea con i servizi offerti da SERV AI (Outreach, Assistenti Vocali, Sales Analytics, Automazioni).
  - Se il budget è inferiore a 3.000€, il lead **non è qualificato**.
  - Se le preferenze non sono pertinenti ai servizi di SERV AI, il lead **non è qualificato**.

  Analizza le seguenti informazioni sul lead:
  - Budget: {{budget}}€
  - Preferenze e note: {{preferences}}

  Fornisci una valutazione di qualificazione, una motivazione chiara e suggerisci il prossimo passo.`,
});

const automatedLeadQualificationFlow = ai.defineFlow(
  {
    name: 'automatedLeadQualificationFlow',
    inputSchema: AutomatedLeadQualificationInputSchema,
    outputSchema: AutomatedLeadQualificationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
