

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ButtonCoordinates from "../buttons/ButtonCoordinates";
import React, { useEffect } from "react";

type ContentProps = {
  exists: boolean
  factory: string
  description: string
  size?: string
  top: string
  left: string
  video?: string 
};


 
export function DialogMap({content} : {content : ContentProps}) {
   const MyPageRef = React.createRef<HTMLButtonElement>();



 const {exists, factory, description, size, top, left, video} = content
 const coords = {exists, top, left}
  return (
    <Dialog>
      <DialogTrigger asChild >
      <ButtonCoordinates data = {coords} />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        
         
        </div>
        
      </DialogContent>
    </Dialog>
  )
}
