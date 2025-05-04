import React from 'react'



type ModalProps = 
 | {
    variant: 'no-title'
 }
  | {
    variant: 'title'
    title: string
 };


export const Modal = ({...props}: ModalProps) => {

  if(props.variant === 'no-title') {
    return <div>No title</div>
  } else {
    const {title} = props
    return <div>Title: {title}</div>
  }

}

export const Test = () => {
    return (
        <div>
            <Modal variant="no-title"   />
            <Modal variant="no-title" />
              {/* <Modal />   */}
            <Modal variant="title" title="Oh dear" />
         </div>
    )
}


