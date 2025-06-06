import { useLayoutEffect, useState, type FC, type ReactNode } from "react"
import Modal from "../../../../../common/Modal/Modal"
import Popover from "../../../../../common/Popover/Popover"

interface ModalLayoutProps{
  children: ReactNode
  isOpen: boolean
  closeModal: () => void
}

const ModalLayout: FC<ModalLayoutProps> = ({children, isOpen, closeModal}) => {

  const [size, setSize] = useState(0)

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize(innerWidth)
    }

    addEventListener("resize", updateSize)

    return () => removeEventListener("resize", updateSize)
  }, [])

  return(
    <>
      {size >= 1024 ?
        <Popover open={isOpen} onClose={closeModal}>
          <>{children}</>
        </Popover>
        :
        <Modal open={isOpen} onClose={closeModal}>
          <>{children}</>
        </Modal>
      }
    </>
  )
}

export default ModalLayout