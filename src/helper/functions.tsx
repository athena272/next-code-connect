import logger from '@/logger'
import { Post } from "@/types/Post";
import { remark } from 'remark';
import html from 'remark-html';
import db from '../../prisma/db'
import { redirect } from 'next/navigation';
import { Prisma } from '@prisma/client';

type GetPostsResponse = {
    data: Post[]
    prev?: number | null
    next?: number | null
}

export async function getAllPosts(page: number, searchTerm: string): Promise<GetPostsResponse> {
    try {
        const where: Prisma.PostWhereInput = {}

        if (searchTerm) {
            where.title = {
                contains: searchTerm,
                mode: 'insensitive'
            }
        }

        const PER_PAGE = 4
        const skip = (page - 1) * PER_PAGE
        const totalItems = await db.post.count({ where })
        const totalPages = Math.ceil(totalItems / PER_PAGE)
        //prev and next pages
        const prevPage = page > 1 ? page - 1 : null
        const nextPage = page < totalPages ? page + 1 : null

        const posts = await db.post.findMany({
            take: PER_PAGE,
            skip,
            where,
            orderBy: {
                id: 'desc'
            },
            include: {
                author: true,
                comments: true
            }
        })

        if (!posts || posts.length === 0) {
            logger.error(`Posts com o titulo ${searchTerm} não foram encontrados`)
            throw new Error(`Posts com o titulo ${searchTerm} não foram encontrados`)
        }

        return {
            data: posts,
            prev: prevPage,
            next: nextPage
        }
    } catch (error) {
        logger.error('Falha ao obter posts', { error })
    }

    redirect('/not-found')
}

export async function getPostsBySlug(slug: string): Promise<Post> {
    try {
        const post = await db.post.findFirst({
            where: {
                slug
            },
            include: {
                author: true,
                comments: {
                    include: {
                        author: true,
                        children: {
                            include: {
                                author: true,
                            }
                        }
                    },
                    where: {
                        parentId: null
                    }
                },
            }
        })

        if (!post) {
            logger.error(`Post com o slug ${slug} não foi encontrado`)
            throw new Error(`Post com o slug ${slug} não foi encontrado`)
        }
        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(post.markdown);
        const contentHtml = processedContent.toString();
        post.markdown = contentHtml

        return post;
    } catch (error: any) {
        logger.error('Falha ao obter o post com o slug: ', {
            slug,
            error
        })
    }

    redirect('/not-found')
}