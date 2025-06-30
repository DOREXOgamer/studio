// SummarizePost story: As a biomedical intern, I want to quickly grasp the content of lengthy articles so that I can efficiently learn and stay updated in my field.

'use server';

/**
 * @fileOverview Summarizes biomedical posts to save time for users.
 *
 * - summarizePost - A function that handles the post summarization process.
 * - SummarizePostInput - The input type for the summarizePost function.
 * - SummarizePostOutput - The return type for the summarizePost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePostInputSchema = z.object({
  articleContent: z
    .string()
    .describe('The content of the biomedical article to summarize.'),
});
export type SummarizePostInput = z.infer<typeof SummarizePostInputSchema>;

const SummarizePostOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the biomedical article.'),
});
export type SummarizePostOutput = z.infer<typeof SummarizePostOutputSchema>;

export async function summarizePost(
  input: SummarizePostInput
): Promise<SummarizePostOutput> {
  return summarizePostFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizePostPrompt',
  input: {schema: SummarizePostInputSchema},
  output: {schema: SummarizePostOutputSchema},
  prompt: `You are an expert in biomedical science. Please provide a concise summary of the following article, extracting the key points and findings. The summary should be no more than 200 words.

Article Content:
{{{articleContent}}}`,
});

const summarizePostFlow = ai.defineFlow(
  {
    name: 'summarizePostFlow',
    inputSchema: SummarizePostInputSchema,
    outputSchema: SummarizePostOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
