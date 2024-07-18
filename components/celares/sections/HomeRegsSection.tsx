import IconLabel from "@/public/img/celares/svg/icon-label.svg";
import Image from "next/image";
import Link from "next/link";
import MapImage from "@/public/img/celares/home/map-services.png";
import ArrowButton from "../buttons/ArrowButton";
import HeaderPart from "../parts/HeaderPart";
import { homeRegs } from "@/lib/dataCelares";
import MapLink from "../parts/MapLinkDialog";
import ButtonCoordinates from "../buttons/ButtonCoordinates";
import SvgAnimation1 from "../parts/SvgAnimation1";

type ContentProps = {
  headerPart: {
    title: string;
    h1: string;
    link: {
      linkText: string;
      linkHref: string;
    };
  };
  itemsPromo: {
    title: string;
    text: string;
  }[];
  factories: (
    | {
        exists: boolean;
        factory: string;
        description: string;
        size: string;
        top: string;
        left: string;
        video: string;
      }
    | {
        factory: string;
        description: string;
        size?: undefined;
      }
  )[];
};

export default function HomeRegsSection() {
  return (
    <section className="py-[90px] xl:py-[124px] bg-white">
      <div className="containerCel">
        {/* header  */}
        <HeaderPart content={homeRegs.headerPart} />
      
     
      {/* flex layout */}
        <div className="lg:relative flex flex-col-reverse lg:flex-row items-end  ">
         {/* left */}
         <div className="lg:w-[32%] w-0 "></div>
          <ul className="lg:absolute lg:w-[40%] flex flex-col gap-y-[27px]">
            {homeRegs.itemsPromo.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-2  border-t border-t-cGray pt-2 leading-5 "
              >
                <div className=" w-[190px] text-cBlue  font-satoshi_medium tracking-[3px] text-[16px] xl:text-[18px] ">
                  {item.title}
                </div>
                <div className="xl:text-[20px] text-[#0d112f] flex text-[18px] ">{item.text}</div>
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

              {homeRegs.factories.map((item) => (
                <MapLink key={item.factory} content={item} />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row">
              <div>EXISTING SMART FACTORIES</div>
              <div>PLANNED SMART FACTORIES</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
