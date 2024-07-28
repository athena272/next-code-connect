import styles from './Button.module.scss'

type ButtonProps = {
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}