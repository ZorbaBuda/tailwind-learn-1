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
import { links } from "@/lib/dataCelares";
import { usePathname } from "next/navigation";
import { logo } from "@/lib/dataCelares";
import LogoWhite from "@/public/img/celares/svg/logoWhite.svg";
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
    setBlockHidden(!blockHidden);
  };

  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [blockHidden, setBlockHidden] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setBlockHidden(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  //   const closeMobileMenu = () => {
  //     setNavMobile(false); // Function to close the mobile menu
  //   };
  // backdrop-blur-xl
  // bg-gradient-to-b from-white to-transparent
  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden && !blockHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`${
        transparent
          ? " bg-transparent  "
          : "bg-white"
      } h-[75px] fixed top-0   z-20 w-full  transition-all duration-700  `}
    >
      <div
        className=" flex  justify-between mx-auto items-center h-full  
		              px-5 lg:max-w-none  2xl:max-w-[1340px] 2xl:px-0"
      >
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

        {/* <AnimatePresence> */}
        {mobileNav && (
          <div className="fixed inset-0 bg-[#274EA9] min-h-screen  flex flex-col    lg:hidden">
            <Link href="/site3" className="pr-10 mt-[31px]">
              <Image src={LogoWhite} alt="logo" width={150} height={28} />
            </Link>

            <div className="flex flex-col justify-center space-y-16 ">
              <ul className="flex flex-col text-white">
                {links.map((link) => (
                  <Link
                    className="font-satoshi_medium text-4xl border-b-[0.5px] border-c"
                    href={link.hash}
                    key={link.hash}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>

              {/* <ul className="flex flex-col text-white">
                {links.map((link) => (
                  <Link
                    className="font-satoshi_medium text-4xl border-b-[0.5px] border-c"
                    href={link.hash}
                    key={link.hash}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul>

              <ul className="flex flex-col text-white">
                {links.map((link) => (
                  <Link
                    className="font-satoshi_medium text-4xl border-b-[0.5px] border-c"
                    href={link.hash}
                    key={link.hash}
                  >
                    {link.name}
                  </Link>
                ))}
              </ul> */}

            </div>
            <DialogGeneral>
          <button className=" btnDarktoLight  ">
            PARTNER WITH US
          </button>
        </DialogGeneral>
          </div>
       
        )}
        {/* </AnimatePresence> */}
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
