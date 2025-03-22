import Image from "next/image";
import Link from "next/link";

const style = `hover:border-b-green-500 hover:border-b-2 cursor-pointer h-full flex items-center
               hover:flex-grow-[3] flex-grow 
              `;
const s1 = `p-5 text-center cursor-pointer
    transition-all duration-200 border-b-2 border-white
    hover:border-green-400 flex-grow hover:flex-grow-[3] `

const s3 = `bg-blue-600 text-white px-8 py-1`

const Flex5to8 = () => {
  return (
    <>

    


     <div className="rounded-xl bg-white flex mx-auto">
        <div className="p-4 flex flex-wrap gap-4">
       <button className={`${s3} flex-grow  `}>Like</button>
       <button className={`${s3} flex-grow `}>Share</button>
       <button className={`${s3} flex-grow-[2]  `}>Leave a Comment</button>
       </div>
     </div>

      <ul className="flex bg-white my-8 mx-auto  w-[44rem]">
        <li className={s1}>Description</li>
        <li className={s1}>Care Instructions</li>
        <li className={s1}>Return Policy</li>
      </ul>

      <div className="bg-white w-[90%] rounded-md h-[100px] flex justify-around items-center">
        <div className={style}>Description</div>
        <div className={style}>CareInstructions</div>
        <div className={style}>Return Policy</div>
      </div>

      {/* flex-grow similar to h-full */}
      <div className="w-full h-[600px] flex flex-col">
        <div className="flex-grow ">
          <div className=" font-bold text-xl">Main content</div>
          <p>
            Ever faced a situation where your main content is too small, making
            your footer appear somewhere in the middle of the page instead of at
            the bottom? The easiest solution to this is using flexbox for the
            whole layout, with column direction and adding flex-grow to the main
            content
          </p>
        </div>
        <footer className="bg-blue-200 font-bold">Footer</footer>
      </div>

      {/* 6 flex grow */}
      <div className="w-[75%] flex mx-auto bg-gray-300">
        <div className="flex w-full p-5 m-auto justify-between ">
          <div className="flex-grow bg-white border border-gray-700 py-2 rounded-l-md pl-2">
            Email Address
          </div>
          <div className="bg-green-900  text-white p-2 rounded-r-md">
            Subscribe
          </div>
        </div>
      </div>

      {/* using even: tailwind applies directly on even elements */}
      <div className="max-w-xl mx-auto mt-16">
        <div className="mt-5 flex items-center even:flex-row-reverse even:text-right">
          <img
            className="h-36 object-cover m-5"
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          />
          <div>
            <h3 className="font-bold text-xl">Alexa Kardi</h3>
            <p className="text-sm text-gray-500">Founder and CEO</p>
            <p className="mt-3 leading-snug">
              Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna nibh, viverra non, semper suscipit,
              posuere a, pede.
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center even:flex-row-reverse even:text-right">
          <img
            className="h-36 object-cover m-5"
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          />
          <div>
            <h3 className="font-bold text-xl">Tavell Monroe</h3>
            <p className="text-sm text-gray-500">Web Developer</p>
            <p className="mt-3 leading-snug">
              Morbi in sem quis dui placerat ornare. Pellentesque odio nisi,
              euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras
              consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="flex  mx-auto max-w-lg h-[300px] bg-white">
        <div className="p-10 justify-between flex flex-col items-start">
          <Image
            src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg"
            width={50}
            height={50}
            alt="Quotes"
            className=""
          />
          <p>
            {" "}
            I just finished my trial period and was so amazed with the support
            and good results that I purchased the Pro version for my business.
          </p>
          <div className="text-xl">John Doe</div>
        </div>
      </div>

      <div className="flex mx-auto max-w-md h-[300px] bg-white">
        <div className="flex flex-col gap-3 m-auto px-10 text-center">
          <Link
            href={"#"}
            className="text-white text-lg bg-blue-600 px-3 rounded-md "
          >
            Login
          </Link>
          <Link
            href={"#"}
            className="text-blue-600 border border-blue-600 px-3 rounded-md"
          >
            Create account
          </Link>
        </div>
      </div>
    </>
  );
};

export default Flex5to8;
