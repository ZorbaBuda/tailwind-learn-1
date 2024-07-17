import IconLabel from '@/public/img/celares/svg/icon-label.svg'
import Image from 'next/image'
import ArrowButton from '../buttons/ArrowButton'

type ContentProps = {
    title : string,
    h1 : string,
    p? : string,
    link? : {
        linkText : string,
        linkHref : string
    }
}

export default function HeaderPart({content} : {content : ContentProps}) {
  return (
    <div className='flex flex-col gap-y-8 mb-16 lg:mb-0'>
    <div className='inline-flex items-center gap-x-4'> <Image src={IconLabel} alt="logo" width={34} height={34} /><span className='tracking-[4px]'>{content.title}</span> </div>
<div className='h2cel'>{content.h1}</div>
 {content.p && <p>{content.p}</p>}
  {content.link && <ArrowButton text={content.link.linkText} hash={content.link.linkHref} />}

</div>
  )
}
