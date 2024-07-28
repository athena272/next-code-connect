import Heading from "@/components/Heading"
import ArrowBack from "@/components/icons/ArrowBack"
import Image from "next/image"
import Link from "next/link"
import styles from './error/error.module.scss'
import banner from './error/404.png'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <Image src={banner} alt='Erro ao encontrar o posts' />
            <Heading>Opa! Ocorreu um erro.</Heading>
            <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
            <Link href='/' passHref>
                Voltar ao feed <ArrowBack color='#81FE88' />
            </Link>
        </div>
    )
}