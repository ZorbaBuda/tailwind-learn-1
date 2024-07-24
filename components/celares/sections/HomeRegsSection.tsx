"use client";
import Image from "next/image";
import MapImage from "@/public/img/celares/home/map-services.png";
import HeaderPart from "../parts/HeaderPart";
import { homeRegs } from "@/lib/dataCelares";
import { FaCircle } from "react-icons/fa";
import { DialogMap } from "../ui-components/DialogMap";
import { TooltipMap } from "../ui-components/TooltipMap";
import { useIsLg } from "@/hooks/useIsLg";

export default function HomeRegsSection() {

  const isLg = useIsLg()

  return (
    <section className="py-[90px] xl:py-[124px] bg-white">
      <div className="containerCel">
        {/* header  */}
        <HeaderPart content={homeRegs.headerPart} />

        {/* flex layout */}
        <div className="lg:relative flex flex-col-reverse gap-y-5 lg:flex-row items-end  ">
          {/* left */}
          <div className="lg:w-[32%] w-0 "></div>
          <ul className="lg:absolute lg:w-[40%] flex flex-col gap-y-[27px]">
            {homeRegs.itemsPromo.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-2  border-t border-t-cGray pt-2  "
              >
                <div className=" w-[190px] text-cBlue  font-satoshi_medium tracking-[3px] text-[16px] xl:text-[18px] leading-[19.2px] ">
                  {item.title}
                </div>
                <div className="xl:text-[20px] text-[#282c4bbf] flex text-[18px] leading-[23.4px] ">
                  {item.text}
                </div>
              </li>
            ))}
          </ul>

          {/* right  map section */}
          <div className="flex flex-col  lg:w-[68%]">
            <div className="relative    ">
              <Image
                className=""
                src={MapImage}
                alt="logo"
                width={2012}
                height={1184}
              />

              {homeRegs.factories.map((item, index) => (
                <div key={index}>
                 {!isLg ?  (
      <DialogMap  content={item}  />
      ) : (
      <TooltipMap  content ={item} />
       )}
       </div>
              ))}

            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-x-5 text-black_op text-sm lg:text-base">
              <div className="inline-flex items-center">
                <FaCircle className="text-lg text-cBlueLight rounded-full p-1" />
                EXISTING SMART FACTORIES
              </div>
              <div className="inline-flex items-center">
                <FaCircle className="text-lg text-cBlue rounded-full p-1" />
                PLANNED SMART FACTORIES
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
