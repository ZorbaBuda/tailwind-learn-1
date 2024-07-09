import Image from "next/image";
import { disciplines, howCanHelp, heroText, academicOfferings} from "@/lib/data.js"
import picGirl from "@/public/img/home/girl.jpg"
import picWoodBody from "@/public/img/home/wood-body.jpg";
import React from "react";
import NumTextCard from "@/components/cards/NumTextCard";
import Link from "next/link";
import ArticleCard from "@/components/cards/ArticleCard";
import LazyLoader from "@/components/helpers/LazyLoader";


export default function Home() {
  return (
    <main className="bg-grey_light">
    {/* hero section */}
    <section className=" section  lg:mt-0 mt-[100px] px-5 ">
      <div className="  flex flex-col lg:flex-row max-w-7xl mx-auto  ">
        <div className="    flex flex-col justify-center  basis-1/2   lg:pr-20  ">
          <div className="mb-8 h2">
            {heroText.title}
          </div>
          <p className="prose md:prose-lg">
            {heroText.subtitle1}
            <br />
            {heroText.subtitle2}
          </p>
        </div>
        <LazyLoader >
        <Image
          className="mx-auto h-[570px] w-full object-cover p-5   basis-1/2   "
          src={picGirl}
          alt="logo"
          width={387}
          height={581}
        />
        </LazyLoader>
      </div>
    </section>


  

    <section className="section-light bg-blue_light  ">
      <div className=" h2 text-center max-w-[950px] px-5 mx-auto prose">
        As the founders of KPNI, the Pruimboom Institute’s mission is to
        integrate this translational medical discipline into healthcare. Our
        final goal, to overcome disease and regain health.
      </div>
    </section>

    <section className="section-light flex flex-col px-5">
      <div className="text-center md:text-xl flex mx-auto mb-[30px] font-larken_thin">
        {howCanHelp.line1}
      </div>
      <div className="text-center mx-auto h2 mb-8 ">
        {howCanHelp.line2}
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-10 max-w-7xl mx-auto ">
        <Image
          className="mx-auto h-[570px] w-full object-cover sm:max-w-screen-sm  basis-1/2   "
          src={picWoodBody}
          alt="logo"
          width={345}
          height={518}
        />
        <ul className="border-2 border-black prose p-5  flex-col  basis-1/2">
          {howCanHelp.items.map((item) => (
            <NumTextCard key={item.num} num={item.num} text={item.text} />
          
          ))}
          <Link href={'#'} className="btn-prac">LEARN MORE</Link>
        </ul>
      </div>
    </section>

    <section className="section-light  px-5  ">
   
      <div className="h3   mx-auto max-w-7xl md:leading-10 leading-8 ">
        <span className="text-salmon">Disciplines: </span>
         {disciplines.map((item, index) => (
         
          <span key={item} className="">{`${item}`} 
          { index < disciplines.length - 1 && ` / `}
         </span>
         ))}
      </div>
    </section>

    <section className="bg-white section-light flex flex-col px-5">
    <div className="text-center md:text-xl flex mx-auto mb-[30px] font-larken_thin">
        {academicOfferings.title}
      </div>
      <div className="text-center mx-auto h2 mb-8 ">
        {academicOfferings.subtitle}
      </div>
      <ul className="max-w-7xl mx-auto">
        {academicOfferings.items.map((item, index) => (
          <ArticleCard key={index} item = { item } index = { index}  />
        ))}
      </ul>
    </section>
  </main>
  );
}
