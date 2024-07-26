// import logger from '@/logger'
import { Post } from "@/types/Post";
import { remark } from 'remark';
import html from 'remark-html';

type PostResponse = {
    posts: Post[];
}

export async function getAllPosts(): Promise<Post[]> {
    try {
        const response = await fetch('https://athena272.github.io/next-code-connect/posts.json')
        if (!response.ok) {
            throw new Error('Falha na rede');
        }

        console.log('Posts obtidos com sucesso')
        const { posts }: PostResponse = await response.json();
        return posts
    } catch (error: any) {
        console.log('Ops, algo correu mal: ' + error.message)
        return []
    }
}

export async function getPostsBySlug(slug: string) {
    try {
        const posts = await getAllPosts();
        const post = posts.find((post) => post.slug === slug);

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