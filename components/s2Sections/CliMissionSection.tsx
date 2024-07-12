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
      <div className='flex flex-col mx-auto max-w-7xl '>
       
        <div className='h3c'>{ content.title}</div>
         <hr className='border-t border-black' />
        <div className='flex flex-col lg:flex-row'>
            <div>{content.legend}</div>
            <div>
                <p>{content.p1}</p>
                <p>{content.p2}</p>
            </div>
        </div>
      </div>
    </section>
  )
}
