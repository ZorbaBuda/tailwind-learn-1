import React from 'react'



export default function ListArraySection({list} : {list : string[]} ) {
  return (
    <section className="section-light  px-5  ">
    <div className="h3   mx-auto max-w-7xl md:leading-10 leading-8 ">
      <span className="text-salmon">Disciplines: </span>
      {list.map((item, index) => (
        <span key={item} className="">
          {`${item}`}
          {index < list.length - 1 && ` / `}
        </span>
      ))}
    </div>
  </section>
  )
}
