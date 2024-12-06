'use server'

import { Post } from "@/types/Post";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export async function incrementThumbsUp(post: Post) {

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

export async function postComment(post: Post, formData: FormData) {
    const author = await db.user.findFirst({
        where: {
            username: 'anabeatriz_dev'
        }
    })

    if (!author) {
        throw new Error('Author not found');
    }

    const text = formData.get('text');
    if (typeof text !== 'string') {
        throw new Error('Invalid text');
    }

    await db.comment.create({
        data: {
            text,
            authorId: author.id, // aqui não será mais undefined pois checamos if (!author)
            postId: post.id,
        }
    })

    revalidatePath('/')
    revalidatePath(`/${post.slug}`)
}