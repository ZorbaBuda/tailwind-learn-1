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
    <>
    <div className='bg-turquesa w-full h-[120px]'></div>
    <section className='bg-turquesa  text-xl font-jakarta h-screen  '>
    <div className='p-10 lg:p-0 flex  flex-col lg:flex-row gap-y-10 items-center'>
    <div className='mix-w-96 lg:px-20  '>
      <div className='h1c text-verde mb-10   '>{content.h1}</div>
      <div className='flex flex-col lg:flex-row gap-10 text-white max-h-[174px]'>
        <p className=''>{content.p1}</p>
        <p>{content.p2}</p>
      </div>
    </div>
    <Image
          // className=" pb-[190px]lg:pb-0 mx-auto flex 2xl:max-w-[740px] xl:max-w-[624px] lg:max-w-[455px] "
          className=" pb-[190px]lg:pb-0 mx-auto w-[740px]  "

          src={content.image}
          alt="logo"
          width={740}
          height={777}
        />
      </div>
</section>
</>

    // <section className='bg-turquesa flex flex-col lg:flex-row mt-[120px] text-xl font-jakarta h-screen '>
    //         <div className='p-10 lg:min-w-[592px]'>
    //           <div className='h1c text-verde mb-10 flex flex-wrap '>{content.h1}</div>
    //           <div className='flex flex-col lg:flex-row gap-10 text-white'>
    //             <p className=''>{content.p1}</p>
    //             <p>{content.p2}</p>
    //           </div>
    //         </div>
    //         <Image
    //               className=" shrink   "
    //               src={content.image}
    //               alt="logo"
    //               width={740}
    //               height={777}
    //             />
              
    //     </section>
  )
}
