import { StaticImageData } from "next/image";
import  Image  from "next/image";
import Link from "next/link";

type ContentProps = {
    title: string;
    label: string;
    text: string;
    linkText: string;
    link: string;
    image: StaticImageData
}

export default function HomeCliniqueSection({content} : {content : ContentProps}) {
  return (
    <section className="section bg-white flex-flex-col">
        <div className="h2c">{content.title} </div>
        <div className="flex flex-col-reverse lg:flex-row">
       <Image
          // className=" pb-[190px]lg:pb-0 mx-auto flex 2xl:max-w-[740px] xl:max-w-[624px] lg:max-w-[455px] "
          className="   "
          src={content.image}
          alt="logo"
          width={558}
          height={671}
        />
        <div className="flex flex-col">
            <div>{content.label}</div>
            <div>{content.text}</div>
           <Link href={content.link} >{content.linkText}</Link>
        </div>
      
        </div>

    </section>
  )
}
