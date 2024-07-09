import Link from 'next/link';
import { links } from '@/lib/data';

const NavLinks = () => {
  // console.log(links)
  return (
    <nav>
      <ul
        className='flex text-base text-blue_dark '
      >
        {links.map((item : Link , index) => {
          return (
            <li key={index}>
              <>
              <Link
                className=  {` 
                  hover:underline hover:underline-offset-4 decoration-salmon  transition duration-300  `}
                href={item.hash}
              >
                {item.name} 
               
              </Link>
               {index + 1 < links.length &&  <span className=' px-5'>|</span> }
              </>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;

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
