'use client'

import { useRef } from "react";
import Modal, { ModalRef } from "../Modal";
import { IconButton } from "../IconButton";
import Chat from "../icons/Chat";
import { Subheading } from "../Subheading";
import { Textarea } from "../Textarea";
import styles from './ModalComment.module.scss'
import SubmitButton from "../SubmitButton";

type ModalCommentProps = {
    action: (formData: FormData) => Promise<void>;
};

export default function ModalComment({ action }: ModalCommentProps) {
    const modalRef = useRef<ModalRef>(null)

    return (
        <>
            <Modal ref={modalRef}>
                <form action={action} onSubmit={() => modalRef.current?.closeModal()}>
                    <Subheading>Deixe seu comentário sobre o post:</Subheading>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                </form>
                <div className={styles.footer}>
                    <SubmitButton>
                        Comentar
                    </SubmitButton>
                </div>
            </Modal>
            <IconButton
                onClick={() => modalRef.current?.openModal()}
            >
                <Chat />
            </IconButton>
        </>
    )
}