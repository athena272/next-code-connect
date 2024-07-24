import Image from "next/image"
import Avatar from "../Avatar"
import { Post } from "@/types/Post"
import styles from './CardPost.module.scss'

type CardPostProps = {
    post: Post,
}

export default function CardPost({ post }: CardPostProps) {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <figure>
                    <Image
                        src={post.cover}
                        alt={`Capa do post de titulo: ${post.title}`}
                        width={438}
                        height={133}
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