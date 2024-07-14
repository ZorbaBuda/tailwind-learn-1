import React from "react";
import { fAddresse,fHeures,fReferer,fPourNousJoindre } from "@/lib/dataClinique";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/clinique/parolanaudiere-logoblanc.svg";

export default function FooterCli() {
 
  return (
    <footer className="section flex flex-col  bg-verde_oscuro text-white  text-lg">
    
      <section className="flex flex-col lg:flex-row gap-y-[90px] 
                        px-10 
	                  sm:max-w-[407px] sm:px-0 
					  md:max-w-[588px]
					  lg:max-w-none lg:px-[90px]
					  2xl:max-w-[1228px] 2xl:px-0
      ">
      <Link href="/site2" className="">
        <Image
          // className='w-[188px] h-[90px]'
          className="  "
          src={Logo}
          alt="logo"
          width={210}
           height={65}
        />
      </Link>
     <div className="flex flex-col">
      <div className="h3c">{fAddresse.title}</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* adresse */}
         <div>
            <div>{fAddresse.adresse.title}</div>
            <div>
              {fAddresse.adresse.addresse.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <Link href={fAddresse.mapsAddress}>{fAddresse.mapsLegend}</Link>
         </div>
          {/* nous joindre */}
          <div>
            <div>{fPourNousJoindre.title}</div>
            <div>{fPourNousJoindre.phone}</div>
           <div>{fPourNousJoindre.email}</div>
         </div>

         {/* heures */}
         <div>
            <div>{fHeures.title}</div>
            <div>
              {fHeures.items.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
            <Link href={fAddresse.mapsAddress}>{fAddresse.mapsLegend}</Link>
         </div>

          {/* referer */}
          <div>
            <div>{fReferer.title}</div>
            <div>{fReferer.text}</div>
           <Link href={"#"} >{fReferer.btn}</Link>
         </div>


      </div>
     </div>
      </section>


      <section className="flex">
        <p className="items-center mx-auto pt-5">2024 Pruinboom Institute / Terms & conditions and cookies policy</p>
      </section>
    </footer>
  );
}
