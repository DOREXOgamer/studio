"use client";

import { useState } from "react";
import Image from "next/image";
import type { Post } from "@/lib/types";
import { summarizePostAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sparkles, LoaderCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PostViewProps {
  post: Post;
}

export function PostView({ post }: PostViewProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSummarize = async () => {
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizePostAction(post.content);
      if (result.summary) {
        setSummary(result.summary);
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Could not generate summary.",
        });
      }
    } catch (error) {
       toast({
          variant: "destructive",
          title: "Error",
          description: "An unexpected error occurred.",
        });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-semibold">{post.author}</p>
            <p className="text-md text-muted-foreground">{post.date}</p>
          </div>
        </div>
      </div>

      <div className="relative w-full h-96 overflow-hidden rounded-xl mb-8 shadow-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          data-ai-hint={post.imageHint}
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap">
        {post.content}
      </div>

      <div className="mt-12 text-center">
        <Button onClick={handleSummarize} disabled={isLoading} size="lg" className="bg-accent hover:bg-accent/90">
          {isLoading ? (
            <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-5 w-5" />
          )}
          {isLoading ? "Generating Summary..." : "Summarize with AI"}
        </Button>
      </div>

      {summary && (
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <Sparkles className="mr-2 h-6 w-6" />
              AI Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/80 leading-relaxed">{summary}</p>
          </CardContent>
        </Card>
      )}
    </article>
  );
}
