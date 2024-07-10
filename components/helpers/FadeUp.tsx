'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/variants';

interface Props {
    children: React.ReactNode;
  }

export default function FadeUp({children} : Props) {
  return (
    <motion.section
   
    variants={fadeIn('up')}
    initial='hidden'
    whileInView={'show'}
    viewport={{ once: false, amount: 0.1 }}
    className='   basis-1/2'
  >{children}
  </motion.section>
  )
}
