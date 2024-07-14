import React from 'react'
type ContentProps = {
    title: string
    legend: string
    p1: string
    p2: string
}

export default function CliMissionSection({ content } : { content : ContentProps}) {
  return (
    <section className='bg-white text-[18px] md:py-[150px] py-[80px] '>
      <div className='flex flex-col mx-auto 2xl:max-w-7xl lg:max-w-[70%] divide-y divide-black
      px-10 md:px-[110px] lg:px-0 '>
       
        <div className='h3c pb-20'>{ content.title}</div>
         {/* <hr className='border-t border-black py-20' /> */}
        <div className='flex flex-col lg:flex-row gap-x-[20%] pt-20 gap-y-8 '>
            <div className='flex gap-x-4'><span className=''>-</span>{content.legend}</div>
            <div className='flex flex-col gap-y-8'>
                <p>{content.p1}</p>
                <p>{content.p2}</p>
            </div>
        </div>
      </div>
    </section>
  )
}
