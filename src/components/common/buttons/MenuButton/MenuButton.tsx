import s from "./MenuButton.module.scss"
import menuIcon from "../../../../assets/icons/menu.svg"
import type { FC } from "react"

interface MenuButtonProps{
  onClick: () => void
}

const MenuButton: FC<MenuButtonProps> = ({onClick}) => {
  return(
    <button onClick={onClick} className={s["button-menu"]}>
      <img className={s["button-menu__icon"]} src={menuIcon}/>
    </button>
  )
}

export default MenuButton