'use client'
import { useEffect, useState } from 'react'



export function useIsLg() {
    const [isLg, setIsLg] = useState<boolean>();

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 1024) {
          setIsLg(true);
        } else setIsLg(false);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return isLg
}

