import type { FC } from "react"
import s from "./ModalBottom.module.scss"
import Button from "../../../../common/buttons/Button/Button"
import arrow from "../../../../../assets/icons/diagonal-arrow.svg"

interface ModalBottomProps {
  onClick?: () => void
}

const ModalBottom: FC<ModalBottomProps> = ({onClick}) => {
  return (
    <div className={s["modal-bottom"]}>
      <button className={s["modal-bottom-button"]} onClick={onClick}>Очистить</button>
      <Button style="black"><span className={s["modal-bottom-button__text"]}>ВЫБРАТЬ</span><img src={arrow} /></Button>
    </div>
  )
}

export default ModalBottom