import Image from "next/image";
import "./card.module.css";
import Link from "next/link";

interface CardProps {
    name: string;
    imageUrl: string;
    href: string;
}

const Card = ({ name, imageUrl, href }: CardProps) => {
    return (
        <Link href={href}>
            <h2>{name}</h2>
            <Image src={imageUrl} alt="Card Image" width={260} height={160} />
        </Link>
    )
}

export default Card;
