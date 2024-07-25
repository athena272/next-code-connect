// import logger from '@/logger'

export async function getAllPosts() {
    try {
        const response = await fetch('https://athena272.github.io/next-code-connect/posts.json')
        if (!response.ok) {
            throw new Error('Falha na rede');
        }

        console.log('Posts obtidos com sucesso')
        const { posts } = await response.json();
        return posts
    } catch (error: any) {
        console.log('Ops, algo correu mal: ' + error.message)
        return []
    }
}