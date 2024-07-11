'use client'
import React from 'react'
import splitStringUsingRegex from '@/utils/splitStringUsingRegex'
import { motion, Variants } from 'framer-motion'

const charVariants = {
    hidden: { opacity: 0},
    reveal: { opacity: 1}
}

export default function TextReveal({text} :{ text : string}) {

    // const heading = "Elegant Text Reveal"
    // const text = "❤ 😜 Sóc l’Anna Armengol, dietista integrativa i una gran apassionada de l’alimentació i la salut en totes les seves dimensions. T’ofereixo un assessorament nutricional individual, totalment personalitzat a les teves necessitats i objectius. T’acompanyo a crear nous hàbits que et permetin retrobar l’equilibri i gaudir del menjar mentre sumes salut en cada mossegada."

    // const headingChars = splitStringUsingRegex(heading)
    const textChars = splitStringUsingRegex(text)

   

    // console.log("Simple split: ", text.split(""))
    // console.log("Split by regex: ", textChars)
    
  return (
    <>
   
   <motion.h1
     initial="hidden"
     whileInView="reveal"
     transition={{staggerChildren : 0.02}}
     viewport={{ once: true, amount: 0.3 }}
     className='h2'
     >
        {textChars.map((char, i) => (
            <motion.span
            key={i}
            transition={{duration: 0.5}}
            variants={charVariants}
            >
                {char}
            </motion.span>
        ))}
     </motion.h1>
     {/* <motion.p
     initial="hidden"
     whileInView="reveal"
     transition={{staggerChildren : 0.02}}
     className='text-botella_claro'
     >
         {textChars.map((char, i) => (
            <motion.span
            key={i}
            transition={{duration: 0.5}}
            variants={charVariants}
            >
                {char}
            </motion.span>
        ))}
     </motion.p> */}

   
    </>
  )
}
