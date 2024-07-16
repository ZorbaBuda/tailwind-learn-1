import React from "react";
import Dot from "@/public/img/logos/blog-orange-big.svg";
import Image from "next/image";

type ContentProps = {
  title: string;
  summary: string;
  items: string[];
};

export default function HeaderListSection({
  content,
}: {
  content: ContentProps;
}) {
  return (
    <section className="section-light bg-grey_light min-h-screen">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-5 xl:px-0">
        <h1 className="h1 mr-8">{content.title}</h1>
        <div>
          <p className="h4 mb-7">{content.summary}</p>
          <ul className="prose">
            {content.items.map((item, index) => (
              <div key={index} className="gap-x-3 flex flex-row items-center">
                <Image
                  className="    "
                  src={Dot}
                  alt="logo"
                  width={12}
                  height={12}
                />
                <div>{item}</div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
