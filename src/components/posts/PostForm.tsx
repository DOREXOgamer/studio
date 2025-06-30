import { createPostAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function PostForm() {
  return (
    <form action={createPostAction}>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-lg">Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Your groundbreaking article title"
              required
              className="text-base"
            />
          </div>
           <div className="space-y-2">
            <Label htmlFor="author" className="text-lg">Author</Label>
            <Input
              id="author"
              name="author"
              placeholder="Your name, e.g., Dr. Jonas Salk"
              required
              className="text-base"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content" className="text-lg">Content</Label>
            <Textarea
              id="content"
              name="content"
              placeholder="Share your detailed findings, methodologies, and conclusions..."
              required
              rows={15}
              className="text-base leading-relaxed"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
            Publish Post
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
