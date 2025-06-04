import { TextField,  type TextFieldProps } from "@mui/material"
import type { FC } from "react"

const SelectField: FC<TextFieldProps> = ({...rest}) => {
  return(
    <TextField {...rest}/>
  )
}

export default SelectField