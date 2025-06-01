import s from "./Modal.module.scss"
import type { FC, ReactNode } from "react"

interface ModalProps {
  children: ReactNode
  isActive: boolean
  onClick: () => void
  backdrop?: boolean
}

const Modal: FC<ModalProps> = ({ children, isActive, onClick, backdrop }) => {
  return (
    <div className={isActive ? `${s.modal} ${s._active}` : s.modal}>
      <div className={!backdrop ? s.modal__backdrop_disabled : ""} onClick={onClick}>
        <div className={backdrop ? s.modal__backdrop : ""} onClick={onClick}>
          <div className={s.modal__content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal