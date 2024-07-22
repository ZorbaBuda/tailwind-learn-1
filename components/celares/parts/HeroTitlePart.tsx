import Link from "next/link"

type ContentProps = {
    title: string
    btnText?: string
    btnHref?: string
}


const HeroTitlePart = ( {content} : { content : ContentProps}) => {

 const {title, btnText, btnHref} = content
  return (
    <div className="flex flex-col md:gap-y-10 gap-y-5">
    <h1 className="h1cel text-white">{title}</h1>
    {btnText && btnHref && (
    <Link href={btnHref} className="btnGrayToBlue">
      {btnText}
    </Link>
    )}
  </div>
  )
}

export default HeroTitlePart