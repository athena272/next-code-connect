import { Comment } from "../Comment"

export type Post = {
    id: number,
    cover: string,
    title: string,
    slug: string,
    body: string,
    markdown: string,
    author: {
        id: number,
        name: string,
        username: string,
        avatar: string
    },
    likes: number,
    comments: Comment[] // Post has many comments
}