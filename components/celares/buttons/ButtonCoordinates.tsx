'use client'
import React, { useState, forwardRef} from "react";



export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>
     {
  asChild?: boolean,
  data: {
    exists: boolean,
    top: string,
    left : string
  }
}




// const ButtonCoordinates = forwardRef<Ref, ContentProps>((content , ref) => {
  const ButtonCoordinates = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, data, asChild = false, ...props }, ref) => {

    const [mouseOver, setMouseOver] = useState(false)
    const {exists, top, left} = data

  return (

    <button 
     ref={ref}
    onMouseEnter={() => setMouseOver(!mouseOver)}
    onMouseLeave={() => setMouseOver(!mouseOver)}
    {...props}
    
       className={`absolute rounded-full h-9 w-9 ${ exists ? 'bg-cBlueLight/30' :  'bg-cBlue/30'} `}
       style={{top: `${top}`, left: `${left}`}}
       >
       <svg
          className={`fill-white rounded-full h-6 w-6 flex mx-auto ${ exists ? 'bg-cBlueLight' :  'bg-cBlue'} `}
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

})

export default ButtonCoordinates

// <button className=" rounded-full h-9 w-9   bg-cBlue/30">
//       <div className="text-white font-semibold rounded-full h-6 w-6 flex 
//                          mx-auto items-center justify-center  bg-cBlue">
//         +
//       </div>
//     </button>


