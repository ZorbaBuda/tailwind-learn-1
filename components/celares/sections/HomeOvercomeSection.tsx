import { homeOvercome } from "@/lib/dataCelares"
import HeaderPart from "../parts/HeaderPart"

export default function HomeOvercomeSection() {
  return (
   <section className="bg-white section-light w-full">
     <div className="containerCel">
  <HeaderPart content={homeOvercome.headerPart} />
  </div>
   </section>
  )
}
