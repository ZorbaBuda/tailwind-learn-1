import IconLabel from '@/public/img/celares/svg/icon-label.svg'
import Image from 'next/image'
import Link from 'next/link';
import MapImage from '@/public/img/celares/home/map-services.png'
import ArrowButton from '../buttons/ArrowButton';
import HeaderPart from '../parts/HeaderPart';
import { homeRegs } from '@/lib/dataCelares';
import MapLink from '../parts/MapLinkDialog';

type ContentProps = {
    headerPart: {
        title: string;
        h1: string;
        link: {
            linkText: string;
            linkHref: string;
        };
    };
    itemsPromo: {
        title: string;
        text: string;
    }[];
    factories: ({
        exists: boolean;
        factory: string;
        description: string;
        size: string;
        top: string;
        left: string;
        video: string
    } | {
        factory: string;
        description: string;
        size?: undefined;
    })[];
}

export default function HomeRegsSection() {
  return (
    <section className="py-[90px] xl:py-[124px] bg-white">
        <div className='px-5'>
            <HeaderPart content={homeRegs.headerPart} />
        {/* <div className='flex flex-col gap-y-8 mb-16 lg:mb-0'>
            <div className='inline-flex items-center gap-x-4'> <Image src={IconLabel} alt="logo" width={34} height={34} /><span className='tracking-[4px]'>{content.title}</span> </div>
       <div className='h2cel'>{content.h1}</div>
       <ArrowButton text={content.linkText} hash={content.linkHref} />
     
        </div> */}
        <div className='flex flex-col lg:flex-row-reverse items-end'>
        <div>
            <div className='relative border-2 border-black'>
        <Image className="" src={MapImage} alt="logo" width={2012} height={1184} />

        {/* <div className={`absolute ${homeRegs.factories[0].top} ${homeRegs.factories[0].left} border-2 border-pink-500`}>+</div> */}
        {/* <div className={`absolute ${homeRegs.factories[0].top} ${homeRegs.factories[0].left} border-2 border-pink-500`}>hiii</div> */}
        {/* <div className={`absolute ${homeRegs.factories[1].top} ${homeRegs.factories[1].left} border-2 border-pink-500`}>+</div>
        <div className={`absolute top-[46%] left-[24.5%] ${homeRegs.factories[3].left} border-2 border-pink-500`}>+</div> */}

       {homeRegs.factories.map(item => (
            <MapLink key={item.factory} content={item} />
       ))}
        

        </div>
        <div className='flex flex-col lg:flex-row'>
            <div>EXISTING SMART FACTORIES</div>
            <div>PLANNED SMART FACTORIES</div>
        </div>
        </div>
        <ul>
            {homeRegs.itemsPromo.map(item => (
                <li key={item.title} className='grid grid-cols-2 gap-y-5 border-t border-t-cGray pt-2'>
                    <div className='text-cBlue font-satoshi_medium tracking-[3px]'>{item.title}</div>
                    <div>{item.text}</div>
                </li>
            ))}
        </ul>
        </div>
        </div>
    </section>
  )
}
