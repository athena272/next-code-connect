'use client'

import { forwardRef, useRef, useImperativeHandle } from "react"
import Modal, { ModalRef } from "../Modal"
import styles from './ModalReply.module.scss'
import { postReply } from "@/actions"
import { Comment as CommentType } from "@/types/Comment"
import { Post } from "@/types/Post"
import Comment from "../Comment"
import { Textarea } from "../Textarea"
import SubmitButton from "../SubmitButton"

type ModalReplayProps = {
    comment: CommentType
    post?: Post
}

export default function ModalReplay({ comment, post }: ModalReplayProps) {
    const modalRef = useRef<ModalRef>(null)

    function openModal() {
        modalRef.current?.openModal()
    }

    async function handleFormAction(formData: FormData) {
        await postReply(comment, formData);
    }

    return (
        <>
            <Modal ref={modalRef}>
                <form action={handleFormAction}>
                    <div>
                        <Comment comment={comment} />
                    </div>
                    <div className={styles.divider}></div>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                    <div className={styles.footer}>
                        <SubmitButton>
                            Responder
                        </SubmitButton>
                    </div>
                </form>
            </Modal>
            <button className={styles.btn} onClick={openModal}>
                Responder
            </button>
        </>
    )
}