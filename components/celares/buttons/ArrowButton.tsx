import Link from "next/link";
import { GoArrowRight } from "react-icons/go";



export  function ArrowButtonText({text, hash} :{ text : string, hash:string}) {
  return (
    <Link className="group inline-flex items-center gap-x-3" href={hash}>
       <div className="text-black group-hover:text-cBlueLight bg-cBlueLight group-hover:bg-cBlue transition duration-300 rounded-full p-1 "><GoArrowRight /></div>
       <div className="font-satoshi_medium tracking-widest ">{text}</div>
    </Link>
        
  )
}

export  function ArrowButton({hash} :{ hash:string}) {
  return (
    <Link className=" inline-flex items-center gap-x-3" href={hash}>
       <div className="text-black hover:text-cBlueLight bg-cBlueLight hover:bg-cBlue transition duration-300 rounded-full p-1 "><GoArrowRight /></div>
    </Link>
        
  )
}

export  function ArrowButtonNoLink() {
  return (
   
       <div className="text-black group-hover:text-cBlueLight bg-cBlueLight group-hover:bg-cBlue transition duration-300 rounded-full p-1 "><GoArrowRight /></div>
    
        
  )
}
