// SummarizePost story: As a biomedical intern, I want to quickly grasp the content of lengthy articles so that I can efficiently learn and stay updated in my field.

'use server';

/**
 * @fileOverview Resume posts biomédicos para economizar o tempo dos usuários.
 *
 * - summarizePost - Uma função que lida com o processo de resumo de postagens.
 * - SummarizePostInput - O tipo de entrada para a função summarizePost.
 * - SummarizePostOutput - O tipo de retorno para a função summarizePost.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizePostInputSchema = z.object({
  articleContent: z
    .string()
    .describe('O conteúdo do artigo biomédico a ser resumido.'),
});
export type SummarizePostInput = z.infer<typeof SummarizePostInputSchema>;

const SummarizePostOutputSchema = z.object({
  summary: z
    .string()
    .describe('Um resumo conciso do artigo biomédico.'),
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
  prompt: `Você é um especialista em ciências biomédicas. Forneça um resumo conciso do artigo a seguir, extraindo os pontos-chave e as descobertas. O resumo não deve ter mais de 200 palavras.

Conteúdo do Artigo:
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
