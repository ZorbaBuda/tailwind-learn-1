import React from 'react'
import FadeIn from '../helpers/FadeIn'
import Image, { StaticImageData } from 'next/image'
import FadeUp from '../helpers/FadeUp'
import { heroText } from '@/lib/dataPruimboom'
import BigBall from '@/public/img/pruinboom/big-ball-animation-1.svg'
import SmallBall from '@/public/img/pruinboom/small-ball-animation-1.svg'

type ContentProps = {
    title : string,
    subtitle : string,
    image : StaticImageData
}

export default function HeroSection() {
  const {title, subtitle, image} = heroText
  return (
    <section className=" section relative  lg:mt-0 pt-[100px] px-5 ">
      <Image className="absolute" src={BigBall} alt={"ball"} width={500} height={500} />
      <Image className="absolute" src={SmallBall} alt={"ball"} width={80} height={80} />
    <div className="  grid md:grid-cols-2 grid-cols-1 containerPru mx-auto gap-y-8  ">
      <div className="    flex flex-col justify-center     lg:pr-20  ">
        <FadeUp delay={0} classname={"mb-8"}  >
        <div className=" h2">{title}</div>
       </FadeUp>
       <FadeUp delay={0.2}>
        <p className="prose md:prose-lg">
          {subtitle}
          <br />
          {subtitle}
        </p>
        </FadeUp>
      </div>

    
          <FadeIn>
          <video width="600" height="100%" loop autoPlay preload="auto">
          <source src="/img/pruinboom/video/woman.webm" type="video/webm" />
     
    
    </video>
      </FadeIn>
     
    </div>
  </section>
  )
}
