import { Comment as CommentType } from "@/types/Comment";
import Image from "next/image";

type CommentProps = {
    comment: CommentType
}


export default function Comment({ comment }: CommentProps) {
    return (
        <div>
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