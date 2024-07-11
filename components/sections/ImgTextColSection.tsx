import React from "react";
import Image, { StaticImageData } from "next/image";
import parser from 'html-react-parser' 

type ContentProps = {
    title: string,
    summary: string,
    p: string,
    image: StaticImageData
}

export default function ImgTextColSection({ content } : {content : ContentProps}) {
  return (
    <section className="section-light min-h-screen bg-white">
      <div className="px-5 flex flex-col lg:flex-row max-w-7xl mx-auto gap-y-5">
        <Image
          className="mx-auto md:w-full w-full object-cover object-top md:h-[540px] md:p-10 
          lg:w-1/2    "
          src={content.image}
          alt="logo"
          width={387}
          height={581}
        />
        <div className="">
            <div className="h2 mb-9">{content.title}</div>
            <div className="h4 mb-5">{content.summary}</div>
            <p className="lg:columns-2 ">{parser(content.p)}</p>
        </div>
      </div>
    </section>
  );
}
