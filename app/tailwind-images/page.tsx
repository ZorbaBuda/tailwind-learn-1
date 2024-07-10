import Image from "next/image";
import {
  heroText,
 
} from "@/lib/data.js";
import picGirl from "@/public/img/home/girl.jpg";
import picWoodBody from "@/public/img/home/wood-body.jpg";
import React from "react";



export default function Home() {
  return (
    <main className="bg-grey_light">

           {/* hero section */}
      <section className=" section  lg:mt-0 pt-[100px] px-5 ">
        <div className="  grid md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-y-5  ">
          <div className="    flex flex-col justify-center  basis-1/2   lg:pr-20  ">
            <div className="mb-8 h2">{heroText.title}</div>

            <p className=" prose md:prose-lg">
              {heroText.subtitle1}
              <br />
              {heroText.subtitle2}
            </p>
          </div>

          {/* <Image
            className="  mx-auto border-2 border-black  "
            src='/img/home/girl.jpg'
            alt="logo"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          /> */}
          <Image
            className="  mx-auto   "
            src='/img/home/girl.jpg'
            alt="logo"
            width={387}
            height={581}
          />
        </div>
      </section>

        {/* https://www.youtube.com/watch?v=EBSrVW5MXoo */}
        <section className="section">
            <div className="max-w-7xl mx-auto py-12">
                <h1 className="text-center font-semibold text-4xl mb-6">Homepage</h1>
                <div className=" relative grid grid-cols-2 bg-red-200">
                    <div className="relative">
                        {/* fixes image to the dimensions */}
                        {/* <Image layout='fixed' width={387} height={581} src='/img/home/girl.jpg' alt="tutorial" /> */}
                      
                        {/* scales on window size, problem when not limiting the container width */}
                        {/* <Image layout='responsive' width={387} height={581} src='/img/home/girl.jpg' alt="tutorial" /> */}
                       
                        {/* Like 'responsive', but image stops growing once reached intrinsic width */}
                        {/* <Image className="" layout='intrinsic' width={387} height={581} src='/img/home/girl.jpg' alt="tutorial" /> */}
                  
                        {/* when you get images dinamically, without knowing dimensions, image adapts to container */}
                        {/* <Image className="" layout='fill'  src='/img/home/girl.jpg' alt="tutorial" /> */}

                        {/* object fit,option: "contain" => adapts to container maintaining proportions */}
                        {/* <Image className="" layout='fill' objectFit="contain" src='/img/home/girl.jpg' alt="tutorial" /> */}
                        
                        {/* with option cover, fills container maintaining aspect ratio */}
                        {/* with objectPosition option  */}
                        <Image className="" layout='fill'objectPosition="top" objectFit="cover" src='/img/home/girl.jpg' alt="tutorial" />

                    </div>
                    <p className="max-w-prose py-12 px-4">{heroText.subtitle1}</p>
                </div>
            </div>
        </section>


   
      

      </main>
  )
}
