import Link from 'next/link';
import { links } from '@/lib/data';

const NavLinks = () => {
  // console.log(links)
  return (
    <nav>
      <ul
        className='flex text-base  '
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

// import Link from 'next/link';
// import { links } from '@/lib/dataCelares';

// const NavLinks = () => {
//   // console.log(links)
//   return (
//     <nav>
//       <ul
//         className='flex text-sm tracking-widest uppercase space-x-2 font-satoshi_medium '
//       >
//         {links.map((item : Link , index) => {
//           return (
//             <li key={index}>
//               <>
//               <Link
//                 className=  {` 
//                   hover:bg-cBlue hover:text-white text-cViolet rounded-lg  transition duration-300
//                   px-4 py-1  `}
//                 href={item.hash}
//               >
//                 {item.name} 
               
//               </Link>
              
//               </>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default NavLinks;