'use client'
import { StaticImageData } from "next/image";
import  Image  from "next/image";
import {ArrowButtonText} from "../buttons/ArrowButton";
import { useState, useEffect, useRef } from "react";
import FadeIn from "@/components/pruinboom/helpers/FadeIn";

type ContentProps = {
    title: string;
    description: string;
    linkText: string;
    linkHash: string;
    image: StaticImageData;
    item: string;
} | {
    title: string;
    description: string;
    linkText: string;
    linkHash: string;
    image: string;
    item: string;
}




export default function TechListSlider({content, isLg, topEl} : 
          {content : ContentProps, isLg? : boolean, topEl : number}) {

  return (
    <FadeIn>
    <div  
         style={{top: `${topEl}`}}
         id={`sticky-slider-block-${content.item}`} 
         className={` flex flex-col lg:flex-row-reverse border-2 border-red-700`}>
        {typeof content.image === "string" ? (
           <iframe

         className="border-0 "
          src={content.image}
           title="Accelerating Access to Life-Saving Cell Therapies" 
          allowFullScreen
           /> 
        ) : (
         <Image src={content.image} alt="logo" className="w-full lg:w-[50%]"  />
        )}
        <div className="flex flex-col gap-y-5 mt-0 lg:mt-[50px]">
            <div className="text-2xl sm:text-[28px] lg:text-3xl font-satoshi_medium text-cBlue  ">{content.title}</div>
            <div className="h4cel mb-3 text-cBlueDark">{content.description}</div>
            <ArrowButtonText text={content.linkText} hash={content.linkHash} />
        </div>
    </div>
    </FadeIn>
  )
}
