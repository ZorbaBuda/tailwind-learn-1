
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type StylesProps = {
  classname: string;
    top: string;
    left: string;
}

type ContentDataProps = {
  factory: string
  description: string
  size: string | undefined
  video: string | undefined
}
 
export function TooltipMap({styles, contentData} : {styles : StylesProps, contentData : ContentDataProps}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
        <button
       className={styles.classname}
       style={{top: `${styles.top}`, left: `${styles.left}`}}
        >
            <span>+</span>
            </button>
        </TooltipTrigger>
      <TooltipCard contentData={contentData} />
      </Tooltip>
    </TooltipProvider>
  )
}

const TooltipCard = ({contentData} : {contentData : ContentDataProps}) => {

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