import Link from 'next/link';
import { links } from '@/lib/dataCelares';

const NavLinks = () => {
  // console.log(links)
  return (
    <nav>
      <ul
        className='flex text-sm tracking-widest uppercase space-x-2 font-satoshi_medium '
      >
        {links.map((item : Link , index) => {
          return (
            <li key={index}>
              <>
              <Link
                className=  {` 
                  hover:bg-cBlue hover:text-white text-cViolet rounded-lg  transition duration-300
                  px-4 py-1  `}
                href={item.hash}
              >
                {item.name} 
               
              </Link>
              
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
