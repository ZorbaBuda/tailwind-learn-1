import Link from "next/link"
import { homeHero } from "@/lib/dataCelares"



export default function HomeHero() {
  return (
    <section className="lg:bg-heroDesktop bg-heroMobile bg-cover bg-top h-screen bg-no-repeat  ">
       <div className="bg-black/15 w-full h-screen  flex items-end">
       <div className="flex flex-col lg:flex-row w-max p-5  mx-auto">
        <div>
        <h1 className="h1cel text-white">{homeHero.title}</h1>
        <Link href={homeHero.linkHref}>{homeHero.linkText}</Link>
        </div>
        <div>
        {/* <iframe data-src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" frameBorder="0"    title="Accelerating Access to Life-Saving Cell Therapies" src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0&amp;api=1&amp;player_id=vimeo_id_0" className=" lazyloaded" data-load-mode="1" id="vimeo_id_0" data-ready="true"></iframe> */}
        {/* <iframe
         className="border-0"
          src="https://player.vimeo.com/video/852751306?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0"   
           title="Accelerating Access to Life-Saving Cell Therapies" 
          allowFullScreen
           /> */}
      </div>
       </div>
       </div>
        </section>

  )
}
