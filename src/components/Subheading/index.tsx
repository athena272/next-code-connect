
import styles from './Subheading.module.scss'

type SubheadingProps = {
    children: React.ReactNode
}

export const Subheading = ({ children }: SubheadingProps) => {
    return (
        <h2 className={styles.subheading}>
            {children}
        </h2>
    )
}
