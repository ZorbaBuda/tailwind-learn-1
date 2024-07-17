import Link from 'next/link'
import React from 'react'
import NumTextCard from '../cards/NumTextCard'
import PH2Heading from '../headings/PH2Heading'
import FadeIn from '../helpers/FadeIn'
import FadeUp from '../helpers/FadeUp'
import Image, { StaticImageData } from 'next/image'
import { howCanHelp } from '@/lib/dataPruimboom'



export default function ImgListSection() {
  return (
    <section className="section-light flex flex-col px-5">
    <PH2Heading content = {howCanHelp.heading} />
    <div className="relative grid md:grid-cols-2 grid-cols-1 lg:gap-x-10 gap-y-10 max-w-7xl mx-auto ">
     
     <ul>
      {howCanHelp.images.map((item, index) => (
        <FadeIn  key= {item} delay={1 * index} >
           <Image
         
        className="absolute mx-auto h-[570px] w-full object-cover object-top md:p-10    "
        src={item}
        alt="logo"
        width={510}
        height={809}
      />
      </FadeIn>
      ))}
   
   </ul>

      <ul className=" prose p-5  flex flex-col justify-around md:gap-y-0 gap-y-10 ">
       {howCanHelp.items.map(item => (
          <NumTextCard key={item.num} num={item.num} text={item.text} />
       ))}
     
      </ul>
    </div>
  </section>
  )
}
