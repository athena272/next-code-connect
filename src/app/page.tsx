import CardPost from "@/components/CardPost";
import { Post } from "@/types/Post";
import postsData from './posts.json'

export default function Home() {
  const posts: Post[] = postsData.posts

  return (
    <main>
      <CardPost post={posts[0]} />
    </main>
  );
}
