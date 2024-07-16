import React from 'react'
import { homeTech } from '@/lib/dataCelares'
import HeaderPart from '../parts/HeaderPart'
import TechListSlider from '../parts/TechListSlider'

export default function HomeTechSection() {
  return (
   <section className='px-5 bg-cGrayLight'>
    <div className='max-w-[1126px] flex flex-col mx-auto'>
    <HeaderPart content={homeTech.headerPart} />
    <TechListSlider content = {homeTech.sliderItems[0]} />
    </div>
   </section>
  )
}
