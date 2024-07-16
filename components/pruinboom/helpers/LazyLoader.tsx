'use client'
import { motion } from 'framer-motion';
import React from 'react'
import { fadeLevel } from '@/lib/variants';



interface Props {
    children: React.ReactNode;
  }
  
export default function LazyLoader({ children } : Props)  {
  return (
    <motion.section
    id='interview'
    variants={fadeLevel()}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.1 }}
    className='mx-auto h-[570px] w-full object-cover p-5   basis-1/2'
  >{children}
  </motion.section>
  )
}

