import { StaticImageData } from "next/image";
import Link from "next/link";
import Image from "next/image";

type ContentProps = {
  image: StaticImageData;
  title1: string;
  title2: string;
  btnText: string;
};

export default function HomeHeroSection({
  content,
}: {
  content: ContentProps;
}) {
  return (
    <div className="relative h-screen flex flex-row items-center border-2 border-black">
      {/* texto */}
      <div
        className="  flex flex-col gap-y-8 absolute  px-10  mt-24 left-0 right-0 
        sm:mx-auto sm:w-[560px] sm:px-0
        pl-[90px]  lg:left-auto lg:right-auto lg:ml-[90px] lg:w-[606px]
        xl:ml-[10%] xl:w-[810px]
        
        "
      >
        <div className="text-white">{content.title1}</div>
        <div className="text-verde h1c">{content.title2}</div>
        <Link className="btnC" href={"#"}>
          {content.btnText}
        </Link>
      </div>

      {/* bloque izqda */}
      <div className="bg-verde_oscuro h-screen  flex-1  "></div>

      {/* image */}
      <div className=" flex  justify-end w-full  xl:w-[64%] lg:w-[962px]  h-screen  ">
        <Image
          // className=" pb-[190px]lg:pb-0 mx-auto flex 2xl:max-w-[740px] xl:max-w-[624px] lg:max-w-[455px] "
          className="  object-cover  object-top w-full    "
          src={content.image}
          alt="logo"
          width={740}
          height={777}
        />
      </div>
    </div>
  );
}
