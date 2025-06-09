import type { FC } from "react"
import s from "./ModalTop.module.scss"
import close from "../../../../../../assets/icons/close.svg"
import IconButton from "../../../../../common/buttons/IconButton/IconButton"

interface ModalTopProps{
  placeholder: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

const ModalTop: FC<ModalTopProps> = ({placeholder, onClick}) => {
  return(
    <div className={s["modal-top"]} onClick={onClick}>
      <h2 className={s["modal-top__label"]}>{placeholder}</h2>
      <IconButton path={close}/>
    </div>
  )
}

export default ModalTop