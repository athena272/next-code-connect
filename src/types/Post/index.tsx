import { Comment } from "../Comment"

export type Post = {
    id: number;
    cover: string;
    title: string;
    slug: string;
    body: string;
    markdown: string;
    author: {
        id: number;
        name: string;
        username: string;
        avatar: string;
    };
    comments: Comment[];
    likes: number;
    // Campos extras do Prisma
    createdAt?: Date;
    updatedAt?: Date;
    authorId?: number;
};
