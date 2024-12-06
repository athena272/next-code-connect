'use client'

import { forwardRef, useRef, useImperativeHandle } from "react"
import styles from './Modal.module.scss'

type ModalProps = {
    children?: React.ReactNode
}

export type ModalRef = {
    closeModal: () => void
    openModal: () => void
}

const Modal = forwardRef<ModalRef, ModalProps>(({ children }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const closeModal = () => {
        dialogRef.current?.close()
    }

    const openModal = () => {
        dialogRef.current?.showModal()
    }

    useImperativeHandle(ref, () => ({
        closeModal,
        openModal,
    }))

    return (
        <dialog ref={dialogRef} className={styles.dialog}>
            <header className={styles.header}>
                <button onClick={closeModal}>X</button>
            </header>
            {children}
        </dialog>
    )
})

export default Modal
