import { useEffect, useLayoutEffect, useState, type FC, type ReactNode } from "react"
import Modal from "../../../../../common/Modal/Modal"
import s from "./ModalLayout.module.scss"
import Dropdown from "../../../../../common/Dropdown/Dropdown"
import { useSize } from "../../../../../../hooks/useSize"

export interface ModalLayoutProps{
  children?: ReactNode
  isOpen: boolean
  closeModal: (e: React.MouseEvent<HTMLDivElement>) => void
  anchorEl: HTMLDivElement | null
  defaultPos?: boolean
}

const ModalLayout: FC<ModalLayoutProps> = ({children, isOpen, closeModal, anchorEl, defaultPos}) => {

  const width = useSize()

  useEffect(() => {
    if(isOpen){
      anchorEl?.scrollIntoView({block: "center", behavior: "smooth"})
    }
  }, [isOpen])

  return(
    <>
      {width >= 1024 ?
        <Dropdown
          open={isOpen} 
          anchorEl={anchorEl}
          defaultPos={defaultPos}
        >
          {children}
        </Dropdown>
        :
        <Modal open={isOpen} onClose={closeModal}>
          <div className={s.modal__content}>{children}</div>
        </Modal>
      }
    </>
  )
}

export default ModalLayout