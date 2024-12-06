import style from './Textarea.module.scss'

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    children?: React.ReactNode
}

export const Textarea = ({ children, ...rest }: TextareaProps) => {
    return (
        <textarea className={style.textarea} {...rest}>
            {children}
        </textarea>
    )
}
