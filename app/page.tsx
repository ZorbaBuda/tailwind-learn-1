import Image from "next/image";
import {
  disciplines,
  howCanHelp,
  homeParagraph,
  heroText,
  academicOfferings,
  campuses,
  chiefPresentation,
} from "@/lib/data.js";
import picGirl from "@/public/img/home/girl.jpg";
import picWoodBody from "@/public/img/home/wood-body.jpg";
import React from "react";
import NumTextCard from "@/components/cards/NumTextCard";
import Link from "next/link";
import ArticleCard from "@/components/cards/ArticleCard";
import LazyLoader from "@/components/helpers/LazyLoader";
import FadeUp from "@/components/helpers/FadeUp";
import FadeIn from "@/components/helpers/FadeIn";
import HeroSection from "@/components/sections/HeroSection";
import ParagraphSection from "@/components/sections/ParagraphSection";
import PH2Heading from "@/components/headings/PH2Heading";
import ImgListSection from "@/components/sections/ImgListSection";
import ListArraySection from "@/components/sections/ListArraySection";
import ArticleRevList from "@/components/sections/ArticleRevList";
import GridList from "@/components/sections/GridList";
import HeroFullWSection from "@/components/sections/HeroFullWSection";

//1: basic (images and responsive layout working)
//2: wrap elements to animate with a div Classname accordingly
//3: wrap with animation component and pass classname
//4: sequencing of animation

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
