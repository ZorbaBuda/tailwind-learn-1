import React from 'react'
import { homeTech } from '@/lib/dataCelares'
import HeaderPart from '../parts/HeaderPart'
import TechListSlider from '../parts/TechListSlider'

export default function HomeTechSection() {
  return (
   <section className='px-5 bg-cGrayLight'>
   
    <HeaderPart content={homeTech.headerPart} />
     <div className='max-w-[1126px] flex flex-col mx-auto'>
      {homeTech.sliderItems.map(item => (
         <TechListSlider key={item.title} content = {item} />
      ))}
   
    </div>
   </section>
  )
}
