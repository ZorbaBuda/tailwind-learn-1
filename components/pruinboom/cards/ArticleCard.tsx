import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'


type ArticleCardProps = {
    item : {
        img: string,
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
    <li className={`flex flex-col   ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row' }`}>
        <Image 
           className="  lg:px-10  basis-1/2 mx-auto   "
           src={item.img}
           alt={item.name}
           width={468}
           height={352}
         />
         <div className='basis-1/2 flex flex-col justify-around'>
            <h1 className='h1'>{item.name}</h1>
            <p className='font-larken_thin text-lg'>{item.text}</p>
            <Link 
              
               href={"#"}
               >
                <Image  src="/img/pruinboom/blob-button-plus.svg" alt="btn" width={60.588} height={48.91}/>
               
               </Link>
         </div>

    </li>
  )
}
