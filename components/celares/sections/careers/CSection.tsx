'use client'
import { useIsLg } from "@/hooks/useIsLg";
// import {UseIsLg} from "@/components/UseIsLg"

import React from "react";

const data = [
  {
    title: "Integrity",
    text: "We honor commitments, communicate openly, and demonstrate the highest ethical standards.",
  },
  {
    title: "Innovation",
    text: "We create novel solutions to high-value problems.",
  },
  {
    title: "Growth Mindset",
    text: "We value curiosity, the willingness to learn, and the courage to grow beyond ourselves while embracing change.",
  },
  {
    title: "Collaboration",
    text: "We work as one team, encourage vulnerability & diverse perspectives, and treat each other with authenticity & respect.",
  },
  {
    title: "Passion",
    text: "We are dedicated to doing meaningful work, achieving exceptional results, and having fun along the journey.",
  },
  {
    title: "Quality",
    text: "We are committed to world class Quality in everything we do and build a culture that promotes transparency, ownership, and regulatory compliance based on our customers needs.",
  },
];

export default function CSection() {
    const isLg = useIsLg()
    console.log("islg", isLg)
  return (
    <section className="section-light bg-cBlueDark text-white w-full">

    </section>
  );
}
