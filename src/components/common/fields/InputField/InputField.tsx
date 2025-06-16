import { TextField, type TextFieldProps } from "@mui/material"
import type { FC } from "react"

const InputField: FC<TextFieldProps> = ({...rest}) => {
  return <TextField  variant="standard" {...rest}/>
}

export default InputField