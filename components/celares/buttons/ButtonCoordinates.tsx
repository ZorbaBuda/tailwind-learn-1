'use client'
import React, { useState } from "react";

// https://www.youtube.com/watch?v=SrmTDrN1lkU

type CoordProps = {
  exists: boolean;
  top: string;
  left: string;
}

export default function ButtonCoordinates({coords} : {coords : CoordProps}) {

    const [mouseOver, setMouseOver] = useState(false)

  return (

    <button 
    onMouseEnter={() => setMouseOver(!mouseOver)}
    onMouseLeave={() => setMouseOver(!mouseOver)}
    
       className={`absolute rounded-full h-9 w-9 ${ coords.exists ? 'bg-cBlueLight/30' :  'bg-cBlue/30'} `}
       style={{top: `${coords.top}`, left: `${coords.left}`}}
       >
       <svg
          className={`fill-white rounded-full h-6 w-6 flex mx-auto ${ coords.exists ? 'bg-cBlueLight' :  'bg-cBlue'} `}
          width="6"
          height="6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="10"
            x="6"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center   transition duration-200 ease-out ${
              mouseOver && ""
            }`}
//  && "!rotate-180"
          />
          <rect
            y="11"
             x="4.9"
            width="12"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              mouseOver && "hidden"
            }`}
          />
        </svg>
    </button>
  );
}


// <button className=" rounded-full h-9 w-9   bg-cBlue/30">
//       <div className="text-white font-semibold rounded-full h-6 w-6 flex 
//                          mx-auto items-center justify-center  bg-cBlue">
//         +
//       </div>
//     </button>


