"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { DialogMap } from "../ui-components/DialogMap";
import { TooltipMap } from "../ui-components/TooltipMap";

type ContentProps = {
  exists: boolean
  factory: string
  description: string
  size?: string
  top: string
  left: string
  video?: string 
};

export default function MapLinkDialog({ content }: { content: ContentProps }) {
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

  const { exists, factory, description, size, top, left, video } = content;


  return (
    <>
     
      {!isLg ?  (
      <DialogMap content={content}  />
      ) : (
      <TooltipMap content ={content} />
       )}

      {/* <Link className="group inline-flex items-center gap-x-3" href={'#'}>
       <div className="text-black hover:text-cBlueLight bg-cBlueLight hover:bg-cBlue transition duration-300 rounded-full p-1 "><GoArrowRight /></div>
      
    </Link> */}
    </>
  );
}
