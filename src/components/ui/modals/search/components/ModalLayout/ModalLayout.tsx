import { useEffect, useLayoutEffect, useState, type FC, type ReactNode } from "react"
import Modal from "../../../../../common/Modal/Modal"
import Popover from "../../../../../common/Popover/Popover"
import s from "./ModalLayout.module.scss"

interface ModalLayoutProps{
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
      anchorEl?.scrollIntoView({block: "center", behavior: "smooth"})
    }
  }, [isOpen])

  return(
    <>
      {size >= 1024 ?
        <Popover
          anchorEl={anchorEl}
          open={isOpen} 
          onClose={closeModal} 
          disableScrollLock={false}
        >
          <div className={s.popover__content}>{children}</div>
        </Popover>
        :
        <Modal open={isOpen} onClose={closeModal}>
          <div className={s.modal__content}>{children}</div>
        </Modal>
      }
    </>
  )
}

export default ModalLayout