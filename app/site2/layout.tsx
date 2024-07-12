import Footer from "@/components/Footer"
import Navbar2 from "@/components/Navbar2"

export default function PniLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="font-jakarta">
        <Navbar2 />
   
        {children}
        <Footer />
      </section>
    )
  }