import Image from "next/image";
import {homeHero } from "@/lib/dataClinique"
import Link from "next/link";
  
  export default function Home() {
    return (
      <main className="bg-grey_light">

        <section className="relative bg-verde_oscuro w-full h-screen flex flex-row items-center">

          <div className="flex flex-col gap-y-8 absolute">
            <div className="text-white">{homeHero.title1}</div>
            <div className="text-verde h1c">{homeHero.title2}</div>
            <Link className="btnC" href={'#'} >{homeHero.btnText}</Link>

          </div>

          <div className=" flex justify-end">
       
       <Image
          // className=" pb-[190px]lg:pb-0 mx-auto flex 2xl:max-w-[740px] xl:max-w-[624px] lg:max-w-[455px] "
          className=" w-full h-screen object-cover object-top
          lg:w-[50%] "

          src={homeHero.image}
          alt="logo"
          width={740}
          height={777}

       
        />
        </div>
        </section>
  
      </main>
    );
  }
  