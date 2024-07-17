import { homeCareers } from "@/lib/dataCelares"
import HeaderPart from "../parts/HeaderPart"

export default function HomeCareersSection() {
  return (
    <section className="bg-white h-screen w-full">
        <div className="flex mx-auto h-[90%] max-w-7xl bg-careersMobile lg:bg-careersDesktop bg-cover bg-no-repeat
        px-5 py-[100px]">
        <HeaderPart content= {homeCareers.headerPart} />
        </div>

    </section>
  )
}
