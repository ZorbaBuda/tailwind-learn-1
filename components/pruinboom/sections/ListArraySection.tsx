import React from 'react'
import { disciplines } from '@/lib/dataPruimboom'



export default function ListArraySection() {
  return (
    <section className="section-light  px-5  ">
    <div className="h3   mx-auto max-w-7xl md:leading-10 leading-8 ">
      <span className="text-salmon">Disciplines: </span>
      {disciplines.map((item, index) => (
        <span key={item} className="">
          {`${item}`}
          {index < disciplines.length - 1 && ` / `}
        </span>
      ))}
    </div>
  </section>
  )
}
