import { Comment as CommentType } from "@/types/Comment";
import Comment from "../Comment";
import styles from './CommentList.module.scss'
import Replies from "../Replies";

type CommentListProps = {
    comments: CommentType[]
}

export default function CommentList({ comments }: CommentListProps) {
    return (
        <section className={styles.comments}>
            <h2>Comentários</h2>
            <ul>
                {
                    comments.map(comment => (
                        <li key={comment.id}>
                            <Comment
                                comment={comment}
                            />
                            <Replies />
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}