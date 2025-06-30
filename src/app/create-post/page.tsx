import Header from "@/components/layout/Header";
import { PostForm } from "@/components/posts/PostForm";

export default function CreatePostPage() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Criar Nova Postagem
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Compartilhe seu conhecimento com a comunidade biomédica.
            </p>
          </div>
          <PostForm />
        </div>
      </main>
    </div>
  );
}
