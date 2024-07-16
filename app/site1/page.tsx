
  
  import React from "react";
  import HeroSection from "@/components/pruinboom/sections/HeroSection";
  import ParagraphSection from "@/components/pruinboom/sections/ParagraphSection";
  
  import ImgListSection from "@/components/pruinboom/sections/ImgListSection";
  import ListArraySection from "@/components/pruinboom/sections/ListArraySection";
  import ArticleRevList from "@/components/pruinboom/sections/ArticleRevList";
  import GridList from "@/components/pruinboom/sections/GridList";
  import HeroFullWSection from "@/components/pruinboom/sections/HeroFullWSection";
  
  export default function Home() {
    return (
      <main className="bg-grey_light">
        <HeroSection  />
  
        <ParagraphSection  />
  
        <ImgListSection  />
  
        <ListArraySection />
  
        <ArticleRevList  />
  
        <HeroFullWSection  />
  
        <GridList  />
      </main>
    );
  }
  