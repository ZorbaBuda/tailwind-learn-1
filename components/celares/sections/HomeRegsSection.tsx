import IconLabel from '@/public/img/celares/svg/icon-label.svg'
import Image from 'next/image'

type ContentProps = {
    title: string;
    h1: string;
    linkText: string;
    linkHref: string;
    itemsPromo: {
        title: string;
        text: string;
    }[];
    factories: ({
        factory: string;
        description: string;
        size: string;
    } | {
        factory: string;
        description: string;
        size?: undefined;
    })[];
}

export default function HomeRegsSection({content} : { content : ContentProps}) {
  return (
    <section className="py-[90px] xl:py-[124px]">
        <div>
            <div className='inline-flex items-center'> <Image src={IconLabel} alt="logo" width={34} height={34} /><span>{content.title}</span> </div>
        </div>
    </section>
  )
}
