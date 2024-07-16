import Footer from "@/components/pruinboom/Footer"
import Navbar from "@/components/pruinboom/Navbar"

export default function PniLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Navbar />
   
        {children}
        <Footer />
      </section>
    )
  }