import { getPostById } from "@/lib/posts";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import { PostView } from "@/components/posts/PostView";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <PostView post={post} />
      </main>
    </div>
  );
}
