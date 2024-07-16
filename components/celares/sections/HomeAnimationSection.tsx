import Image from "next/image"
import Promo from "@/public/img/celares/promo.png"
import PromoWords from "@/public/img/celares/promo-words.svg"

export default function HomeAnimationSection() {
  return (
    <section className="py-10 relative flex flex-col border-2 border-black  items-center">
      <div className="w-full  bg-white">MANUFACTURING SERVICES</div>
      <div className="w-full  bg-cGrayLight">ADVANCED TECHNOLOGY</div>
       <Image className="absolute w-[112px]  " 
             src={Promo} alt="logo" width={440} height={332} />
       <Image className="absolute w-[73px] "
        src={PromoWords} alt="logo" width={105} height={105} />
    </section>
  )
}
