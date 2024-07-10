import Image from "next/image";
import {
  disciplines,
  howCanHelp,
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

//1: basic (images and responsive layout working)
//2: wrap elements to animate with a div Classname accordingly
//3: wrap with animation component and pass classname
//4: sequencing of animation

export default function Home() {
  return (
    <main className="bg-grey_light">
      {/* hero section */}
      <section className=" section  lg:mt-0 pt-[100px] px-5 ">
        <div className="  grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-5  ">
          <div className="    flex flex-col justify-center     lg:pr-20  ">
            <FadeUp duration={1} classname={"mb-8"}  >
            <div className=" h2">{heroText.title}</div>
           </FadeUp>
           <FadeUp duration={4}>
            <p className="prose md:prose-lg">
              {heroText.subtitle1}
              <br />
              {heroText.subtitle2}
            </p>
            </FadeUp>
          </div>

          {/* <div className="relative w-full h-full overflow-hidden">
           <Image
            className="  mx-auto border-2 border-black  "
            src='/img/home/girl.jpg'
            alt="logo"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          /> 
          </div> */}
        
              
          <Image
            className="mx-auto md:w-full object-cover object-top md:h-[540px] md:p-10     "
            src={picGirl}
            alt="logo"
            width={387}
            height={581}
          />
         
        </div>
      </section>

      <section className="section-light bg-blue_light  ">
        <div className=" h2 text-center max-w-[950px] px-5 mx-auto prose">
          As the founders of KPNI, the Pruimboom Institute's mission is to
          integrate this translational medical discipline into healthcare. Our
          final goal, to overcome disease and regain health.
        </div>
      </section>

      <section className="section-light flex flex-col px-5">
        <div className="text-center md:text-xl flex mx-auto mb-[30px] font-larken_thin">
          {howCanHelp.line1}
        </div>
        <div className="text-center mx-auto h2 mb-8 ">{howCanHelp.line2}</div>
        <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-y-10 max-w-7xl mx-auto ">
          <Image
            className="mx-auto h-[570px] w-full object-cover object-top md:p-10    "
            src={picWoodBody}
            alt="logo"
            width={345}
            height={518}
          />
          <ul className=" prose p-5  flex flex-col justify-around md:gap-y-0 gap-y-10 ">
            {howCanHelp.items.map((item) => (
              <NumTextCard key={item.num} num={item.num} text={item.text} />
            ))}
            <Link href={"#"} className="btn-prac inline-block">
              LEARN MORE
            </Link>
          </ul>
        </div>
      </section>

      <section className="section-light  px-5  ">
        <div className="h3   mx-auto max-w-7xl md:leading-10 leading-8 ">
          <span className="text-salmon">Disciplines: </span>
          {disciplines.map((item, index) => (
            <span key={item} className="">
              {`${item}`}
              {index < disciplines.length - 1 && ` / `}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white section-light flex flex-col px-5">
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
      </section>

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
            <Link className='mx-auto max-w-fit 2xl:gap-x-3' key={index} href={'#'}>
             <Image
              key={index}
              className="  h-[150px] w-[150px]   "
              src={item}
              alt="logo"
              width={100}
              height={100}
            /> 
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
