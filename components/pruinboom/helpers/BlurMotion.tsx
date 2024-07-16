'use client'
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
    delay? : number,
    classname? : string
  }


export function BlurMotion({children, delay, classname} : Props) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      whileInView={'show'}

      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      variants={variants1}
    //   className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
     {children}
    </motion.h1>
  );
}