'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, MotionConfig } from "framer-motion"
// import header data
import { headerData, links } from '@/lib/data'
// import components
import NavLinks from './NavLinks';


export default function Navbar() {
 
  const { logo } = headerData;
  // header state
  // const [isActive, setIsActive] = useState(false);
  // nav mobile state
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
      className={`${transparent ? " transparent  " : "bg-white shadow-lg"}
      

       h-[100px] fixed top-0   z-20 min-w-max w-full mx-auto transition-all duration-700`}
    >
      {/* <div className='flex items-center justify-between h-full pl-[50px] pr-[60px] md:pr-[80px] md:pl-[80px] lg:pl-[90px] lg:pr-[90px] xl:pl-[100px] xl:pr-[100px] 2xl:pl-[180px] 2xl:pr-[180px]'> */}
      <div className='flex items-center justify-between h-full 2xl:px-[260px] xl:px-[110px] px-[38px]'>

        {/* logo */}
        <Link href="/" className=" ">
          <div className="flex items-center">
            <Image
              // className='w-[188px] h-[90px]'
              className="  "
              src={logo}
              alt="logo"
              width={88}
              height={90}
            />
            <div className={`${transparent ? "text-white" : "text-black"} font-medium flex flex-col gap-0 font-logo lg:text-3xl text-2xl `}>
              <div className='text-[#40961D] '>Christian Constanseu</div> 
              {/* <div></div> */}
              <div className='lg:text-sm text-sm font-open_sans'>NATURÓPATA</div>
            </div>
          </div>

        </Link>

        {/* nav - initially hidden, show on desktop */}
        <div className='hidden lg:flex mx-auto'>
          {/* <NavLinks /> */}
          <NavLinks transparent={transparent} />
        </div>
        {/* hamburger menu icon = showing by default, hidden on desktop mode */}
        {/* <div
          onClick={() => setNavMobile(!navMobile)}
          className='lg:hidden absolute right-[5%]  text-black p-2  cursor-pointer'
        >
          <HiMenuAlt2 className={` ${ transparent? "text-white" : "text-black" } text-3xl `} />
        </div> */}
        	<motion.button
					initial="hide"
					animate={mobileNav ? "show" : "hide"}
					onClick={toggleMobileNav}
					className="flex flex-col space-y-1 relative z-10 lg:hidden"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 5,
							},
						}}
						className={` ${transparent ? "bg-white" : "bg-black"}  h-px block w-6`}
					></motion.span>
					<motion.span
						variants={{
							hide: {
								opacity: 1,
							},
							show: {
								opacity: 0,
							},
						}}
						className={` ${transparent ? "bg-white" : "bg-black"}  h-px block w-6`}
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -5,
							},
						}}
						className={` ${transparent ? "bg-white" : "bg-black"}  h-px  w-6`}
					></motion.span>
				</motion.button>
                <AnimatePresence>
					{mobileNav && (
						
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="  fixed inset-0 bg-[#26355D] bg-opacity-95 p-6 h-screen flex flex-col justify-center space-y-10 lg:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-10 mx-auto"
								>
								 {links.map((item : Link , index) => {
									return (
										<li key={index}>
										<Link
											className=  {`text-5xl font-semibold text-white `}
											href={item.hash}
											onClick={toggleMobileNav}
										>
											{item.name}
										</Link>
										</li>
									);
									})}
									
								</motion.ul>
								
							</motion.div>
						</MotionConfig>
						
					)}
				</AnimatePresence>
        {/* nav mobile - showing by default, hidden on desktop */}
        {/* <div
          className={`${navMobile ? 'max-h-full' : 'max-h-0'} ${
           
              'top-[90px] lg:top-[90px]'
             
          } fixed bg-white w-full h-full left-0 -z-10 transition-all duration-300`}
        >
          <NavMobile closeMobileMenu={closeMobileMenu} />
        </div> */}
        {/* social icons - initially hidden - show on desktop */}
		<Link href="/reserva" className='hidden lg:flex'>
        <div className=''>
          RESERVAR CITA
        </div></Link>
      </div>
    </motion.nav>
  );
};

const Logo = () => {
	const { logo } = headerData;
	return (
	<Link href="/" className=" ">
			<div className="flex items-center">
			  <Image
				// className='w-[188px] h-[90px]'
				className="  "
				src={logo}
				alt="logo"
				width={88}
				height={90}
			  />
			  <div className={`text-white font-medium flex flex-col gap-0 font-logo lg:text-3xl text-2xl `}>
				<div className='text-[#40961D] '>Christian Constanseu</div> 
				{/* <div></div> */}
				<div className='lg:text-sm text-sm font-open_sans'>NATURÓPATA</div>
			  </div>
			</div>
  
		  </Link>
	)
  }


