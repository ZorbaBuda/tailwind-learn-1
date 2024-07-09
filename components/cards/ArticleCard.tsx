import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type ArticleCardProps = {
    item : {
        img: StaticImageData,
        name: string,
        text: string
    },
    index? : number,

}

export default function ArticleCard({item, index} : ArticleCardProps) {

    //check if the number is even
function isEven (num : number) {
    return num % 2 === 0;
  }
  
  //check if the number is odd
  function isOdd (num : number) {
    return num % 2 !== 0;
  }

  const reversed = index !== undefined && isOdd(index)
  
   
  return (
    <li className={`flex flex-col  ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row' }`}>
        <Image 
           className="mx-auto h-[570px] w-full object-cover sm:max-w-screen-sm  basis-1/2   "
           src={item.img}
           alt={item.name}
           width={345}
           height={518}
         />
         <div className=''>
            <h1 className='h1'>{item.name}</h1>
            <p>{item.text}</p>
            <Link 
               className=""
               href={"#"}
               >+</Link>
         </div>

    </li>
  )
}
