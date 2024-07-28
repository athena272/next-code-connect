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

export async function getAllPosts(page: number): Promise<GetPostsResponse> {
    try {
        const PER_PAGE = 4
        const skip = (page - 1) * PER_PAGE
        const totalItems = await db.post.count()
        const totalPages = Math.ceil(totalItems / PER_PAGE)
        //prev and next pages
        const prevPage = page > 1 ? page - 1 : null
        const nextPage = page < totalPages ? page + 1 : null

        const posts = await db.post.findMany({
            take: PER_PAGE,
            skip,
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                author: true
            }
        })

        return {
            data: posts,
            prev: prevPage,
            next: nextPage
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
        const posts = await getAllPosts(0);
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