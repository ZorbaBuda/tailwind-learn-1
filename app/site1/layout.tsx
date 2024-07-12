import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

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