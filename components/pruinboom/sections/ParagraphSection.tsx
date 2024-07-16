import React from 'react'
import FadeUp from '@/components/pruinboom/helpers/FadeUp'
import { homeParagraph } from '@/lib/dataPruimboom'

export default function ParagraphSection() {
  return (
    <section className="section-light bg-blue_light  ">
    <FadeUp delay={0}>
    <div className=" h2 text-center max-w-[950px] px-5 mx-auto ">
     {homeParagraph}
    </div>
    </FadeUp>
  </section>
  )
}
