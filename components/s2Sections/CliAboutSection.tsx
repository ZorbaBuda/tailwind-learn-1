// import { StaticImageData } from 'next/image'
import React from 'react'
import  Image, { StaticImageData }  from 'next/image'

type ContentProps = {
    title: string
    image: StaticImageData
    name: string
    profession: string
    text: string
}

export default function CliAboutSection({ content} : { content : ContentProps}) {
  return (
   <section className='bg-turquesa text-white'>
    <div className='max-w-7xl flex flex-col  mx-auto'>
    <div className='h2c text-gris'>{content.title}</div>
    <hr className='border-t border-verde' />
        <div className='flex flex-col lg:flex-row'>
        <Image
                  className="    "
                  src={content.image}
                  alt="logo"
                  width={740}
                  height={777}
                />
        <div>
            <div>{content.name}</div>
            <div>{content.profession}</div>
            <div>{content.text}</div>
        </div>
        </div>
    </div>
    </section>
  )
}
