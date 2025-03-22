"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import { headerData, links } from "@/lib/dataClinique";
import { usePathname } from "next/navigation";

export default function Navbar2() {
  const pathname = usePathname();
  const [mobileNav, setMobileNav] = useState(false);
  // console.log(pathname)
  useEffect(() => {
    setMobileNav(false)
  }, [pathname])
  

  const { logo } = headerData;
  // header state
  // const [isActive, setIsActive] = useState(false);
  // nav mobile state
  

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
      className={`${transparent ? " transparent  " : "bg-gris"}
      

       h-[120px] fixed top-0   z-20 w-full  transition-all duration-700  `}
    >
      <div
        className="flex  justify-between mx-auto items-center h-full  
		              px-10 
	                  sm:max-w-[407px] sm:px-0 
					  md:max-w-[588px]
					  lg:max-w-none lg:px-[90px]
					  2xl:max-w-[1228px] 2xl:px-0"
      >
        <Link href="/site2">
          <Image src={logo} alt="logo" width={210} height={65} 
		  className={` ${transparent ? "" : "brightness-0 saturate-[100%]"}`}
		   />
        </Link>

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
                className="  fixed inset-0 bg-[#26355D] bg-opacity-95 p-6 min-h-screen flex flex-col justify-center space-y-10 lg:hidden"
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
                  {links.map((item: Link, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className={`text-5xl font-semibold text-white `}
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
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-1 relative z-10 "
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
            className={` ${
              transparent ? "bg-white" : "bg-black"
            }  h-[2px] block w-7 font-bold`}
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
            className={` ${
              transparent ? "bg-white" : "bg-black"
            }  h-[2px] block w-6`}
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
            className={` ${transparent ? "bg-white" : "bg-black"}  h-[2px]  w-6`}
          ></motion.span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
