export type Comment = {
    id: number;
    text: string;
    createdAt: Date;
    updatedAt: Date;
    author: {
        id: number;
        name: string;
        username: string;
        avatar: string;
    };
    postId: number;
    parentId?: number | null;
    children: Comment[];
};