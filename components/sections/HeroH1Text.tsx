import React from "react";
import parser from "html-react-parser"

type ContentProps = {
    title: string;
    summary: string;
    p: string;
}

export default function HeroH1Text({content} : { content : ContentProps}) {
  return (
    <section className="section bg-blue_light h-screen">
      <div className=" max-w-7xl mx-auto  flex flex-col lg:flex-row px-5 gap-y-5">
        <div className="h1 lg:mr-[161px] xl:mr-[78px] ">{content.title}</div>
        <div className="prose ">
          <p className="font-larken_thin lg:prose-xl prose-lg">{content.summary}</p>
          <p className="lg:prose-lg">{parser(content.p)}</p>
        
        </div>
      </div>
    </section>
  );
}
