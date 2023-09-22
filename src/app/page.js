
import Posts from "@/components/posts/posts";
import PostsCount from "@/components/postsCount/postsCount";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Posts />
      <PostsCount />
    </main>
  );
}
