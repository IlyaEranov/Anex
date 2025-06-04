import { Modal as MuiModal, type ModalProps} from "@mui/material"
import type { FC } from "react"
import s from "./Modal.module.scss"

const Modal: FC<ModalProps> = ({children, ...rest}) => {
  return(
    <MuiModal {...rest} classes={{root: s.modal}}>
      <div className={s.modal__content}>
        {children}
      </div>
    </MuiModal>
  )
}

export default Modal