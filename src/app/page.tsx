import CardPost from "@/components/CardPost";
import { Post } from "@/types/Post";

async function getAllPosts() {
  const response = await fetch('https://athena272.github.io/next-code-connect/posts.json')
  if (!response.ok) {
    console.log('Ops, alguma coisa correu mal')
  }
  const { posts } = await response.json();
  
  return posts
}

export default async function Home() {
  const posts: Post[] = await getAllPosts()

  return (
    <main>
      {
        posts.map(post => (
          <CardPost
            key={post.id}
            post={post}
          />
        ))
      }
    </main>
  );
}
