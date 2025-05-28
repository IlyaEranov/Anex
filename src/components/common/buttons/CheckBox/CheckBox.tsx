import type { FC } from "react"
import s from "./CheckBox.module.scss"
import check from "../../../../assets/icons/check.svg"

interface CheckBoxProps{
  isActive: boolean
}

const CheckBox: FC<CheckBoxProps> = ({isActive}) => {
  return(
    <div className={isActive ? `${s.checkbox} ${s._active}` : s.checkbox}>
      <img src={check}/>
    </div>
  )
}

export default CheckBox