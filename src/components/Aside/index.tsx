import styles from './Aside.module.scss'
import Image from 'next/image'

export default function Aside() {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
            <Image src={'/logo.png'} alt="Logo da Code Connect" width={128} height={40} />
        </aside>
    )
}