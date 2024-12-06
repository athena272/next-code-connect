'use client'

import { useEffect, useState } from "react"
import styles from './Replies.module.scss'
import { Comment as CommentType } from "@/types/Comment"
import Comment from "../Comment"
import ModalReplay from "../ModalReply"
import Spinner from "../Spinner"

type RepliesProps = {
    comment: CommentType
}

export default function Replies({ comment }: RepliesProps) {
    const [showReplies, setShowReplies] = useState(false)
    const [commentsReplay, setCommentsReplay] = useState<CommentType[]>([])
    const [isLoading, setIsLoading] = useState(false); // Estado para rastrear carregamento

    async function fetchData() {
        setIsLoading(true); // Inicia o spinner
        try {
            const response = await fetch(`/api/comment/${comment.id}/replies`);
            if (!response.ok) {
                throw new Error("Failed to fetch replies");
            }
            const data: CommentType[] = await response.json();
            setCommentsReplay(data);
        } catch (error) {
            console.error("Error fetching replies:", error);
        } finally {
            setIsLoading(false); // Finaliza o spinner
        }
    }

    useEffect(() => {
        if (showReplies) {
            fetchData()
        }
    }, [showReplies])

    return (
        <div className={styles.replies}>
            <button
                className={styles.btn}
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
            {
                showReplies && (
                    <>
                        {
                            isLoading ?
                                <Spinner />
                                :
                                (
                                    <ul>
                                        {
                                            commentsReplay.map(commentReply => (
                                                <li key={commentReply.id}>
                                                    <Comment comment={commentReply} />
                                                    <ModalReplay comment={commentReply} />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                )
                        }
                    </>
                )
            }
        </div>
    )
}