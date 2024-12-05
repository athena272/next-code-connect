'use server'

import { Post } from "@/types/Post";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export default async function incrementThumbsUp(post: Post) {

    // await new Promise((resolve, reject) => setTimeout(resolve, 1500))

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

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}