'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

interface Props {
    children: React.ReactNode;
    duration : number,
    classname? : string
  }

  const variants = (duration : number) =>  {

    return {
   
      hidden: {
        y:  40 ,
        opacity: 0,
        x:  0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          duration: 0 + duration,
          // ease: [0.25, 0.25, 0.25, 0.75],
          ease: [0.25, 0.25, 0.25, 0.75],
  
        },
      }
    }
   
  }

export default function FadeUp({duration, children, classname} : Props) {
  return (
    <motion.section
   
    variants={variants(duration)}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.1 }}
    className= {`${classname} `}
  >{children}
  </motion.section>
  )
}


