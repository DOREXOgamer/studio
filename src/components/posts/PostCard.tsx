import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  const shortContent = post.content.substring(0, 100) + "...";

  return (
    <Card className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
      <CardHeader>
        <Link href={`/posts/${post.id}`}>
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              data-ai-hint={post.imageHint}
            />
          </div>
        </Link>
        <CardTitle className="pt-4">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{shortContent}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={post.avatar} alt={post.author} />
            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{post.author}</p>
            <p className="text-xs text-muted-foreground">{post.date}</p>
          </div>
        </div>
        <Link href={`/posts/${post.id}`} passHref>
          <Button variant="ghost" size="sm">
            Leia Mais <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
