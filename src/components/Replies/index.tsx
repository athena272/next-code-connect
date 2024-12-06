'use client'

import { useState } from "react"
import styles from './Replies.module.scss'
import { Comment as CommentType } from "@/types/Comment"
import Comment from "../Comment"
import ModalReplay from "../ModalReply"

type RepliesProps = {
    comment: CommentType
}

export default function Replies({ comment }: RepliesProps) {
    const [showReplies, setShowReplies] = useState(false)

    return (
        <div className={styles.replies}>
            <button
                className={styles.btn}
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            {
                showReplies &&
                <ul>
                    {
                        comment.children.map(commentReply => (
                            <li key={commentReply.id}>
                                <Comment comment={commentReply} />
                                <ModalReplay comment={commentReply} />
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}