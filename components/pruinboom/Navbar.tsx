'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { headerData } from '@/lib/dataPruimboom'
import NavLinks from './NavLinks';


export default function Navbar() {
 
  const { logo } = headerData;
  
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
};

  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [transparent, setTransparent] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // console.log(scrollYProgress.get())
    if (latest > previous!) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    if (latest < 150) {
      setTransparent(true);
     
    } else {
      setTransparent(false);
    }
    // if (scrollYProgress.get() > 0.99) {
    //   setHidden(false);
    // }
  });

//   const closeMobileMenu = () => {
//     setNavMobile(false); // Function to close the mobile menu
//   };
  // backdrop-blur-xl
  // bg-gradient-to-b from-white to-transparent
  return (
    <motion.nav
    variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
    animate={hidden ? "hidden" : "visible"}
    transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${transparent ? " transparent  " : "bg-white"}
      

       h-[90px] fixed top-0   z-20 min-w-full  transition-all duration-700 `}
    >
      {/* <div className='flex items-center justify-between h-full pl-[50px] pr-[60px] md:pr-[80px] md:pl-[80px] lg:pl-[90px] lg:pr-[90px] xl:pl-[100px] xl:pr-[100px] 2xl:pl-[180px] 2xl:pr-[180px]'> */}
      <div className='flex  justify-between h-full  px-[50px] '>

        {/* logo */}
        <Link href="/site1" className="flex items-center  ">
            <Image
              // className='w-[188px] h-[90px]'
              className="  "
              src={logo}
              alt="logo"
              width={298.566}
              height={23.435}
            />
          
            
        </Link>

        {/* nav - initially hidden, show on desktop */}
        <div className='hidden lg:flex items-center '>
          {/* <NavLinks /> */}
          <NavLinks />
        </div>
        {/* hamburger menu icon = showing by default, hidden on desktop mode */} 
        {/* <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden absolute right-[5%]  text-black p-2  cursor-pointer'
        >
          <HiMenuAlt2 className={` ${ transparent? "text-white" : "text-black" } text-3xl `} />
        </div>
  
        {/* nav mobile - showing by default, hidden on desktop */}
        {/* <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
           
              'top-[90px] lg:top-[90px]'
             
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile closeMobileMenu={closeMobileMenu} />
        </div> */}
        {/* social icons - initially hidden - show on desktop */}
		
      </div>
    </motion.nav>
  );
};

