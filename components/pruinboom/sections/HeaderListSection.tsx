
import Dot from "@/public/img/logos/blog-orange-big.svg";
import Image from "next/image";
import { manifesto } from "@/lib/dataPruimboom";



export default function HeaderListSection() {
  return (
    <section className="section-light bg-grey_light min-h-screen">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-5 xl:px-0">
        <h1 className="h1 mr-8">{manifesto.title}</h1>
        <div>
          <p className="h4 mb-7">{manifesto.summary}</p>
          <ul className="prose">
            {manifesto.items.map((item, index) => (
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
