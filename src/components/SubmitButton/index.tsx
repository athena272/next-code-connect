import { useFormStatus } from "react-dom";
import Button from "../Button";
import ArrowFoward from "../icons/ArrowFoward";
import Spinner from "../Spinner";
import React from "react";

type SubmitButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
}

export default function SubmitButton({ children }: SubmitButtonProps) {
    const { pending } = useFormStatus();
    return (
        <Button aria-disabled={pending} type="submit">
            {pending ? <Spinner /> : <>{children} <ArrowFoward /></>}
        </Button>
    )
}