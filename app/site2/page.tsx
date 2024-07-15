import Image from "next/image";
import { homeHero, homeBanner, homeClinique, homeExpertises } from "@/lib/dataClinique";
import Link from "next/link";
import HomeHeroSection from "@/components/s2Sections/HomeHeroSection";
import HomeBannerSection from "@/components/s2Sections/HomeBannerSection";
import HomeExpertisesSection from "@/components/s2Sections/HomeExpertisesSection";
import HomeCliniqueSection from "@/components/s2Sections/HomeCliniqueSection";

export default function Home() {
  return (
    <main className="bg-grey_light">
     
     <HomeHeroSection content={homeHero} />
     <HomeBannerSection text={homeBanner} />
     <HomeCliniqueSection content={homeClinique} />
     <HomeExpertisesSection content={homeExpertises} />
    </main>
  );
}
