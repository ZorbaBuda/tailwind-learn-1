"use client";
import React, { useEffect, useState } from "react";
import { homeTech } from "@/lib/dataCelares";
import HeaderPart from "../parts/HeaderPart";
import TechListSlider from "../parts/TechListSlider";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";

export default function HomeTechSection() {
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
      id="home-tech-section"
      className="section-light bg-cGrayLight min-h-screen"
    >
      <div className="containerCel">
        <div className={`${isLg ? "sticky top-0" : "block"}`}>
          <HeaderPart content={homeTech.headerPart} />
        </div>
        {isLg ? (
          <div>lg</div>
        ) : (
          <div className="max-w-[1126px] flex flex-col ">
            {homeTech.sliderItems.map((item, index) => (
              <TechListSlider key={index} content={item} />
            ))}
          </div>
        )}
        {isLg && (
          <div className={`sticky bottom-0`}>
            <ul className="flex flex-col gap-y-4">
              <Link href={"/site3/#sticky-slider-block-1"}>Cell Shuttle</Link>
              <Link href={"/site3/#sticky-slider-block-2"}>
                Consumable Cartridge
              </Link>
              <Link href={"/site3/#sticky-slider-block-3"}>Cell Q</Link>
              <Link href={"/site3/#sticky-slider-block-4"}>Software</Link>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
