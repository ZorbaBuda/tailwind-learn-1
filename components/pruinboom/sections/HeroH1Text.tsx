import React from "react";
import parser from "html-react-parser"
import { history } from "@/lib/dataPruimboom";



export default function HeroH1Text() {
  return (
    <section className="section bg-blue_light h-screen">
      <div className="border-2 border-black max-w-7xl mx-auto  flex flex-col lg:flex-row xl:px-0 px-5">
        <div className="border-2 border-red-900 lg:mr-[161px] xl:mr-[78px]">
        <div className="h1 border-2 border-black   ">{history.title}</div>
        </div>
        <div className="prose ">
          <p className="font-larken_thin lg:prose-xl prose-lg">{history.summary}</p>
          <p className="lg:prose-lg">{parser(history.p)}</p>
        
        </div>
      </div>
    </section>
  );
}
