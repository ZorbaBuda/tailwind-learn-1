"use client";
import React, { useEffect, useRef, useState } from "react";
import { homeTech } from "@/lib/dataCelares";
import HeaderPart from "../parts/HeaderPart";
import TechListSlider from "../parts/TechListSlider";
import { useInView, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import FadeIn from "@/components/pruinboom/helpers/FadeIn";
import { useIsLg } from "@/hooks/useIsLg";

export default function HomeTechSection() {

  const { headerPart, sliderItems} = homeTech
  const isLg = useIsLg()
  const [currentItem, setCurrentItem] = useState(0)

  const [height, setHeight] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

   const section = useRef<HTMLDivElement>(null)
  const isInView = useInView(section)

  const { scrollY, scrollYProgress } = useScroll({container: section});

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
     console.log(scrollYProgress.get())
  
  });


  useEffect(() => {
  if(ref && ref.current){
     setHeight(ref.current.clientHeight)
     console.log(ref.current.clientHeight)
    }
  })

 

  // const { scrollY, scrollYProgress } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   const previous = scrollY.getPrevious();
  //   console.log(scrollY.get())
  //    console.log(scrollYProgress.get())

  // if (scrollYProgress.get() > 0.99) {
  //   setHidden(false);
  // }
  // });

  return (
    <section
     ref={section}
      id="home-tech-section"
      className={`section-light bg-cGrayLight min-h-screen
         ${isLg && isInView ? "sticky top-0" : "block"}`}
    >
      <div className="containerCel">
        <div  className={``}>
          <HeaderPart content={headerPart} />
         </div>
        {isLg ? (
          <FadeIn>
          <TechListSlider  isLg={isLg} topEl={height} content={sliderItems[`${currentItem}`]} />
          </FadeIn>
        ) : ( 
          <div className="max-w-[1126px] flex flex-col ">
            {sliderItems.map((item, index) => (
              <TechListSlider key={index} isLg={isLg} topEl={height} content={item} />
            ))}
          </div>
       )} 
        {isLg && (
          // <div className={`sticky bottom-0`}>
          <div>
            <ul className="flex flex-col gap-y-4 border-2 border-black w-fit">
              {sliderItems.map((item, index) => (
                <button key={index} onClick={() => setCurrentItem(index)}>{item.title}</button>
              ))}
              {/* <Link href={"/site3/#sticky-slider-block-1"}>Cell Shuttle</Link>
              <Link href={"/site3/#sticky-slider-block-2"}>
                Consumable Cartridge
              </Link>
              <Link href={"/site3/#sticky-slider-block-3"}>Cell Q</Link>
              <Link href={"/site3/#sticky-slider-block-4"}>Software</Link> */}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
