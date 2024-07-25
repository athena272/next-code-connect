import CardPost from "@/components/CardPost";
import { Post } from "@/types/Post";
import { getAllPosts } from "@/helper/functions";
import styles from './page.module.scss'

export default async function Home() {
  const posts: Post[] = await getAllPosts()

  return (
    <main className={styles.grid}>
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
