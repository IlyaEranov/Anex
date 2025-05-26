import s from "./IconButton.module.scss"
import type { FC } from "react"

interface IconButtonProps{
  path: string
}

const IconButton: FC<IconButtonProps> = ({path}) => {
  return(
    <button className={s["button-icon"]}>
      <img className={s["button-icon__icon"]} src={path}/>
    </button>
  )
}

export default IconButton