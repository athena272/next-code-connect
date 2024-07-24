import Image from "next/image"

type AvatarProps = {
    name: string,
    imageSrc: string
}

export default function Avatar({ name, imageSrc }: AvatarProps) {
    return (
        <ul>
            <li>
                <Image src={imageSrc} alt={`Avatar do usuário ${name}`}/>
            </li>
            <li>
                @{name}
            </li>
        </ul>
    )
}