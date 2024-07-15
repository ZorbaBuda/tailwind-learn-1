"use client";
import Link from "next/link";
import { links } from "@/lib/dataCelares";

import * as React from "react";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type LinkType =
  | {
      name: string;
      hash: string;
      innerLinks: {
        name: string;
        hash: string;
      }[];
    }
  | {
      name: string;
      hash: string;
      innerLinks?: undefined;
    };

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link : LinkType) => (
    <NavigationMenu key={link.hash} className=" list-none">

    
          <NavigationMenuItem >
              <Link href={link.hash} >   <NavigationMenuTrigger>{link.name}</NavigationMenuTrigger></Link>
          
                  <NavigationMenuContent>
              {link.innerLinks && link.innerLinks.map((innerLink) => (
                    <ul className="flex flex-col gap-3 p-4 w-max bg-white shadow-2xl">
                   
                        <ListItem
                          key={innerLink.hash}
                          href={innerLink.hash}
                        >
                          {innerLink.name}
                        </ListItem>
                     
                  
                    </ul> ))}

                  </NavigationMenuContent>
                </NavigationMenuItem>
     
 


    </NavigationMenu> ))}


    <NavigationMenu className="border-2 border-black">
      <NavigationMenuList>
        <NavigationMenuItem>
       <Link href={'/site2'} >   <NavigationMenuTrigger>Getting started</NavigationMenuTrigger></Link>
          <NavigationMenuContent>
            <ul className="flex flex-col gap-3 p-2 w-max bg-white shadow-2xl ">
            {components.map((component) => (
                <ListItem
                  key={component.title}
                  href={component.href}
                >
                  {component.title}
                </ListItem>
              ))}
           
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>

    </NavigationMenu>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "bg-white block select-none space-y-1  p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
        
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// const NavLinks = () => {
//   // console.log(links)
//   return (
//     <nav>
//       <ul
//         className='flex text-base  '
//       >
//         {links.map((item : Link , index) => {
//           return (
//             <li key={index}>
//               <>
//               <Link
//                 className=  {`
//                   hover:underline hover:underline-offset-4 decoration-salmon  transition duration-300  `}
//                 href={item.hash}
//               >
//                 {item.name}

//               </Link>
//                {index + 1 < links.length &&  <span className=' px-5'>|</span> }
//               </>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// slightly more complex version where links were nested
// import React from 'react';
// import Link from 'next/link';
// import { navLinksData } from '../../data';

// const NavLinks = () => {
//   // destructure nav data
//   const { items } = navLinksData;

//   return (
//     <nav>
//       <ul
//         className='flex gap-x-[4
//         8px] md:gap-x-[28px] md:p-5 text-sm'
//       >
//         {items.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link
//                 className='link hover:border-b hover:border-dark transition duration-300'
//                 href={item.href}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default NavLinks;
