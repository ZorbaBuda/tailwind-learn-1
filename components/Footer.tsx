import React from "react";
import { footerData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo.png";

export default function Footer() {
  const {
    quickLinks,
    socialMedia,
    education,
    whereStudy,
    accreditedBy,
    collaborationWith,
  } = footerData;
  return (
    <footer className="section-light flex flex-col  bg-blue_dark text-white  text-base">
      {/* logo */}
      <section className="flex flex-wrap gap-y-5 justify-around">
      <Link href="/" className="flex   ">
        <Image
          // className='w-[188px] h-[90px]'
          className="  "
          src={Logo}
          alt="logo"
          width={88}
          height={90}
        />

        <div className="text-3xl tracking-tighter ">
          <span className="font-larken">Pruimboom</span>
          <span className="font-larken_thin"> Institute</span>
        </div>
      </Link>
      <article>
        <p className="mb-6">{quickLinks.title}</p>
        {quickLinks.subitems.map((item) => (
          <p key={item} className="">
            {item}
          </p>
        ))}
        <p className="my-6">{socialMedia.title}</p>
        {socialMedia.subitems.map((item) => (
          <p key={item} className="">
            {item}
          </p>
        ))}
      </article>

      <article>
        <p className="mb-6">{education.title}</p>
        {education.subitems.map((item) => (
          <p key={item} className="">
            {item}
          </p>
        ))}
      </article>

      <article>
        <p className="mb-6">{whereStudy.title}</p>
        {whereStudy.subitems.map((item) => (
          <p key={item} className="">
            {item}
          </p>
        ))}
      </article>

      <article>
        <p className="mb-6">{accreditedBy.title}</p>
        {accreditedBy.subitems.map((item, index) => (
          <Image
            key={index}
            // className='w-[188px] h-[90px]'
            className=" "
            src={item}
            alt="logo"
            width={88}
            height={90}
          />
        ))}

        <p className="my-6">{collaborationWith.title}</p>
        {collaborationWith.subitems.map((item, index) => (
          <Image
            key={index}
            // className='w-[188px] h-[90px]'
            className=" "
            src={item}
            alt="logo"
            width={88}
            height={90}
          />
        ))}
      </article>
      </section>
      <section className="flex">
        <p className="items-center mx-auto pt-5">2024 Pruinboom Institute / Terms & conditions and cookies policy</p>
      </section>
    </footer>
  );
}
