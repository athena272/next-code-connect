export type Comment = {
    id: number;
    text: string;
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