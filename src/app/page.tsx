import CardPost from "@/components/CardPost";
import { getAllPosts } from "@/helper/functions";
import styles from './page.module.scss'
import Link from "next/link";

export default async function Home() {
  // console.log("🚀 ~ Home ~ props:", props)
  // const currentPage = props.searchParams?.page || 1
  const { data: posts, prev, next } = await getAllPosts()

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
    </main>
  );
}
