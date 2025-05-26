import s from "./Modal.module.scss"
import type { FC, ReactNode } from "react"

interface ModalProps{
  children: ReactNode
}

const Modal: FC<ModalProps> = ({children}) => {
  return(
    <div className={s.backdrop}>
      <div className={s.modal}>
        {children}
      </div>
    </div>
  )
}

export default Modal