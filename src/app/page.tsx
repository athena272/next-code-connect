import CardPost from "@/components/CardPost";
import { getAllPosts } from "@/helper/functions";
import styles from './page.module.scss'
import Link from "next/link";

type HomeProps = {
  searchParams: {
    pages: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  console.log("🚀 ~ Home ~ searchParams:", searchParams)
  const currentPage = parseInt(searchParams?.pages) || 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <main className={styles.grid}>
      {
        posts.map(post => (
          <Link href={`/posts/${post.slug}`} passHref className={styles.link}>
            <CardPost
              key={post.id}
              post={post}
            />
          </Link>
        ))
      }
      <div className={styles.links}>
        {prev && <Link href={`/?pages=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?pages=${next}`}>Próxima página </Link>}
      </div>
    </main>
  );
}
