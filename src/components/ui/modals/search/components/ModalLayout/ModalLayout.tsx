import { useEffect, useLayoutEffect, useState, type FC, type ReactNode } from "react"
import Modal from "../../../../../common/Modal/Modal"
import s from "./ModalLayout.module.scss"
import Dropdown from "../../../../../common/Dropdown/Dropdown"

export interface ModalLayoutProps{
  children: ReactNode
  isOpen: boolean
  closeModal: (e: React.MouseEvent<HTMLDivElement>) => void
  anchorEl: HTMLDivElement | null
}

const ModalLayout: FC<ModalLayoutProps> = ({children, isOpen, closeModal, anchorEl}) => {

  const [size, setSize] = useState(innerWidth)

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(innerWidth)
    }

    addEventListener("resize", updateSize)

    return () => removeEventListener("resize", updateSize)
  }, [])

  useEffect(() => {
    if(isOpen){
      anchorEl?.scrollIntoView({block: "start", behavior: "smooth"})
    }
  }, [isOpen])

  return(
    <>
      {size >= 1024 ?
        <Dropdown
          open={Boolean(anchorEl)} 
          onClose={closeModal} 
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