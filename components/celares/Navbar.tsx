"use client";

import React, { useState } from "react";
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
import { logo } from "@/lib/dataCelares";
import NavLinks from "./NavLinks";
import { DialogGeneral } from "./ui-components/DialogGeneral";

export default function Navbar() {
  const pathname = usePathname();
  // console.log(pathname)

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
      className={`${
        transparent
          ? " bg-gradient-to-b from-white to-transparent  "
          : "bg-white"
      } h-[75px] fixed top-0   z-20 w-full  transition-all duration-700  `}
    >
      <div
        className="flex  justify-between mx-auto items-center h-full  
		              px-5 lg:max-w-none  2xl:max-w-[1340px] 2xl:px-0" >
                    
        <div className="inline-flex  gap-x-6 items-center  ">
          <Link href="/site3" className="pr-3">
            <Image src={logo} alt="logo" width={150} height={28} />
          </Link>
          <div className="hidden lg:flex border-l py-3  border-cViolet"></div>
          <div className='hidden lg:flex xl:gap-x-[27px] lg:gap-x-0 items-center justify-between" '>
            {/* <NavLinks /> */}
            <NavLinks />
          </div>
        </div>

        {/* nav - initially hidden, show on desktop */}

        <DialogGeneral>
          <button className="lg:flex flex-none btnDarktoLight hidden ">
            PARTNER WITH US
          </button>
        </DialogGeneral>

        {/* {mobileNav && <div className="bg-cBlue w-full min-h-screen"></div>} */}

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
                className="  fixed inset-0 bg-[#274EA9]  p-6 min-h-screen flex flex-col justify-center space-y-10 lg:hidden"
              >
             
              </motion.div>
            </MotionConfig>
          )}
        </AnimatePresence>
        <motion.button
          initial="hide"
          animate={mobileNav ? "show" : "hide"}
          onClick={toggleMobileNav}
          className="flex flex-col space-y-[6px] relative z-10  lg:hidden"
        >
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: 45,
                y: 7.5,
              },
            }}
            className={` ${
              mobileNav ? "bg-white" : "bg-cViolet"
            }  h-[2px] block w-10 font-bold`}
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
              mobileNav ? "bg-white" : "bg-cViolet"
            }  h-[2px] block w-10`}
          ></motion.span>
          <motion.span
            variants={{
              hide: {
                rotate: 0,
              },
              show: {
                rotate: -45,
                y: -7.5,
              },
            }}
            className={` ${
              mobileNav ? "bg-white" : "bg-cViolet"
            }  h-[2px]  w-10`}
          ></motion.span>
        </motion.button>
      </div>
    </motion.nav>
  );
}
