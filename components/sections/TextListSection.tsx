import React from 'react'
import PH2Heading from '../headings/PH2Heading'
import NumTextCard from '../cards/NumTextCard';

type ContentProps = {
    heading: string;
    title: string;
    abstract1: string;
    abstract2: string;
    items: {
        num: string;
        text: string;
    }[];
}

export default function TextListSection({content} : {content : ContentProps}) {
  return (
    <section className='section-light bg-blue_dark text-white flex flex-col xl:px-0 px-5'>
        <PH2Heading content={{p: content.heading, h2: content.title}} />
        <div className='flex flex-col mx-auto max-w-7xl'>
        <div className='flex flex-col lg:flex-row prose-lg gap-8 py-16 xl:py-[140px] '>
            <div className='font-larken_thin'>{content.abstract1} </div>
            <div>{content.abstract2}</div>
        </div>
       
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-x-20 xl:gap-x-28'>
            {content.items.map(item => (
             <li  key={item.num} className="flex ">
             
             <div className="text-salmon h2  w-[60px] ">{`${item.num}`}</div>
             <div className="ml-5">{item.text}</div>
            
           </li> 
            ))}
        </ul> </div>
    </section>
  )
}
