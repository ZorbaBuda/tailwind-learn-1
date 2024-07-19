
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import ButtonCoordinates from "../buttons/ButtonCoordinates";
import { DialogGeneral } from "./DialogGeneral";
import React from "react";
import { ArrowButton } from "../buttons/ArrowButton";
import { Button } from "@/components/ui/button";

type ContentProps = {
  exists: boolean
  factory: string
  description: string
  size?: string
  top: string
  left: string
  video?: string 
};

 
export function TooltipMap({content} : {content : ContentProps}) {
 
  const {exists, factory, description, size, top, left, video} = content
 const coords = {exists, top, left}
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild >
        {/* <ButtonCoordinates variant="outline">Button</Button> */}
        <ButtonCoordinates data = {coords} />
        {/* <ButtonCoordinates coords = {coords} /> */}
        </TooltipTrigger>
      <TooltipCard contentData={content} />
      </Tooltip>
    </TooltipProvider>
 
   
  )
}

const TooltipCard = ({contentData} : {contentData : ContentProps}) => {

  return  (
  <TooltipContent className="flex flex-col bg-white">
  {contentData.video &&
    <iframe
         className=" aspect-video "
          src={contentData.video}  
         
           title="test" 

         
           /> 
   }
  <h3>{contentData.factory}</h3>
  <p>{contentData.description}</p>
  {contentData.size && <p>{contentData.size}</p> }
</TooltipContent>
  )
}

{/* <iframe 
       data-src="https://player.vimeo.com/video/852746757?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" 
       frameborder="0" 
       webkitallowfullscreen="" 
       mozallowfullscreen="" 
       allowfullscreen="" 
       title="Background video"
        src="https://player.vimeo.com/video/852746757?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" 
        class=" lazyloaded" 
        data-load-mode="1" 
        data-ready="true">
        </iframe> */}








{/* <iframe data-src="https://player.vimeo.com/video/852749044?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" title="Background video" src="https://player.vimeo.com/video/852749044?background=1&amp;autoplay=1&amp;loop=1&amp;muted=1&amp;playsinline=1&amp;byline=0&amp;title=0&amp;autopause=0" class=" lazyloaded" data-load-mode="1" data-ready="true"></iframe> */}