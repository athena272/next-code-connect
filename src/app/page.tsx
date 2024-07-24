import CardPost from "@/components/CardPost";
import { Post } from "@/types/Post";
import logger from '@/logger'
import styles from './page.module.scss'

async function getAllPosts() {
  try {
    const response = await fetch('https://athena272.github.io/next-code-connect/posts.json')
    if (!response.ok) {
      throw new Error('Falha na rede');
    }
    
    logger.info('Posts obtidos com sucesso')
    const { posts } = await response.json();
    return posts

  } catch (error: any) {
    logger.error('Ops, algo correu mal: ' + error.message)
    return []
  }




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
