
import PH2Heading from '../headings/PH2Heading'
import NumTextCard from '../cards/NumTextCard';
import { model } from '@/lib/dataPruimboom';



export default function TextListSection() {
  return (
    <section className='section-light bg-blue_dark text-white flex flex-col xl:px-0 px-5'>
        <PH2Heading content={{p: model.heading, h2: model.title}} />
        <div className='flex flex-col mx-auto max-w-7xl'>
        <div className='flex flex-col lg:flex-row prose-lg gap-8 py-16 xl:py-[140px] '>
            <div className='font-larken_thin'>{model.abstract1} </div>
            <div>{model.abstract2}</div>
        </div>
       
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-7 lg:gap-x-20 xl:gap-x-28'>
            {model.items.map(item => (
             <li  key={item.num} className="flex ">
             
             <div className="text-salmon h2  w-[60px] ">{`${item.num}`}</div>
             <div className="ml-5">{item.text}</div>
            
           </li> 
            ))}
        </ul> </div>
    </section>
  )
}
