'use client'

import { useState } from "react"
import styles from './Replies.module.scss'

export default function Replies() {
    const [showReplies, setShowReplies] = useState(false)

    return (
        <div className={styles.replies}>
            <button
                className={styles.btn}
                onClick={() => setShowReplies(!showReplies)}
            >
                {showReplies ? 'Ocultar' : 'Ver'} respostas
            </button>
        </div>
    )
}