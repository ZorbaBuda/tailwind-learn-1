'use client'
import { useIsLg } from "@/hooks/useIsLg";
// import {UseIsLg} from "@/components/UseIsLg"

import React, { createRef, useEffect, useRef, useState } from "react";
import HeaderPart from "../../parts/HeaderPart";

const headerPart = {
    title: "CULTURE",
    h1: "Our culture is defined by our values"
}

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
    // console.log("islg", isLg)

   const [currentElement, setCurrentElement] = useState(0)
   const elementsRef = useRef(data.map(() => createRef()));
   const [activeTimeout, setActiveTimeout] = useState(true)

   activeTimeout && setTimeout(() => {
      if(currentElement < data.length - 1){
      setCurrentElement(currentElement + 1)
      }
      else {
        setCurrentElement(0)
      }
      console.log(currentElement)
  }, 2000);


  //  useEffect(() => {
  //   data.forEach((item, i) => setTimeout(
  //     () => setMediaItem(item),
  //     (i + 1) * 5000, // 5000, 10000, 15000
  //   ));
  // }, []);




  return (
    <section className="section-light bg-cBlueDark text-white w-full min-h-screen lg:h-screen">
   <div className="containerCel border-2 border-red-700 h-full">
     <HeaderPart content = {headerPart} />
     <ul 
      onMouseEnter={() => setActiveTimeout(!activeTimeout)}
      onMouseLeave={() => setActiveTimeout(!activeTimeout)}
     className="h-[400px] flex flex-col flex-1 lg:flex-row  lg:mt-[115px] mt-[80px] border-2 border-slate-700
                    
     ">
        {data.map((item, index) => (
          <div onMouseEnter={() => setCurrentElement(index)} className="max-w-[280px]  border-2 border-gray-400 ">
         <Box  key={index} title={item.title} text={item.text} current={currentElement === index} />
         </div>
        ))}
     </ul>
     </div>
    </section>
  );
}

const Box = ({title, text, current} : {title: string, text:string, current : boolean}) => {
  return (
   <div  className="lg:hover:w-[240px] pl-4 border-l border-cGray hover:border-l-2 hover:border-cBlueLight flex flex-col gap-y-20 group
                    
   ">
            <div className=" group-hover:text-white text-cBlueLight group-hover:text-3xl">{title}</div>
            <p className={` ${ current ? "block" : "hidden" } lg:text-2xl `}>{text}</p>
          </div>
  )
}


// const {
//   useState,
//   useRef,
//   createRef,
//   useEffect
// } = React;

// const data = [
//   {
//     text: "test1"
//   },
//   {
//     text: "test2"
//   }
// ];

// const Component = () => {
//   const [heights, setHeights] = useState([]);
//   const elementsRef = useRef(data.map(() => createRef()));

//   useEffect(() => {
//     const nextHeights = elementsRef.current.map(
//       ref => ref.current.getBoundingClientRect().height
//     );
//     setHeights(nextHeights);
//   }, []);

//   return (
//     <div>
//       {data.map((item, index) => (
//         <div ref={elementsRef.current[index]} key={index} className={`item item-${index}`}>
//           {`${item.text} - height(${heights[index]})`}
//         </div>
//       ))}
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Component />, rootElement);