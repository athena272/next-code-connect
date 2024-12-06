import { Comment as CommentType } from "@/types/Comment";
import Comment from "../Comment";

type CommentListProps = {
    comments: CommentType[]
}

export default function CommentList({ comments }: CommentListProps) {
    return (
        <ul>
            {
                comments.map(comment => (
                    <li>
                        <Comment
                            key={comment.id}
                            comment={comment}
                        />
                    </li>
                ))
            }
        </ul>
    )
}