import Image from "next/image"
import Avatar from "../Avatar"
import { Post } from "@/types/Post"

type CardPostProps = {
    post: Post,
}

export default function CardPost({ post }: CardPostProps) {
    return (
        <article>
            <header>
                <figure>
                    <Image
                        src={post.cover}
                        alt={`Um ótimo post`}
                    />
                </figure>
            </header>
            <section>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar
                    imageSrc={post.author.avatar}
                    name={post.author.name}
                />
            </footer>
        </article>
    )
}