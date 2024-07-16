import Link from "next/link";
import { GoArrowRight } from "react-icons/go";



export default function ArrowButton({text, hash} :{ text : string, hash:string}) {
  return (
    <Link className="group inline-flex items-center gap-x-3" href={hash}>
       <div className="text-black hover:text-cBlueLight bg-cBlueLight hover:bg-cBlue transition duration-300 rounded-full p-1 "><GoArrowRight /></div>
       <div className="font-satoshi_medium tracking-widest ">{text}</div>
    </Link>
        
  )
}
