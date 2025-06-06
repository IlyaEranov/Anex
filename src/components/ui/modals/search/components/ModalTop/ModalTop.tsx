import type { FC } from "react"
import s from "./ModalTop.module.scss"
import close from "../../../../../../assets/icons/close.svg"
import IconButton from "../../../../../common/buttons/IconButton/IconButton"

interface ModalTopProps{
  placeholder: string
  onClick?: () => void
}

const ModalTop: FC<ModalTopProps> = ({placeholder, onClick}) => {
  return(
    <div className={s["modal-top"]}>
      <h2 className={s["modal-top__label"]}>{placeholder}</h2>
      <IconButton path={close} onClick={onClick}/>
    </div>
  )
}

export default ModalTop