import {
  justify,
  example2c,
  example2c2,
  example3b,
  example4c,
  example4d,
} from "@/lib/dataTailwind";
import Link from "next/link";
import Image from "next/image";
import { HiMiniVideoCamera } from "react-icons/hi2";
import Flex1to4 from "@/components/tailwind/Flex1to4";
import Flex5to8 from "@/components/tailwind/Flex5to8";
import picGirl from "@/public/img/home/girl.jpg";

export default function page() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <section className="max-w-7xl mx-auto flex flex-col gap-y-16">
      <h1 className="h1 border-2 border-black max-w-fit mx-auto">Layout</h1>
      <div className="flex flex-col gap-y-10 ">
        <div>
        <div>Aspect Ratio</div>
        <div className="flex flex-row gap-x-10">
        <Image className="w-[200px] object-cover aspect-square " objectPosition="top"  src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-video" width={200} height={500} objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-3/2" objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-3/5" objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        </div>
          </div>
          <div>
        <div>Colums</div>
        <div className="columns-3 gap-10">
        <Image className=" w-[200px] object-cover aspect-square " objectPosition="top"  src={picGirl} alt="tutorial" />
        <Image className="w-[200px] " width={200} height={500} objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-3/2" objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-3/5" objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className=" w-[200px] object-cover aspect-square " objectPosition="top"  src={picGirl} alt="tutorial" />
        <Image className="w-[200px] " width={200} height={500} objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-3/2" objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        <Image className="w-[200px] object-cover aspect-3/5" objectPosition="top" objectFit="cover" src={picGirl} alt="tutorial" />
        </div>
          </div>
      </div>

      </section>
      <section className="containerCel flex flex-col gap-y-20 pt-20 bg-cGray mt-24">
        {/* ctrl shift l */}
     
        <Flex5to8 />
        <Flex1to4 />
      </section>
    </div>
  );
}
