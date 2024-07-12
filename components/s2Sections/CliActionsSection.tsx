import React from 'react'
import Accordion from '../utils/Accordion';

type ContentProps = {
    title: string
    items: {
        title: string
        text: string
    }[];
}

export default function CliActionsSection({ content } : { content : ContentProps}) {
  return (
    <section className='bg-verde_claro py-20'>
        <div className='max-w-7xl flex flex-col lg:flex-row mx-auto'>
        <div className='h2c text-black'>{content.title}</div>
        <ul>
            {content.items.map(item => (
                <Accordion key={item.title} title={item.title} answer={item.text} />
            ))}
        </ul>
        </div>

    </section>
  )
}
