import Image from "next/image"
import Avatar from "../Avatar"
import { Post } from "@/types/Post"
import styles from './CardPost.module.scss'

type CardPostProps = {
    post: Post,
    highlight?: boolean
}

export default function CardPost({ post, highlight }: CardPostProps) {
    return (
        <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
            <header className={`${styles.header} ${!highlight ? styles.header__home : ''}`}>
                <figure > {/* style={{ height: highlight ? 300 : 133 }} */}
                    <Image
                        fill
                        src={post.cover}
                        alt={`Capa do post de titulo: ${post.title}`}
                    />
                </figure>
            </header>
            <section className={styles.body}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.name}
                />
            </footer>
        </article>
    )
}