import React from "react";
import { footerData } from "@/lib/dataPruimboom";
import Image from "next/image";
import Link from "next/link";

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
    <footer className=" flex flex-col  bg-blue_dark text-white  text-sm ">
      {/* logo */}
      <section className="section-light w-full flex flex-wrap gap-y-5 justify-around items-start
      px-5 xl:px-0">
      <Link href="/site1" className="flex   ">
        <Image
          className="  "
          src="/img/pruinboom/logo-pruimboom-institute-white.svg"
          
          alt="logo"
          width={298.566}
          height={23.435}
        />

       
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
        <div className="flex flex-col gap-y-5">
        {accreditedBy.subitems.map((item, index) => (
          <Image
            key={index}
            // className='w-[188px] h-[90px]'
            className=" "
            src={item}
            alt="logo"
            width={160}
            height={60}
          />
        ))}
  </div>
        <p className="my-6">{collaborationWith.title}</p>
        <div className="flex-col gap-y-5">
        {collaborationWith.subitems.map((item, index) => (
          <Image
            key={index}
            // className='w-[188px] h-[90px]'
            className=" "
            src={item}
            alt="logo"
            width={100}
            height={98}
          />
        ))}
        </div>
      </article>
      </section>
      <section className="flex">
        <p className="items-center mx-auto pt-5">2024 Pruinboom Institute / Terms & conditions and cookies policy</p>
      </section>
    </footer>
  );
}
