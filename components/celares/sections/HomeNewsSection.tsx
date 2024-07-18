import { homeNews } from "@/lib/dataCelares"
import HeaderPart from "../parts/HeaderPart"
import { posts} from "@/lib/postsCelares"
import NewsArticle from "../parts/NewsArticle"

export default function HomeNewsSection() {
  return (
    <section className="section-light">
        <HeaderPart content = {homeNews.headerPart} />
        <ul className="grid grid-cols-3">
        {posts.map(post => (
          <NewsArticle key={post.metadata.link} metadata = {post.metadata} />
        ))}
       </ul>
    </section>
  )
}
