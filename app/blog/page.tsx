import { Metadata } from "next";
import { allPosts } from ".contentlayer/generated";
import PostList from "./components/ui/PostList";
import Sidebar from "./components/ui/Sidebar"; 

export const metadata: Metadata = {
  title: "Blog | Nicolas Alan",
  description:
    "Escrevo sobre programação, design e, ocasionalmente, atualizações de vida!",
};

export default function Blog() {
  const posts = allPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="flex">
      {/* Barra lateral */}
      <Sidebar />

      {/* Conteúdo principal */}
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">Blog</h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
              {posts.length} postagens sobre código, IA, mais ...
            </p>
          </div>
        </div>
        <div
          className="animate-in"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <PostList posts={posts} />
        </div>
        <div
          className="animate-in"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {/* Conteúdo adicional, se necessário */}
        </div>
      </div>
    </div>
  );
}
