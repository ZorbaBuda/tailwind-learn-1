import Footer from "@/components/celares/Footer"
import Navbar from "@/components/celares/Navbar"
import FooterCli from "@/components/FooterCli"


export default function PniLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="font-satoshi">
        <Navbar />
   
        {children}
        <Footer />
      </section>
    )
  }