import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, PlusCircle, LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">BioConnect</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Feed
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/create-post">
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
