import Link from 'next/link'
import React from 'react'
import NumTextCard from '../cards/NumTextCard'
import PH2Heading from '../headings/PH2Heading'
import FadeIn from '../helpers/FadeIn'
import FadeUp from '../helpers/FadeUp'
import Image, { StaticImageData } from 'next/image'

type ContentProps = {
    heading : {
      p : string,
      h2 : string
  },
    image: StaticImageData,
    items: Item[]
}

type Item = {
  num : string,
  text: string
}

export default function ImgListSection({ content } : {content : ContentProps}) {
  return (
    <section className="section-light flex flex-col px-5">
    <PH2Heading content = {content.heading} />
    <div className=" grid md:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-y-10 max-w-7xl mx-auto ">
      <FadeIn delay={0.4}>
      <Image
        className="mx-auto h-[570px] w-full object-cover object-top md:p-10    "
        src={content.image}
        alt="logo"
        width={345}
        height={518}
      />
      </FadeIn>
      <ul className=" prose p-5  flex flex-col justify-around md:gap-y-0 gap-y-10 ">
       
        <div className='flex flex-row gap-10'>
        <FadeUp>
        <Link href={"/site1"} className="btn-prac inline-block">
          SITE 1
        </Link>
        </FadeUp>
        <FadeUp>
          
        <Link href={"/site2"} className="btn-prac inline-block">
          SITE 2
        </Link>
        </FadeUp>
        </div>
      </ul>
    </div>
  </section>
  )
}
