"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { addPost } from "@/lib/posts";
import { summarizePost } from "@/ai/flows/summarize-post";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
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
    console.error("Error summarizing post:", error);
    return { summary: "Sorry, we couldn't generate a summary at this time." };
  }
}
