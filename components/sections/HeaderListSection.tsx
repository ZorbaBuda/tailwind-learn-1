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
    <section className="section-light bg-grey_light">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
        <h1 className="h1">{content.title}</h1>
        <div>
          <p className="h4">{content.summary}</p>
          <ul>
            {content.items.map((item, index) => (
              <div key={index} className="flex flex-row">
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
