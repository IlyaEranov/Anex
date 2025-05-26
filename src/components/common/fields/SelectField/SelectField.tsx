import type { FC } from "react"
import s from "./SelectField.module.scss"

interface SelectFieldProps{
  placeholder: string
  value?: string
  onClick?: () => void
}

const SelectField: FC<SelectFieldProps> = ({placeholder, value, onClick}) => {
  return(
    <div className={s["select-field"]} onClick={onClick}>
      <div className={
        `${s["select-field__placeholder"]} ${value && s._active}`
      }>{placeholder}</div>
      {value && 
        <div className={s["select-field__value"]}>{value}</div>
      }
    </div>
  )
}

export default SelectField