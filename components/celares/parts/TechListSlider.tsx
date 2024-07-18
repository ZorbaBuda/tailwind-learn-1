'use client'
import { StaticImageData } from "next/image";
import  Image  from "next/image";
import {ArrowButtonText} from "../buttons/ArrowButton";
import { useState, useEffect } from "react";
import FadeIn from "@/components/pruinboom/helpers/FadeIn";

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

  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLg(true);
      } else setIsLg(false);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return (
    <FadeIn>
    <div className="flex flex-col lg:flex-row-reverse">
        {typeof content.image === "string" ? (
           <iframe
         className="border-0"
          src={content.image}
           title="Accelerating Access to Life-Saving Cell Therapies" 
          allowFullScreen
           /> 
        ) : (
         <Image src={content.image} alt="logo" width={1623} height={1153} />
        )}
        <div>
            <div>{content.title}</div>
            <div>{content.description}</div>
            <ArrowButtonText text={content.linkText} hash={content.linkHash} />
        </div>
    </div>
    </FadeIn>
  )
}
