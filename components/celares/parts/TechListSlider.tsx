import { StaticImageData } from "next/image";
import  Image  from "next/image";
import ArrowButton from "../buttons/ArrowButton";

type ContentProps = {
    title: string;
    description: string;
    linkText: string;
    linkHash: string;
    image: StaticImageData;
} | {
    title: string;
    description: string;
    linkText: string;
    linkHash: string;
    image: string;
}




export default function TechListSlider({content} : {content : ContentProps}) {
  return (
    <div className="flex flex-col lg:flex-row-reverse">
        <Image src={content.image} alt="logo" width={1623} height={1153} />
        <div>
            <div>{content.title}</div>
            <div>{content.description}</div>
            <ArrowButton text={content.linkText} hash={content.linkHash} />
        </div>
    </div>
  )
}
