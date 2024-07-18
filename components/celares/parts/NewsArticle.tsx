import Image from "next/image"
import { ArrowButton } from "../buttons/ArrowButton";

type ContentProps = {
    image: string;
    date: string;
    summary: string;
    link: string;
}

export default function NewsArticle({metadata} : {metadata : ContentProps}) {
  return (
    <div>
        <Image
          src={metadata.image}
          alt={metadata.summary}
          width={1024}
          height={683}
          />
          <div>{metadata.date}</div>
          <div>{metadata.summary}</div>
          <ArrowButton hash={metadata.link} />
    </div>
  )
}
