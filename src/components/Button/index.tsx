import styles from './Button.module.scss'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}