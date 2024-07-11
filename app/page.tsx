import Image from "next/image";
import {
  disciplines,
  howCanHelp,
  homeParagraph,
  heroText,
  academicOfferings,
  campuses,
} from "@/lib/data.js";
import picGirl from "@/public/img/home/girl.jpg";
import picWoodBody from "@/public/img/home/wood-body.jpg";
import React from "react";
import NumTextCard from "@/components/cards/NumTextCard";
import Link from "next/link";
import ArticleCard from "@/components/cards/ArticleCard";
import LazyLoader from "@/components/helpers/LazyLoader";
import FadeUp from "@/components/helpers/FadeUp";
import FadeIn from "@/components/helpers/FadeIn";
import HeroSection from "@/components/sections/HeroSection";
import ParagraphSection from "@/components/sections/ParagraphSection";
import PH2Heading from "@/components/headings/PH2Heading";
import ImgListSection from "@/components/sections/ImgListSection";
import ListArraySection from "@/components/sections/ListArraySection";
import ArticleRevList from "@/components/sections/ArticleRevList";

//1: basic (images and responsive layout working)
//2: wrap elements to animate with a div Classname accordingly
//3: wrap with animation component and pass classname
//4: sequencing of animation

export default function Home() {
  return (
    <main className="bg-grey_light">
     
   
   <HeroSection content={heroText}/>

    <ParagraphSection text={homeParagraph} />

    <ImgListSection content={howCanHelp} />

   <ListArraySection list = { disciplines} />
   
  <ArticleRevList content = {academicOfferings} />
      {/* <section className="bg-white section-light flex flex-col px-5">
        <div className="text-center md:text-xl flex mx-auto mb-[30px] font-larken_thin">
          {academicOfferings.title}
        </div>
        <div className="text-center mx-auto h2 mb-20 ">
          {academicOfferings.subtitle}
        </div>
        <ul className="max-w-7xl mx-auto flex flex-col gap-y-20">
          {academicOfferings.items.map((item, index) => (
            <ArticleCard key={index} item={item} index={index} />
          ))}
        </ul>
      </section> */}

      <section className="bg-blue_light flex flex-col md:flex-row">
        <Image
          className=" mx-auto h-[570px] w-full object-cover   basis-1/2   "
          src={picWoodBody}
          alt="logo"
          width={345}
          height={518}
        />
        <div className="basis-1/2 flex flex-col md:py-[80px] py-[30px] px-5 ">
          <h3 className="h3">Dr. Leo Pruimboom, PhD</h3>
          <p>KPNI Founder</p>
          <p>Director of the Pruimboom Institute.</p>

          <h3 className="h3 ">
            A life dedicated to science and the study of KPNI in medicine
          </h3>
          <p>
            Dr. Leo Pruimboom is a physiologist and medical biochemist who has
            dedicated over 3 decades to studying and developing KPNI, combining
            research with clinical practice and teaching. He is also responsible
            for the development of the Intermittent Living concept, based on
            biomarker analysis, that uses ancient stressful stimuli to improve
            health.
          </p>

          <Link href={"#"} className="text-base hover:tracking-widest transition-all
          duration-300 font-semibold  ">
            READ ABOUT THE FOUNDER
          </Link>
        </div>
      </section>

      <section className="section-light bg-white flex flex-col  ">
        <h2 className="h2 mx-auto mb-5">Campuses</h2>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  w-full mx-auto
         ">
          {campuses.map((item, index) => (
            <FadeUp key={index} delay={0.2 * index} classname="mx-auto 2xl:gap-x-3 ">
            <Link className=' max-w-fit '  href={'#'}>
             <Image
              key={index}
              className="  h-[150px] w-[150px]   "
              src={item}
              alt="logo"
              width={100}
              height={100}
            /> 
            </Link>
            </FadeUp>
          ))}
        </div>
      </section>
    </main>
  );
}
