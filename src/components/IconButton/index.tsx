import React from 'react'
import styles from './IconButton.module.scss'

type IconButtonProps = {
    children?: React.ReactNode,
    disabled?: boolean
}

export const IconButton = ({ children, disabled, ...rest }: IconButtonProps) => {
    return (
        <button {...rest} className={styles.btn} disabled={disabled}>
            {children}
        </button>
    )
}