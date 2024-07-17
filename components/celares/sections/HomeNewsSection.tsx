import { homeNews } from "@/lib/dataCelares"
import HeaderPart from "../parts/HeaderPart"

export default function HomeNewsSection() {
  return (
    <section className="section-light">
        <HeaderPart content = {homeNews.headerPart} />
    </section>
  )
}
