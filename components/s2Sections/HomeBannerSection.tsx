

export default function HomeBannerSection({text} : {text : string} ) {
  return (
    <section className="section bg-verde_claro  ">
   
    <div className=" h3c text-center max-w-[950px] px-5 mx-auto ">
     {text}
    </div>  
  </section>
  )
}
