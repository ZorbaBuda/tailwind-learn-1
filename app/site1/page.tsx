import {
    disciplines,
    howCanHelp,
    homeParagraph,
    heroText,
    academicOfferings,
    campuses,
    chiefPresentation,
  } from "@/lib/data.js";
  
  import React from "react";
  import HeroSection from "@/components/sections/HeroSection";
  import ParagraphSection from "@/components/sections/ParagraphSection";
  
  import ImgListSection from "@/components/sections/ImgListSection";
  import ListArraySection from "@/components/sections/ListArraySection";
  import ArticleRevList from "@/components/sections/ArticleRevList";
  import GridList from "@/components/sections/GridList";
  import HeroFullWSection from "@/components/sections/HeroFullWSection";
  
  export default function Home() {
    return (
      <main className="bg-grey_light">
        <HeroSection content={heroText} />
  
        <ParagraphSection text={homeParagraph} />
  
        <ImgListSection content={howCanHelp} />
  
        <ListArraySection list={disciplines} />
  
        <ArticleRevList content={academicOfferings} />
  
        <HeroFullWSection content={chiefPresentation} />
  
        <GridList items={campuses} />
      </main>
    );
  }
  