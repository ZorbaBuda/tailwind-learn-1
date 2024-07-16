import React from 'react'
import PH2Heading from '../headings/PH2Heading'
import { academicOfferings } from '@/lib/dataPruimboom'
import ArticleCard from '../cards/ArticleCard'

type ContentProps = {
    heading :{
        p : string,
        h2 : string
    },
    items: Object[]
}

export default function ArticleRevList() {
  return (
    <section className="bg-white section-light flex flex-col px-5">
        <PH2Heading content = {academicOfferings.heading} />
    <ul className="max-w-7xl mx-auto flex flex-col gap-y-20">
      {academicOfferings.items.map((item, index) => (
        <ArticleCard key={index} item={item} index={index} />
      ))}
    </ul>
  </section>
  )
}
