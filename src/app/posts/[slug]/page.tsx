import Image from 'next/image';
import Avatar from '@/components/Avatar';
import { getAllPosts, getPostsBySlug } from '@/helper/functions';
import styles from './PagePost.module.scss'

type PagePostProps = {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = await getAllPosts()
    const slugs = posts.map(post => ({
        slug: post.slug
    }))

    return slugs
}

export default async function PagePost({ params }: PagePostProps) {
    const post = await getPostsBySlug(params.slug)

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <>
            <article className={styles.card}>
                <header className={styles.header}>
                    <figure>
                        <Image
                            src={post.cover}
                            alt={`Capa do post de titulo: ${post.title}`}
                            width={438}
                            height={133}
                        />
                    </figure>
                </header>
                <section className={styles.body}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </section>
                <footer className={styles.footer}>
                    <Avatar
                        imageSrc={post.author.avatar}
                        name={post.author.name}
                    />
                </footer>
            </article>
            <div style={{ padding: 16, background: 'white' }} dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </>
    )
}