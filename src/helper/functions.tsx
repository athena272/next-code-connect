import logger from '@/logger'
import { Post } from "@/types/Post";
import { remark } from 'remark';
import html from 'remark-html';
import db from '../../prisma/db'

type GetPostsResponse = {
    data: Post[]
    prev?: number | null
    next?: number | null
}

export async function getAllPosts(): Promise<GetPostsResponse> {
    try {
        const posts = await db.post.findMany({
            include: {
                author: true
            }
        })

        return {
            data: posts,
            prev: null,
            next: null
        }
    } catch (error) {
        logger.error('Falha ao obter posts', { error })
        return {
            data: [],
            prev: null,
            next: null
        }
    }
}

export async function getPostsBySlug(slug: string) {
    try {
        const posts = await getAllPosts();
        const post = posts.data.find(post => post.slug === slug)

        if (!post) {
            console.log('Post não encontrado');
            return null;
        }

        console.log('Post obtido com sucesso');

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const contentHtml = processedContent.toString();
        post.markdown = contentHtml

        return post;
    } catch (error: any) {
        console.log('Ops, algo correu mal: ' + error.message);
        return null;
    }
}