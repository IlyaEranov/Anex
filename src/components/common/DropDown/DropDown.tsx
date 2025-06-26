import { type FC, type ReactNode } from "react"
import s from "./Dropdown.module.scss"

interface DropdownProps{
  children: ReactNode
  open: boolean
  onClose: (e: React.MouseEvent<HTMLDivElement>) => void
}

const Dropdown: FC<DropdownProps> = ({children, open, onClose}) => {
  return(
    <div className={`${s.dropdown} ${open && s._active}`} onClick={onClose}>
      <div className={s.dropdown__content}>
        {children}
      </div>
    </div>
  )
}

export default Dropdown