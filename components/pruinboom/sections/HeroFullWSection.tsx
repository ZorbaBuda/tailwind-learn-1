import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { chiefPresentation } from '@/lib/dataPruimboom'


export default function HeroFullWSection() {

    const info = chiefPresentation.info
  return (
    <section className="bg-blue_light flex flex-col lg:flex-row gap-y-5 ">
    <Image
      className=" mx-auto h-[570px] w-full lg:w-1/2    basis-1/2   "
      src={chiefPresentation.image}
      alt="logo"
      width={1000}
      height={806}
    />
    <div className="basis-1/2 flex flex-col px-5  ">
      <div>
      <h3 className="h3">{info.h3_1}</h3>
      <p>{info.p_1}</p>
      <p>{info.p_2}</p>
     </div>
     <div>
      <h3 className="h3 ">
        {info.h3_2}
      </h3>
      <p>
       {info.p_3}
      </p>
        </div>
      <Link
        href={"#"}
        className="text-base hover:tracking-widest transition-all
      duration-300 font-semibold  "
      >
        {info.btn}
      </Link>
    </div>
  </section>
  )
}
