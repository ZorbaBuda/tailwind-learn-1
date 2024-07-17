import HomeAnimationSection from "@/components/celares/sections/HomeAnimationSection";
import HomeForm from "@/components/celares/sections/HomeForm";
import HomeHero from "@/components/celares/sections/HomeHero";
import HomeRegsSection from "@/components/celares/sections/HomeRegsSection";
import HomeTechSection from "@/components/celares/sections/HomeTechSection";
import { homeHero, homeRegs } from "@/lib/dataCelares";

export default function Home() {
  return (
    <main className="bg-grey_light">
     
     <HomeHero content={homeHero} />
     <HomeRegsSection  />
     <HomeAnimationSection />
     <HomeTechSection />
     <HomeForm />
  
    </main>
  );
}
