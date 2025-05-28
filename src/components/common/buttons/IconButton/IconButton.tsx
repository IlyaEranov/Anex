import s from "./IconButton.module.scss"
import type { FC } from "react"

interface IconButtonProps{
  path: string
  onClick?: () => void
}

const IconButton: FC<IconButtonProps> = ({path, onClick}) => {
  return(
    <button className={s["button-icon"]} onClick={onClick}>
      <img className={s["button-icon__icon"]} src={path}/>
    </button>
  )
}

export default IconButton