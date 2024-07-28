import styles from './Heading.module.scss'

type HeadingProps = {
    children: React.ReactNode
}

export default function Heading({ children }: HeadingProps) {
    return (
        <h1 className={styles.heading}>{children}</h1>
    )
}