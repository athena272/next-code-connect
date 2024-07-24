import CardPost from "@/components/CardPost";
import { Post } from "@/types/Post";
import logger from '@/logger'
import styles from './page.module.scss'

async function getAllPosts() {
  const response = await fetch('https://athena272.github.io/next-code-connect/posts.json')
  if (!response.ok) {
    logger.error('Ops, alguma coisa correu mal')
    return []
  }
  logger.info('Posts obtidos com sucesso')

  const { posts } = await response.json();
  
  return posts
}

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
