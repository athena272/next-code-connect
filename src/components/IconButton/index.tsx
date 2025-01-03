import React from 'react'
import styles from './IconButton.module.scss'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: React.ReactNode,
}

export const IconButton = ({ children, ...rest }: IconButtonProps) => {
    return (
        <button {...rest} className={styles.btn}>
            {children}
        </button>
    )
}