'use server'

import { Post } from "@/types/Post";
import db from "../../prisma/db";

export default async function incrementThumbsUp(post: Post) {

    await db.post.update({
        where: {
            id: post.id,
        },
        data: {
            likes: {
                increment: 1
            }
        }
    })
}