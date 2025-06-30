import { getPosts } from "@/lib/posts";
import { PostList } from "@/components/posts/PostList";
import Header from "@/components/layout/Header";

export default function Home() {
  const posts = getPosts();

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
            BioConnect Feed
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the latest articles and discoveries in biomedicine.
          </p>
        </div>
        <PostList posts={posts} />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} BioConnect. All rights reserved.
      </footer>
    </div>
  );
}
