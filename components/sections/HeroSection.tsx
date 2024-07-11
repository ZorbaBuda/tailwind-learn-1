import React from 'react'
import FadeIn from '../helpers/FadeIn'
import Image, { StaticImageData } from 'next/image'
import FadeUp from '../helpers/FadeUp'

type ContentProps = {
    title : string,
    subtitle : string,
    image : StaticImageData
}

export default function HeroSection({content} : { content : ContentProps}) {
  return (
    <section className=" section  lg:mt-0 pt-[100px] px-5 ">
    <div className="  grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-8  ">
      <div className="    flex flex-col justify-center     lg:pr-20  ">
        <FadeUp delay={0} classname={"mb-8"}  >
        <div className=" h2">{content.title}</div>
       </FadeUp>
       <FadeUp delay={0.2}>
        <p className="prose md:prose-lg">
          {content.subtitle}
          <br />
          {content.subtitle}
        </p>
        </FadeUp>
      </div>

    
          <FadeIn>
      <Image
        className="mx-auto md:w-full object-cover object-top md:h-[540px] md:p-10     "
        src={content.image}
        alt="logo"
        width={387}
        height={581}
      />
      </FadeIn>
     
    </div>
  </section>
  )
}
