import Image from "next/image"
import Avatar from "../Avatar"
import { Post } from "@/types/Post"
import styles from './CardPost.module.scss'
import Link from "next/link"
import { incrementThumbsUp, postComment } from "@/actions"
import ThumbsUpButton from "./ThumbsUpButton"
import ModalComment from "../ModalComment"

type CardPostProps = {
    post: Post,
    highlight?: boolean,
    showBtnDetails?: boolean,
}

export default function CardPost({ post, highlight, showBtnDetails }: CardPostProps) {

    const submitThumbsUp = incrementThumbsUp.bind(null, post)
    const submitComment = postComment.bind(null, post)

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
                {
                    showBtnDetails ?
                        <Link className={styles.link} href={`/posts/${post.slug}`}>Ver detalhes</Link>
                        :
                        null
                }
            </section>
            <footer className={styles.footer}>
                <div className={styles.actions}>
                    <form action={submitThumbsUp}>
                        <ThumbsUpButton />
                        <p>
                            {post.likes}
                        </p>
                    </form>
                    <div >
                        <ModalComment action={submitComment}/>
                        <p>
                            {
                                post.comments?.length
                            }
                        </p>
                    </div>
                </div>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.name}
                />
            </footer>
        </article>
    )
}