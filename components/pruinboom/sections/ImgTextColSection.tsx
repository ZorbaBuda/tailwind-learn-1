
import Image, { StaticImageData } from "next/image";
import parser from 'html-react-parser' 
import { founder } from "@/lib/dataPruimboom";



export default function ImgTextColSection() {
  return (
    <section className="section-light min-h-screen bg-white">
      <div className="px-5 flex flex-col lg:flex-row max-w-7xl mx-auto gap-y-5">
        <Image
          className="mx-auto md:w-full w-full object-cover object-top md:h-[540px] md:p-10 
          lg:w-1/2    "
          src={founder.image}
          alt="logo"
          width={387}
          height={581}
        />
        <div className="">
            <div className="h2 mb-9">{founder.title}</div>
            <div className="h4 mb-5">{founder.summary}</div>
            <div className="lg:columns-2 ">{parser(founder.p)}</div>
        </div>
      </div>
    </section>
  );
}
