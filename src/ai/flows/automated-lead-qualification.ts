// src/ai/flows/automated-lead-qualification.ts
'use server';

/**
 * @fileOverview Automatically qualifies leads based on budget and preferences collected through a chatbot.
 *
 * - automatedLeadQualification - A function that handles the lead qualification process.
 * - AutomatedLeadQualificationInput - The input type for the automatedLeadQualification function.
 * - AutomatedLeadQualificationOutput - The return type for the automatedLeadQualification function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedLeadQualificationInputSchema = z.object({
  budget: z.number().describe('The lead