import Link from 'next/link'
import styles from './Aside.module.scss'
import Image from 'next/image'
import logo from './logo.png'

export default function Aside() {
    return (
        <aside className={styles.aside}>
            {/* <img src="/logo.png" alt="Logo da Code Connect" /> */}
            <Link href={'/'}  passHref>
                <Image src={logo} alt="Logo da Code Connect" width={128} height={40} loading='eager' priority />
            </Link>
        </aside>
    )
}