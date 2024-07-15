
 type ContentProps = {
    title: string
    p1: string
    p2: string
    link: string
    linkText: string
}

export default function HomeExpertisesSection({content} : {content : ContentProps}) {
  return (
    <section className="section bg-white flex-flex-col">
        <div className="h2c">{content.title} </div>
        <div className="">
      
        </div>

    </section>
  )
}
