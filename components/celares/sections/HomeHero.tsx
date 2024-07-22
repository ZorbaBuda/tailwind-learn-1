import Link from "next/link";
import { homeHero } from "@/lib/dataCelares";
import HeroTitlePart from "../parts/HeroTitlePart";

export default function HomeHero() {
  return (
    <section className=" lg:bg-heroDesktop bg-heroMobile  bg-cover bg-center h-screen bg-no-repeat  ">
      {/* <div className="h-[100px] w-full bg-gradient-to-b from-white to-transparent"></div> */}
      <div className="bg-gray-600/25 w-full h-screen  flex items-end">
        <div className="flex flex-col lg:flex-row w-max containerCel pb-14 gap-y-5 gap-x-28  ">
        <HeroTitlePart content={homeHero} />
          {/* <div className="flex flex-col md:gap-y-10 gap-y-5">
            <h1 className="h1cel text-white">{homeHero.title}</h1>
            <Link href={homeHero.btnHref} className="btnGrayToBlue">
              {homeHero.btnText}
            </Link>
          </div> */}
          <div className="">
            {/* <iframe data-src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" frameBorder="0"    title="Accelerating Access to Life-Saving Cell Therapies" src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0&amp;api=1&amp;player_id=vimeo_id_0" className=" lazyloaded" data-load-mode="1" id="vimeo_id_0" data-ready="true"></iframe> */}
            <iframe
              className=" aspect-video lg:w-[477px] lg:h-[264px] w-[97%] h-auto "
              src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0"
              title="Accelerating Access to Life-Saving Cell Therapies"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
