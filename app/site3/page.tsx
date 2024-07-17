import HomeAnimationSection from "@/components/celares/sections/HomeAnimationSection";
import HomeCareersSection from "@/components/celares/sections/HomeCareersSection";
import HomeForm from "@/components/celares/sections/HomeForm";
import HomeHero from "@/components/celares/sections/HomeHero";
import HomeNewsSection from "@/components/celares/sections/HomeNewsSection";
import HomeOvercomeSection from "@/components/celares/sections/HomeOvercomeSection";
import HomeRegsSection from "@/components/celares/sections/HomeRegsSection";
import HomeTechSection from "@/components/celares/sections/HomeTechSection";


export default function Home() {
  return (
    <main className="bg-grey_light">
     
     <HomeHero  />
     <HomeRegsSection  />
     <HomeAnimationSection />
     <HomeTechSection />
     <HomeOvercomeSection />
     <HomeCareersSection />
     <HomeNewsSection />
     <HomeForm />
  
    </main>
  );
}
