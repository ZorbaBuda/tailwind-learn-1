import FooterCli from "@/components/FooterCli"
import Navbar2 from "@/components/Navbar2"

export default function PniLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="font-jakarta antialiased">
        <Navbar2 />
   
        {children}
        <FooterCli />
      </section>
    )
  }