import HomeHero from "@/components/celares/sections/HomeHero";
import { homeHero } from "@/lib/dataCelares";

export default function Home() {
  return (
    <main className="bg-grey_light">
     
     <HomeHero content={homeHero} />
  
    </main>
  );
}
