import { getAllPosts, getPostsBySlug } from '@/helper/functions';
import styles from './PagePost.module.scss'
import CardPost from '@/components/CardPost';
import CommentList from '@/components/CommentList';

type PagePostProps = {
    params: {
        slug: string
    }
}

export default async function PagePost({ params }: PagePostProps) {
    const post = await getPostsBySlug(params.slug)

    if (!post) {
        return <div>Post não encontrado</div>;
    }

    return (
        <>
            <CardPost post={post} highlight />
            <h3 className={styles.subtitle}>Código:</h3>

            <div className={styles.code}>
                <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
            </div>
            <div>
                <h2>Comentários</h2>
                <CommentList comments={post.comments} />
            </div>
        </>
    )
}