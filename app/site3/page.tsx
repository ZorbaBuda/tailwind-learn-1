import HomeHero from "@/components/celares/sections/HomeHero";
import HomeRegsSection from "@/components/celares/sections/HomeRegsSection";
import { homeHero, homeRegs } from "@/lib/dataCelares";

export default function Home() {
  return (
    <main className="bg-grey_light">
     
     <HomeHero content={homeHero} />
     <HomeRegsSection content={homeRegs} />
  
    </main>
  );
}
