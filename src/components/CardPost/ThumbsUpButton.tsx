'use client'

import { useFormStatus } from "react-dom"
import { IconButton } from "../IconButton"
import ThumbsUp from "../icons/ThumbsUp"
import Spinner from "../Spinner"

export default function ThumbsUpButton() {
    const { pending } = useFormStatus()

    return (
        <IconButton disabled={pending}>
            {
                pending ? <Spinner /> : <ThumbsUp />
            }
        </IconButton>
    )
}