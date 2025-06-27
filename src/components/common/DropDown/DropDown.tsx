import { type FC, type ReactNode } from "react"
import s from "./Dropdown.module.scss"

interface DropdownProps{
  children: ReactNode
  open: boolean
  anchorEl?: HTMLDivElement | null
  defaultPos?: boolean
}

const Dropdown: FC<DropdownProps> = ({children, open, anchorEl, defaultPos}) => {



  return(
    <div 
      className={`${s.dropdown} ${open && s._active}`} 
      style={{left: defaultPos ? 100 : anchorEl ? anchorEl.offsetLeft - 12 : 0}}
    >
      {children}
    </div>
  )
}

export default Dropdown
