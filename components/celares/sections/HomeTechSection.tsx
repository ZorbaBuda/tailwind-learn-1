import React from 'react'
import { homeTech } from '@/lib/dataCelares'
import HeaderPart from '../parts/HeaderPart'

export default function HomeTechSection() {
  return (
   <section className='px-5 bg-cGrayLight'>
    <HeaderPart content={homeTech.headerPart} />
   </section>
  )
}
