import React from 'react'
import FadeUp from '../helpers/FadeUp'

export default function ParagraphSection({text} : { text : string}) {
  return (
    <section className="section-light bg-blue_light  ">
    <FadeUp delay={0}>
    <div className=" h2 text-center max-w-[950px] px-5 mx-auto prose">
     {text}
    </div>
    </FadeUp>
  </section>
  )
}
