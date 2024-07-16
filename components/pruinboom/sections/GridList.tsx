import Link from 'next/link'
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import FadeUp from '../helpers/FadeUp'
import { campuses } from '@/lib/dataPruimboom'

export default function GridList() {
  return (
    <section className="section-light bg-white flex flex-col  ">
        <h2 className="h2 mx-auto mb-5">Campuses</h2>
        <div
          className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  w-full mx-auto
         "
        >
          {campuses.map((item, index) => (
            <FadeUp
              key={index}
              delay={0.2 * index}
              classname="mx-auto 2xl:gap-x-3 "
            >
              <Link className=" max-w-fit " href={"#"}>
                <Image
                  key={index}
                  className="  h-[150px] w-[150px]   "
                  src={item}
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>
  )
}
