import CardPost from "@/components/CardPost";
import { getAllPosts } from "@/helper/functions";
import styles from './page.module.scss'
import Link from "next/link";

type HomeProps = {
  searchParams: {
    page: string
    q: string
  }
}

export default async function Home({ searchParams }: HomeProps) {
  // console.log("🚀 ~ Home ~ searchParams:", searchParams)
  const currentPage = parseInt(searchParams?.page) || 1
  const searchTerm = searchParams?.q
  const { data: posts, prev, next } = await getAllPosts(currentPage, searchTerm)

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
        {prev && <Link passHref href={{
          pathname: '/',
          query: {
            page: prev,
            q: searchTerm
          }
        }}>
          Página anterior
        </Link>}
        {next && <Link passHref href={{
          pathname: '/',
          query: {
            page: next,
            q: searchTerm
          }
        }}>
          Próxima página
        </Link>}
      </div>
    </main>
  );
}
