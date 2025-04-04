'use client'
import React, { useState } from 'react'

export default function SvgAnimation1() {

    const [mouseOver, setMouseOver] = useState(false);
    
  return (
    <button
    onMouseEnter={() => setMouseOver(!mouseOver)}
    onMouseLeave={() => setMouseOver(!mouseOver)}
    className='mt-10'
    >
    <svg
          className="fill-verde_oscuro  ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              mouseOver && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              mouseOver && "!rotate-180"
            }`}
          />
        </svg></button>
  )
}
