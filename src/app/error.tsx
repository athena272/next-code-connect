'use client' // Error components must be Client Components

import ArrowBack from '@/components/icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/Heading'
import styles from './error/error.module.scss'
import banner from './error/404.png'
import { useEffect } from 'react'

export default function Error({
    error
}: {
    error: Error & { digest?: string }
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className={styles.container}>
            <Image src={banner} alt='Erro ao encontrar os posts'/>
            <Heading>Opa! Ocorreu um erro.</Heading>
            <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando.</p>
            <Link href="/">
                Voltar ao feed <ArrowBack color='#81FE88' />
            </Link>
        </div>
    )
}