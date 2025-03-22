import {
    justify,
    example2c,
    example2c2,
    example3b,
    example4c,
    example4d,
  } from "@/lib/dataTailwind";
  import Link from "next/link";
  import Image from "next/image";
  import { HiMiniVideoCamera } from "react-icons/hi2";
  

export default function Flex1to4() {
  return (
    <>

            {/* m-auto (in flex item) equals same result as justify-center and items-center on container */}

        <div className="flex mx-auto h-[500px] w-[75%] bg-blue-300 r">
          <div className="m-auto">I am the center of this page</div>
        </div>

        <div className="w-auto max-w-none bg-white flex flex-col mx-auto p-5 rounded-xl">
          <h1 className="font-bold text-3xl text-center mb-9">
            Frequent Questions
          </h1>
          <div className="flex flex-col gap-y-3">
            {example4d.map((item) => (
              <div key={item.num} className="max-w-md w-auto my-6 flex items-start">
                <span className="block bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">{item.num}</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                  <p className="mt-1">{item.text} </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-auto max-w-none bg-white flex flex-col mx-auto p-5 rounded-xl">
          <h1 className="font-bold text-3xl text-center mb-9">
            Frequent Questions
          </h1>
          <div className="flex flex-col gap-y-3">
            {example4d.map((item) => (
              <div
                key={item.num}
                className="flex items-start  max-w-sm gap-x-3 "
              >
                <span className="pt-[6px]">
                  <div className=" rounded-sm bg-red-600 text-center text-white text-xl h-8 w-8">
                    {item.num}
                  </div>
                </span>
                <div className="inline-block">
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-auto max-w-none flex justify-center items-stretch">
          {example4c.map((item) => (
            <div
              key={item.title}
              className=" max-w-xs mx-5 px-8 py-10 bg-white rounded-lg shadow-md text-center"
            >
              <div className="inline-block p-4 rounded-full bg-teal-600 text-2xl text-white">
                {" "}
                <HiMiniVideoCamera className="m-auto" />{" "}
              </div>
              <h1 className=" mt-4 font-bold text-2xl">{item.title}</h1>
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-400 rounded-lg flex gap-x-5  p-5">
          {example4c.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl flex flex-col  items-stretch p-5 max-w-xs"
            >
              <div className="w-9 h-9 bg-green-700 text-white rounded-full flex mx-auto">
                {" "}
                <HiMiniVideoCamera className="m-auto" />{" "}
              </div>
              <h1 className="text-center font-bold text-xl">{item.title}</h1>
              <p className="text-center">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-x-4 bg-white max-w-fit mx-auto p-5 rounded-lg">
          <Image
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
            width={500}
            height={500}
            alt="image"
            className="w-20 h-20 object-cover rounded-full object-top"
          />
          <div>
            <h1 className="text-xl font-bold">Matt Cooper</h1>
            <p className="text-sm">Designer - CircleAI</p>
          </div>
        </div>

        <div className="flex justify-between ">
          <div className="m-12 flex items-stretch bg-white  ">
            <span className=" mr-3 p-2 bg-pink-600 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </span>
            <span className="font-bold text-lg border-black border">
              Stretch
            </span>
          </div>

          <div className="m-12 flex items-center bg-white max-w-fit">
            <span className="inline-block mr-3 p-2 bg-pink-600 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </span>
            <span className="font-bold text-lg border-black border">
              Center
            </span>
          </div>

          <div className="m-12 flex items-start bg-white max-w-fit">
            <span className="inline-block mr-3 p-2 bg-pink-600 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </span>
            <span className="font-bold text-lg border-black border">Start</span>
          </div>

          <div className="m-12 flex items-end bg-white max-w-fit">
            <span className="inline-block mr-3 p-2 bg-pink-600 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </span>
            <span className="font-bold text-lg border-black border">End</span>
          </div>

          <div className="m-12 flex items-baseline bg-white max-w-fit">
            <span className="inline-block mr-3 p-2 bg-pink-600 text-white rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </span>
            <span className="font-bold text-lg border-black border">
              Baseline
            </span>
          </div>
        </div>

        {/* my solution */}
        <div className="flex gap-x-3 mx-auto items-center bg-white max-w-fit rounded-xl p-4">
          <div className="bg-pink-700 text-white w-8 h-8 flex rounded-md">
            <HiMiniVideoCamera className="m-auto" />
          </div>
          <h1 className="font-bold text-xl">Video Conference</h1>
        </div>

        <div className="bg-white rounded-2xl  px-10 py-5 ">
          <h1 className="font-bold text-2xl text-center">{example3b.title}</h1>
          <div className="mt-5 flex gap-x-5  flex-wrap  justify-around">
            {example3b.images.map((image) => (
              <Image
                key={image}
                //  src="https://res.cloudinary.com/thirus/image/upload/c_pad,h_100,w_200/v1628614672/logos/safe_x5alme.png"
                src={image}
                width={400}
                height={100}
                alt="logo"
                className="h-10 w-28 object-cover "
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-y-5  justify-around bg-white px-20 py-10 rounded-2xl">
          {example2c2.map((item) => (
            <div key={item.name} className="flex flex-col items-center ">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={item.name}
                className=" w-32 h-32 object-cover rounded-full object-top "
              />

              <div className="mt-3 font-bold text-xl">{item.name}</div>
              <div className="text-xs text-gray-700">{item.job}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-around bg-white px-20 py-10 rounded-2xl">
          {example2c.map((item) => (
            <div key={item.name} className="flex flex-col items-center ">
              <div className="w-16 h-16 bg-cGray flex rounded-full  ">
                <Image
                  src={item.image}
                  width={50}
                  height={50}
                  alt={item.name}
                  className=" w-12 h-12 flex m-auto"
                />
              </div>

              <div className="mt-3 font-bold text-xl">{item.name}</div>
              <div className="text-xs text-gray-700">{item.job}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-y-5 max-w-xs bg-white mx-auto p-5 rounded-xl">
          <h1 className="text-cBlue text-3xl font-semibold">CSS Flex & Grid</h1>
          <p>
            This book takes a completely different approach. I won't teach you
            the things flex and grid can do. Instead, I will first show you some
            components and layouts and make you think how to build them using
            the CSS concepts you already know. Now you have a problem, and you
            want a solution.
          </p>
          <div className="flex justify-between">
            <button className="font-semibold bg-gray-300 px-4 py-2 rounded-md">
              Prev
            </button>
            <button className="font-semibold bg-gray-300 px-4 py-2 rounded-md">
              Prev
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="flex justify-start">
            {justify.map((item) => (
              <Link key={item} href={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex justify-end">
            {justify.map((item) => (
              <Link key={item} href={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            {justify.map((item) => (
              <Link key={item} href={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex justify-between">
            {justify.map((item) => (
              <Link key={item} href={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex justify-around">
            {justify.map((item) => (
              <Link key={item} href={item}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex justify-evenly">
            {justify.map((item) => (
              <Link key={item} href={item}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex">
          <div className="m-3 p-6 bg-blue-100 rounded-lg">
            <p className="font-serif italic text-lg text-gray-700 leading-snug mb-1">
              “The success combination in business is: Do what you do better...
              and: do more of what you do.”
            </p>
            <span className="text-sm text-gray-500">- David J. Schwartz</span>
          </div>
          <div className="m-3 p-6 bg-blue-100 rounded-lg">
            <p className="font-serif italic text-lg text-gray-700 leading-snug mb-1">
              “Give out what you most want to come back.”
            </p>
            <span className="text-sm text-gray-500">- Robin Sharma</span>
          </div>
          <div className="m-3 p-6 bg-blue-100 rounded-lg">
            <p className="font-serif italic text-lg text-gray-700 leading-snug mb-1">
              “You don't have to be great at something to start, but you have to
              start to be great at something.”
            </p>
            <span className="text-sm text-gray-500">- Zig Ziglar</span>
          </div>
        </div>
    </>
  )
}
