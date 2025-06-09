import { TextField,  type TextFieldProps } from "@mui/material"
import type { FC } from "react"
import s from "./SelectField.module.scss"

const SelectField: FC<TextFieldProps> = ({...rest}) => {
  return(
    <TextField 
      className={s.field}
      variant="filled"
      {...rest}
    />
  )
}

export default SelectField