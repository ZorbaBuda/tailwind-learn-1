import { homeNews } from "@/lib/dataCelares"
import HeaderPart from "../parts/HeaderPart"
import { posts} from "@/lib/postsCelares"
import NewsArticle from "../parts/NewsArticle"

export default function HomeNewsSection() {
  return (
    <section className="section-light bg-white">
      <div className="containerCel flex flex-col gap-y-10 lg:gap-y-12">
        <HeaderPart content = {homeNews.headerPart} />
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map(post => (
          <NewsArticle key={post.metadata.link} metadata = {post.metadata} />
        ))}
       </ul>
       </div>
    </section>
  )
}
