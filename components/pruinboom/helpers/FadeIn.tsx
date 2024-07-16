'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

interface Props {
    children: React.ReactNode;
    delay? : number,
    classname? : string
  }

  const variants = (delay : number) =>  {

    return {
     
      hidden: {
        y:  0 ,
        opacity: 0,
        x:  0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 1.4,
         
          // ease: [0.25, 0.25, 0.25, 0.75],
          ease: [0.25, 0.25, 0.25, 0.75],
          delay: 0 + delay
        },
      }
    }
   
  }

export default function FadeUp({delay, children, classname} : Props) {
  return (

    
    <motion.section
   
    variants={variants(delay ? delay : 0)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.1 }}
    className= {`${classname} `}
  >{children}
  </motion.section>
  )
}


