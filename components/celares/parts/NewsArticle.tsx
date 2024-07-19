import Image from "next/image"
import { ArrowButton, ArrowButtonNoLink } from "../buttons/ArrowButton";
import Link from "next/link";

type ContentProps = {
    image: string;
    date: string;
    summary: string;
    link: string;
}

export default function NewsArticle({metadata} : {metadata : ContentProps}) {
  return (
    <Link href={metadata.link}
        className="bg-cGrayLight hover:bg-white group "
    >
        <Image
          src={metadata.image}
          alt={metadata.summary}
          width={1024}
          height={683}
          className="aspect-video object-cover  "
          />
          <div className="p-5 flex flex-col   border-2 border-red-400 ">
            <div className="">
          <div className="text-cBlue font-bold text-base uppercase tracking-widest">{metadata.date}</div>
          <div className="group-hover:text-cBlue group-hover:underline font-satoshi_medium
             text-xl lg:text-2xl leading-[30px] lg:leading-9 text-black
          ">
            {metadata.summary}</div>
            </div>
            <div className="  flex justify-end border-2 border-black">
            <ArrowButtonNoLink  />
          </div>
          </div>
    </Link>
  )
}
