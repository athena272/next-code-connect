import { Comment as CommentType } from "@/types/Comment";
import Image from "next/image";
import styles from './Comment.module.scss'

type CommentProps = {
    comment: CommentType
}

export default function Comment({ comment }: CommentProps) {
    return (
        <div className={styles.comment}>
            <Image
                src={comment.author.avatar}
                width={32}
                height={32}
                alt={`Avatar do(a) ${comment.author.name}`}
            />
            <strong>
                @{comment.author.name}
            </strong>
            <p>
                {comment.text}
            </p>
        </div>
    )
}