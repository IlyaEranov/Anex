import { Modal as MuiModal, type ModalProps} from "@mui/material"
import type { FC } from "react"

const Modal: FC<ModalProps> = ({children, ...rest}) => {
  return(
    <MuiModal {...rest} sx={{overflow: "auto", zIndex: 3000}}>{children}</MuiModal>
  )
}

export default Modal