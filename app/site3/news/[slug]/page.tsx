import React from 'react'
import parser from 'html-react-parser'
import { posts } from '@/lib/postsCelares'

type News = {
    metadata: {
        image: string;
        date: string;
        summary: string;
        link: string;
    };
    content: string;
    id: string;
} | undefined

export default async function NewsArticle({params} : { params: { slug: string}}) {

    
    
    const newsData : News = posts.find((newsItem) => newsItem.id === params.slug)
 
     const summary = newsData?.metadata.summary
     const content = newsData?.content
    
   
   
  return (
    <section className='min-h-screen w-full '>
        <div className='containerCel flex flex-col mx-auto'>
    <div className='h1cel py-40'>{summary}</div>
    {content && <article className='prose'>{parser(content)}</article>}
    </div>
    </section>

  
  )
}
