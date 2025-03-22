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

export default function page() {
  return (
    <div className="min-h-screen bg-cGray w-full">
      <section className="containerCel flex flex-col gap-y-20 pt-20">
        {/* ctrl shift l */}
     
        <Flex5to8 />
        <Flex1to4 />
      </section>
    </div>
  );
}
