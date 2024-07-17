import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  
  interface Props {
    children: React.ReactNode;
  
  }
   
  export function DialogGeneral({children} : Props) {
    return (
      <Dialog>
        <DialogTrigger asChild>
            {children}
          {/* <button
         className={styles.classname}
         style={{top: `${styles.top}`, left: `${styles.left}`}}
          >
          <span>+</span>
        </button> */}
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
  