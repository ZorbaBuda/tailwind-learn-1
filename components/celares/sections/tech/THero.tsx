import { techHero } from "@/lib/dataCelares"
import HeroTitlePart from "../../parts/HeroTitlePart"

export default function THero() {
  return (
    <div className="relative w-full min-h-screen lg:bg-heroTechDesktop bg-heroTechMobile bg-cover bg-center bg-no-repeat ">
            <iframe
              className=" aspect-video w-max h-screen"
            //   src="https://vimeo.com/922198490?background=0&amp;autoplay=1"
             src="https://player.vimeo.com/video/922198490?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0"

              title="Accelerating Access to Life-Saving Cell Therapies"
              allowFullScreen
            />
            <div className="absolute bottom-20 px-5 xl:max-w-[970px] border-2 border-white">
            <HeroTitlePart content={techHero} />
            </div>
    </div>
  )
}


{/* <a 
  data-fancybox="" 
  href="https://vimeo.com/922198490?background=0&amp;autoplay=1"
  class="intro-video-link show-for-medium">

 </a> */}

// src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0"
