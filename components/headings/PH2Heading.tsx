import React from 'react'
import FadeUp from '../helpers/FadeUp'

type ContentProps = {
    p : string,
    h2 : string
}

export default function PH2Heading({content} : {content : ContentProps}) {
  return (
    <>
     <FadeUp delay={0} classname="mx-auto">
        <div className="text-center md:text-xl flex  mb-[30px] font-larken_thin">
          {content.p}
        </div>
        </FadeUp>
        <FadeUp delay={0.2}>
        <div className="text-center mx-auto h2 mb-8 ">{content.h2}</div>
        </FadeUp>
    </>
  )
}
