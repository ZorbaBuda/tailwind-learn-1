import React from "react";
import {
  fAddresse,
  fHeures,
  fReferer,
  fPourNousJoindre,
} from "@/lib/dataClinique";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/clinique/parolanaudiere-logoblanc.svg";

export default function FooterCli() {
  return (
    <footer className=" flex flex-col  bg-verde_oscuro text-white  text-lg">
      <section
        className="py-[142px] lg:py-[110px] flex flex-col lg:flex-row gap-y-[90px] 
                        px-10 
	                  sm:max-w-[407px] sm:px-0 
					  md:max-w-[588px]
					  lg:max-w-none lg:px-[90px]
					  2xl:max-w-[1228px] 2xl:px-0
            border-2 border-white
      "
      >
        <Link href="/site2" className="flex mx-auto border-2 border-white">
          <Image
            className=" 
                       w-[368px] h-[120px] object-cover 
                       sm:w-[532px] sm:h-[165px]           "
            src={Logo}
            alt="logo"
            width={210}
            height={65}
          />
        </Link>
        <div className="flex flex-col">
          <div className="h3c text-verde">{fAddresse.title}</div>
          <div className="grid grid-cols-1 lg:grid-rows-3  gap-5">
            {/* adresse */}
            <div>
              <div className="text-verde mb-3">{fAddresse.adresse.title}</div>
              <div>
                {fAddresse.adresse.addresse.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <Link href={fAddresse.mapsAddress} legacyBehavior passHref>{fAddresse.mapsLegend}</Link>
            </div>
            {/* nous joindre */}
            <div>
              <div className="text-verde mb-3">{fPourNousJoindre.title}</div>
              <div className="flex flex-col mb-12">
                <a href={`tel: +${fPourNousJoindre.phone} `}>
                  {fPourNousJoindre.phone}
                </a>
                <a href={`mailto:${fPourNousJoindre.email} `}>
                  {fPourNousJoindre.email}
                </a>
              </div>
            </div>

            {/* heures */}
            <div>
              <div className="text-verde mb-3">{fHeures.title}</div>
              <div className="mb-12">
                {fHeures.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            
            </div>

            {/* referer */}
            <div>
              <div className="text-verde mb-3">{fReferer.title}</div>
              <div className="mb-12">{fReferer.text}</div>
              <Link className="btnC" href={"#"}>{fReferer.btn}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex">
        <p className="items-center mx-auto pt-5">
          2024 Pruinboom Institute / Terms & conditions and cookies policy
        </p>
      </section>
    </footer>
  );
}
