import { useEffect, useRef } from "react"
import { createPortal } from "react-dom";


export default function Modal({children, open, onClose, className = ''}) {
  const dialog =useRef();
  useEffect(()=>{
    const modal = dialog.current;
    if(open){
      modal.showModal();
    }
  },[open]);
  return createPortal(
    <dialog ref={dialog} onClose={onClose} className={`rounded-lg ${className}`} >{children}</dialog>,
    document.getElementById("modal")
  );
}
