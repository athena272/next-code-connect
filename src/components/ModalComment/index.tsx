'use client'

import { useRef } from "react";
import Modal, { ModalRef } from "../Modal";
import { IconButton } from "../IconButton";
import Chat from "../icons/Chat";

export default function ModalComment() {
    const modalRef = useRef<ModalRef>(null)

    return (
        <>
            <Modal ref={modalRef}>
                <h1>Olá mundo!</h1>
            </Modal>
            <IconButton
                onClick={() => modalRef.current?.openModal()}
            >
                <Chat />
            </IconButton>
        </>
    )
}