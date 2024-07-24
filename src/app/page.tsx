import CardPost from "@/components/CardPost";
import { Post } from "@/types/Post";
import { posts as POSTS } from './posts.json'

export default function Home() {
  const posts: Post[] = POSTS

  return (
    <main>
      <CardPost post={posts[0]} />
    </main>
  );
}
