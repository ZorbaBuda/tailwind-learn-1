import React from 'react'
import Image, { StaticImageData } from 'next/image'

type ContentProps = {
    h1: string;
    p1: string;
    p2: string;
    image: StaticImageData
}

export default function CliHeroSection({content} : { content : ContentProps}) {
  return (
    <section className='bg-turquesa flex flex-col lg:flex-row mt-[120px] text-xl font-jakarta h-screen '>
            <div className='p-10'>
              <div className='h1c text-verde mb-10 '>{content.h1}</div>
              <div className='flex flex-col lg:flex-row gap-10 text-white'>
                <p className=''>{content.p1}</p>
                <p>{content.p2}</p>
              </div>
            </div>
            <Image
                  className="    "
                  src={content.image}
                  alt="logo"
                  width={740}
                  height={777}
                />
              
        </section>
  )
}
