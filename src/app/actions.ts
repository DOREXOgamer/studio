"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { addPost } from "@/lib/posts";
import { summarizePost } from "@/ai/flows/summarize-post";

const postSchema = z.object({
  title: z.string().min(1, "Título é obrigatório"),
  author: z.string().min(1, "Autor é obrigatório"),
  content: z.string().min(10, "O conteúdo deve ter pelo menos 10 caracteres"),
});

export async function createPostAction(formData: FormData) {
  const validatedFields = postSchema.safeParse({
    title: formData.get("title"),
    author: formData.get("author"),
    content: formData.get("content"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  addPost(validatedFields.data);

  revalidatePath("/");
  redirect("/");
}

export async function summarizePostAction(articleContent: string) {
  try {
    const result = await summarizePost({ articleContent });
    return result;
  } catch (error) {
    console.error("Erro ao resumir postagem:", error);
    return { summary: "Desculpe, não conseguimos gerar um resumo no momento." };
  }
}
